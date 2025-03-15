import { Body, Controller, Dependencies, Get, Param, Post } from "@nestjs/common";
import SubscriptionsService from "../Services/SubscriptionsService";
import SubscriptionDTO from "../DTO/SubscriptionDTO";
import Response from "src/Response/Response";

@Dependencies(SubscriptionsService)
@Controller('subscriptions')
export default class SubscriptionController {
    constructor(
        private readonly subscriptionService: SubscriptionsService
    ) { }

    @Get()
    listSubscriptions() {
        return this.subscriptionService.listSubscriptions();
    }

    @Post()
    async createSubscription(@Body() dto: SubscriptionDTO) {
        const subscription = await this.subscriptionService.createSubscription(dto);
        if (subscription && Array.isArray(subscription) && subscription.length > 0) {
            return Response.created(subscription);
        }

        return Response.badRequest("Erro ao criar assinatura! Verifique os dados informados.");
    }

    @Get('/status/:status')
    getSubscriptionByStatus(@Param('status') status: string) {
        return this.subscriptionService.getSubscriptionByStatus(status);
    }

    @Get('/client/:clientId')
    getSubscriptionsByClientId(@Param('clientId') clientId: string) {
        return this.subscriptionService.getSubscriptionsByClientId(clientId);
    }

    @Get('/plan/:planId')
    getSubscriptionsByPlanId(@Param('planId') planId: string) {
        return this.subscriptionService.getSubscriptionsByPlanId(planId);
    }
}
