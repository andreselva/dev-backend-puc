export default class Customer {
    private readonly code: number;
    private readonly name: string;
    private readonly email: string;

    constructor(code: number, name: string, email: string,) {
        this.code = code;
        this.name = name;
        this.email = email;
    }

    getCode() {
        return this.code;
    }

    getName() {
        return this.name;
    }


    getEmail() {
        return this.email;
    }
}