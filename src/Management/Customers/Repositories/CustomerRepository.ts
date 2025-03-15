import { Dependencies, Injectable } from "@nestjs/common";
import Customer from "../Entity/Customer";
import { DatabaseService } from "src/Database/DatabaseService";

@Injectable()
@Dependencies(DatabaseService)
export default class CustomerRepository {
    constructor(private readonly db: DatabaseService) { }

    async getCustomer(code: string) {
        const query = 'SELECT * FROM customers WHERE code = ?';
        const params = [code];
        const customers = await this.db.select<Customer>(query, params);
    
        if (!customers || !Array.isArray(customers) || customers.length === 0) {
            return [];
        }
    
        return customers[0];
    }
    
    async listAllCustomers() {
        const query = 'SELECT * FROM customers';
        const customers = await this.db.select<Customer>(query);

        if (!customers) {
            throw new Error('Erro ao buscar os clientes!');
        }

        return customers;
    }
}