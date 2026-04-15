import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

async function agregarIngrediente(formData: FormData) {
  "use server"

  const id_receta = Number(formData.get("id_receta"))
  const id_ingrediente = Number(formData.get("id_ingrediente"))
  const cantidad = Number(formData.get("cantidad"))
  const id_unidad = Number(formData.get("id_unidad"))

  await prisma.tieneIng.create({
    data: {
      id_receta,
      id_ingrediente,
      cantidad,
      id_unidad,
    },
  })

  redirect(`/receta/${id_receta}/ingredientes`)
}

export default async function IngredientesRecetaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const id_receta = Number(id)

  const receta = await prisma.recetas.findUnique({
    where: { id_receta },
    include: {
      tieneIng: {
        include: {
          ingrediente: true,
          unidad: true,
        },
      },
    },
  })

  const ingredientes = await prisma.ingredientes.findMany({
    orderBy: { nombre: "asc" },
  })

  const unidades = await prisma.unidades.findMany({
    orderBy: { unidad: "asc" },
  })

  if (!receta) {
    return <div>Receta no encontrada</div>
  }

  const header = {
    border: "1px solid black",
    padding: "8px",
    backgroundColor: "#505050",
  }

  const cell = {
    border: "1px solid black",
    padding: "8px",
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* 🔙 BOTÓN */}
      <Link href="/recetas">← Regresar</Link>

      <h1 style={{ marginTop: "20px" }}>
        Ingredientes de: {receta.nombre}
      </h1>

      {/* 🔝 TABLA ARRIBA */}
      <h2 style={{ marginTop: "20px" }}>Ingredientes registrados</h2>

      {receta.tieneIng.length === 0 ? (
        <p>Esta receta todavía no tiene ingredientes.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              <th style={header}>Ingrediente</th>
              <th style={header}>Cantidad</th>
              <th style={header}>Unidad</th>
              <th style={header}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {receta.tieneIng.map((item: any) => (
              <tr key={item.id_tieneing}>
                <td style={cell}>{item.ingrediente.nombre}</td>
                <td style={cell}>{item.cantidad}</td>
                <td style={cell}>{item.unidad.unidad}</td>
                <td style={cell}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Link
                      href={`/receta/${id}/ingredientes/${item.id_tieneing}/editar`}
                    >
                      <button type="button">Editar</button>
                    </Link>

                    <form
                      action={`/api/tieneing/${item.id_tieneing}/eliminar`}
                      method="POST"
                    >
                      <button type="submit">Borrar</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* 🔽 FORMULARIO ABAJO */}
      <form
        action={agregarIngrediente}
        style={{
          display: "grid",
          gap: "12px",
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <input type="hidden" name="id_receta" value={id_receta} />

        <div>
          <label>Ingrediente</label>
          <br />
          <select name="id_ingrediente" required style={{ width: "100%", padding: "8px" }}>
            <option value="">Selecciona un ingrediente</option>
            {ingredientes.map((ingrediente: any) => (
              <option
                key={ingrediente.id_ingrediente}
                value={ingrediente.id_ingrediente}
              >
                {ingrediente.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Cantidad</label>
          <br />
          <input
            type="number"
            name="cantidad"
            step="0.01"
            min="0"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label>Unidad</label>
          <br />
          <select name="id_unidad" required style={{ width: "100%", padding: "8px" }}>
            <option value="">Selecciona una unidad</option>
            {unidades.map((unidad: any) => (
              <option key={unidad.id_unidad} value={unidad.id_unidad}>
                {unidad.unidad}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Agregar ingrediente
        </button>
      </form>
    </div>
  )
}