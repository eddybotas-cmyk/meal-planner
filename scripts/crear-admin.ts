import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
  const password = await bcrypt.hash('admin123', 10)

  await prisma.usuario.create({
    data: {
      nombre: 'Administrador',
      email: 'admin@mealplanner.com',
      password,
      rol: 'ADMIN',
    },
  })

  console.log('Administrador creado')
}

main()