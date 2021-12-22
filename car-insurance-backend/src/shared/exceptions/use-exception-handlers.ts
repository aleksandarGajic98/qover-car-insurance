import { HttpAdapterHost } from '@nestjs/core';
import { InjectableHost } from './injectable-host';
import { ShouldHandleException } from './should-handle-exception';
import {
  Catch,
  HttpStatus,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  BadRequestException,
} from '@nestjs/common';

export function UseExceptionHandlers<
  T extends ExceptionFilter & ShouldHandleException,
>(...handlers: T[]): new (arg: HttpAdapterHost) => ExceptionFilter {
  @Catch()
  class ExceptionHandler implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: any, host: ArgumentsHost) {
      for (const handler of handlers) {
        if (handler.shouldHandle(exception)) {
          injectHttpAdapterHostIfNeeded(
            handler as any as InjectableHost,
            this.httpAdapterHost,
          );
          return handler.catch(exception, host);
        }
      }

      const { httpAdapter } = this.httpAdapterHost;
      const ctx = host.switchToHttp();

      if (exception instanceof BadRequestException) {
        httpAdapter.reply(ctx.getResponse(), exception.getResponse(), 400);
        return;
      }

      const httpStatus =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      const responseBody = {
        statusCode: httpStatus,
        timestamp: new Date().toISOString(),
        path: httpAdapter.getRequestUrl(ctx.getRequest()),
      };

      httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
  }
  return ExceptionHandler;
}

function injectHttpAdapterHostIfNeeded<T extends InjectableHost>(
  handler: T,
  host: HttpAdapterHost,
) {
  if (typeof handler.injectHost !== 'undefined') {
    (handler as any).injectHost(host);
  }
}
