import * as bcrypt from 'bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { MaximumRounds, MinimumRounds } from './consts';

@Injectable()
export class HashService {
  private hashRounds: number;

  constructor(@Inject('hashRounds') rounds = 10) {
    if (rounds < MinimumRounds || rounds > MaximumRounds) {
      throw new Error(
        `Hashing rounds have to be between ${MinimumRounds} - ${MaximumRounds}`,
      );
    }
    this.hashRounds = rounds;
  }

  async hash(value: string) {
    const salt = await bcrypt.genSalt(this.hashRounds);
    return bcrypt.hash(value, salt);
  }

  async compare(value: string, hashed: string) {
    return bcrypt.compare(value, hashed);
  }
}
