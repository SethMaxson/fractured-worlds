export class GameStrings {
    //#region Default
    /* These strings are pretty ubiquitous, and are used by default in all game page projects from now on. */
    static get SettingName(): string {
        return 'Fractured Worlds';
    }
    static get WorldName(): string {
        return 'the Fractured Worlds campaign setting';
    }
    //#endregion Default
    
    //#region Campaign strings
    static get DisguiseSystem(): string {
        return 'Chameleon Circuit';
    }
    static get Keyhole(): string {
        return 'world anchor';
    }
    /** A world thematically similar to another. */
    static get KindredWorld(): string {
        return 'kindred world';
    }
    /** A portal from one world to a different, thematically similar one. */
    static get KindredWorldPortal(): string {
        return 'kindred world portal';
    }
    static get Party() {
        return {
            /** The current moniker for the android monk. */
            Cobb: "C.O.B.B.",
            /** The current moniker for the centaur sorcerer. */
            Phil: "Li'l Phil",
            /** The current moniker for the kitsune kineticist. */
            Tero: "Tero",
            /** The current moniker for the dwarf champion. */
            Tropey: "Tropey"
        }
    }
    //#endregion Campaign strings

    //#region Names which will change as the story progresses
    /** The current spelling of 'Nelly'. */
    static get Nelly(): string {
        return 'Nelly';
    }
    /** The current party moniker for Cade Brightcloak. */
    static get Cade(): string {
        return 'Hedge Knight';
    }
    //#endregion Names which will change as the story progresses
}