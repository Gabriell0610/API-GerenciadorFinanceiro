//Exportando o prisma client para ser iniciado toda vez que nos comunicarmos com o banco de dados

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

prisma.$connect().then(() => {
    console.log('🔌 Prisma Client connected');
  }).catch((error) => {
    console.error('❌ Error connecting to Prisma Client:', error);
  });
