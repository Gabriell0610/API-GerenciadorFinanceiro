import { getUser } from "../repositories/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { authValidation } from "../validation/AutValidation.js";

export const login = async (req, res) => {
  try {
    const data = await authValidation.parse(req.body);
    const user = await getUser(data);

    if (!user) throw { mensage: "Usuário não existe" };
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24",
        }
      );
      return res.status(200).res({ token });
    } else {
      return res.status(401).send({ mensage: "Usuário e/ou senha incorretos" });
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};
