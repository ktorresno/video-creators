import HttpException, { HttpCode } from "../exceptions/HttpException";

export const controlledException = (errorType: any): HttpException => {
    if (errorType instanceof HttpException) {
        // Controlled Exceptions
        return(errorType);
    } else {
        return new HttpException (
            HttpCode.INTERNAL_SERVER_ERROR,
            "" + errorType
        );
    }
}