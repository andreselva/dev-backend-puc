import { Dependencies, Injectable } from "@nestjs/common";
import SubscriptionsRepository from "../Repositories/SubscriptionsRepository";

@Injectable()
@Dependencies(SubscriptionsRepository)
export default class ListSubscriptionUseCase {
    constructor(private readonly subscriptionRepository: SubscriptionsRepository) { }

    async list() {
        return await this.subscriptionRepository.listAllSubscriptions();
    }
}