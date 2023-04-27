import HttpException, { HttpCode } from './HttpException';

class NotAuthorizedException extends HttpException {
  constructor() {
    super(HttpCode.FORBIDDEN, "You're not authorized.");
  }
}

export default NotAuthorizedException;
