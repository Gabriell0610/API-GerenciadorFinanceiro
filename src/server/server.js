import express from "express";
import { router } from "./routes/index.js";
import "dotenv/config";
import cors from "cors";

const server = express();


server.use(express.json());
server.use(cors());

server.use(router);
export { server };
