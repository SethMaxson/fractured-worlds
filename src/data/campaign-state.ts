import { CampaignDate } from "@/objects/CampaignDate";

export class CampaignState {
    static get CurrentDate() {
        return new CampaignDate(15, 1, 2);
    }
    //#region Progress
    // static get something() {
    //     return something;
    // }
    //#endregion Progress
}