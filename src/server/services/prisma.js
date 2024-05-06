//Exportando o prisma client para ser iniciado toda vez que nos comunicarmos com o banco de dados

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

// const { PrismaClient } = require("@prisma/client");

// exports.prisma = new PrismaClient();
