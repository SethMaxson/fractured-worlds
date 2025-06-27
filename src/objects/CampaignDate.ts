export class CampaignDate {
    readonly day: number;
    readonly month: number;
    readonly year: number;
    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    get dateMDY() {
        return pad0s(this.month, 2) + '/' + pad0s(this.day, 2) + '/' + pad0s(this.year, 4);
    }
    get dateDMY() {
        return pad0s(this.day, 2) + '/' + pad0s(this.month, 2) + '/' + pad0s(this.year, 4);
    }
}

function pad0s(input: number, targetLength: number) {
    let str = input.toString();
    while (str.length < targetLength) {
        str = '0' + str;
    }
    return str;
}