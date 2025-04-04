import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./route";
class App {
  app = express();
  constructor() {
    this.setup();
    this.config();
  }
  setup() {
    route(this.app);
  }
  config() {
    this.app.use(express.json());
    this.app.use(cors());
    dotenv.config();
  }
}
export default new App().app;
