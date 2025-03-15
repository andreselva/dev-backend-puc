import { Dependencies, Injectable } from "@nestjs/common";
import Plan from "../Entity/Plan";
import { DatabaseService } from "src/Database/DatabaseService";

@Injectable()
@Dependencies(DatabaseService)
export default class PlanRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    async getPlans(): Promise<Plan[]> {
        const query = "SELECT * FROM plans;";
        const plans = await this.databaseService.select<Plan>(query);

        if (!plans) {
            return [];
        }

        return plans;
    }

    async getPlanById(id: number): Promise<Plan[]> {
        const query = "SELECT * FROM plans WHERE code = ?";
        const params = [id];
        const plan = await this.databaseService.select<Plan>(query, params);

        if (!plan) {
            return [];
        }

        return plan;
    }

    async updatePricePlan(id: number, price: string): Promise<Plan[]> {
        const query = "UPDATE plans SET monthlyCost = ? WHERE code = ?";
        const params = [price, id];
        await this.databaseService.execute(query, params);

        const plan = await this.getPlanById(id);
        return plan;
    }
}