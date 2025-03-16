import { Dependencies, Injectable } from "@nestjs/common";
import SubscriptionsRepository from "../Repositories/SubscriptionsRepository";
import SubscriptionDTO from "../DTO/SubscriptionDTO";
import Subscription from "../Entity/Subscription";
import PlanService from "src/Management/Plans/Services/PlanService";
import CustomerService from "src/Management/Customers/Services/CustomerService";
import DateHandler from "src/Helpers/DateHandler";

@Injectable()
@Dependencies(SubscriptionsRepository, PlanService, CustomerService)
export default class CreateSubscriptionUseCase {
    constructor(
        private readonly subscriptionRepository: SubscriptionsRepository,
        private readonly planService: PlanService,
        private readonly customerService: CustomerService,
        private readonly dateHandler = new DateHandler()
    ) { }

    async create(dto: SubscriptionDTO) {
        const check = await this.checkExistence(dto);

        if (!check) {
            return null;
        }
        
        const code = await this.subscriptionRepository.getLastCode();
        const startDate = this.dateHandler.setStartDate();
        const endDate =  this.dateHandler.setEndDate();
        const subscription = new Subscription(code, parseInt(dto.codePlan), parseInt(dto.codeCustomer), dto.description, dto.finalCost, startDate, endDate);
        return this.subscriptionRepository.createSubscription(subscription);
    }

    private async checkExistence(dto: SubscriptionDTO) {
        try {
            const [codeChecked, customerChecked] = await Promise.all([
                this.planService.getPlan(parseInt(dto.codePlan)),
                this.customerService.getCustomer(dto.codeCustomer)
            ]);
    
            return !!codeChecked && !!customerChecked;
        } catch (error) {
            console.error("Erro ao verificar existência do plano ou cliente:", error);
            return false;
        }
    }
    
}