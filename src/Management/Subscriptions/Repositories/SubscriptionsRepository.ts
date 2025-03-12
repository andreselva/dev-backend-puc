import Subscription from "../Entity/Subscription";

export default class SubscriptionsRepository {
    private static subscriptions: Subscription[] = [
        new Subscription(1, 1, 1, new Date('2021-01-01'), new Date('2021-12-31'), 'pending', 'credit_card'),
        new Subscription(2, 2, 2, new Date('2021-01-01'), new Date('2021-12-31')),
    ]

    listAllSubscriptions(): Subscription[] {
        return [...SubscriptionsRepository.subscriptions];
    }

    createSubscription(subscription: Subscription): Subscription[] {
        SubscriptionsRepository.subscriptions.push(subscription);
        return [...SubscriptionsRepository.subscriptions];
    }
}