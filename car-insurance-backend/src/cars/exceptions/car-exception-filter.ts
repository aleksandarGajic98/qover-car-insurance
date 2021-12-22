import { Response } from 'express';
import { CarNotFoundException } from '.';
import { mapCarNotFoundToResponse } from './map';
import { ShouldHandleException } from 'src/shared';
import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';

@Catch()
export class CarExceptionFilter
  implements ExceptionFilter, ShouldHandleException
{
  shouldHandle(err: any): boolean {
    return err instanceof CarNotFoundException;
  }
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    ctx
      .getResponse<Response>()
      .status(404)
      .send(mapCarNotFoundToResponse(exception as CarNotFoundException));
  }
}
