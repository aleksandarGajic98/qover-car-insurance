import { SignInRequest, SignInSuccessResponse } from 'src/auth/dto';

export const getSignInRequestStub = (
  values?: Partial<SignInRequest>,
): SignInRequest => ({
  email: 'test email',
  keepMeLoggedIn: true,
  password: 'test password',
  ...values,
});

export const getSignInResponseStub = (): SignInSuccessResponse => ({
  token: 'fake token',
});

export const getHashedPassword = () =>
  '$2a$10$2Ij.LpgtCNFGL8/LG0L.m..oewCZPUwvtuTe5xjdWQ0jt26F7Duuy';
