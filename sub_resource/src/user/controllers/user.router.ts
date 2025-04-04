import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter
  /** 🔴 BAD DESIGN */
  .get("/orders", userController.getUserOrderBad)

  /** ✅ GOOD DESIGN  */
  .get("/:userId/orders", userController.getUserOrders)
  .get("/:userId/orders/:orderId", userController.getUserOrder);

export default userRouter;
