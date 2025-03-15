import { Dependencies, Injectable } from "@nestjs/common";
import ListSubscriptionUseCase from "../UseCases/ListSubscriptionsUseCase";
import CreateSubscriptionUseCase from "../UseCases/CreateSubscriptionUseCase";
import SubscriptionDTO from "../DTO/SubscriptionDTO";
import GetSubscriptionByStatusUseCase from "../UseCases/GetSubscriptionByStatus";
import GetSubscriptionsByClientIdUseCase from "../UseCases/GetSubscriptionsByClientIdUseCase";
import GetSubscriptionsByPlanIdUseCase from "../UseCases/GetSubscriptionByPlanIdUseCase";

@Injectable()
@Dependencies(
    ListSubscriptionUseCase,
    CreateSubscriptionUseCase,
    GetSubscriptionByStatusUseCase,
    GetSubscriptionsByClientIdUseCase,
    GetSubscriptionsByPlanIdUseCase
)
export default class SubscriptionsService {
    constructor(
        private readonly listSubscriptionUseCase: ListSubscriptionUseCase,
        private readonly createSubscriptionUseCase: CreateSubscriptionUseCase,
        private readonly getSubscriptionByStatusUseCase: GetSubscriptionByStatusUseCase,
        private readonly getSubscriptionsByClientIdUseCase: GetSubscriptionsByClientIdUseCase,
        private readonly getSubscriptionsByPlanIdUseCase: GetSubscriptionsByPlanIdUseCase
    ) { };

    async listSubscriptions() {
        return await this.listSubscriptionUseCase.list();
    }

    async createSubscription(dto: SubscriptionDTO) {
        return this.createSubscriptionUseCase.create(dto);
    }

    async getSubscriptionByStatus(status: string) {
        const formattedStatus = status.toUpperCase();

        if (formattedStatus === "TODOS") {
            return await this.listSubscriptions();
        }

        return await this.getSubscriptionByStatusUseCase.get(formattedStatus);
    }

    getSubscriptionsByClientId(clientId: string) {
        return this.getSubscriptionsByClientIdUseCase.get(clientId);
    }

    getSubscriptionsByPlanId(planId: string) {
        return this.getSubscriptionsByPlanIdUseCase.get(planId);
    }
}
