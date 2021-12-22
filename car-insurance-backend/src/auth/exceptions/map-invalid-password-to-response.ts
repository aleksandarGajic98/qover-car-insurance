import { InvalidPasswordException } from '.';
import { SignInErrorMessage } from '../consts';

export const mapInvalidPasswordToResponse = (
  exc: InvalidPasswordException,
) => ({
  timestamp: exc.timestamp,
  statusCode: exc.getStatus(),
  message: [SignInErrorMessage],
});
