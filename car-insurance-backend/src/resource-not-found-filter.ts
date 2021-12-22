import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(NotFoundException)
export class ResourceNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    host.switchToHttp().getResponse<Response>().status(404).send({
      message: 'Resource not found',
    });
  }
}
