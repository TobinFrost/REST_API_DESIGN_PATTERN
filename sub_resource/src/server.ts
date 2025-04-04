import { createServer } from "http";
import app from "./app";

const PORT = process.env.PORT || 9292;
const server = createServer(app).listen(PORT, () => {
  console.log(`Application up and running at http://localhost:${PORT}`);
});

export default server;
