import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function agregarUnidad(formData: FormData) {
  'use server'

  const unidad = formData.get('unidad')?.toString().trim()

  if (!unidad) return

  await prisma.unidades.create({
    data: { unidad },
  })

  redirect('/unidades')
}

export default async function UnidadesPage() {
  const unidades = await prisma.unidades.findMany({
    orderBy: { unidad: 'asc' },
  })

  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: 'var(--background)',
        minHeight: '100vh',
        color: 'var(--foreground)',
      }}
    >
      {/* 🔙 NAV */}
      <Link href="/" style={{ color: 'var(--foreground)' }}>
        ← Regresar
      </Link>

      <h1 style={{ marginTop: '20px' }}>
        Catálogo de unidades
      </h1>

      {/* 🔥 FORM CARD */}
      <form
        action={agregarUnidad}
        style={{
          marginTop: '20px',
          marginBottom: '30px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          padding: '20px',
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          maxWidth: '500px',
        }}
      >
        <input
          type="text"
          name="unidad"
          placeholder="Nombre de la unidad"
          required
          style={input}
        />

        <button type="submit" style={button}>
          Agregar
        </button>
      </form>

      {/* 🔥 TABLA */}
      <div
        style={{
          overflowX: 'auto',
          border: '1px solid var(--border)',
          borderRadius: '8px',
        }}
      >
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
          }}
        >
          <thead>
            <tr>
              <th style={header}>ID</th>
              <th style={header}>Unidad</th>
              <th style={header}>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {unidades.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ ...cell, textAlign: 'center' }}>
                  No hay unidades registradas.
                </td>
              </tr>
            ) : (
              unidades.map((unidad: any) => (
                <tr key={unidad.id_unidad} style={row}>
                  <td style={cell}>{unidad.id_unidad}</td>

                  <td style={cell}>{unidad.unidad}</td>

                  <td style={cell}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link href={`/unidades/${unidad.id_unidad}/editar`}>
                        <button type="button" style={buttonSmall}>
                          Editar
                        </button>
                      </Link>

                      <form
                        action={`/api/unidades/${unidad.id_unidad}/eliminar`}
                        method="POST"
                      >
                        <button type="submit" style={buttonSmall}>
                          Borrar
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}

/* 🎨 ESTILOS */

const header = {
  border: '1px solid var(--border)',
  padding: '10px',
  backgroundColor: 'var(--table-header)',
  color: 'var(--foreground)',
  textAlign: 'left' as const,
}

const cell = {
  border: '1px solid var(--border)',
  padding: '10px',
  backgroundColor: 'var(--table-cell)',
}

const row = {
  transition: '0.2s',
}

const input = {
  padding: '8px',
  width: '300px',
  backgroundColor: 'var(--input)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
}

const button = {
  padding: '8px 12px',
  backgroundColor: 'var(--header)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  cursor: 'pointer',
}

const buttonSmall = {
  padding: '5px 8px',
  fontSize: '12px',
  backgroundColor: 'var(--header)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  cursor: 'pointer',
}