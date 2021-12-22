import { Document } from 'mongoose';
import { Entity } from 'src/shared';
import { UsersTable } from '../consts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({ collection: UsersTable })
export class User extends Entity {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  email: string;
  @Prop({
    type: String,
    required: true,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
