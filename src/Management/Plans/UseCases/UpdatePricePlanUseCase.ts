import { Dependencies, Injectable } from "@nestjs/common";
import UpdatePricePlanDTO from "../DTO/UpdatePricePlanDTO";
import PlanRepository from "../Repositories/PlanRepository";

@Injectable()
@Dependencies(PlanRepository)
export default class UpdatePricePlanUseCase {
    constructor(private readonly planRepository: PlanRepository) { }

    update(dto: UpdatePricePlanDTO) {
        return this.planRepository.updatePricePlan(dto.code, dto.price);
    }
}