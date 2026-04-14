import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()

async function main() {
    const file = fs.readFileSync('ingredientes.txt', 'utf-8')

    const ingredientes = file
    .split('\n')
    .map(i => i.trim())
    .filter(i => i.length > 0)

    console.log(`Importando ${ingredientes.length} ingredientes...`)

    await prisma.ingredientes.createMany({
        data: ingredientes.map(nombre => ({ nombre })),
    })

    console.log('Importación completada.')
}

main()
.catch(e => console.error(e))
.finally(() => prisma.$disconnect())
