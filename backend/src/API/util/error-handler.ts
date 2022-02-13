import {
    HttpException,
    InternalServerErrorException,
    Logger,
} from '@nestjs/common';

export function errorHandler(error): HttpException {
    Logger.log(error);
    return error instanceof HttpException
        ? error
        : new InternalServerErrorException();
}
