import { ObjectID } from "bson";
import express from "express";
import Number from "../models/number";
import database from "../utils/db";

export default (app: express.Express) => {
    app.put(
        "/app/number",
        async (
            req: {
                body: { value: number };
            },
            res
        ) => {
            const db = await database.getAppDb();
            const task = new Number(req.body.value);
            await db.manager.save(task);
            res.send(task);
        }
    );

    app.get(
        "/app/number",
        async (
            req: null,
            res
        ) => {
            const db = await database.getAppDb();
            const tasks: Number[] = await db.getMongoRepository(Number).find({});
            res.send(tasks);
        }
    )

    app.delete(
        "/app/number/:_id",
        async (
            req: {
                params: { _id: string };
            },
            res
        ) => {
            console.log(req.params)
            const db = await database.getAppDb();
            await db.manager.getRepository(Number).delete(req.params._id);
            res.send({});
        }
    )
};
