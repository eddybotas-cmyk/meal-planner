import Link from 'next/link'


export const dynamic = 'force-dynamic'


export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '12px',
          padding: '40px',
          minWidth: '320px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ marginBottom: '30px' }}>Eddy's Planeador de comidas</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <Link href="/calendario">
            <button
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Calendario
            </button>
          </Link>

          <Link href="/recetas">
            <button
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Recetas
            </button>
          </Link>

          <Link href="/lista-compras">
            <button
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Lista de compras
            </button>
          </Link>

          <form action="/api/logout" method="POST">
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Salir
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}