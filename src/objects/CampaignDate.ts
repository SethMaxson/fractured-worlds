import { Utils } from "@/scripts/utils";

export class CampaignDate {
    readonly day: number;
    readonly month: number;
    readonly year: number;
    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}