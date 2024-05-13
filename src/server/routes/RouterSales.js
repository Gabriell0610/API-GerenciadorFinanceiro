import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import SalesController from "../controller/SalesController.js";

const routerSales = Router();

routerSales.post("/sales", verifyToken, SalesController.post);
routerSales.get("/sales", verifyToken, SalesController.getAll);
routerSales.get("/sales/:id", verifyToken, SalesController.getId);
routerSales.put("/sales/:id", verifyToken, SalesController.update);
routerSales.delete("/sales/:id", verifyToken, SalesController.remove);

export { routerSales };
