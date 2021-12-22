import { Response } from 'express';
import { UserNotFoundException } from './types';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { mapNotFoundToResponse, ShouldHandleException } from 'src/shared';

export class UserNotFoundExceptionFilter
  implements ExceptionFilter, ShouldHandleException
{
  shouldHandle(err: any): boolean {
    return err instanceof UserNotFoundException;
  }

  catch(exception: UserNotFoundException, host: ArgumentsHost) {
    host
      .switchToHttp()
      .getResponse<Response>()
      .status(404)
      .send(mapNotFoundToResponse(exception));
  }
}
