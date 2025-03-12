import { Dependencies, Injectable } from "@nestjs/common";
import CustomerRepository from "../Repositories/CustomerRepository";

@Injectable()
@Dependencies(CustomerRepository)
export default class GetCustomerUseCase {
    constructor(private readonly customerRepository: CustomerRepository) { }

    get(id: number) {
        return this.customerRepository.getCustomer(id);
    }
}