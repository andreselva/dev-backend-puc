export default class Plan {
    private readonly code: number;
    private readonly name: string;
    private monthlyCost: number;
    private readonly date: Date;
    private readonly description: string;
    private readonly dateLastPayment: Date;

    constructor(code: number, name: string, monthlyCost: number, date: Date = new Date(), description: string, dateLastPayment: Date = new Date(0)) {
        this.code = code;
        this.name = name;
        this.monthlyCost = monthlyCost;
        this.date = date;
        this.description = description;
        this.dateLastPayment = dateLastPayment;
    }

    getCode() {
        return this.code;
    }

    getName() {
        return this.name;
    }

    getMonthlyCost() {
        return this.monthlyCost;
    }

    getDate() {
        return this.date.toISOString();
    }

    getDescription() {
        return this.description;
    }

    getDateLastPayment() {
        return this.dateLastPayment.toISOString();
    }

    setPrice(price: number) {
        return this.monthlyCost = price;
    }
}