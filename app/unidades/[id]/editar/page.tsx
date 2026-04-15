import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function EditarUnidadesPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const unidades = await prisma.unidades.findUnique({
    where: {
      id_unidad: Number(id),
    },
  })

  async function guardar(formData: FormData) {
    'use server'

    const unidad = String(formData.get('unidad'))

    await prisma.unidades.update({
      where: {
        id_unidad: Number(id),
      },
      data: {
        unidad,
      },
    })

    redirect('/unidades')
  }

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Editar unidad</h1>

      <form action={guardar}>
        <input
          name="unidad"
          defaultValue={unidades?.unidad}
          required
          style={{
            padding: '8px',
            width: '300px',
            marginRight: '10px',
          }}
        />

        <button type="submit">Guardar</button>
      </form>
    </main>
  )
}