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
    async getSubscriptionByStatus(@Param('status') status: string) {
        const subscriptions = await this.subscriptionService.getSubscriptionByStatus(status);

        if (subscriptions && Array.isArray(subscriptions) && subscriptions.length > 0) {
            return Response.success(subscriptions);
        }

        return Response.notFound();
    }

    @Get('/customer/:customerId')
    async getSubscriptionsByClientId(@Param('customerId') customerId: string) {
        const subscriptions = await this.subscriptionService.getSubscriptionsByClientId(customerId);

        if (subscriptions && Array.isArray(subscriptions) && subscriptions.length > 0) {
            return Response.success(subscriptions);
        }

        return Response.notFound("Nenhuma assinatura encontrada!");
    }

    @Get('/plan/:planId')
    async getSubscriptionsByPlanId(@Param('planId') planId: string) {
        const subscriptions = await this.subscriptionService.getSubscriptionsByPlanId(planId);

        if (subscriptions && Array.isArray(subscriptions) && subscriptions.length > 0) {
            return Response.success(subscriptions);
        }

        return Response.notFound("Nenhuma assinatura encontrada!");
    }
}
