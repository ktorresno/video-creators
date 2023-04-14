import HttpException, { HttpCode } from "./HttpException";

class NotFoundException extends HttpException {
    constructor(model: string, id: string) {
      super(HttpCode.NOT_FOUND, `${model} with id [${id}] not found`);
    }
  }

  export default NotFoundException;