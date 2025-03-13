import { Body, Controller, Dependencies, Get, Param, Post } from "@nestjs/common";
import SubscriptionsService from "../Services/SubscriptionsService";
import SubscriptionDTO from "../DTO/SubscriptionDTO";

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
    createSubscription(@Body() dto: SubscriptionDTO) {
        return this.subscriptionService.createSubscription(dto);
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
