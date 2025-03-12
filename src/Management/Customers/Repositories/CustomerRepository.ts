import { Injectable } from "@nestjs/common";
import Customer from "../Entity/Customer";

@Injectable()
export default class CustomerRepository {

    private static customers: Customer[] = [
        new Customer(1, 'João', '(11) 99999-9999'),
        new Customer(2, 'Maria', '(11) 99999-9999'),
    ];

    listAllCustomers(): Customer[] {
        return [...CustomerRepository.customers];
    }

    getCustomer(id: number) {
        return CustomerRepository.customers.find(customer => customer.getCode() === id);
    }
}