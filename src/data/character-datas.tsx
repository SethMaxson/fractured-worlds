import type { ICharacterData } from "@/interfaces/ICharacterData";

/** Not yet used for anything. May eventually be used to create a standardized set of character modals that can be accessed from any page. */
export const CharacterDatas: ICharacterData[] = [
    //#region Player Characters
    {
        name: "C.O.B.B.",
        id: "cobb",
        type: "pc",
        species: ["android"],
        occupation: ["monk"],
        physical: {
            eyeColor: "brown",
            hairColor: "brown",
            height: "6' 2\"",
            weight: "~200 lbs."
        },
        affiliations: [],
        description: [
            "<Character>Construct Observing Biological Boundaries</Character>, or <Character>C.O.B.B.</Character>, is a gifted martial artist who is fascinated by the biological concept of mortality. With a mind as powerful as his blows, he seeks to unravel the mysteries of the <Location>Void Realm</Location>."
        ],
        homeworld: "Golarion",
        images: {
            thumbnail: "img/party/cobb-toon.png"
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
            "<Character>Izzy</Character> is a chill guy from a world where necromancers rule with an iron fist (and an army of reanimated corpses). He really likes heavy metal music."
        ],
        homeworld: "Necroworld",
        images: {
            thumbnail: "img/party/ozzy.png"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Li'l Phil Antonio",
        id: "phil",
        type: "pc",
        species: ["centaur"],
        occupation: ["sorcerer"],
        physical: {
            eyeColor: "purple",
            hairColor: "purple",
            height: "6' 1\"",
            weight: "~650 lbs."
        },
        affiliations: [
            { name: "N.L.E.", rank: "member", role: "scout", primary: true },
            { name: "Freelance Police", rank: "junior detective" }
        ],
        description: [
            "<Character>Li'l Phil Antonio</Character> is a manic, unpredictable sorcerer whose purple skin makes him an oddity even among other centaurs. He was raised by a trio of witches and now seeks to find his place in the universe. His aloof tendencies naturally blend with the	curious magic that flows within his veins to make Li'l Phil the ultimate agent of chaos."
        ],
        homeworld: "Wildwood Forest",
        images: {
            thumbnail: "img/party/phil-toon.png"
        },
        plotRelevance: 3,
        status: "alive"
    },
    {
        name: "Tero",
        id: "tero",
        type: "pc",
        species: ["kitsune"],
        occupation: ["kineticist"],
        physical: {
            eyeColor: "purple",
            hairColor: "white",
            height: "5' 2\"",
            weight: "90 lbs."
        },
        affiliations: [
            { name: "N.L.E.", rank: "member", role: "scout", primary: true },
            { name: "Freelance Police", rank: "junior detective" }
        ],
        description: [
            "<Character>Tero</Character> is a gifted student of the elements with an appetite for strength seemingly rivaled only by her appetite for new experiences. She grew up in isolation deep within the <Location>Forest of Spirits</Location>, surrounded by snow and evergreen trees."
        ],
        homeworld: "Golarion",
        images: {
            thumbnail: "img/party/tero-kawaii.png"
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
        affiliations: [],
        description: [
            "<Character>Tropey McTroperson</Character> is a dwarven paladin who hails from a small farming village. After finding himself in the mysterious <Location>Void Realm</Location>, he made it his mission to search its myriad worlds for jelly beans."
        ],
        homeworld: "Hidden Valley",
        images: {
            thumbnail: "img/party/tropey-toon.png"
        },
        plotRelevance: 3,
        status: "dead"
    },
    //#endregion Player Characters

    //#region Nelly / N.L.E. / NLE
    {
        name: "Boo",
        id: "boo",
        type: "nle",
        species: ["canine"],
        occupation: ["telepath"],
        physical: {
            eyeColor: "brown",
            hairColor: "light tan",
            height: "1' 11\"",
            weight: "75 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "scout", primary: true }
        ],
        description: [
            "<Character>Boo</Character> is a telepathic, telekinetic dog we met in the <Location>Big Apple</Location>. He is one of <Important>NLE</Important>'s foremost scouts."
        ],
        // homeworld: "Golarion",
        images: {
            thumbnail: "img/npc/boo.png"
        },
        playlistID: "3kzkDLLYRRU5IYoreptAHH",
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
            eyeColor: "blue",
            hairColor: "blonde",
            height: "3' 3\"",
            weight: "34 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "scout", primary: true }
        ],
        description: [
            "<Character>Cade Brightcloak</Character> is an amicable knight we met in <Location>Wonderland</Location>. He operates as a scout for <Important>NLE</Important>",
            "He is a devout adherent of the Cerulean Star."
        ],
        homeworld: "Geoss",
        images: {
            thumbnail: "img/npc/cade-toon.png"
        },
        playlistID: "0YDhh8WNrOxEKDQ1LJe8B7",
        plotRelevance: 3,
        status: "alive"
    },
    {
        name: "Ella Fitzpatrick",
        id: "ella",
        type: "nle",
        species: ["half-elf"],
        occupation: ["spellblade"],
        physical: {
            eyeColor: "blue",
            hairColor: "blonde",
            height: "5' 8\"",
            weight: "130 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "member", role: "zoologist, apprentice scout", primary: true }
        ],
        description: [
            "<Character>Ella</Character> is an excitable young scholar we first encountered in the <Location>Big Apple</Location>. She serves as <Important>NLE</Important>'s zoologist, and is currently apprenticed to <Character>Boo</Character> to prepare for solo fieldwork."
        ],
        // homeworld: "Hyrule",
        images: {
            thumbnail: "img/npc/ella.png"
        },
        playlistID: "6PnEtmLnApjcnJoNn45Hxn",
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
            eyeColor: "black",
            height: "5' 5\"",
            weight: "450 lbs."
        },
        affiliations: [
            { name: "NLE", rank: "co-founder", role: "courier & 2nd in command", primary: true }
        ],
        description: [
            "<Character>Nortle</Character> is the jovial proprietor of the <Location>Happy Turtle</Location>. His tavern makes the perfect cover for his secretive work as <Important>NLE</Important>'s courier."
        ],
        // homeworld: "Golarion",
        images: {
            thumbnail: "img/npc/nortle.png"
        },
        playlistID: "3Jydeg4IHMy5kFr4BbMtxx",
        plotRelevance: 3,
        status: "alive"
    },

    //#endregion Nelly / N.L.E. / NLE

    //#region Player Crew
    {
        name: "Flavio de Mota",
        id: "flavio",
        type: "crew",
        species: ["human"],
        occupation: ["stylist"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Stylist", joined: "07/18/0001", primary: true }
        ],
        description: [
            "<Character>Flavio</Character> is a distractingly fashionable person from some place called <Location>Portugal</Location>. I can't actually tell what gender they are, and I'm too afraid to ask, kupo."
        ],
        // homeworld: "1700s Portugal",
        images: {
            thumbnail: "img/npc/flavio.png"
        },
        playlistID: "3sqnhw5mDTdrcmhwXYOjiF",
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Matthew Law",
        id: "matthew-law",
        type: "crew",
        species: ["human"],
        occupation: ["bounty hunter"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/18/0001", primary: true }
        ],
        description: [
            "<Character>Law</Character> is a space cowboy who likes to shoot first and ask questions never."
        ],
        // homeworld: "Space Cowboy future",
        images: {
            thumbnail: "img/npc/matthew-law.png"
        },
        playlistID: "1TJ5Hl7QbBhFvKAO6Ogv1D",
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Susie",
        id: "susie",
        type: "crew",
        species: ["android"],
        occupation: ["assassin"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/06/0001", primary: true }
        ],
        description: [
            "<Character>Susie</Character> is a <Important>RoBro</Important> created from a partial brain-scan of <Character>Rose (Lethal Lady #2)</Character>. However, a manufacturing defect has given her more freewill than intended, allowing her to express a strong dislike of violence."
        ],
        homeworld: "Weapon World",
        images: {
            thumbnail: "img/npc/susie.png"
        },
        playlistID: "4XeEQwogXECnNaDGhnkJ4A",
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Winter Duskward",
        id: "winter",
        subtitle: "Mystical Child",
        type: "crew",
        species: ["human"],
        occupation: ["mage", "child"],
        physical: {
            eyeColor: "teal",
            height: "4' 2\"",
            weight: "50 lbs."
        },
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Mage/Child", joined: "09/28/0001", primary: true }
        ],
        description: [
            "<Character>Winter</Character> is an 11-year-old mage who rarely speaks due to her crippling shyness."
        ],
        // homeworld: "Final Fantasy G",
        images: {
            thumbnail: "img/npc/winter.png"
        },
        playlistID: "0zyxK6W0ROxoCzmHsCW9zS",
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Zuzu",
        id: "zuzu",
        subtitle: "Mystical Child",
        type: "crew",
        species: ["shadow person"],
        occupation: ["mage", "child"],
        physical: {
            eyeColor: "blue",
            height: "4' 0\"",
            weight: "50 lbs."
        },
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Mage/Child", joined: "06/02/0001", primary: true }
        ],
        description: [
            "<Character>Zuzu</Character> is a young wizard of indeterminate species and a former slave. He looks to be anywhere between 8-10 years old but has memories of only half of that. He aspires to be just like his idol, \"Wizard Nelson\"."
        ],
        // homeworld: "Final Fantasy G",
        images: {
            thumbnail: "img/npc/zuzu.png"
        },
        playlistID: "0P1Ckwy19TthbbCWApONXF",
        plotRelevance: 2,
        status: "alive"
    },
    //#endregion Player Crew

    //#region Rebirth Caucus
    
    //#endregion Rebirth Caucus
];