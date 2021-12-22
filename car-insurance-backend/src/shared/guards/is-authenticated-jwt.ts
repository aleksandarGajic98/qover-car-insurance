import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export function IsAuthenticatedJwt() {
  return UseGuards(AuthGuard('jwt'));
}
