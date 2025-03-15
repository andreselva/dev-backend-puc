import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import PlanService from "../Services/PlanService";
import CreatePlanDTO from "../DTO/CreatePlanDTO";
import UpdatePricePlanDTO from "../DTO/UpdatePricePlanDTO";
import Response from "src/Response/Response";
@Controller('plans')
export default class PlanController {
    constructor(private readonly planService: PlanService) { }
    
    @Get()
    list() {
        return this.planService.listPlans();
    }
    
    @Post()
    create(@Body() dto: CreatePlanDTO) {
        return this.planService.createPlan(dto);
    }

    @Patch('/price')
    updatePricePlan(@Body() dto: UpdatePricePlanDTO) {
        const plan = this.planService.updatePricePlan(dto);
        return Response.success(plan, "Preço do plano atualizado com sucesso!");
    }
}