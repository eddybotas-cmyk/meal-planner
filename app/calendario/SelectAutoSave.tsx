'use client'

type Props = {
  fecha: string
  tipo: string
  defaultValue: string
  recetas: any[]
}

export default function SelectAutoSave({
  fecha,
  tipo,
  defaultValue,
  recetas,
}: Props) {
  async function handleChange(value: string) {
    await fetch('/api/calendario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fecha,
        tipo,
        id_receta: value || null,
      }),
    })
  }

  return (
    <select
      defaultValue={defaultValue}
      style={selectStyle}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="">-</option>

      {recetas.map((r) => (
        <option key={r.id_receta} value={r.id_receta}>
          {r.nombre}
        </option>
      ))}
    </select>
  )
}

const selectStyle = {
  width: '100%',
  fontSize: '10px',
  marginBottom: '2px',
  backgroundColor: 'var(--input)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
}