import { Express } from "express";
import userRouter from "../user/controllers/user.router";
const route = (app: Express) => {
  app.use("/users", userRouter);
};

export default route;
