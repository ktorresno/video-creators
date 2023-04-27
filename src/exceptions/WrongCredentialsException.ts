import HttpException, { HttpCode } from './HttpException';

class WrongCredentialsException extends HttpException {
  constructor() {
    super(HttpCode.UNAUTHORIZED, 'Wrong credentials provided.');
  }
}

export default WrongCredentialsException;
