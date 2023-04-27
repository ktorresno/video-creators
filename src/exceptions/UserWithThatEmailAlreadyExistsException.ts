import HttpException, { HttpCode } from './HttpException';

class UserWithThatEmailAlreadyExistsException extends HttpException {
  constructor(email: string) {
    super(HttpCode.BAD_REQUEST, `Creator with email ${email} already exists!`);
  }
}

export default UserWithThatEmailAlreadyExistsException;