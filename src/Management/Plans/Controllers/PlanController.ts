import { Body, Controller, Get, Patch } from "@nestjs/common";
import PlanService from "../Services/PlanService";
import UpdatePricePlanDTO from "../DTO/UpdatePricePlanDTO";
import Response from "src/Response/Response";
@Controller('plans')
export default class PlanController {
    constructor(private readonly planService: PlanService) { }
    
    @Get()
    async list() {
        return await this.planService.listPlans();
    }

    @Patch('/price')
    async updatePricePlan(@Body() dto: UpdatePricePlanDTO) {
        const plan = await this.planService.updatePricePlan(dto);

        if (plan && Array.isArray(plan) && plan.length > 0) {
            return Response.success(plan, "Preço do plano atualizado com sucesso!");
        }

        return Response.badRequest("Erro ao atualizar o preço do plano!");
    }
}