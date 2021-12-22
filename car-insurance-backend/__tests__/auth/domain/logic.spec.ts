import { isPasswordValid } from 'src/auth/domain';

describe('testing domain logic for auth', () => {
  it('Should return false for short password', () => {
    const pass = 'pS!2';
    const res = isPasswordValid(pass);
    expect(res).toBe(false);
  });

  it('Should return false for is password does not capital letter', () => {
    const pass = 'passwwww!!';
    const res = isPasswordValid(pass);
    expect(res).toBe(false);
  });

  it('Should return false for is password does not have special character', () => {
    const pass = 'passwW21321';
    const res = isPasswordValid(pass);
    expect(res).toBe(false);
  });
});
