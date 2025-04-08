import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter
  // ❌ Mauvaise pratique
  .get("/:userId/desactivateAccount", userController.desactivateAccountBadWay)
  // ✅ Bonne pratique
  .get("/:userId/desactivation", userController.desactivateAccountGoodWay);

export default userRouter;
