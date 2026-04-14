'use client'

export default function CalendarioSelect({
  dia,
  tipo,
  recetas,
  defaultValue,
}: any) {
  return (
    <select
      defaultValue={defaultValue}
      style={{
        width: '100%',
        fontSize: '10px',
        marginBottom: '2px',
        backgroundColor: 'var(--input)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
      }}
      onChange={async (e) => {
        await fetch('/api/calendario', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fecha: dia,
            tipo,
            id_receta: e.target.value || null,
          }),
        })
      }}
    >
      <option value="">-</option>

      {recetas.map((r: any) => (
        <option key={r.id_receta} value={r.id_receta}>
          {r.nombre}
        </option>
      ))}
    </select>
  )
}