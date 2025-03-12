import { Dependencies, Injectable } from "@nestjs/common";
import ListCustomersUseCase from "../UseCases/ListCustomersUseCase";
import GetCustomerUseCase from "../UseCases/GetCustomerUseCase";

@Injectable()
@Dependencies(ListCustomersUseCase, GetCustomerUseCase)
export default class CustomerService {
    constructor(
        private readonly listCustomersUseCase: ListCustomersUseCase,
        private readonly getCustomerUseCase: GetCustomerUseCase
    ) { }

    listCustomers() {
        return this.listCustomersUseCase.list();
    }

    getCustomer(id: number) {
        return this.getCustomerUseCase.get(id);
    }
}