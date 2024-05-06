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
import {
  post,
  update,
  remove,
  getAll,
  getId,
} from "../controller/UserController.js";

const router = Router();

router.post("/user", post);
router.get("/user", getAll);
router.get("/user/:id", getId);
router.put("/user/:id", update);
router.delete("/user/:id", remove);

export { router };
