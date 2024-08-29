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
    /** The current spelling of 'Nelly'. */
    static get Nelly(): string {
        return 'Nelly';
    }
}