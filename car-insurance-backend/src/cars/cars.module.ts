import { Car, CarSchema } from './db';
import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/shared/';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
    ]),
  ],
  controllers: [CarsController],
  providers: [CarsService, JwtStrategy],
})
export class CarsModule {}
