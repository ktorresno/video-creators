import HttpException, { HttpCode } from './HttpException';

class WrongAuthenticationTokenException extends HttpException {
  constructor() {
    super(HttpCode.UNAUTHORIZED, 'Wrong authentication token.');
  }
}

export default WrongAuthenticationTokenException;