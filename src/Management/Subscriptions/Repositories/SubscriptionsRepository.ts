import { Injectable } from "@nestjs/common";
import Subscription from "../Entity/Subscription";

@Injectable()
export default class SubscriptionsRepository {
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

    listAllSubscriptions(): Subscription[] {
        return [...SubscriptionsRepository.subscriptions];
    }

    createSubscription(subscription: Subscription): Subscription[] {
        SubscriptionsRepository.subscriptions.push(subscription);
        return [...SubscriptionsRepository.subscriptions];
    }

    getSubscriptionByStatus(status: string): Subscription[] {
        return SubscriptionsRepository.subscriptions.filter(subscription => subscription.getStatus() === status);
    }

    getSubscriptionByClientId(clientId: string): Subscription[] {
        return SubscriptionsRepository.subscriptions.filter(subscription => subscription.getCodeCustomer() === parseInt(clientId, 10));
    }

    getSubscriptionsByPlanId(planId: string): Subscription[] {
        return SubscriptionsRepository.subscriptions.filter(subscription => subscription.getCodePlan() === parseInt(planId, 10));
    }
}