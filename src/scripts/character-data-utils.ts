import type ICharacterData from "@/interfaces/ICharacterData";
import { Utils } from "./utils";

export namespace CharacterDataUtils {
    /** Find the character that matches the provided ID. */
    export function findCharacter(characterDatas: ICharacterData[], id: string): ICharacterData | undefined {
        const search = characterDatas.filter(char => char.id == id);
        const person = search && search.length > 0 ? search[0] : undefined;
        return person;
    }

    /** Gets the subheader text for the character (e.g. species + occupation) */
    export function getSubheader(character: ICharacterData|undefined): string | undefined {
        return character ? character.species.join(" ") + " " + character.occupation.join(" ") : undefined;
    }

    /** Get the formatted and prepared body text for the character */
    export function getMainBodyText(character: ICharacterData|undefined): string {
        const rawBody = character ? character.description : undefined;
        let bodyText = "";
        if (character && rawBody) {
            if (isArray(rawBody)) {
                bodyText = "<p>" + Utils.String.replaceComponentsInString(rawBody.join("</p><p>")) + "</p>";
            }
            else {
                bodyText = Utils.String.replaceComponentsInString(rawBody);
            }
        }
        return bodyText;
    }
}

function isArray(test: string|string[]): test is string[] {
	return Array.isArray(test);
}