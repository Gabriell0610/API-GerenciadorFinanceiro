import { prisma } from "../services/prisma.js";

export async function createSales(data) {
  const sale = await prisma.sales.create({
    data,
  });
  return sale;
}

export async function getSales() {
  const sale = await prisma.sales.findMany({});
  return sale;
}

export async function getByIdSale(id) {
  const sale = await prisma.sales.findUnique({
    where: {
      id,
    },
  });
  return sale;
}

export async function updateSale(data, id) {
  const sale = await prisma.sales.update({
    where: {
      id,
    },
    data,
  });
  return sale;
}

export async function deleteSale(id) {
  await prisma.sales.delete({
    where: {
      id,
    },
  });
  return;
}
