import { User } from 'src/users/db';
import { getUserStub } from './stubs';
import { Test } from '@nestjs/testing';
import { UsersService } from 'src/users';
import { MockModel } from '__tests__/util';
import { getModelToken } from '@nestjs/mongoose';

class MockUserModel extends MockModel<User>(getUserStub()) {}

describe('UsersService', () => {
  let mockUserModel: MockUserModel;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: MockUserModel,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    mockUserModel = module.get<MockUserModel>(getModelToken(User.name));
    jest.clearAllMocks();
  });

  it('should call findByEmail with the right value', async () => {
    const user = getUserStub();
    const email = 'mockEmail@gmail.com';

    const spy = jest.spyOn(mockUserModel, 'findOne');

    const resUser = await usersService.findUserByEmail(email);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({ email });
    expect(resUser).toEqual(user);
  });

  it('should save user', async () => {
    const user = getUserStub();
    const { email, password } = user;
    const constructorSpy = jest.spyOn(
      MockUserModel.prototype,
      'constructorSpy',
    );
    const saveMethodSpy = jest.spyOn(MockUserModel.prototype, 'save');
    const resUser = await usersService.saveUser(email, password);

    expect(constructorSpy).toHaveBeenCalled();
    expect(constructorSpy).toHaveBeenCalledWith({ email, password });

    expect(saveMethodSpy).toHaveBeenCalled();

    expect(resUser).toEqual(user);
  });
});
