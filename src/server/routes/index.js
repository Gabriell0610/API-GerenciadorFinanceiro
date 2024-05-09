import { Router } from "express";
import UserControler from "../controller/UserController.js";
import { login } from "../controller/AuthController.js";

const router = Router();

router.post("/user", UserControler.post);
router.get("/user", UserControler.getAll);
router.get("/user/:id", UserControler.getId);
router.put("/user/:id", UserControler.update);
router.delete("/user/:id", UserControler.remove);

router.post("/login", login);

export { router };
