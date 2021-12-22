import { AuthRoute } from './consts';
import { SignInRequest } from './dto';
import { IsAuthenticatedJwt, UseValidation } from 'src/shared';
import { AuthService } from './auth.service';
import { Body, Post, Controller, Get } from '@nestjs/common';
import { UseSignInExceptionHandling } from './exceptions';

@Controller(AuthRoute)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() req: { email: string; password: string }) {
    return this.authService.signUp(req.email, req.password);
  }

  @Post()
  @UseValidation(true)
  @UseSignInExceptionHandling()
  signIn(@Body() req: SignInRequest) {
    return this.authService.signIn(req);
  }

  @Get('/validate')
  @IsAuthenticatedJwt()
  validate() {
    return { isValid: true };
  }
}
