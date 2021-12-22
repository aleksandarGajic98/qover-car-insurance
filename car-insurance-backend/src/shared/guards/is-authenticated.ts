import { AuthGuard } from './auth.guard';
import { UseGuards } from '@nestjs/common';

export function IsAuthenticated() {
  return UseGuards(AuthGuard);
}
