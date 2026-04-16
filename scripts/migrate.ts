import 'dotenv/config'
import { PrismaClient as PrismaPG } from '@prisma/client'
import { PrismaClient as PrismaSQLite } from '../generated/sqlite/index.js'

const prisma = new PrismaPG() // SUPABASE
const prismaSQLite = new PrismaSQLite() // SQLITE

async function main() {
  console.log(' Migrando datos...')

  // 1. USUARIOS
  const usuarios = await prismaSQLite.usuario.findMany()
  await prisma.usuario.createMany({ data: usuarios })
  console.log('✅ Usuarios')

  // 2. TIPOS
  const tipos = await prismaSQLite.tipo.findMany()
  await prisma.tipo.createMany({ data: tipos })
  console.log('✅ Tipos')

  // 3. UNIDADES
  const unidades = await prismaSQLite.unidades.findMany()
  await prisma.unidades.createMany({ data: unidades })
  console.log('✅ Unidades')

  // 4. INGREDIENTES
  const ingredientes = await prismaSQLite.ingredientes.findMany()
  await prisma.ingredientes.createMany({ data: ingredientes })
  console.log('✅ Ingredientes')

  // 5. RECETAS
  const recetas = await prismaSQLite.recetas.findMany()
  await prisma.recetas.createMany({ data: recetas })
  console.log('✅ Recetas')

  // 6. DETALLES
  const detalles = await prismaSQLite.detalle.findMany()
  await prisma.detalle.createMany({ data: detalles })
  console.log('✅ Detalles')

  // 7. RELACIONES INGREDIENTES
  const tieneIng = await prismaSQLite.tieneIng.findMany()
  await prisma.tieneIng.createMany({ data: tieneIng })
  console.log('✅ Ingredientes por receta')

  // 8. PLAN COMIDAS
  const plan = await prismaSQLite.planComidas.findMany()
  await prisma.planComidas.createMany({ data: plan })
  console.log('✅ Plan comidas')

  console.log(' MIGRACIÓN COMPLETA')
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await prismaSQLite.$disconnect()
  })