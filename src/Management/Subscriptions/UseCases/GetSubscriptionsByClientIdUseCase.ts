import { Dependencies, Injectable } from "@nestjs/common";
import SubscriptionsRepository from "../Repositories/SubscriptionsRepository";

@Injectable()
@Dependencies(SubscriptionsRepository)
export default class GetSubscriptionsByClientIdUseCase {
    constructor(private readonly subscriptionsRepository: SubscriptionsRepository) { }

    async get(customerId: string) {
        return await this.subscriptionsRepository.getSubscriptionByClientId(customerId);
    }
}