import { Controller, Dependencies, Get } from "@nestjs/common";
import CustomerService from "../Services/CustomerService";

@Dependencies(CustomerService)
@Controller('customers')
export default class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    listCustomers() {
        return this.customerService.listCustomers();
    }
}