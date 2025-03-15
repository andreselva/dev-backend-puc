import { Dependencies, Injectable } from "@nestjs/common";
import Subscription from "../Entity/Subscription";
import { DatabaseService } from "src/Database/DatabaseService";

@Injectable()
@Dependencies(DatabaseService)
export default class SubscriptionsRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    async listAllSubscriptions(): Promise<Subscription[]> {
        const query = "SELECT * FROM subscriptions";
        const subscriptions = await this.databaseService.select<Subscription>(query);
        return subscriptions ?? [];
    }

    async createSubscription(subscription: Subscription): Promise<Subscription[] | null> {
        console.log("caiu na criação")
        const query = "INSERT INTO subscriptions (code, codePlan, codeCustomer, startDate, endDate, status, paymentMethod) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const params = [
            subscription.getCode(),
            subscription.getCodePlan(),
            subscription.getCodeCustomer(),
            subscription.getStartDate(),
            subscription.getEndDate(),
            subscription.getStatus(),
            subscription.getPaymentMethod()
        ];

        const result = await this.databaseService.insert(query, params);

        if (!result) {
            return null;
        }

        return [subscription];
    }

    async getSubscriptionByStatus(status: string): Promise<Subscription[]> {
        const query = "SELECT * FROM subscriptions WHERE status = ?";
        const params = [status];
        const subscription = await this.databaseService.select<Subscription>(query, params);

        console.log("subscription encontradas:", subscription)
        return subscription ?? [];
    }

    async getSubscriptionByClientId(customerId: string): Promise<Subscription[]> {
        const query = "SELECT * FROM subscriptions WHERE codeCustomer = ?";
        const params = [customerId];
        const subscription = await this.databaseService.select<Subscription>(query, params);
        return subscription ?? [];
    }

    async getSubscriptionsByPlanId(planId: string): Promise<Subscription[]> {
        const query = "SELECT * FROM subscriptions WHERE codePlan = ?";
        const params = [planId];
        const subscription = await this.databaseService.select<Subscription>(query, params);
        return subscription ?? [];
    }
}