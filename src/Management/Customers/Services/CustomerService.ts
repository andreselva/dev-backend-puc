import { Dependencies, Injectable } from "@nestjs/common";
import ListCustomersUseCase from "../UseCases/ListCustomersUseCase";
import GetCustomerUseCase from "../UseCases/GetCustomerUseCase";

@Injectable()
@Dependencies(ListCustomersUseCase, GetCustomerUseCase)
export default class CustomerService {
    constructor(
        private readonly listCustomersUseCase: ListCustomersUseCase,
        private readonly getCustomerUseCase: GetCustomerUseCase
    ) {}

    async listCustomers() {
        return await this.listCustomersUseCase.list();
    }

    async getCustomer(code: string) {
        return this.getCustomerUseCase.get(code);
    }
}   