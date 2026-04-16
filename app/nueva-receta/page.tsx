import { prisma } from '../../lib/prisma'
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import authOptions from "@/lib/auth"
import Link from 'next/link'
import IngredientesForm from './IngredientesForm'

export const dynamic = 'force-dynamic'

async function guardarReceta(formData: FormData) {
  'use server'

  const session: any = await getServerSession(authOptions)

  const nombre = formData.get('nombre') as string
  const id_tipo = Number(formData.get('id_tipo'))
  const detalle = formData.get('detalle') as string

  if (!nombre || !id_tipo) return

  const receta = await prisma.recetas.create({
    data: {
      nombre,
      id_tipo,
      id_usuario: Number(session?.user?.id),
      detalles: {
        create: [{ detalle }],
      },
    },
  })

  const total = Array.from(formData.keys()).filter((k) =>
    k.startsWith('ingrediente_')
  ).length

  for (let i = 0; i < total; i++) {
    const ingrediente = formData.get(`ingrediente_${i}`)?.toString()
    const cantidad = formData.get(`cantidad_${i}`)?.toString()
    const unidad = formData.get(`unidad_${i}`)?.toString()

    if (ingrediente && cantidad && unidad) {
      await prisma.tieneIng.create({
        data: {
          id_receta: receta.id_receta,
          id_ingrediente: Number(ingrediente),
          cantidad: Number(cantidad),
          id_unidad: Number(unidad),
        },
      })
    }
  }

  redirect('/recetas')
}

export default async function NuevaRecetaPage() {
  const tipos = await prisma.tipo.findMany({
    orderBy: { tipo: 'desc' },
  })

  const ingredientes = await prisma.ingredientes.findMany({
    orderBy: { nombre: 'asc' },
  })

  const unidades = await prisma.unidades.findMany({
    orderBy: { unidad: 'asc' },
  })

  const input = {
    backgroundColor: 'var(--input)',
    color: 'var(--foreground)',
    border: '1px solid var(--border)',
    padding: '8px',
  }

  const button = {
    backgroundColor: 'var(--header)',
    color: 'var(--foreground)',
    border: '1px solid var(--border)',
    padding: '8px 12px',
    cursor: 'pointer',
  }

  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: 'var(--background)',
        minHeight: '100vh',
        color: 'var(--foreground)',
      }}
    >
      <Link href="/recetas">
        <button style={button}>← Regresar</button>
      </Link>

      <h1 style={{ marginTop: '20px' }}>Nueva receta</h1>

      <form action={guardarReceta} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Nombre de la receta</label>
          <br />
          <input
            type="text"
            name="nombre"
            style={{ ...input, width: '300px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Tipo</label>
          <br />
          <select
            name="id_tipo"
            style={{ ...input, width: '300px' }}
          >
            <option value="">Selecciona un tipo</option>
            {tipos.map((tipo: any) => (
              <option key={tipo.id_tipo} value={tipo.id_tipo}>
                {tipo.tipo}
              </option>
            ))}
          </select>
        </div>

        <IngredientesForm
          ingredientes={ingredientes}
          unidades={unidades}
        />

        <div style={{ marginBottom: '15px' }}>
          <label>Detalle / Instrucciones</label>
          <br />
          <textarea
            name="detalle"
            rows={6}
            style={{ ...input, width: '400px' }}
          />
        </div>

        <button type="submit" style={button}>
          Guardar Receta
        </button>
      </form>
    </main>
  )
}