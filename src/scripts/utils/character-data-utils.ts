import type { ICalendarEvent, IFullCalendarEvent } from "@/interfaces/ICalendarEvent";
import type { ICharacterData } from "@/interfaces/ICharacterData";
import { Utils } from "../utils";
import { CharacterDatas } from "@/data/character-datas";

export namespace CharacterDataUtils {
    interface TextGetterConfig {
        doParagraphs?: boolean;
        classList?: string;
    }

    /** Find the character that matches the provided ID. */
    export function findCharacter(characterDatas: ICharacterData[], id: string): ICharacterData | undefined {
        const search = characterDatas.filter(char => char.id == id);
        const person = search && search.length > 0 ? search[0] : undefined;
        return person;
    }

    /** Find the character that matches the provided ID. */
    export function findCharacterById(id: string): ICharacterData | undefined {
        const search = CharacterDatas.filter(char => char.id == id);
        const person = search && search.length > 0 ? search[0] : undefined;
        return person;
    }

    /** Lookup a character's affiliation with a specific group, if present. */
    export function getAffiliation(character: ICharacterData, affiliationName: string) {
        const matches = character.affiliations.filter(a => {
            return a.name == affiliationName;
        });
        return matches.length > 0 ? matches[0] : undefined;
    }

    /** Get the entire character database. */
    export function getAll(): ICharacterData[] {
        return CharacterDatas;
    }

    /** Lookup a character's birthday, if known. */
    export function getBirthday(character: ICharacterData, birthdayEventSet: ICalendarEvent[][]): IFullCalendarEvent | undefined {
        const allBirthdays = Utils.Date.Convert.ICalendarEvent.arrayToIFullCalenderEvents(birthdayEventSet);
        const matches = allBirthdays.filter(b => {
            const compare = (b.id ? b.id : b.name).toLowerCase().trim();
            return compare == character.id.toLowerCase().trim() || compare == character.name.toLowerCase().trim();
        })
        return matches[0];
    }

    /** Get the formatted and prepared body text for the character */
    export function getMainBodyText(character: ICharacterData | undefined, config?: TextGetterConfig): string {
        const rawBody = character ? character.description : undefined;
        let bodyText = "";

        let c = config || { doParagraphs: true, classList: "" };
        const classString = c.classList && c.classList.length > 0 ? ` class="${c.classList}"` : "";

        if (character && rawBody) {
            if (isArray(rawBody)) {
                bodyText = c.doParagraphs
                ? `<p${classString}>` + Utils.String.replaceComponentsInString(rawBody.join(`</p><p${classString}>`)) + "</p>"
                : Utils.String.replaceComponentsInString(rawBody.join(" "));
            }
            else {
                bodyText = Utils.String.replaceComponentsInString(rawBody);
            }
        }
        return bodyText;
    }

    /** Lookup a character's primary affiliation, if present. */
    export function getPrimaryAffiliation(character: ICharacterData) {
        const matches = character.affiliations.filter(a => {
            return a.primary;
        });
        return matches.length > 0 ? matches[0] : undefined;
    }

    /** Gets a Spotify embed URL for the given ID (e.g. ) */
    export function getSpotifyEmbedUrl(spotifyID: string, type: "playlist" | "song" = "playlist"): string {
        return `https://open.spotify.com/embed/${type == 'playlist' ? 'playlist' : 'track'}/${spotifyID}?utm_source=generator&theme=0`;
    }

    /** Gets the subheader text for the character (e.g. species + occupation) */
    export function getSubheader(character: ICharacterData | undefined): string | undefined {
        if (!character) {
            return;
        }
        return character.subtitle ? character.subtitle : [
            character.species.filter(s => s.toLowerCase() != "human").join(" "),
            character.occupation.join(" ")
        ].join(" ");
    }
}

function isArray(test: string | string[]): test is string[] {
    return Array.isArray(test);
}