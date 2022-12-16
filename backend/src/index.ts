import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import taskController from "./controllers/taskController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

taskController(app);

// app.use(ExceptionsHandler);

app.listen(port, () => {
  console.log(`⚡[server]: Server is running at https://localhost:${port}`);
});
