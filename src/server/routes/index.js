// const {
//   post,
//   get,
//   getId,
//   update,
//   remove,
// } = require("../controller/UserController");

// exports.userRoutes = (app) => {
//   app.post("/user", post);
//   app.get("/user", get);
//   app.get("/user/:id", getId);
//   app.put("/user/:id", update);
//   app.delete("/user/:id", remove);
// };

import { Router } from "express";
import UserControler from "../controller/UserController.js"

const router = Router();

router.post("/user", UserControler.post);
router.get("/user", UserControler.getAll);
router.get("/user/:id", UserControler.getId);
router.put("/user/:id",UserControler.update);
router.delete("/user/:id",UserControler.remove);

export { router };
