import { Dependencies, Injectable } from "@nestjs/common";
import CustomerRepository from "../Repositories/CustomerRepository";

@Injectable()
@Dependencies(CustomerRepository)
export default class GetCustomerUseCase {
    constructor(private readonly customerRepository: CustomerRepository) { }

    get(code: string) {
        return this.customerRepository.getCustomer(code);
    }
}