export default class Subscription {
    private readonly code: number;
    private readonly codePlan: number;
    private readonly codeCustomer: number;
    private readonly startDate: Date;
    private readonly endDate: Date;
    private readonly status: string;
    private readonly paymentMethod: string;

    constructor(code: number = 10, codePlan: number, codeCustomer: number, startDate: Date = new Date(0), endDate: Date = new Date(0), status: string = 'pending', paymentMethod: string = 'credit_card') {
        this.code = code;
        this.codePlan = codePlan;
        this.codeCustomer = codeCustomer;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.paymentMethod = paymentMethod;
    }

    getCode() {
        return this.code;
    }

    getCodePlan() {
        return this.codePlan;
    }

    getCodeCustomer() {
        return this.codeCustomer;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    getStatus() {
        return this.status;
    }

    getPaymentMethod() {
        return this.paymentMethod;
    }

    isActive() {
        return this.endDate >= new Date();
    }
}