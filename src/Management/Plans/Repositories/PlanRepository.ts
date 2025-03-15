import { Dependencies, Injectable } from "@nestjs/common";
import Plan from "../Entity/Plan";
import { DatabaseService } from "src/Database/DatabaseService";

@Injectable()
@Dependencies(DatabaseService)
export default class PlanRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    private static plans: Plan[] = [
        new Plan(1, 'Plano 1', 100, new Date(), 'Descrição do plano 1', new Date(0)),
        new Plan(2, 'Plano 2', 200, new Date(), 'Descrição do plano 2', new Date(0)),
        new Plan(3, 'Plano 3', 300, new Date(), 'Descrição do plano 3', new Date(0)),
        new Plan(4, 'Plano 4', 400, new Date(), 'Descrição do plano 4', new Date(0)),
    ];

    createPlan(plan: Plan): Plan {
        PlanRepository.plans.push(plan);
        return plan;
    }

    async getPlans(): Promise<Plan[]> {
        const query = "SELECT * FROM plans;";
        const plans = await this.databaseService.select(query);

        if (!plans) {
            return [];
        }

        return plans as Plan[];
    }

    getPlanById(id: number) {
        return PlanRepository.plans.find(Plan => Plan.getCode() === id);
    }

    updatePricePlan(id: number, price: number) {
        const plan = PlanRepository.plans.find(Plan => Plan.getCode() === id);
        if (plan) {
            plan.setPrice(price);
            return plan;
        }
    }
}