import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const item = await prisma.tieneIng.findUnique({
    where: {
      id_tieneing: Number(id),
    },
  })

  if (!item) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const recetaId = item.id_receta

  await prisma.tieneIng.delete({
    where: {
      id_tieneing: Number(id),
    },
  })

  return NextResponse.redirect(new URL(`/receta/${recetaId}/ingredientes`, request.url))
}