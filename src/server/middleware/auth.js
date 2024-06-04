// import jwt from "jsonwebtoken"

// export const verifyToken = async (req, res, next) => {
    
//     const token = req.headers.authorization

//     if(!token) {
//         return res.status(401).send({mensage: "Token é obrigatório"})
//     }
    
//     try {
//         const replace = token.replace("Bearer ", "")
//         const decoded = jwt.verify(replace, process.env.TOKEN_KEY)
//         next()
//     } catch (error) {
//         return res.status(401).send({mensage: "credenciais inválidas"})
//     }
// }

import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        console.log("Token não fornecido");
        return res.status(401).send({ message: "Token é obrigatório" });
    }

    try {
        const replace = token.replace("Bearer ", "");
        console.log("Token após replace:", replace);
        const decoded = jwt.verify(replace, process.env.TOKEN_KEY);

        next();
    } catch (error) {
        console.log("Erro na verificação do token:", error);
        return res.status(401).send({ message: "Credenciais inválidas" });
    }
};
