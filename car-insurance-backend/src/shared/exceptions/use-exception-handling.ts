import { ExceptionFilter, UseFilters } from '@nestjs/common';
import { UseExceptionHandlers } from './use-exception-handlers';
import { ShouldHandleException } from './should-handle-exception';

export function UseExceptionHandling<
  T extends ExceptionFilter & ShouldHandleException,
>(...handlers: T[]) {
  return UseFilters(UseExceptionHandlers(...handlers));
}
