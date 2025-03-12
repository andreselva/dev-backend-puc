import { Body, Controller, Dependencies, Get, Post } from "@nestjs/common";
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
}