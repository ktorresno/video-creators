import HttpException, { HttpCode } from "./HttpException";

class UniqueConstrainException extends HttpException {
  constructor(model: string, field: string) {
    super(HttpCode.FORBIDDEN, `The [${field}] you are trying to save into ${model} it's already registered.`);
  }
}

export default UniqueConstrainException;