import express from "express";
import Task from "../models/task";
import database from "../utils/db";

export default (app: express.Express) => {
  app.put(
    "/app/task",
    async (
      req: {
        body: { title: string };
      },
      res
    ) => {
      const db = await database.getAppDb();
      const task = new Task(req.body.title);
      await db.manager.save(task);
      res.send(task);
    }
  );
};
