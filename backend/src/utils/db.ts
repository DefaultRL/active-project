import { DataSource } from "typeorm";
import Task from "../models/task";

class Db {
  private connections: { [url: string]: DataSource } = {};

  constructor() {
    this.getAppDb();
  }

  async getAppDb(): Promise<DataSource> {
    return this.getDb("localhost", "app", [Task]);
  }

  async getDb(url: string, database: string, entities): Promise<DataSource> {
    if (!this.connections[url]) {
      const AppDataSource = new DataSource({
        type: "mongodb",
        host: url,
        port: 27017,
        database: database,
        entities: entities,
        synchronize: true,
        logging: false,
      });
      this.connections[url] = await AppDataSource.initialize();
    }
    return this.connections[url];
  }
}

export default new Db();
