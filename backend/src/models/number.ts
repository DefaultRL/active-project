import {
  Entity,
  ObjectIdColumn,
  Column,
  PrimaryColumn,
  BaseEntity,
} from "typeorm";
import { ObjectId } from "mongodb";

@Entity("numbers")
class Number extends BaseEntity {
  constructor(value: number) {
    super();
    this.value = value;
    this.createdAt = new Date().getTime();
  }

  @ObjectIdColumn({ generated: true })
  _id: ObjectId;

  @Column()
  createdAt: number;

  @Column()
  value: number;
}

export default Number;
