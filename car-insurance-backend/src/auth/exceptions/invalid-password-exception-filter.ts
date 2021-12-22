import { Response } from 'express';
import { InvalidPasswordException } from './types';
import { ShouldHandleException } from 'src/shared';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { mapInvalidPasswordToResponse } from './map-invalid-password-to-response';

export class InvalidPasswordExceptionFilter
  implements ExceptionFilter, ShouldHandleException
{
  shouldHandle(err: any): boolean {
    return err instanceof InvalidPasswordException;
  }

  catch(exception: any, host: ArgumentsHost) {
    host
      .switchToHttp()
      .getResponse<Response>()
      .status(400)
      .send(
        mapInvalidPasswordToResponse(exception as InvalidPasswordException),
      );
  }
}
