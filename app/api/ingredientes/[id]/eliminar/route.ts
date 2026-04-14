import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  await prisma.ingredientes.delete({
    where: {
      id_ingrediente: Number(id),
    },
  })

  return NextResponse.redirect(new URL('/ingredientes', request.url))
}