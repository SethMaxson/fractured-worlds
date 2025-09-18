import type ICharacterData from "@/interfaces/ICharacterData";

/** Not yet used for anything. May eventually be used to create a standardized set of character modals that can be accessed from any page. */
export const CharacterDatas: ICharacterData[] = [
    {
        name: "C.O.B.B.",
        id: "cobb",
        species: ["android"],
        occupation: ["monk"],
        affiliations: [],
        description: [
            "<Character>Construct Observing Biological Boundaries</Character>, or <Character>C.O.B.B.</Character>, is a gifted martial artist who is fascinated by the biological concept of mortality. With a mind as powerful as his blows, he seeks to unravel the mysteries of the <Location>Void Realm</Location>."
        ],
        homeworld: "Golarion",
        images: {
            thumbnail: "img/party/cobb-toon.png"
        },
        plotRelevance: 3
    },
    {
        name: "Li'l Phil Antonio",
        id: "lil_phil",
        species: ["centaur"],
        occupation: ["sorcerer"],
        affiliations: [
            { name: "N.L.E.", rank: "scout", primary: true },
            { name: "Freelance Police", rank: "junior detective" }
        ],
        description: [
            "<Character>Li'l Phil Antonio</Character> is a manic, unpredictable sorcerer whose purple skin makes him an oddity even among other centaurs. He was raised by a trio of witches and now seeks to find his place in the universe. His aloof tendencies naturally blend with the	curious magic that flows within his veins to make Li'l Phil the ultimate agent of chaos."
        ],
        homeworld: "Wildwood Forest",
        images: {
            thumbnail: "img/party/phil-toon.png"
        },
        plotRelevance: 3
    },
    {
        name: "Tero",
        id: "tero",
        species: ["kitsune"],
        occupation: ["kineticist"],
        affiliations: [
            { name: "N.L.E.", rank: "scout", primary: true },
            { name: "Freelance Police", rank: "junior detective" }
        ],
        description: [
            "<Character>Tero</Character> is a gifted student of the elements with an appetite for strength seemingly rivaled only by her appetite for new experiences. She grew up in isolation deep within the <Location>Forest of Spirits</Location>, surrounded by snow and evergreen trees."
        ],
        homeworld: "Golarion",
        images: {
            thumbnail: "img/party/tero-kawaii.png"
        },
        plotRelevance: 3
    },
    {
        name: "Tropey McTroperson",
        id: "tropey",
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
        plotRelevance: 3
    }
];