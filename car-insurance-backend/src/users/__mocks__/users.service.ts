import { getUserStub } from '__tests__/users/stubs';

export const UsersService = jest.fn().mockReturnValue({
  findUserByEmail: jest.fn().mockResolvedValue(getUserStub()),
});
