import { Injectable } from "@nestjs/common";
import Plan from "../Entity/Plan";

@Injectable()
export default class PlanRepository {

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

    getPlans(): Plan[] {
        return [...PlanRepository.plans];
    }

    getPlan(id: number) {
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