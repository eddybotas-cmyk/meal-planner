import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const idReceta = Number(id)

  await prisma.detalle.deleteMany({
    where: { id_receta: idReceta },
  })

  await prisma.tieneIng.deleteMany({
    where: { id_receta: idReceta },
  })

  await prisma.planComidas.deleteMany({
    where: { id_receta: idReceta },
  })

  await prisma.recetas.delete({
    where: { id_receta: idReceta },
  })

    return NextResponse.redirect(new URL('/', request.url))
}