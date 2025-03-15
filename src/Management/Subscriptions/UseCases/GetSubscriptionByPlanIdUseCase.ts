import { Dependencies, Injectable } from "@nestjs/common";
import SubscriptionsRepository from "../Repositories/SubscriptionsRepository";

@Injectable()
@Dependencies(SubscriptionsRepository)
export default class GetSubscriptionsByPlanIdUseCase {
    constructor(private readonly subscriptionsRepository: SubscriptionsRepository) { }

    async get(planId: string) {
        return await this.subscriptionsRepository.getSubscriptionsByPlanId(planId);
    }
}