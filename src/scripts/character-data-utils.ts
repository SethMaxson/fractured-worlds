import type { ICharacterData } from "@/interfaces/ICharacterData";
import { Utils } from "./utils";

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

    /** Gets the subheader text for the character (e.g. species + occupation) */
    export function getSubheader(character: ICharacterData | undefined): string | undefined {
        return character ? character.species.join(" ") + " " + character.occupation.join(" ") : undefined;
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
}

function isArray(test: string | string[]): test is string[] {
    return Array.isArray(test);
}