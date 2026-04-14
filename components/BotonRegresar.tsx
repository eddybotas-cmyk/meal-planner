'use client'

export default function BotonRegresar() {
  return (
    <button
      onClick={() => window.history.back()}
      style={{ marginBottom: '20px', cursor: 'pointer' }}
    >
      ← Regresar
    </button>
  )
}