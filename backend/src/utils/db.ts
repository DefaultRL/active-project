import { DataSource } from "typeorm";
import Number from "../models/number";

class Db {
  private connections: { [url: string]: DataSource } = {};

  constructor() {
    this.getAppDb();
  }

  async getAppDb(): Promise<DataSource> {
    return this.getDb("localhost", "number-api", [Number]);
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
