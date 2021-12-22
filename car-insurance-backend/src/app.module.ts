import { AuthModule } from './auth';
import { CarsModule } from './cars';
import { MongoDbUrl } from './consts';
import { UsersModule } from './users';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceNotFoundExceptionFilter } from './resource-not-found-filter';

@Module({
  imports: [
    AuthModule,
    CarsModule,
    UsersModule,
    MongooseModule.forRoot(MongoDbUrl),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ResourceNotFoundExceptionFilter,
    },
  ],
})
export class AppModule {}
