import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './db/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async saveUser(email: string, password: string) {
    const newUser = await new this.userModel({
      email,
      password,
    }).save();

    return newUser;
  }

  findUserByEmail(email: string) {
    return this.userModel
      .findOne({
        email: email,
      })
      .exec();
  }
}
