import { Injectable } from "@nestjs/common";
import PlanRepository from "../Repositories/PlanRepository";

@Injectable()
export default class GetPlanUseCase {
    constructor(private readonly planRepository: PlanRepository) {}

    get(id: number) {
        return this.planRepository.getPlanById(id);
    }
}