import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function ListaComprasPage({
  searchParams,
}: {
  searchParams: Promise<{
    inicio?: string
    fin?: string
  }>
}) {
  const params = await searchParams

  const hoy = new Date()
  const yyyy = hoy.getFullYear()
  const mm = String(hoy.getMonth() + 1).padStart(2, '0')
  const dd = String(hoy.getDate()).padStart(2, '0')

  const hoyTexto = `${yyyy}-${mm}-${dd}`

  const fechaInicio = params.inicio ?? hoyTexto
  const fechaFin = params.fin ?? hoyTexto

  let ingredientesAgrupados: {
    nombre: string
    cantidad: number
    unidad: string
  }[] = []

  if (fechaInicio && fechaFin) {
    const planes = await prisma.planComidas.findMany({
      where: {
        fecha: {
          gte: new Date(`${fechaInicio}T00:00:00`),
          lte: new Date(`${fechaFin}T23:59:59`),
        },
      },
      include: {
        receta: {
          include: {
            tieneIng: {
              include: {
                ingrediente: true,
                unidad: true,
              },
            },
          },
        },
      },
    })

    const acumulado: Record<
      string,
      {
        nombre: string
        unidad: string
        cantidad: number
      }
    > = {}

    for (const plan of planes) {
      for (const item of plan.receta.tieneIng) {
        const llave = `${item.ingrediente.nombre}_${item.unidad.unidad}`

        if (!acumulado[llave]) {
          acumulado[llave] = {
            nombre: item.ingrediente.nombre,
            unidad: item.unidad.unidad,
            cantidad: 0,
          }
        }

        acumulado[llave].cantidad += item.cantidad
      }
    }

    ingredientesAgrupados = Object.values(acumulado).sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
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

  const inputStyle = {
    padding: '8px',
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
      {/* 🔥 NAV */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/">
          <button style={buttonStyle}>Inicio</button>
        </Link>

        <Link href="/calendario">
          <button style={buttonStyle}>Calendario</button>
        </Link>
      </div>

      <h1>Lista de compras</h1>

      <p>
        Selecciona un periodo y la aplicación calculará todos los ingredientes necesarios.
      </p>

      <form
        method="GET"
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'end',
          marginBottom: '30px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <label>Fecha inicial</label>
          <br />
          <input
            type="date"
            name="inicio"
            defaultValue={fechaInicio}
            style={inputStyle}
          />
        </div>

        <div>
          <label>Fecha final</label>
          <br />
          <input
            type="date"
            name="fin"
            defaultValue={fechaFin}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Generar lista
        </button>
      </form>

      {ingredientesAgrupados.length === 0 ? (
        <div>
          No hay ingredientes para ese periodo. O no planeaste comidas... o tu refri ya alcanzó el nirvana.
        </div>
      ) : (
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
          }}
        >
          <thead>
            <tr>
              <th style={header}>Ingrediente</th>
              <th style={header}>Cantidad total</th>
              <th style={header}>Unidad</th>
            </tr>
          </thead>

          <tbody>
            {ingredientesAgrupados.map((item) => (
              <tr key={`${item.nombre}_${item.unidad}`}>
                <td style={cell}>{item.nombre}</td>
                <td style={cell}>{item.cantidad}</td>
                <td style={cell}>{item.unidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}