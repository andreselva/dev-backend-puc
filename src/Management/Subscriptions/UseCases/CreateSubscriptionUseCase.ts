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
        // this.checkExistence(dto);
        const subscription = new Subscription(parseInt(dto.code), parseInt(dto.codePlan), parseInt(dto.codeCustomer));
        return this.subscriptionRepository.createSubscription(subscription);
    }

    // private checkExistence(dto: SubscriptionDTO) {
    //     const codeChecked = this.planService.getPlan(parseInt(dto.codePlan));
    //     const customerChecked = this.customerService.getCustomer(dto.codeCustomer);

    //     if (!codeChecked || !customerChecked) {
    //         throw new Error("Plano inexistente!");
    //     }
    // }
}