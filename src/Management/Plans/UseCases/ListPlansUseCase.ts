import { Dependencies, Injectable } from "@nestjs/common";
import PlanRepository from "../Repositories/PlanRepository";

@Injectable()
@Dependencies(PlanRepository)
export default class ListPlansUseCase {

  constructor(private readonly planRepository: PlanRepository) { }

  async list() {
    return this.planRepository.getPlans();
  }
}