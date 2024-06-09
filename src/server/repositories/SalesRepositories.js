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

//Pegando o total de venda e compra
export async function getTotals() {
  //Fazendo a soma da coluna total de compra de todos os dados que estão na tabela sales
  const purchase = await prisma.sales.aggregate({
    _sum: {
      total_money_purchase: true,
    },
  });

  //Fazendo a soma da coluna total de venda de todos os dados que estão na tabela sales
  const sale = await prisma.sales.aggregate({
    _sum: {
      total_money_sale: true,
    },
  });

  const purchaseTotal = purchase?._sum?.total_money_purchase;
  const salesTotal = sale?._sum?.total_money_sale;
  const profitTotal = salesTotal - purchaseTotal;

  return { purchaseTotal, salesTotal, profitTotal };
}
