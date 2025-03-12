import { Dependencies, Injectable } from "@nestjs/common";
import SubscriptionsRepository from "../Repositories/SubscriptionsRepository";
import SubscriptionDTO from "../DTO/SubscriptionDTO";
import Subscription from "../Entity/Subscription";
import PlanService from "src/Management/Plans/Services/PlanService";
import CustomerService from "src/Management/Customers/Services/CustomerService";

@Injectable()
@Dependencies(SubscriptionsRepository, PlanService, CustomerService)
export default class CreateSubscriptionUseCase {
    constructor(
        private readonly subscriptionRepository: SubscriptionsRepository,
        private readonly planService: PlanService,
        private readonly customerService: CustomerService
    ) { }

    create(dto: SubscriptionDTO) {
        this.checkExistence(dto);
        const subscription = new Subscription(dto.code, dto.codePlan, dto.codeCustomer);
        return this.subscriptionRepository.createSubscription(subscription);
    }

    private checkExistence(dto: SubscriptionDTO) {
        const codeChecked = this.planService.getPlan(dto.codePlan);
        const customerChecked = this.customerService.getCustomer(dto.codeCustomer);

        if (!codeChecked) {
            throw new Error("Plano inexistente!");
        }

        if (!customerChecked) {
            throw new Error("Cliente inexistente!");
        }
    }
}