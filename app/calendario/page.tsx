import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import BotonRegresar from '@/components/BotonRegresar'
import SelectAutoSave from './SelectAutoSave'

// evita problemas de timezone
function fechaSafe(fecha: string) {
  return new Date(fecha + 'T12:00:00')
}

function obtenerMes(mesParam?: string) {
  let fechaBase = new Date()

  if (mesParam) {
    const [year, month] = mesParam.split('-').map(Number)
    fechaBase = new Date(year, month - 1, 1)
  }

  const year = fechaBase.getFullYear()
  const month = fechaBase.getMonth()

  const primerDia = new Date(year, month, 1)
  const ultimoDia = new Date(year, month + 1, 0)

  const dias: string[] = []

  for (let d = 1; d <= ultimoDia.getDate(); d++) {
    const fecha = new Date(year, month, d)
    const yyyy = fecha.getFullYear()
    const mm = String(fecha.getMonth() + 1).padStart(2, '0')
    const dd = String(fecha.getDate()).padStart(2, '0')

    dias.push(`${yyyy}-${mm}-${dd}`)
  }

  const nombreMes = primerDia.toLocaleDateString('es-MX', {
    month: 'long',
    year: 'numeric',
  })

  const mesActual = `${year}-${String(month + 1).padStart(2, '0')}`

  return {
    dias,
    primerDiaSemana: primerDia.getDay(),
    nombreMes,
    mesActual,
  }
}

export default async function CalendarioPage({
  searchParams,
}: {
  searchParams: Promise<{ mes?: string }>
}) {
  const params = await searchParams

  const { dias, primerDiaSemana, nombreMes, mesActual } =
    obtenerMes(params?.mes)

  const recetas = await prisma.recetas.findMany({
    orderBy: { nombre: 'asc' },
  })

  const plan = await prisma.planComidas.findMany()

  const tipos = ['Sopa', 'Guisado', 'Guarnición', 'Extra']

  function valorSeleccionado(fecha: string, tipo: string) {
    return plan.find((p: any) => {
      const iso = new Date(p.fecha).toISOString().slice(0, 10)
      return iso === fecha && p.momento === tipo
    })?.id_receta?.toString() ?? ''
  }

  const [year, month] = mesActual.split('-').map(Number)

  const prevMonth = new Date(year, month - 2)
  const nextMonth = new Date(year, month)

  const prevMesParam = `${prevMonth.getFullYear()}-${String(
    prevMonth.getMonth() + 1
  ).padStart(2, '0')}`

  const nextMesParam = `${nextMonth.getFullYear()}-${String(
    nextMonth.getMonth() + 1
  ).padStart(2, '0')}`

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        minHeight: '100vh',
        fontFamily: 'var(--font-main)',
      }}
    >
      <h1>Calendario mensual</h1>

      {/* 🔥 navegación */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <BotonRegresar />

        <Link href="/recetas">
          <button style={btnStyle}>Recetas</button>
        </Link>

        <Link href="/lista-compras">
          <button style={btnStyle}>Lista de compras</button>
        </Link>
      </div>

      {/* 🔥 cambio de mes */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px',
        }}
      >
        <Link href={`/calendario?mes=${prevMesParam}`}>
          <button style={btnStyle}>← Mes anterior</button>
        </Link>

        <h2 style={{ textTransform: 'capitalize' }}>{nombreMes}</h2>

        <Link href={`/calendario?mes=${nextMesParam}`}>
          <button style={btnStyle}>Mes siguiente →</button>
        </Link>
      </div>

      {/* 🔥 calendario */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '8px',
        }}
      >
        {diasSemana.map((d) => (
          <div
            key={d}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: 'var(--header)',
              padding: '5px',
              border: '1px solid var(--border)',
            }}
          >
            {d}
          </div>
        ))}

        {[...Array(primerDiaSemana)].map((_, i) => (
          <div key={i}></div>
        ))}

        {dias.map((dia) => {
          const numero = dia.split('-')[2]

          return (
            <div
              key={dia}
              style={{
                border: '1px solid var(--border)',
                padding: '5px',
                backgroundColor: 'var(--card)',
              }}
            >
              <div style={{ fontSize: '12px' }}>{numero}</div>

              {tipos.map((tipo) => (
                <SelectAutoSave
                  key={tipo}
                  fecha={dia}
                  tipo={tipo}
                  defaultValue={valorSeleccionado(dia, tipo)}
                  recetas={recetas}
                />
              ))}
            </div>
          )
        })}
      </div>
    </main>
  )
}

/* 🎨 estilos */

const btnStyle = {
  padding: '8px 12px',
  backgroundColor: 'var(--header)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  cursor: 'pointer',
}