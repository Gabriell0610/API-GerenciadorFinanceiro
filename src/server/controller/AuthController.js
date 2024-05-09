import { getUser } from "../repositories/auth.js";
import bcrypt from "bcrypt";

import { authValidation } from "../validation/AutValidation.js";
import jwt from "jsonwebtoken"

class AuthController {

  async login(req, res) {
    try { 
      //Validandos os dados
      const data = authValidation.parse(req.body);
      //Enviando o email para o banco de dados
      const user = await getUser(data.email);
      
      //Verificando se o usurário retornado do banco de dados não existe
      if (!user) throw { mensage: "Usuário não existe" };
      
      //Verificando se o usurário retornado do banco de dados existe e se a senha do body é igual ao que está no banco de dados
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            name: user.name,
          },
          process.env.TOKEN_KEY,
          {
            expiresIn: "24h",
          }
        );
        return res.status(200).send({ token });
      } else  {
        return res.status(401).send({ mensage: "Usuário e/ou senha incorretos" });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new AuthController()
