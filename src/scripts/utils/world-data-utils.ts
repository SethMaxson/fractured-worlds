import type { ICharacterData } from "@/interfaces/ICharacterData";
import type { IWorldData } from "@/interfaces/IWorldData";
import { Utils } from "../utils";
import { WorldDatas } from "@/data/world-datas";
import { CharacterDataUtils } from "./character-data-utils";

export namespace WorldDataUtils {
    /** Find all characters that match the provided World ID. */
    export function findCharactersInWorld(characterDatas: ICharacterData[], worldID: string): ICharacterData[] {
        let idMatches = characterDatas.filter(char => char.location == worldID);
        let foundInWorld: ICharacterData[] = [];
        const world = findWorld(worldID);
        if (world && world.people.citizens) {
            for (let i = 0; i < world.people.citizens.length; i++) {
                let person = CharacterDataUtils.findCharacter(characterDatas, world.people.citizens[i]);
                if (person) {
                    foundInWorld.push(person);
                }
            }
        }
        const unique = idMatches.concat(foundInWorld).reduce(function (acc: ICharacterData[], curr: ICharacterData) {
            if (acc.filter(p => p.id == curr.id).length == 0)
                acc.push(curr);
            return acc;
        }, []);
        return unique;
    }
    export function findWorld(id: string): IWorldData | undefined {
        return Utils.World.findWorld(WorldDatas, id);
    }
}