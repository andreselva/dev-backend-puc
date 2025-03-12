import { Dependencies, Injectable } from "@nestjs/common";
import CustomerRepository from "../Repositories/CustomerRepository";

@Injectable()
@Dependencies(CustomerRepository)
export default class ListCustomersUseCase {
    constructor(private readonly customerRepository: CustomerRepository) { }

    list() {
        return this.customerRepository.listAllCustomers();
    }
}