import type { ICharacterData } from "@/interfaces/ICharacterData";
import { SomewhereCharacterDatas } from "./character-datas/character-data-somewhere";
import { CrewCharacterDatas } from "./character-datas/character-data-crew";
import { RebirthCharacterDatas } from "./character-datas/character-data-rebirth";

/** Used to create a standardized set of character profiles that can be accessed from any page.
 * Some records contain information that is not yet known to the players, which is currently commented out.
 * TODO: Finish migrating the hardcoded data in character pages into this array.
 */
export const CharacterDatas: ICharacterData[] = [
    //#region include imported arrays
    ...CrewCharacterDatas,
    ...RebirthCharacterDatas,

    //#region location arrays
    ...SomewhereCharacterDatas,
    //#endregion location arrays

    //#endregion include imported arrays

    //#region Player Characters
    {
        name: "C.O.B.B.",
        id: "cobb",
        subtitle: "Android Monk",
        type: "pc",
        species: ["android"],
        occupation: ["surgeon", "martial artist"],
        physical: {
            eyeColor: "brown",
            hairColor: "brown",
            height: "6' 2\"",
            weight: "~200 lbs."
        },
        affiliations: [
            { name: "N.L.E.", rank: "member", role: "scout", primary: true },
            { name: "Tankman Enterprises", rank: "affiliate", role: "business partner" },
            { name: "Blue Print Detective Agency", rank: "detective" }
        ],
        aliases: [ "Raven" ],
        description: [
            "<Character>Construct Observing Biological Boundaries</Character>, or <Character>C.O.B.B.</Character>, is a gifted martial artist who is fascinated by the biological concept of mortality. With a mind as powerful as his blows, he seeks to unravel the mysteries of the <Location>Void Realm</Location>."
        ],
        homeworld: "Golarion",
        images: {
            portrait: "img/party/cobb-toon.png"
        },
        relationships: {
            family: [
                { idOrName: "yoshi-black", label: "adopted child" },
                { idOrName: "yoshi-white", label: "adopted child" },
            ],
        },
        spotify: {
			primaryPlaylistID: "1wlvh0bWnBozYO9pLubU0g"
        },
        plotRelevance: 3,
        status: "alive"
    },
    {
        name: "Izzy Bones",
        id: "izzy",
        type: "pc",
        species: ["skeleton"],
        occupation: ["guitarist"],
        physical: {
            eyeColor: "none",
            hairColor: "black",
            height: "roughly 6'",
            weight: "25 lbs."
        },
        affiliations: [],
        description: [
            "<Character>Izzy</Character> was a chill guy from a world where necromancers rule with an iron fist (and an army of reanimated corpses). He really liked heavy metal music."
        ],
        homeworld: "Necroworld",
        images: {
            portrait: "img/party/ozzy.png"
        },
        plotRelevance: 2,
        status: "dead"
    },
    {
        name: "Li'l Phil Antonio",
        id: "phil",
        type: "pc",
        species: ["centaur"],
        occupation: ["sorcerer"],
        physical: {
            gender: "male",
            eyeColor: "purple",
            hairColor: "purple",
            height: "6' 1\"",
            weight: "~650 lbs."
        },
        affiliations: [
            { name: "N.L.E.", rank: "member", role: "scout", primary: true },
            { name: "Disciples of the Drum", rank: "disciple" },
            { name: "Freelance Police", rank: "junior detective" },
            { name: "Blue Print Detective Agency", rank: "detective" }
        ],
        aliases: [ "Pony" ],
        description: [
            "<Character>Li'l Phil Antonio</Character> is a manic, unpredictable sorcerer whose purple skin makes him an oddity even among other centaurs. He was raised by a trio of witches and now seeks to find his place in the universe. His aloof tendencies naturally blend with the	curious magic that flows within his veins to make Li'l Phil the ultimate agent of chaos."
        ],
        homeworld: "Wildwood Forest",
        images: {
            portrait: "img/party/phil-toon.png"
        },
        relationships: {
            closeFriends: [
                { idOrName: "tero" },
                { idOrName: "marlowe", label: "best friend" },
                { idOrName: "nortle", label: "surrogate father" },
                { idOrName: "winter" },
                { idOrName: "zuzu" },
            ],
            family: [
                { idOrName: "droogella", label: "adoptive mother" },
                { idOrName: "malladine", label: "adoptive mother" },
                { idOrName: "terribelle", label: "adoptive mother" },
                { idOrName: "yoshi-light-blue", label: "adopted child" },
                { idOrName: "yoshi-blue", label: "adopted child" },
            ],
        },
        spotify: {
			primaryPlaylistID: "18Gq2lmW0vhZhUOEqMgVDx"
        },
        plotRelevance: 3,
        status: "alive"
    },
    {
        name: "Pontiki",
        id: "pontiki",
        type: "pc",
        species: ["ratfolk"],
        occupation: ["gunslinger"],
        affiliations: [
            { name: "None", primary: true }
        ],
        aliases: [ "Poo", "Rat-Man" ],
        description: [
            "<Character>Pontiki</Character> is a fierce warrior from an underground burrow. He learned the way of the gunslinger after an encounter with a destructive tomb raider left Pontiki scarred and without a family."
        ],
        mental: {
            drive: "protect all of rat-kind"
        },
        physical: {
            gender: "male",
            eyeColor: "black",
            hairColor: "white"
        },
        homeworld: "Tomb of Sir Richard",
        images: {
            portrait: "img/party/pontiki.png"
        },
        plotRelevance: 1,
        status: "dead"
    },
    {
        name: "Tero",
        id: "tero",
        subtitle: "Kitsune Kineticist",
        type: "pc",
        species: ["kitsune"],
        occupation: ["kineticist", "helmsman", "navigator"],
        physical: {
            gender: "female",
            eyeColor: "purple",
            hairColor: "white",
            height: "5' 2\"",
            weight: "90 lbs."
        },
        affiliations: [
            { name: "N.L.E.", rank: "member", role: "scout", primary: true },
            { name: "Freelance Police", rank: "junior detective" },
            { name: "Blue Print Detective Agency", rank: "detective" },
            { name: "Barbieland Police", rank: "deputy" }
        ],
        aliases: [ "Fox" ],
        description: [
            "<Character>Tero</Character> is a gifted student of the elements with an appetite for strength seemingly rivaled only by her appetite for new experiences. She grew up in isolation deep within the <Location>Forest of Spirits</Location>, surrounded by snow and evergreen trees."
        ],
        homeworld: "Forest of Spirits, Golarion",
        images: {
            portrait: "img/party/tero-kawaii1.png"
        },
        relationships: {
            closeFriends: [
                { idOrName: "phil" },
                { idOrName: "susie", label: "best friend" },
                { idOrName: "winter" },
                { idOrName: "zuzu" },
            ],
            family: [
                { idOrName: "cade", label: "husband" },
                { idOrName: "yoshi-yellow", label: "adopted child" },
                { idOrName: "yoshi-pink", label: "adopted child" },
            ],
        },
        spotify: {
			primaryPlaylistID: "1CtXuwGctAYed6N5FcWNdT"
        },
        plotRelevance: 3,
        status: "alive"
    },
    {
        name: "Tropey McTroperson",
        id: "tropey",
        type: "pc",
        species: ["dwarf"],
        occupation: ["champion"],
        physical: {
            gender: "male",
            eyeColor: "brown",
            hairColor: "black, graying, receding",
            height: "4\" 4'",
        },
        affiliations: [],
        aliases: [ "Weevil" ],
        description: [
            "<Character>Tropey McTroperson</Character> was a dwarven paladin who hailed from a small farming village. After finding himself in the mysterious <Location>Void Realm</Location>, he made it his mission to search its myriad worlds for jelly beans. He fell in battle, honorably sacrificing himself to save his friends from an alien monster."
        ],
        homeworld: "Ranch, Hidden Valley",
        images: {
            portrait: "img/party/tropey-toon.png"
        },
        plotRelevance: 3,
        status: "dead"
    },
    //#endregion Player Characters

    //#region Nelly / N.L.E. / NLE
    {
        name: "Althea Holimion",
        id: "owl",
        subtitle: "Tomb Appreciator",
        type: "nle",
        // species: ["wood elf"],
        species: ["???"],
        occupation: ["botanist"],
        physical: {
            gender: "female",
            eyeColor: "brown",
            hairColor: "brown",
            height: "5' 6\"",
            weight: "101 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "archaeologist, botanist", primary: true }
        ],
        aliases: [ "Owl" ],
        description: [
            "<Character>Althea Holimion</Character> (codename: Owl) serves as NLE's archaeologist and botany expert, in addition to standard scout work. Her last assignment lasted for several months and seems to have driven her a little batty. <Character>Cade</Character>, <Character>Doc</Character>, and <Character>Ella</Character> all seem to hold her in high regard."
        ],
        // homeworld: "Geoss",
        images: {
            portrait: "img/npc/althea.png"
        },
        relationships: {
            closeFriends: [
                { idOrName: "doc" },
                { idOrName: "cade" },
                { idOrName: "ella" },
                { idOrName: "ferret" },
            ],
        },
        spotify: {
			primaryPlaylistID: "2OmclIVxqvgE0EVfbz8E1O"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Boo",
        id: "boo",
        subtitle: "Done Rolling Over",
        type: "nle",
        species: ["canine"],
        occupation: ["telepath"],
        physical: {
            gender: "male",
            eyeColor: "brown",
            hairColor: "light tan",
            height: "1' 11\"",
            weight: "75 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "scout", primary: true }
        ],
        aliases: ["Wolf"],
        description: [
            "<Character>Boo</Character> is a telepathic, telekinetic dog we met in the <Location>Big Apple</Location>. He is one of <Important>NLE</Important>'s foremost scouts."
        ],
        // homeworld: "Golarion",
        images: {
            portrait: "img/npc/boo.jpg"
        },
        relationships: {
            closeFriends: [
                { idOrName: "ella", label: "surrogate daughter" },
            ],
        },
        spotify: {
			primaryPlaylistID: "3kzkDLLYRRU5IYoreptAHH"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Cade Brightcloak",
        id: "cade",
        type: "nle",
        species: ["halfling"],
        occupation: ["cleric"],
        physical: {
            gender: "male",
            eyeColor: "blue",
            hairColor: "blonde",
            height: "3' 3\"",
            weight: "34 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "scout", primary: true }
        ],
        aliases: ["Penguin", "Destiny's Child", "Hedge Knight"],
        description: [
            "<Character>Cade Brightcloak</Character> is an amicable knight we met in <Location>Wonderland</Location>. He operates as a scout for <Important>NLE</Important>.",
            "He is a devout adherent of the Cerulean Star."
        ],
        // homeworld: "Clovershire, Geoss",
        images: {
            portrait: "img/npc/cade-2.png"
        },
        relationships: {
            closeFriends: [
                { idOrName: "owl" },
                { idOrName: "ella" },
                { idOrName: "nortle" },
            ],
            family: [
                { idOrName: "tero", label: "wife" },
                { idOrName: "Warrick Brightcloak", label: "adopted grandfather", status: "dead" },
            ]
        },
        spotify: {
            primaryPlaylistID: "0YDhh8WNrOxEKDQ1LJe8B7"
        },
        plotRelevance: 3,
        status: "alive"
    },
    {
        name: "Dr. Emmet Brown",
        id: "doc",
        subtitle: "The Brains",
        type: "nle",
        species: ["human"],
        occupation: ["inventor"],
        physical: {
            gender: "male",
            eyeColor: "white",
            hairColor: "brown",
            height: "6' 1\"",
            weight: "170 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "inventor, brains", primary: true }
        ],
        aliases: [ "Doc" ],
        description: [
            "<Character>Doc</Character> is a peerless inventor whose experiencing with specialized, flying vehicles seems to predate his entry into Voidspace. He travels in a vessel he created himself: The Light Train III. He hasn't mentioned what happened to I and II."
        ],
        homeworld: "Hill Valley, Earth, 1895",
        images: {
            portrait: "img/npc/doc-brown.jpg"
        },
        relationships: {
            closeFriends: [
                { idOrName: "owl" },
                { idOrName: "ella" },
                { idOrName: "ferret" },
            ],
        },
        spotify: {
			primaryPlaylistID: "4bpGPq1jvlr1tirvdfZktT"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Ella Fitzpatrick",
        id: "ella",
        subtitle: "Manic Scientist",
        type: "nle",
        species: ["half-elf"],
        occupation: ["spellblade"],
        physical: {
            gender: "female",
            eyeColor: "blue",
            hairColor: "blonde",
            height: "5' 8\"",
            weight: "130 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "diplomat, zoologist, apprentice scout", primary: true }
        ],
        aliases: ["Hummingbird"],
        description: [
            "<Character>Ella</Character> is an excitable young scholar we first encountered in the <Location>Big Apple</Location>. She serves as <Important>NLE</Important>'s zoologist, and is currently apprenticed to <Character>Boo</Character> to prepare for solo fieldwork."
        ],
        // homeworld: "Hyrule",
        images: {
            portrait: "img/npc/ella-portrait.png"
        },
        relationships: {
            closeFriends: [
                { idOrName: "boo" },
                { idOrName: "owl" },
                { idOrName: "cade" },
                { idOrName: "doc" },
                { idOrName: "NLE Agent Puma", label: "boyfriend" },
            ],
        },
        spotify: {
			primaryPlaylistID: "6PnEtmLnApjcnJoNn45Hxn"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Nortle",
        id: "nortle",
        type: "nle",
        species: ["tortle"],
        occupation: ["bartender"],
        physical: {
            gender: "male",
            eyeColor: "black",
            height: "5' 5\"",
            weight: "450 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "co-founder", role: "courier & 2nd in command", primary: true }
        ],
        aliases: ["Gramps"],
        description: [
            "<Character>Nortle</Character> is the jovial proprietor of the <Location>Happy Turtle</Location>. His tavern makes the perfect cover for his secretive work as <Important>NLE</Important>'s courier."
        ],
        // homeworld: "Golarion",
        images: {
            portrait: "img/npc/nortle.png"
        },
        spotify: {
			primaryPlaylistID: "3Jydeg4IHMy5kFr4BbMtxx"
        },
        plotRelevance: 3,
        status: "alive"
    },
    {
        name: "Vilyth Koehlanna",
        id: "ferret",
        subtitle: "Professional Dumpster Diver",
        type: "nle",
        species: ["drow"],
        occupation: ["mechanic"],
        physical: {
            gender: "female",
            eyeColor: "purple",
            hairColor: "white",
            height: "4' 9\"",
            weight: "79 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "armorer, mechanic" },
            { name: "Koehl's", rank: "owner", role: "proprietor", primary: true }
        ],
        aliases: [ "Ferret" ],
        description: [
            "<Character>Vilyth Koehlanna</Character> is a rare talent at working with magitech - a fact she is unapologetically proud of. She is the owner and sole employee of an arms dealer named <l>Koehl's</l>, located on <Location>Battle World</Location>."
        ],
        // homeworld: "Geoss",
        images: {
            portrait: "img/npc/vilyth.png"
        },
        relationships: {
            closeFriends: [
                { idOrName: "owl" },
                { idOrName: "doc" },
            ],
        },
        spotify: {
			primaryPlaylistID: "7zuezrk0cg70sjtSux8OpO"
        },
        plotRelevance: 2,
        status: "alive"
    },

    //#endregion Nelly / N.L.E. / NLE

    //#region Misc
    {
        name: "Marlowe",
        id: "marlowe",
        subtitle: "Friend. Maybe best friend.",
        type: "other",
        species: ["unknown"],
        occupation: ["unknown"],
        physical: {
            gender: "male",
            eyeColor: "black",
            hairColor: "cream",
            height: "0' 11\"",
            weight: "9 lbs."
        },
        affiliations: [
            // { name: "NLE", rank: "member", role: "armorer, mechanic" }
        ],
        description: [
            "<Character>Marlowe</Character> is super cool, and you should definitely not be angry if you ever find out that he has been following you since you first came to the <Location>Void Realm</Location>. Cookies, yes! You should give him cookies. Made with Kupo Nuts."
        ],
        // homeworld: "Velarys",
        images: {
            portrait: "img/npc/marlowe-2.webp"
        },
        spotify: {
			primaryPlaylistID: "3XuOO1FOLPO9Ptn3h8daeL"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        // name: "Nihil",
        name: "???",
        id: "nihil",
        subtitle: "The Father of Decay? Maybe the Father of Void?",
        type: "other",
        species: ["unknown"],
        occupation: ["unknown"],
        physical: {
            gender: "male",
            eyeColor: "black",
            hairColor: "white",
            height: "???",
            weight: "???"
        },
        affiliations: [ ],
        description: [
            "<Character>This guy</Character> is pretty dang scary, kupo. Let's not go near him any more."
        ],
        // homeworld: "Geoss",
        images: {
            portrait: "img/npc/unknown.png"
        },
        plotRelevance: 2,
        status: "alive"
    },
    //#endregion Misc
];