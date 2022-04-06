import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CobaDocument = Coba & Document;

@Schema()
export class Coba {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CobaSchema = SchemaFactory.createForClass(Coba);

// import * as mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   breed: String,
// });