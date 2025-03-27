import { Dependencies, Injectable } from "@nestjs/common";
import ListSubscriptionUseCase from "../UseCases/ListSubscriptionsUseCase";
import CreateSubscriptionUseCase from "../UseCases/CreateSubscriptionUseCase";
import SubscriptionDTO from "../DTO/SubscriptionDTO";
import GetSubscriptionByStatusUseCase from "../UseCases/GetSubscriptionByStatus";
import GetSubscriptionsByClientIdUseCase from "../UseCases/GetSubscriptionsByClientIdUseCase";
import GetSubscriptionsByPlanIdUseCase from "../UseCases/GetSubscriptionByPlanIdUseCase";
import UpdatePaymentSubscriptionUseCase from "../UseCases/UpdatePaymentSubscriptionUseCase";
import PaymentSubscriptionDTO from "../DTO/PaymentSubscriptionDTO";

@Injectable()
@Dependencies(
    ListSubscriptionUseCase,
    CreateSubscriptionUseCase,
    GetSubscriptionByStatusUseCase,
    GetSubscriptionsByClientIdUseCase,
    GetSubscriptionsByPlanIdUseCase,
    UpdatePaymentSubscriptionUseCase
)
export default class SubscriptionsService {
    constructor(
        private readonly listSubscriptionUseCase: ListSubscriptionUseCase,
        private readonly createSubscriptionUseCase: CreateSubscriptionUseCase,
        private readonly getSubscriptionByStatusUseCase: GetSubscriptionByStatusUseCase,
        private readonly getSubscriptionsByClientIdUseCase: GetSubscriptionsByClientIdUseCase,
        private readonly getSubscriptionsByPlanIdUseCase: GetSubscriptionsByPlanIdUseCase,
        private readonly updatePaymentSubscriptionUseCase: UpdatePaymentSubscriptionUseCase
    ) { };

    async listSubscriptions() {
        return await this.listSubscriptionUseCase.list();
    }

    async createSubscription(dto: SubscriptionDTO) {
        return await this.createSubscriptionUseCase.create(dto);
    }

    async getSubscriptionByStatus(status: string) {
        const formattedStatus = status.toUpperCase();

        if (formattedStatus === "TODOS") {
            return await this.listSubscriptions();
        }

        return await this.getSubscriptionByStatusUseCase.get(formattedStatus);
    }

    async getSubscriptionsByClientId(customerId: string) {
        return await this.getSubscriptionsByClientIdUseCase.get(customerId);
    }

    async getSubscriptionsByPlanId(planId: string) {
        return await this.getSubscriptionsByPlanIdUseCase.get(planId);
    }

    async updatePaymentSubscription(payment: PaymentSubscriptionDTO) {
        await this.updatePaymentSubscriptionUseCase.update(payment);
    }
}
