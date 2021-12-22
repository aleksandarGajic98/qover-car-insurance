import { UseExceptionHandling } from 'src/shared';
import { CarExceptionFilter } from './car-exception-filter';

export function UseCarExceptionHandling() {
  return UseExceptionHandling(new CarExceptionFilter());
}
