import { HashService } from './services';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users';
import { Injectable } from '@nestjs/common';
import { getJwtPayloadFromUser } from './util';
import { SignInRequest, SignInSuccessResponse } from './dto';
import {
  BasicJwtExpirationTime,
  KeepUserLoggedInJwtExpirationTime,
} from './consts';
import { InvalidPasswordException, UserNotFoundException } from './exceptions';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly hashService: HashService,
    private readonly usersService: UsersService,
  ) {}

  async signUp(email: string, password: string, keepMeLoggedIn = false) {
    const user = await this.usersService.findUserByEmail(email);
    if (user) throw new Error('Error signing up!');

    const hashedPassword = await this.hashService.hash(password);
    const newUser = await this.usersService.saveUser(email, hashedPassword);
    return {
      access_token: this.jwtService.sign(getJwtPayloadFromUser(newUser), {
        expiresIn: this.getExpirationTime(keepMeLoggedIn),
      }),
    };
  }

  async signIn(userInfo: SignInRequest): Promise<SignInSuccessResponse> {
    const { email, password, keepMeLoggedIn } = userInfo;
    //todo get user from user service
    const user = await this.usersService.findUserByEmail(email);

    if (!user) throw new UserNotFoundException();

    if (!(await this.doPasswordsMatch(password, user.password)))
      throw new InvalidPasswordException();

    const payload = { email: user.email, sub: user.id };

    return {
      token: this.jwtService.sign(payload, {
        expiresIn: this.getExpirationTime(keepMeLoggedIn),
      }),
    };
  }

  private doPasswordsMatch(password: string, hash: string) {
    return this.hashService.compare(password, hash);
  }

  private getExpirationTime(keepUserLoggedIn: boolean) {
    return keepUserLoggedIn
      ? KeepUserLoggedInJwtExpirationTime
      : BasicJwtExpirationTime;
  }
}
