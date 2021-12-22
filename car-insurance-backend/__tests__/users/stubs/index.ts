import { User } from 'src/users/db';

export const getUserStub = (): User => ({
  ver: 1,
  email: 'Test email',
  password: 'Test password',
});
