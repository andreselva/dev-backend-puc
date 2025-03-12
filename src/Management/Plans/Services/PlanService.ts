import { Dependencies, Injectable } from "@nestjs/common";
import ListPlansUseCase from "../UseCases/ListPlansUseCase";
import CreatePlanUseCase from "../UseCases/CreatePlanUseCase";
import CreatePlanDTO from "../DTO/CreatePlanDTO";
import GetPlanUseCase from "../UseCases/GetPlanUseCase";
import UpdatePricePlanUseCase from "../UseCases/UpdatePricePlanUseCase";
import UpdatePricePlanDTO from "../DTO/UpdatePricePlanDTO";

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

    listPlans() {
        return this.listPlansUseCase.list();
    }

    getPlan(id: number) {
        return this.getPlanUseCase.get(id);
    }

    updatePricePlan(dto: UpdatePricePlanDTO) {
        return this.updatePricePlanUseCase.update(dto);
    }

}