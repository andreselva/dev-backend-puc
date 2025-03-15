export default class Response {
    constructor(
        public readonly statusCode: number,
        public readonly message: string = '',
        public readonly body: any
    ) { }

    static success(body: any, message: string = 'Success') {
        return new Response(200, message, body);
    }

    static notFound(body: any, message: string = 'Not Found') {
        return new Response(404, message, body);
    }
}