import { CampaignDate } from "@/objects/CampaignDate";

export class CampaignState {
    static get CurrentDate() {
        return new CampaignDate(25, 12, 1);
    }
    //#region Progress
    // static get something() {
    //     return something;
    // }
    //#endregion Progress
}