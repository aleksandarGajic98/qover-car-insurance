import { IsEmail } from 'class-validator';
import { IsPassword } from './validators';
import { InvalidEmailMessage, InvalidPasswordMessage } from 'src/auth/consts';

export class SignInRequest {
  @IsEmail({ message: InvalidEmailMessage })
  email: string;
  @IsPassword({ message: InvalidPasswordMessage })
  password: string;
  keepMeLoggedIn: boolean;
}
