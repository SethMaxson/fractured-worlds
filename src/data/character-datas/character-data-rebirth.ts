import type { ICharacterData } from "@/interfaces/ICharacterData";

/** A set of character profiles for the members of the Rebirth Caucus.
 * Some records contain information that is not yet known to the players, which is currently commented out.
 */
export const RebirthCharacterDatas: ICharacterData[] = [

    //#region Phil's moms/kidnapper witches

    //#endregion Phil's moms/kidnapper witches
    
    //#region The Rest
    {
        name: "Jafar",
        id: "jafar",
        subtitle: "Would-be Sultan",
        type: "rebirth",
        species: ["human"],
        occupation: ["vizier"],
        physical: {
            gender: "male",
            eyeColor: "brown",
            hairColor: "black",
            height: "6' 4\"",
            weight: "150 lbs."
        },
        affiliations: [
            { name: "Rebirth Caucus", rank: "member", role: "Magical Muscle/Espionage", primary: true }
        ],
        description: [
            "<Character>Jafar</Character> is a conniving, haughty sorcerer we encountered in <Location>Wonderland</Location>. He fled through a portal into another world after realizing that we and <Character>Cade Brightcloak</Character> outnumbered him five to one."
        ],
        homeworld: "Agrabah",
        images: {
            portrait: "img/npc/jafar.png"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Doyle Akor",
        id: "doyle-akor",
        subtitle: "Eldritch Agent",
        type: "rebirth",
        species: ["human"],
        occupation: ["warlock"],
        physical: {
            gender: "male",
            eyeColor: "ice blue",
            hairColor: "blonde",
        //     height: "5' 6\"",
        //     weight: "101 lbs."
        },
        affiliations: [
            { name: "Rebirth Caucus", rank: "member", role: "unknown", primary: true }
        ],
        description: [
            "This man was talking to <Character>Shredder</Character> shortly before our fight in the <Location>Big Apple</Location>. He attempted to abduct <Character>Michelangelo</Character> after the battle while the <Character>Turtles</Character> were distracted. We thwarted his kidnapping attempt, and he somehow teleported away in a mass of inky tendrils."
        ],
        homeworld: "???",
        images: {
            portrait: "img/npc/doyle.png"
        },
        spotify: {
			primaryPlaylistID: "58fX3Hi1oaBgOq21OMYah1"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Gojiro",
        id: "gojiro",
        subtitle: "Cat out of Hell",
        type: "rebirth",
        species: ["tabaxi"],
        occupation: ["warrior"],
        physical: {
            gender: "male",
        },
        affiliations: [
            { name: "Rebirth Caucus", rank: "member", role: "unknown", primary: true }
        ],
        description: [
            "<Character>Gojiro</Character> is an infamous mercenary known for his martial prowess, stealth, and tracking ability. He seems to have taken a shine to <c>Li'l Phil</c>."
        ],
        images: {
            portrait: "img/npc/gojiro.png"
        },
        spotify: {
			primaryPlaylistID: "3dvzEn8cNeZJWh53jgEmvN"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Shredder",
        id: "shredder",
        subtitle: "Self-made Shogun",
        type: "rebirth",
        species: ["human"],
        occupation: ["ninjutsu master"],
        physical: {
            gender: "male",
            eyeColor: "brown",
            hairColor: "black",
            height: "6' 2\"",
            weight: "200 lbs."
        },
        affiliations: [
            { name: "Rebirth Caucus", rank: "member", role: "ninja master", primary: true }
        ],
        description: [
            "<Character>Shredder</Character> was a cruel, prideful martial artist we encountered in the <Location>Big Apple</Location>. We fought him to a near standstill before he took one of the <Character>Turtles</Character>—<Character>Donatello</Character>—hostage. He was last seen falling into a garbage truck and being compacted."
        ],
        homeworld: "Big Apple",
        images: {
            portrait: "img/npc/shredder.png"
        },
        plotRelevance: 2,
        status: "unknown"
    },
    //#endregion The Rest

]