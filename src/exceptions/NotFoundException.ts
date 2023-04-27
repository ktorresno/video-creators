import HttpException, { HttpCode } from "./HttpException";

class NotFoundException extends HttpException {
  constructor(model: string, id: string) {
    super(HttpCode.NOT_FOUND, `Missing ${model} with id [${id}]`);
  }
}

export default NotFoundException;