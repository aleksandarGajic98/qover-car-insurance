import { getSignInResponseStub } from '__tests__/auth/stub';

export const AuthService = jest.fn().mockReturnValue({
  signIn: jest.fn().mockResolvedValue(getSignInResponseStub()),
});
