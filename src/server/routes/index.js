import { Router } from "express";
import UserControler from "../controller/UserController.js";

const router = Router();

router.post("/user", UserControler.post);
router.get("/user", UserControler.getAll);
router.get("/user/:id", UserControler.getId);
router.put("/user/:id", UserControler.update);
router.delete("/user/:id", UserControler.remove);

export { router };
