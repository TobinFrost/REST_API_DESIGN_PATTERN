import express from "express";
import route from "./route";
import cors from "cors";
import dotenv from "dotenv";
class App {
  app = express();
  constructor() {
    this.config();
    this.setup();
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
