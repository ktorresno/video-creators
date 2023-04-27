import HttpException, { HttpCode } from './HttpException';

class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(HttpCode.UNAUTHORIZED, 'Authentication token missing.');
  }
}

export default AuthenticationTokenMissingException;