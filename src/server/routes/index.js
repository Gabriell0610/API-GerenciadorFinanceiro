import { Router } from "express";
import UserController from "../controller/UserController.js";
import AuthController from "../controller/AuthController.js"
import { verifyToken } from "../middleware/auth.js"

const router = Router();

router.post("/user", UserController.post);
router.get("/user", verifyToken, UserController.getAll);
router.get("/user/:id", verifyToken, UserController.getId);
router.put("/user/:id", verifyToken, UserController.update);
router.delete("/user/:id", verifyToken, UserController.remove);

router.post("/login", AuthController.login);

export { router };
