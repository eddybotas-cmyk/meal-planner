'use client'

import { useState, JSX } from 'react'

export default function IngredientesForm({
  ingredientes,
  unidades,
}: {
  ingredientes: any[]
  unidades: any[]
}) {
  const [rows, setRows] = useState([0])

  function agregarFila() {
    setRows([...rows, rows.length])
  }

  function eliminarFila(index: number) {
    setRows(rows.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h3>Ingredientes</h3>

      {rows.map((i, index) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <select name={`ingrediente_${index}`}>
            <option value="">Ingrediente</option>
            {ingredientes.map((ing) => (
              <option key={ing.id_ingrediente} value={ing.id_ingrediente}>
                {ing.nombre}
              </option>
            ))}
          </select>

          <input
            type="number"
            step="0.05"
            placeholder="Cantidad"
            name={`cantidad_${index}`}
          />

          <select name={`unidad_${index}`}>
            <option value="">Unidad</option>
            {unidades.map((u) => (
              <option key={u.id_unidad} value={u.id_unidad}>
                {u.unidad}
              </option>
            ))}
          </select>

          <button type="button" onClick={() => eliminarFila(index)}>
            ❌
          </button>
        </div>
      ))}

      <button type="button" onClick={agregarFila}>
        + Agregar ingrediente
      </button>
    </div>
  )
}