export default class DateHandler {
    private startDate: Date;
    private endDate: Date;

    constructor() {
        this.startDate = this.setStartDate();
        this.endDate = this.setEndDate();
    }

    private formatDateTime(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    setStartDate(): Date {
        this.startDate = new Date();
        return this.startDate;
    }

    setEndDate(): Date {
        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.endDate.getDate() + 360);
        return this.endDate;
    }

    getCurrentDate(): string {
        return this.formatDateTime(new Date()).split(' ')[0];
    }

    getCurrentDateTime(): string {
        return this.formatDateTime(new Date());
    }
}