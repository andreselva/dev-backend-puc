import { Controller, Dependencies, Get, Param } from "@nestjs/common";
import CustomerService from "../Services/CustomerService";
import Response from "src/Response/Response";

@Dependencies(CustomerService)
@Controller('customers')
export default class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    listCustomers() {
        return this.customerService.listCustomers();
    }

    @Get('/customer/:id')
    async getCustomer(@Param('id') code: string) {
        const customer = await this.customerService.getCustomer(code);
        
        if (customer) {
            return Response.success(customer);
        }
    }

}