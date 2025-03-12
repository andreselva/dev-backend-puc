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

@Module({
  imports: [],
  controllers: [
    AppController,
    PlanController,
    CustomerController,
    SubscriptionController
  ],
  providers: [
    AppService,
    PlanService,
    PlanRepository,
    ListPlansUseCase,
    CreatePlanUseCase,
    GetPlanUseCase,
    UpdatePricePlanUseCase,
    CustomerRepository,
    CustomerService,
    ListCustomersUseCase,
    GetCustomerUseCase,
    SubscriptionsRepository,
    SubscriptionsService,
    ListSubscriptionUseCase,
    CreateSubscriptionUseCase,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
