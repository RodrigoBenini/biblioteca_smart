import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema({ collection: 'admin' })
export class Admin {
  @Prop()
  user: string;

  @Prop()
  password: string;


}

export const AdminSchema = SchemaFactory.createForClass(Admin);