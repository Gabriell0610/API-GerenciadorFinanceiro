// const { prisma } = require("../services/prisma");

// exports.createUser = async (data) => {
//   const user = await prisma.user.create({
//     data,
//   });
//   return user;
// };

// exports.getUsers = async () => {
//   const users = await prisma.user.findMany();
//   return users;
// };

// exports.getById = async (id) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id,
//     },
//   });
//   return user;
// };

// exports.updateUser = async (data, id) => {
//   const user = await prisma.user.update({
//     where: {
//       id,
//     },
//     data,
//   });
//   return user;
// };

// exports.deleteUser = async (id) => {
//   await prisma.user.delete({
//     where: {
//       id,
//     },
//   });
//   return;
// };

import { prisma } from "../services/prisma.js";

export async function createUser(data) {
  const user = await prisma.user.create({
    data,
  });
  return user;
}

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

export async function updateUser(data, id) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return user;
}

export async function deleteUser(id) {
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return;
}
