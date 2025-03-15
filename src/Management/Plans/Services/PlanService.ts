import { Dependencies, Injectable } from "@nestjs/common";
import ListPlansUseCase from "../UseCases/ListPlansUseCase";
import CreatePlanUseCase from "../UseCases/CreatePlanUseCase";
import CreatePlanDTO from "../DTO/CreatePlanDTO";
import GetPlanUseCase from "../UseCases/GetPlanUseCase";
import UpdatePricePlanUseCase from "../UseCases/UpdatePricePlanUseCase";
import UpdatePricePlanDTO from "../DTO/UpdatePricePlanDTO";
import Response from "src/Response/Response";

@Injectable()
@Dependencies(CreatePlanUseCase, ListPlansUseCase, GetPlanUseCase, UpdatePricePlanUseCase)
export default class PlanService {
    constructor(
        private readonly createPlanUseCase: CreatePlanUseCase,
        private readonly listPlansUseCase: ListPlansUseCase,
        private readonly getPlanUseCase: GetPlanUseCase,
        private readonly updatePricePlanUseCase: UpdatePricePlanUseCase
    ) { }

    createPlan(dto: CreatePlanDTO) {
        return this.createPlanUseCase.create(dto)
    }

    async listPlans() {
        const plans = await this.listPlansUseCase.list();
        
        if (plans && Array.isArray(plans) && plans.length > 0) {
            return Response.success(plans);
        }

        return Response.notFound(plans, "Nenhum plano encontrado!");
    }

    getPlan(id: number) {
        return this.getPlanUseCase.get(id);
    }

    updatePricePlan(dto: UpdatePricePlanDTO) {
        return this.updatePricePlanUseCase.update(dto);
    }

}