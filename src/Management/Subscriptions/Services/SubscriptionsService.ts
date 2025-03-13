import { Dependencies, Injectable } from "@nestjs/common";
import ListSubscriptionUseCase from "../UseCases/ListSubscriptionsUseCase";
import CreateSubscriptionUseCase from "../UseCases/CreateSubscriptionUseCase";
import SubscriptionDTO from "../DTO/SubscriptionDTO";
import GetSubscriptionByStatusUseCase from "../UseCases/GetSubscriptionByStatus";

@Injectable()
@Dependencies(ListSubscriptionUseCase, CreateSubscriptionUseCase, GetSubscriptionByStatusUseCase)
export default class SubscriptionsService {
    constructor(
        private readonly listSubscriptionUseCase: ListSubscriptionUseCase,
        private readonly createSubscriptionUseCase: CreateSubscriptionUseCase,
        private readonly getSubscriptionByStatusUseCase: GetSubscriptionByStatusUseCase
    ) { };

    listSubscriptions() {
        return this.listSubscriptionUseCase.list();
    }

    createSubscription(dto: SubscriptionDTO) {
        return this.createSubscriptionUseCase.create(dto);
    }

    getSubscriptionByStatus(status: string) {
        console.log('chegou aqui:', status);
        return this.getSubscriptionByStatusUseCase.get(status);
    }
}