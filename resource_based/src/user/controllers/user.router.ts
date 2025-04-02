import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();
userRouter

  /** 🔴 BAD DESIGN */

  .get("/getUser", userController.all)
  .post("/createUser", userController.add)
  .delete("/deleteUser", userController.delete)

  /** ✅ GOOD DESIGN  */

  .get("/", userController.all)
  .post("/", userController.add)
  .delete("/:id", userController.delete);

export default userRouter;
