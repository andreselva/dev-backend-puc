import { Dependencies, Injectable } from "@nestjs/common";
import ListSubscriptionUseCase from "../UseCases/ListSubscriptionsUseCase";
import CreateSubscriptionUseCase from "../UseCases/CreateSubscriptionUseCase";
import SubscriptionDTO from "../DTO/SubscriptionDTO";

@Injectable()
@Dependencies(ListSubscriptionUseCase, CreateSubscriptionUseCase)
export default class SubscriptionsService {
    constructor(
        private readonly listSubscriptionUseCase: ListSubscriptionUseCase,
        private readonly createSubscriptionUseCase: CreateSubscriptionUseCase
    ) { };

    listSubscriptions() {
        return this.listSubscriptionUseCase.list();
    }

    createSubscription(dto: SubscriptionDTO) {
        return this.createSubscriptionUseCase.create(dto);
    }
}