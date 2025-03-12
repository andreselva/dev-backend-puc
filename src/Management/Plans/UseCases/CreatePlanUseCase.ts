import { Dependencies, Injectable } from "@nestjs/common";
import CreatePlanDTO from "../DTO/CreatePlanDTO";
import Plan from "../Entity/Plan";
import PlanRepository from "../Repositories/PlanRepository";

@Injectable()
@Dependencies(PlanRepository)
export default class CreatePlanUseCase {
    constructor(private readonly planRepository: PlanRepository) { }

    create(dto: CreatePlanDTO) {
        this.validatePlan(dto);
        const plan = new Plan(dto.code, dto.name, dto.monthlyCost, dto.date, dto.description, dto.dateLastPayment);

        try {
            const resultPlan = this.planRepository.createPlan(plan);

            if (!resultPlan) {
                throw new Error('Erro ao criar plano');
            }

            return resultPlan;
        } catch (error) {
            console.error('Erro ao criar plano:', error);
            throw new Error('Erro ao criar plano');
        }
    }

    private validatePlan(dto: CreatePlanDTO) {
        if (!dto.name) {
            throw new Error('Name cannot be empty!');
        }
        if (!dto.monthlyCost) {
            throw new Error('Informe um nome para o plano!');
        }
        if (!dto.description) {
            throw new Error('Informe um nome para o plano!');
        }
    }
}