export class Config {
    static get IsDebug(): boolean {
        return !window.location.href.toLowerCase().includes("github");
    }
    static get IsGM() {
        return Config.IsDebug;
    }
    //#region URLs
    static get BaseUrl() {
        return Config.IsDebug? "http://127.0.0.1:5500/dnd/" : "https://sethmaxson.github.io/dnd/";
    }
    static get BaseImageUrl() {
        return Config.BaseUrl + "img/";
    }
    static get WikiUrl() {
        return Config.BaseUrl + "tiddlywiki/" + (Config.IsGM? 'dm.html' : 'public.html');
    }
    //#endregion URLs
}