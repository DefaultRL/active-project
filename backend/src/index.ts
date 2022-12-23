import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import numberController from "./controllers/numberController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

numberController(app);

// app.use(ExceptionsHandler);

app.listen(port, () => {
  console.log(`⚡[server]: Server is running at https://localhost:${port}`);
});
