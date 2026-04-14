import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordPlano = '123456'

  const passwordHash = await bcrypt.hash(passwordPlano, 10)

  await prisma.usuario.create({
    data: {
      nombre: 'Sandy',
      email: 'sandybellcat20@gmail.com',
      password: passwordHash,
      rol: 'USUARIO',
    },
  })

  console.log(' Usuario creado con password seguro')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())