export default class Subscription {
    private readonly code: number;
    private readonly codePlan: number;
    private readonly codeCustomer: number;
    private readonly description: string;
    private readonly finalCost: number;
    private readonly startDate: Date;
    private readonly endDate: Date;
    private readonly status: string;

    constructor(code: number, codePlan: number, codeCustomer: number, description: string, finalCost: number, startDate: Date = new Date(0), endDate: Date = new Date(0), status: string = 'ACTIVE') {
        this.code = code;
        this.codePlan = codePlan;
        this.codeCustomer = codeCustomer;
        this.description = description;
        this.finalCost = finalCost;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
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

    getDescription() {
        return this.description;
    }

    getFinalCost() {
        return this.finalCost;
    }

    isActive() {
        return this.endDate >= new Date();
    }
}