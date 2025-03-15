import { Dependencies, Injectable } from "@nestjs/common";
import CustomerRepository from "../Repositories/CustomerRepository";

@Injectable()
@Dependencies(CustomerRepository)
export default class ListCustomersUseCase {
    constructor(private readonly customerRepository: CustomerRepository) {}

    async list() {
        return await this.customerRepository.listAllCustomers();
    }
}