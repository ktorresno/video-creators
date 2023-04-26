export enum HttpCode {
  OK = 200,
  SAVED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: HttpCode, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpException;