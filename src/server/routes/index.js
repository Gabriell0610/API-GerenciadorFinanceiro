import { Router } from "express";
import UserController from "../controller/UserController.js";
import AuthController from "../controller/AuthController.js";
import { verifyToken } from "../middleware/auth.js";
//import SalesController from "../controller/SalesController.js";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Olá Mundo");
});

router.post("/user", UserController.post);
router.get("/user", verifyToken, UserController.getAll);
router.get("/user/:id", verifyToken, UserController.getId);
router.put("/user/:id", verifyToken, UserController.update);
router.delete("/user/:id", verifyToken, UserController.remove);

router.post("/login", AuthController.login);

// router.post("/sales", verifyToken, SalesController.post);
// router.get("/sales", verifyToken, SalesController.getAll);
// router.get("/sales/:id", verifyToken, SalesController.getId);
// router.put("/sales/:id", verifyToken, SalesController.update);
// router.delete("/sales/:id", verifyToken, SalesController.remove);

export { router };
