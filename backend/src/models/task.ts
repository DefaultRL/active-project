import {
  Entity,
  ObjectIdColumn,
  Column,
  PrimaryColumn,
  BaseEntity,
} from "typeorm";
import { ObjectId } from "mongodb";

@Entity("tasks")
class Task extends BaseEntity {
  constructor(title: string) {
    super();
    this.title = title;
    this.createdAt = new Date().getTime();
  }

  @ObjectIdColumn({ generated: true })
  _id: ObjectId;

  @Column()
  createdAt: number;

  @Column()
  title: string;
}

export default Task;
