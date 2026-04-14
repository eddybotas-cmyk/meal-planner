import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const { fecha, tipo, id_receta } = await req.json()

  const inicio = new Date(fecha + 'T00:00:00')
  const fin = new Date(fecha + 'T23:59:59')

  // borrar anterior
  await prisma.planComidas.deleteMany({
    where: {
      momento: tipo,
      fecha: {
        gte: inicio,
        lte: fin,
      },
    },
  })

  // crear nuevo si hay valor
  if (id_receta) {
    await prisma.planComidas.create({
      data: {
        fecha: new Date(fecha + 'T12:00:00'),
        momento: tipo,
        id_receta: Number(id_receta),
      },
    })
  }

  return Response.json({ ok: true })
}