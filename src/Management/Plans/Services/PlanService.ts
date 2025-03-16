import { Dependencies, Injectable } from "@nestjs/common";
import ListPlansUseCase from "../UseCases/ListPlansUseCase";
import GetPlanUseCase from "../UseCases/GetPlanUseCase";
import UpdatePricePlanUseCase from "../UseCases/UpdatePricePlanUseCase";
import UpdatePricePlanDTO from "../DTO/UpdatePricePlanDTO";
import Response from "src/Response/Response";

@Injectable()
@Dependencies(ListPlansUseCase, GetPlanUseCase, UpdatePricePlanUseCase)
export default class PlanService {
    constructor(
        private readonly listPlansUseCase: ListPlansUseCase,
        private readonly getPlanUseCase: GetPlanUseCase,
        private readonly updatePricePlanUseCase: UpdatePricePlanUseCase
    ) { }

    async listPlans() {
        const plans = await this.listPlansUseCase.list();
        
        if (plans && Array.isArray(plans) && plans.length > 0) {
            return Response.success(plans);
        }

        return Response.notFound("Nenhum plano encontrado!");
    }

    async getPlan(id: number) {
        return this.getPlanUseCase.get(id);
    }

    async updatePricePlan(dto: UpdatePricePlanDTO) {
        return await this.updatePricePlanUseCase.update(dto);
    }

}