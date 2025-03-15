import { Controller, Dependencies, Get, Param } from "@nestjs/common";
import CustomerService from "../Services/CustomerService";
import Response from "src/Response/Response";

@Dependencies(CustomerService)
@Controller('customers')
export default class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    async listCustomers() {
        const customers = await this.customerService.listCustomers()        
        if (customers && Array.isArray(customers) && customers.length > 0) {
            return Response.success(customers, "Success");
        }

        return Response.notFound(customers,  "Nenhum cliente encontrado!");
    }

    @Get('/customer/:id')
    async getCustomer(@Param('id') code: string) {
        const customer = await this.customerService.getCustomer(code);
        
        if (customer && Array.isArray(customer) && customer.length > 0) {
            return Response.success(customer);
        }

        return Response.notFound(customer, "Cliente não encontrado!");
    }

}