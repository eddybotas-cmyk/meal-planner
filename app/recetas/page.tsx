import Link from 'next/link'
import { prisma } from '../../lib/prisma'

export default async function Home() {
  const recetas = await prisma.recetas.findMany({
    include: {
      tipo: true,
      detalles: true,
      usuario: true,
    },
    orderBy: {
      nombre: 'asc',
    },
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
      <h1 style={{ marginBottom: '20px' }}>
        Planeador de comidas
      </h1>

      {/* 🔥 NAV */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/"><button style={button}>Inicio</button></Link>
        <Link href="/nueva-receta"><button style={button}>Nueva receta</button></Link>
        <Link href="/calendario"><button style={button}>Calendario</button></Link>
        <Link href="/lista-compras"><button style={button}>Lista de compras</button></Link>

        <form action="/api/logout" method="POST">
          <button type="submit" style={button}>
            Salir
          </button>
        </form>
      </div>

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
              <th style={header}>Receta</th>
              <th style={header}>Tipo</th>
              <th style={header}>Detalle</th>
              <th style={header}>Ingredientes</th>
              <th style={header}>Acciones</th>
              <th style={header}>Creada por</th>
            </tr>
          </thead>

          <tbody>
            {recetas.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    ...cell,
                    textAlign: 'center',
                  }}
                >
                  No hay recetas disponibles.
                </td>
              </tr>
            ) : (
              recetas.map((receta: any) => (
                <tr key={receta.id_receta} style={row}>
                  <td style={cell}>{receta.nombre}</td>

                  <td style={cell}>{receta.tipo.tipo}</td>

                  <td style={cell}>
                    {receta.detalles.length > 0
                      ? receta.detalles[0].detalle.length > 30
                        ? receta.detalles[0].detalle.slice(0, 30) + '...'
                        : receta.detalles[0].detalle
                      : 'Sin detalle'}
                  </td>

                  <td style={cell}>
                    <Link href={`/receta/${receta.id_receta}/ingredientes`}>
                      <button style={buttonSmall}>
                        Ver
                      </button>
                    </Link>
                  </td>

                  <td style={cell}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link href={`/receta/${receta.id_receta}/editar`}>
                        <button style={buttonSmall}>Editar</button>
                      </Link>

                      <form
                        action={`/api/recetas/${receta.id_receta}/eliminar`}
                        method="POST"
                      >
                        <button type="submit" style={buttonSmall}>
                          Borrar
                        </button>
                      </form>
                    </div>
                  </td>

                  <td style={cell}>{receta.usuario.nombre}</td>
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

const button = {
  backgroundColor: 'var(--header)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  padding: '8px 12px',
  cursor: 'pointer',
}

const buttonSmall = {
  backgroundColor: 'var(--header)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  padding: '5px 8px',
  fontSize: '12px',
  cursor: 'pointer',
}