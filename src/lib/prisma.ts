import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

// Extract file path from DATABASE_URL (format: "file:./path/to/db.sqlite")
const databaseUrl = process.env.DATABASE_URL || 'file:./prisma/dev.db'
const filePath = databaseUrl.replace('file:', '')

const adapter = new PrismaBetterSqlite3({ url: filePath })

// Prevent multiple instances in development (hot reload)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
