import { Test } from '@nestjs/testing';
import { UsersService } from 'src/users';
import { SignInRequest } from 'src/auth/dto';
import { HashService } from 'src/auth/services';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getHashedPassword, getSignInRequestStub } from './stub';
import { BasicJwtExpirationTime, JwtSecret } from 'src/auth/consts';
import {
  InvalidPasswordException,
  UserNotFoundException,
} from 'src/auth/exceptions';

jest.mock('src/users/users.service');

describe('AuthService', () => {
  let jwtService: JwtService;
  let authService: AuthService;
  let usersService: UsersService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: JwtSecret,
          signOptions: { expiresIn: BasicJwtExpirationTime },
        }),
      ],
      providers: [
        HashService,
        AuthService,
        UsersService,
        { provide: 'hashRounds', useValue: 10 },
      ],
    }).compile();

    jwtService = module.get<JwtService>(JwtService);
    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  describe('sign in method', () => {
    it('Should throw error if no user is found with specified email', () => {
      usersService.findUserByEmail = jest.fn().mockResolvedValue(null);
      const req: SignInRequest = getSignInRequestStub();

      expect(authService.signIn(req)).rejects.toThrow(UserNotFoundException);
    });

    it('Should throw error if user forwarded wrong password', () => {
      const req: SignInRequest = getSignInRequestStub({
        password: 'Wrong password',
      });

      expect(authService.signIn(req)).rejects.toThrow(InvalidPasswordException);
    });

    it('Should respond with jwt token for correct password', async () => {
      usersService.findUserByEmail = jest.fn().mockResolvedValue({
        password: getHashedPassword(),
      });
      const req: SignInRequest = getSignInRequestStub({
        password: 'Test password',
      });

      const res = await authService.signIn(req);

      expect(res.token).toBeDefined();
    });

    it('Should respond with jwt token with longer expiration date', async () => {
      usersService.findUserByEmail = jest.fn().mockResolvedValue({
        password: getHashedPassword(),
      });
      const req: SignInRequest = getSignInRequestStub({
        keepMeLoggedIn: true,
        password: 'Test password',
      });
      const miliSecondToSecond = 1000;
      const timestamp =
        new Date().getTime() + BasicJwtExpirationTime * miliSecondToSecond;

      const res = await authService.signIn(req);
      const jwt = jwtService.decode(res.token);
      const jwtExpTimeInMiliseconds = (jwt as any).exp * miliSecondToSecond;

      expect((jwt as any).exp).toBeDefined();
      expect(jwtExpTimeInMiliseconds).toBeGreaterThan(timestamp);
    });
  });
});
