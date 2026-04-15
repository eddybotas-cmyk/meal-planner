import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function EditarIngredientePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const ingrediente = await prisma.ingredientes.findUnique({
    where: {
      id_ingrediente: Number(id),
    },
  })

  async function guardar(formData: FormData) {
    'use server'

    const nombre = String(formData.get('nombre'))

    await prisma.ingredientes.update({
      where: {
        id_ingrediente: Number(id),
      },
      data: {
        nombre,
      },
    })

    redirect('/ingredientes')
  }

  const header = {
    border: '1px solid var(--border)',
    padding: '8px',
    backgroundColor: 'var(--table-header)',
    color: 'var(--foreground)',
  }

  const cell = {
    border: '1px solid var(--border)',
    padding: '8px',
    backgroundColor: 'var(--table-cell)',
  }

  const inputStyle = {
    padding: '8px',
    width: '300px',
    marginRight: '10px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--input)',
    color: 'var(--foreground)',
  }

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: 'var(--header)',
    color: 'var(--foreground)',
    border: '1px solid var(--border)',
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
      {/* 🔥 BOTÓN */}
      <Link href="/recetas">
        <button style={buttonStyle}>← Regresar</button>
      </Link>

      <h1 style={{ marginTop: '20px' }}>Editar ingrediente</h1>

      {/* 🔥 TABLA */}
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <thead>
          <tr>
            <th style={header}>Ingrediente actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cell}>{ingrediente?.nombre}</td>
          </tr>
        </tbody>
      </table>

      {/* 🔥 FORM */}
      <form action={guardar} style={{ marginTop: '30px' }}>
        <input
          name="nombre"
          defaultValue={ingrediente?.nombre}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Guardar
        </button>
      </form>
    </main>
  )
}