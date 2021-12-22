import { HttpException } from '@nestjs/common';
import { UserNotFoundExceptionMessage } from 'src/auth/consts';

export class InvalidPasswordException extends HttpException {
  private _timestamp;
  constructor() {
    super(UserNotFoundExceptionMessage, 400);
    this._timestamp = new Date().getTime();
  }

  get timestamp() {
    return this._timestamp;
  }
}
