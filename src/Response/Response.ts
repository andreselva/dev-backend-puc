import { BadRequestException, NotFoundException } from "@nestjs/common";

export default class Response {
    constructor(
        public readonly statusCode: number,
        public readonly message: string = '',
        public readonly body: any
    ) { }

    static success(body: any, message: string = 'Success') {
        return new Response(200, message, body);
    }

    static created(body: any, message: string = 'Success') {
        return new Response(201, message, body);
    }

    static notFound(message: string = 'Not Found') {
        return new NotFoundException(message);
    }

    static badRequest(message: string = 'Bad Request') {
        throw new BadRequestException(message);
    }

}