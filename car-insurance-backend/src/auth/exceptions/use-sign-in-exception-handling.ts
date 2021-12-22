import { UseExceptionHandling } from 'src/shared';
import { SignInExceptionFilter } from './sign-in-exception-filter';
import { UserNotFoundExceptionFilter } from './user-not-found-exception-filter';
import { InvalidPasswordExceptionFilter } from './invalid-password-exception-filter';

export function UseSignInExceptionHandling() {
  return UseExceptionHandling(
    new SignInExceptionFilter(),
    new UserNotFoundExceptionFilter(),
    new InvalidPasswordExceptionFilter(),
  );
}
