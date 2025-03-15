import { Dependencies, Injectable } from "@nestjs/common";
import Subscription from "../Entity/Subscription";
import { DatabaseService } from "src/Database/DatabaseService";

@Injectable()
@Dependencies(DatabaseService)
export default class SubscriptionsRepository {
    constructor(private readonly databaseService: DatabaseService) { }
    private static subscriptions: Subscription[] = [
        new Subscription(1, 1, 1, new Date('2021-01-01'), new Date('2021-12-31'), 'active', 'credit_card'),
        new Subscription(1, 1, 1, new Date('2021-01-01'), new Date('2021-12-31'), 'canceled', 'credit_card'),
        new Subscription(1, 1, 1, new Date('2021-01-01'), new Date('2021-12-31'), 'active', 'credit_card'),
        new Subscription(1, 1, 1, new Date('2021-01-01'), new Date('2021-12-31'), 'canceled', 'credit_card'),
        new Subscription(2, 2, 2, new Date('2021-01-01'), new Date('2021-12-31'), 'active', 'credit_card'),
        new Subscription(2, 2, 2, new Date('2021-01-01'), new Date('2021-12-31'), 'canceled', 'credit_card'),
        new Subscription(2, 2, 2, new Date('2021-01-01'), new Date('2021-12-31'), 'canceled', 'credit_card'),
        new Subscription(2, 2, 2, new Date('2021-01-01'), new Date('2021-12-31'), 'active', 'credit_card'),
        new Subscription(3, 3, 3, new Date('2021-01-01'), new Date('2021-12-31'), 'canceled', 'credit_card'),
        new Subscription(4, 4, 4, new Date('2021-01-01'), new Date('2021-12-31'), 'active', 'credit_card'),
        new Subscription(5, 5, 5, new Date('2021-01-01'), new Date('2021-12-31'), 'canceled', 'credit_card'),
    ]

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
        return subscription ?? [];
    }

    async getSubscriptionByClientId(clientId: string): Promise<Subscription[]> {
        const query = "SELECT * FROM subscriptions WHERE codeCustomer = ?";
        const params = [clientId];
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