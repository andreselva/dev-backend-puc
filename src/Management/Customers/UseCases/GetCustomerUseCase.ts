import { Dependencies, Injectable } from "@nestjs/common";
import CustomerRepository from "../Repositories/CustomerRepository";

@Injectable()
@Dependencies(CustomerRepository)
export default class GetCustomerUseCase {
    constructor(private readonly customerRepository: CustomerRepository) { }

    async get(code: string) {
        return await this.customerRepository.getCustomer(code);
    }
}