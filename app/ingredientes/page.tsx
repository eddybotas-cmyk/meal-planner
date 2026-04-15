import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function agregarIngrediente(formData: FormData) {
  'use server'

  const nombre = formData.get('nombre')?.toString().trim()

  if (!nombre) return

  await prisma.ingredientes.create({
    data: { nombre },
  })

  redirect('/ingredientes')
}

export default async function IngredientesPage() {
  const ingredientes = await prisma.ingredientes.findMany({
    orderBy: { nombre: 'asc' },
  })

  const header = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  }

  const cell = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  }

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial' }}>
      
      <Link href="/recetas">← Regresar</Link>

      <h1 style={{ marginTop: '20px' }}>Catálogo de ingredientes</h1>

      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <thead>
          <tr>
            <th style={header}>Ingrediente</th>
            <th style={header}>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {ingredientes.map((ingrediente: any) => (
            <tr key={ingrediente.id_ingrediente}>
              <td style={cell}>{ingrediente.nombre}</td>

              <td style={cell}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link href={`/ingredientes/${ingrediente.id_ingrediente}/editar`}>
                    <button type="button">Editar</button>
                  </Link>

                  <form
                    action={`/api/ingredientes/${ingrediente.id_ingrediente}/eliminar`}
                    method="POST"
                  >
                    <button type="submit">Borrar</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form
        action={agregarIngrediente}
        style={{
          marginTop: '30px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del ingrediente"
          required
          style={{
            padding: '8px',
            width: '300px',
          }}
        />

        <button type="submit">Agregar</button>
      </form>
    </main>
  )
}