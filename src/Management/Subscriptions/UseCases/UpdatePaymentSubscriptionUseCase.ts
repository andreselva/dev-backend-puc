import { Injectable } from "@nestjs/common";
import PaymentSubscriptionDTO from "../DTO/PaymentSubscriptionDTO";
import SubscriptionsRepository from "../Repositories/SubscriptionsRepository";

@Injectable()
export default class UpdatePaymentSubscriptionUseCase {
    constructor(
        private readonly subscriptionRepository: SubscriptionsRepository
    ) {}

    async update(payment: PaymentSubscriptionDTO) {
        await this.subscriptionRepository.updatePaymentSubscription(payment);
    }
}