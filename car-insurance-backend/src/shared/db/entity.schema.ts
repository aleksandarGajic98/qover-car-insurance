import { Prop } from '@nestjs/mongoose';

export abstract class Entity {
  @Prop({
    type: Number,
  })
  readonly ver: number;
}
