import { Test } from '@nestjs/testing';
import { getSignInRequestStub } from './stub';
import { AuthService } from 'src/auth/auth.service';
import { AuthController } from 'src/auth/auth.controller';

jest.mock('src/auth/auth.service');

describe('AuthController', () => {
  let authService: AuthService;
  let authController: AuthController;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthService],
      controllers: [AuthController],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    authController = module.get<AuthController>(AuthController);
    jest.clearAllMocks();
  });

  describe('sign in method', () => {
    it('Should return sign in success response', async () => {
      const res = await authController.signIn(getSignInRequestStub());

      expect(res.token).toBeDefined();
    });

    it('Should call sign in method of authService with correct data', async () => {
      const req = getSignInRequestStub();

      await authController.signIn(req);

      expect(authService.signIn).toHaveBeenCalled();
      expect(authService.signIn).toHaveBeenCalledWith(req);
    });
  });
});
