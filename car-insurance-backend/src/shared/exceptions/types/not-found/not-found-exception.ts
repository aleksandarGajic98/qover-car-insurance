import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  private _timestamp: string;
  constructor(msg?: string) {
    super(msg ?? 'Not found', HttpStatus.BAD_REQUEST);
    this._timestamp = new Date().toISOString();
  }

  public get timestamp() {
    return this._timestamp;
  }
}
