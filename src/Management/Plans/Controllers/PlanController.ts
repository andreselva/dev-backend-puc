import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import PlanService from "../Services/PlanService";
import CreatePlanDTO from "../DTO/CreatePlanDTO";
import UpdatePricePlanDTO from "../DTO/UpdatePricePlanDTO";

@Controller('plans')
export default class PlanController {
    constructor(
        private readonly planService: PlanService
    ) { }

    @Post()
    create(@Body() dto: CreatePlanDTO) {
        return this.planService.createPlan(dto);
    }

    @Get()
    list() {
        return this.planService.listPlans();
    }

    @Patch('/price')
    updatePricePlan(@Body() dto: UpdatePricePlanDTO) {
        return this.planService.updatePricePlan(dto);
    }
}