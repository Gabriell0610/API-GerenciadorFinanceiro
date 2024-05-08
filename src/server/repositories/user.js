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

export async function getByIdUsers(id) {
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
