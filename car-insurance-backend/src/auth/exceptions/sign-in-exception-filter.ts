import { Response } from 'express';
import { HttpAdapterHost } from '@nestjs/core';
import { SignInErrorMessage } from '../consts';
import { InjectableHost, ShouldHandleException } from 'src/shared';
import {
  ArgumentsHost,
  ExceptionFilter,
  BadRequestException,
} from '@nestjs/common';

export class SignInExceptionFilter
  implements ExceptionFilter, ShouldHandleException, InjectableHost
{
  host: HttpAdapterHost;

  injectHost(host: HttpAdapterHost): void {
    this.host = host;
  }

  shouldHandle(err: any): boolean {
    return err instanceof BadRequestException;
  }

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const res = exception.getResponse();
    (res as any).message = [SignInErrorMessage];
    host.switchToHttp().getResponse<Response>().status(400).send(res);
  }
}
