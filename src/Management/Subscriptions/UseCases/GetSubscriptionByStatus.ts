import { Dependencies, Injectable } from "@nestjs/common";
import SubscriptionsRepository from "../Repositories/SubscriptionsRepository";

@Injectable()
@Dependencies(SubscriptionsRepository)
export default class GetSubscriptionByStatusUseCase {
    constructor(private readonly subscriptionsRepository: SubscriptionsRepository) { }

    async get(status: string) {
        return this.subscriptionsRepository.getSubscriptionByStatus(status);
    }
}