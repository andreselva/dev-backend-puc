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
        const query = "INSERT INTO subscriptions (code, codePlan, codeCustomer, description, finalCost, startDate, endDate, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        const params = [
            subscription.getCode(),
            subscription.getCodePlan(),
            subscription.getCodeCustomer(),
            subscription.getDescription(),
            subscription.getFinalCost(),
            subscription.getStartDate(),
            subscription.getEndDate(),
            subscription.getStatus(),
        ];

        console.log(query);
        console.log(params);

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

    async getLastCode(): Promise<number> {
        const query = "SELECT MAX(code) as maxCode FROM subscriptions";
        const result = await this.databaseService.select<{ maxCode: number }>(query);
    
        const code = result[0]?.maxCode ?? 0;
        return code + 1;
    }
}