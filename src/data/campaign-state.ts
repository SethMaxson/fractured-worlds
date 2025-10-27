import { CampaignDate } from "@/objects/CampaignDate";

export class CampaignState {
    static get CurrentDate() {
        return new CampaignDate(2, 9, 1);
    }
    //#region Progress
    // static get something() {
    //     return something;
    // }
    //#endregion Progress
}