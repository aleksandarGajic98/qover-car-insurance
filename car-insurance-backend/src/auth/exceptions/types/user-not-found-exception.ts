import { NotFoundException } from 'src/shared';
import { UserNotFoundExceptionMessage } from 'src/auth/consts';

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super(UserNotFoundExceptionMessage);
  }
}
