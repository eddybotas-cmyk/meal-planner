import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function EditarRecetaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const id_receta = Number(id)

  const receta = await prisma.recetas.findUnique({
    where: { id_receta },
    include: {
      detalles: true,
      tieneIng: {
        include: {
          ingrediente: true,
          unidad: true,
        },
      },
    },
  })

  const tipos = await prisma.tipo.findMany({
    orderBy: { tipo: 'asc' },
  })

  const ingredientes = await prisma.ingredientes.findMany({
    orderBy: { nombre: 'asc' },
  })

  const unidades = await prisma.unidades.findMany({
    orderBy: { unidad: 'asc' },
  })

  // 💾 Guardar receta
  async function actualizar(formData: FormData) {
    'use server'

    const nombre = String(formData.get('nombre'))
    const id_tipo = Number(formData.get('id_tipo'))
    const detalle = String(formData.get('detalle'))

    await prisma.recetas.update({
      where: { id_receta },
      data: { nombre, id_tipo },
    })

    await prisma.detalle.deleteMany({
      where: { id_receta },
    })

    if (detalle.trim()) {
      await prisma.detalle.create({
        data: { id_receta, detalle },
      })
    }

    redirect(`/receta/${id_receta}/editar`)
  }

  async function agregarIngrediente(formData: FormData) {
    'use server'

    const id_ingrediente = Number(formData.get('id_ingrediente'))
    const cantidad = Number(formData.get('cantidad'))
    const id_unidad = Number(formData.get('id_unidad'))

    if (!id_ingrediente || !cantidad || !id_unidad) return

    await prisma.tieneIng.create({
      data: {
        id_receta,
        id_ingrediente,
        cantidad,
        id_unidad,
      },
    })

    redirect(`/receta/${id_receta}/editar`)
  }

  const inputStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  }

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

  if (!receta) return <div>Receta no encontrada</div>

  return (
    <main
      style={{
        padding: '20px',
        fontFamily: 'Arial',
        backgroundColor: 'var(--background)',
        minHeight: '100vh',
        color: 'var(--foreground)',
      }}
    >
      <Link href="/recetas" style={{ color: 'var(--foreground)' }}>
        ← Regresar
      </Link>

      <h1 style={{ marginTop: '20px' }}>Editar receta</h1>

      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>Nombre</label>
          <br />
          <input
            name="nombre"
            defaultValue={receta.nombre}
            style={{ ...inputStyle, width: '300px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Tipo</label>
          <br />
          <select
            name="id_tipo"
            defaultValue={String(receta.id_tipo)}
            style={{ ...inputStyle, width: '300px' }}
          >
            {tipos.map((tipo: any) => (
              <option key={tipo.id_tipo} value={tipo.id_tipo}>
                {tipo.tipo}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Detalle</label>
          <br />
          <textarea
            name="detalle"
            defaultValue={receta.detalles[0]?.detalle ?? ''}
            rows={5}
            style={{ ...inputStyle, width: '500px' }}
          />
        </div>

        <h2>Ingredientes</h2>

        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={header}>Ingrediente</th>
              <th style={header}>Cantidad</th>
              <th style={header}>Unidad</th>
            </tr>
          </thead>
          <tbody>
            {receta.tieneIng.map((item: any) => (
              <tr key={item.id_tieneing}>
                <td style={cell}>{item.ingrediente.nombre}</td>
                <td style={cell}>{item.cantidad}</td>
                <td style={cell}>{item.unidad.unidad}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ marginTop: '20px' }}>Agregar ingrediente</h3>

        <div style={{ display: 'flex', gap: '10px' }}>
          <select name="id_ingrediente" style={inputStyle}>
            <option value="">Ingrediente</option>
            {ingredientes.map((i: any) => (
              <option key={i.id_ingrediente} value={i.id_ingrediente} style={{backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                {i.nombre}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            style={inputStyle}
          />

          <select name="id_unidad" style={inputStyle}>
            <option value="">Unidad</option>
            {unidades.map((u: any) => (
              <option key={u.id_unidad} value={u.id_unidad}>
                {u.unidad}
              </option>
            ))}
          </select>

          <button formAction={agregarIngrediente}>
            Agregar
          </button>
        </div>

        <div style={{ marginTop: '30px' }}>
          <button formAction={actualizar}>
            Guardar cambios
          </button>
        </div>
      </form>
    </main>
  )
}