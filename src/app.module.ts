import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PlanService from './Management/Plans/Services/PlanService';
import PlanController from './Management/Plans/Controllers/PlanController';
import ListPlansUseCase from './Management/Plans/UseCases/ListPlansUseCase';
import PlanRepository from './Management/Plans/Repositories/PlanRepository';
import CreatePlanUseCase from './Management/Plans/UseCases/CreatePlanUseCase';
import { LoggerMiddleware } from './Logger/LoggerMiddleware';
import CustomerController from './Management/Customers/Controllers/CustomerController';
import CustomerRepository from './Management/Customers/Repositories/CustomerRepository';
import CustomerService from './Management/Customers/Services/CustomerService';
import ListCustomersUseCase from './Management/Customers/UseCases/ListCustomersUseCase';
import SubscriptionController from './Management/Subscriptions/Controllers/SubscriptionController';
import SubscriptionsRepository from './Management/Subscriptions/Repositories/SubscriptionsRepository';
import SubscriptionsService from './Management/Subscriptions/Services/SubscriptionsService';
import ListSubscriptionUseCase from './Management/Subscriptions/UseCases/ListSubscriptionsUseCase';
import CreateSubscriptionUseCase from './Management/Subscriptions/UseCases/CreateSubscriptionUseCase';
import GetPlanUseCase from './Management/Plans/UseCases/GetPlanUseCase';
import GetCustomerUseCase from './Management/Customers/UseCases/GetCustomerUseCase';
import UpdatePricePlanUseCase from './Management/Plans/UseCases/UpdatePricePlanUseCase';
import GetSubscriptionByStatusUseCase from './Management/Subscriptions/UseCases/GetSubscriptionByStatus';

const planUseCases = [
  GetPlanUseCase,
  ListPlansUseCase,
  CreatePlanUseCase,
  UpdatePricePlanUseCase,
];

const customerUseCases = [
  GetCustomerUseCase,
  ListCustomersUseCase,
]

const subscriptionUseCases = [
  ListSubscriptionUseCase,
  CreateSubscriptionUseCase,
  GetSubscriptionByStatusUseCase
]

const useCases = [
  ...planUseCases,
  ...customerUseCases,
  ...subscriptionUseCases,
]

const repositories = [
  PlanRepository,
  CustomerRepository,
  SubscriptionsRepository,
]

const services = [
  AppService,
  PlanService,
  CustomerService,
  SubscriptionsService,
]

@Module({
  imports: [],
  controllers: [
    AppController,
    PlanController,
    CustomerController,
    SubscriptionController
  ],
  providers: [
    ...services,
    ...repositories,
    ...useCases,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
