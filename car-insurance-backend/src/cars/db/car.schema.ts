import { Document } from 'mongoose';
import { Entity } from 'src/shared';
import { CarsTable } from '../consts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarDocument = Car & Document;

@Schema({ collection: CarsTable, id: false })
export class Car extends Entity {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  name: string;
  @Prop({ type: Number, required: true })
  globalPrice: number;
  @Prop({ type: Number, required: true })
  universalPercentage: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
