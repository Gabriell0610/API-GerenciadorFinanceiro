import express from "express";
import { router } from "./routes/index.js";
import "dotenv/config";
import cors from "cors";
//import routerLogin from "./routes/auth.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use(router);
//server.use(routerLogin);

export { server };
