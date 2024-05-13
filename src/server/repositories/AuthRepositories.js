import { prisma } from "../services/prisma.js";

export const getUser = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};
