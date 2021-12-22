import { UsePipes, ValidationPipe } from '@nestjs/common';

export function UseValidation(transform = false) {
  return UsePipes(new ValidationPipe({ transform }));
}
