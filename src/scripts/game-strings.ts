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
    /** The author of the party's adventure journal. An otherworldly, fey creature that hides in party members' shadows, usually Li'l Phil's. */
    static get JournalAuthor(): string {
        return 'Marlowe';
    }
    static get Party() {
        return {
            /** The current moniker for the android monk. */
            Cobb: { first: "C.O.B.B.", full: "C.O.B.B."},
            /** The current moniker for the centaur sorcerer. */
            Phil: { first: "Li'l Phil", full: "Li'l Phil Antonio"},
            /** The current moniker for the kitsune kineticist. */
            Tero: { first: "Tero", full: "Tero"},
            /** The current moniker for the dwarf champion. */
            Tropey: { first: "Tropey", full: "Tropey McTroperson"}
        }
    }
    //#endregion Campaign strings

    //#region Names which will change as the story progresses
    /** The current spelling of 'Nelly'. */
    static get Nelly(): string {
        // return 'Nelly';
        return 'N.L.E.';
    }
    static get NLE() {
        return {
            /** The current party moniker for Cade Brightcloak. */
            Cade: { first: "Cade", full: "Cade Brightcloak"},
            // Cade: { first: "Hedge Knight", full: "Hedge Knight"},
        }
    }
    //#endregion Names which will change as the story progresses
}