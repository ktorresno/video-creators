import HttpException, { HttpCode } from './HttpException';

class UserWithThatEmailAlreadyExistsException extends HttpException {
  constructor(email: string) {
    super(HttpCode.BAD_REQUEST, `User with email ${email} already exists`);
  }
}

export default UserWithThatEmailAlreadyExistsException;