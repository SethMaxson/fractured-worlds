import type { ICharacterData } from "@/interfaces/ICharacterData";
import { SomewhereCharacterDatas } from "./character-datas/somewhere";

/** Used to create a standardized set of character profiles that can be accessed from any page.
 * Some records contain information that is not yet known to the players, which is currently commented out.
 * TODO: Finish migrating the hardcoded data in character pages into this array.
 */
export const CharacterDatas: ICharacterData[] = SomewhereCharacterDatas.concat([
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
        spotify: {
			primaryPlaylistID: "1wlvh0bWnBozYO9pLubU0g"
        },
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
        spotify: {
			primaryPlaylistID: "18Gq2lmW0vhZhUOEqMgVDx"
        },
        images: {
            thumbnail: "img/party/phil-toon.png"
        },
        plotRelevance: 3,
        status: "alive"
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
        spotify: {
			primaryPlaylistID: "1CtXuwGctAYed6N5FcWNdT"
        },
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
            thumbnail: "img/party/tropey-toon.png"
        },
        plotRelevance: 3,
        status: "dead"
    },
    //#endregion Player Characters

    //#region Nelly / N.L.E. / NLE
    {
        // name: "Althea Holimion",
        name: "Owl",
        id: "owl",
        subtitle: "Tomb Appreciator",
        type: "nle",
        // species: ["elf"],
        species: ["???"],
        occupation: ["botanist"],
        // physical: {
        //     gender: "female",
        //     eyeColor: "brown",
        //     hairColor: "brown",
        //     height: "5' 6\"",
        //     weight: "101 lbs."
        // },
        affiliations: [
            { name: "NLE", rank: "member", role: "archaeologist, botanist", primary: true }
        ],
        aliases: [ "Owl" ],
        description: [
            "<Character>Owl</Character> (we don't know her real name) serves as NLE's archaeologist and botany expert, in addition to standard scout work. <Character>Cade</Character>, <Character>Doc</Character>, and <Character>Ella</Character> all seem to hold her in high regard."
        ],
        // homeworld: "Geoss",
        images: {
            // thumbnail: "img/npc/vilyth.png"
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
            thumbnail: "img/npc/boo.png"
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
            thumbnail: "img/npc/cade-toon.png"
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
            thumbnail: "img/npc/doc-brown.jpg"
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
            { name: "NLE", rank: "member", role: "zoologist, apprentice scout", primary: true }
        ],
        aliases: ["Hummingbird"],
        description: [
            "<Character>Ella</Character> is an excitable young scholar we first encountered in the <Location>Big Apple</Location>. She serves as <Important>NLE</Important>'s zoologist, and is currently apprenticed to <Character>Boo</Character> to prepare for solo fieldwork."
        ],
        // homeworld: "Hyrule",
        images: {
            thumbnail: "img/npc/ella.png"
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
            thumbnail: "img/npc/nortle.png"
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
            thumbnail: "img/npc/vilyth.png"
        },
        spotify: {
			primaryPlaylistID: "7zuezrk0cg70sjtSux8OpO"
        },
        plotRelevance: 2,
        status: "alive"
    },

    //#endregion Nelly / N.L.E. / NLE

    //#region Player Crew
    {
        name: "Bebop",
        id: "bebop",
        type: "crew",
        species: ["mutant"],
        occupation: ["enforcer"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Master Gunner", joined: "06/02/0001", primary: true }
        ],
        description: [
            "<Character>Bebop</Character> is a mutant boar who once worked for a variant of Shredder in a world similar to the Big Apple. What he lacks in brains he makes up for with muscle and aggression. He seems to have formed an almost sibling-like bond with Ootah."
        ],
        homeworld: "New York City, Earth, 1991",
        images: {
            thumbnail: "img/npc/bebop.png"
        },
        spotify: {
			primaryPlaylistID: "3dZixNJssPoe8l0Ads4xyf"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "\"Blackhand\" Roo",
        id: "blackhand-roo",
        subtitle: "Train Mechanic",
        type: "crew",
        species: ["kangaroo"],
        occupation: ["train mechanic"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Engineer", joined: "06/02/0001", primary: true }
        ],
        description: [
            "<Character>\"Blackhand\" Roo</Character> is an experienced train mechanic who briefly worked as the president of a railway company. His years working with locomotives seem to have allowed him to get to grips with <Important>The Brightside</Important>'s complex engine."
        ],
        homeworld: "Ashdown Forest, Anelima",
        images: {
            thumbnail: "img/npc/blackhand-roo.png"
        },
        spotify: {
			primaryPlaylistID: "2tLNqr6RYVensjhMUY51ek"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Carrie Ward",
        id: "carrie-ward",
        type: "crew",
        species: ["human"],
        occupation: ["nurse"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Nurse", joined: "04/21/0001", primary: true }
        ],
        description: [
            "<Character>Carrie Ward</Character> is a forty-five-year-old licensed nurse who arrived in <Location>Somewhere</Location> after her home, a variant of 1970's <Location>Earth</Location> was destroyed. She was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech."
        ],
        homeworld: "USA, Earth, 1977",
        images: {
            thumbnail: "img/npc/carrie-ward.webp"
        },
        spotify: {
			primaryPlaylistID: "3hT0RyxhMAKPf84X2WHnv6"
        },
        plotRelevance: 1,
        status: "alive"
    },
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
        homeworld: "Portugal, Earth, 1700s",
        images: {
            thumbnail: "img/npc/flavio.png"
        },
        spotify: {
			primaryPlaylistID: "3sqnhw5mDTdrcmhwXYOjiF"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Gugg",
        id: "gugg",
        type: "crew",
        species: ["neanderthal"],
        occupation: ["hunter"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "06/02/0001", primary: true }
        ],
        description: [
            "<Character>Gugg</Character> is a surprisingly soft-spoken caveman who seems to embody the phrase \"speak softly and carry a big stick]\". He has a prosthetic right leg."
        ],
        homeworld: "Earth, prehistory",
        images: {
            thumbnail: "img/npc/gugg.png"
        },
        spotify: {
			primaryPlaylistID: "4KuWI0li6sA2naX6yISYZ3"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Duvamil \"Hamisfore\" Turen",
        id: "hamisfore",
        subtitle: "Literally too Angry to Die",
        type: "crew",
        species: ["gnome"],
        occupation: ["Quartermaster of the Brightside"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Quartermaster", joined: "04/02/0001", primary: true }
        ],
        description: [
            "<Character>Hamisfore</Character> is a brightly colored, middle-aged gnomish woman whose 'crazy aunt' energy hides a world-weary heart. Recruited after facing her in gladiatorial combat in <Location>Somewhere</Location>."
        ],
        // homeworld: "generic fantasy",
        images: {
            thumbnail: "img/npc/hamisfore-toon.png"
        },
        spotify: {
			primaryPlaylistID: "0D5V8wlr6jXSG9Zkxo9WGH"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Joey Morton",
        id: "joey-morton",
        subtitle: "Mall Cop",
        type: "crew",
        species: ["human"],
        occupation: ["security guard"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "06/02/0001", primary: true }
        ],
        description: [
            "<Character>Joey Morton</Character> is a human woman from a kingdom known as Scotland in an Earth variant. She is an avid 'gamer', which apparently means she obsessively collects and plays things called 'video games'."
        ],
        // drive: "play ever good video game",
        homeworld: "Scotland, Earth, 1998",
        images: {
            thumbnail: "img/npc/joey-morton-cropped.png"
        },
        spotify: {
			primaryPlaylistID: "5ke9F1xiKQPtsdNTetNYet"
        },
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
        spotify: {
			primaryPlaylistID: "1TJ5Hl7QbBhFvKAO6Ogv1D"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Ootah",
        id: "ootah",
        subtitle: "\"Captain\" of the Brightside",
        type: "crew",
        species: ["orc"],
        occupation: ["Captain of the Brightside"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "\"Captain\"", joined: "04/02/0001", primary: true }
        ],
        aliases: [ "Ootah the Great", "Ootah the Awesome", "High Warlord of Candy World" ],
        description: [
            "<Character>Ootah</Character> is a five-year-old orphan who believes herself to be the captain of the <Important>One More Day</Important>. She exhibits behavior that suggests extreme narcissism. Recruited after facing her in gladiatorial combat in <Location>Somewhere</Location>."
        ],
        drive: "find 'Candy World'",
        homeworld: "\"Nunya stinkin' business\"",
        images: {
            thumbnail: "img/npc/ootah.webp"
        },
        spotify: {
			primaryPlaylistID: "2oWa3ME4zPJGRTOMG3yXEh"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Per Schnorr",
        id: "per-schnorr",
        subtitle: "Spiritual Leader",
        type: "crew",
        species: ["human"],
        occupation: ["druid"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "06/02/0001", primary: true }
        ],
        description: [
            "<Character>Per Schnorr</Character> is a druid from the dark ages of one of the many <Location>Earths</Location>."
        ],
        homeworld: "Germanic tribelands, Earth, medieval period",
        images: {
            thumbnail: "img/npc/per.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Susie",
        id: "susie",
        type: "crew",
        species: ["android"],
        occupation: ["assassin"],
        physical: {
            gender: "female",
            eyeColor: "ice blue, illuminated",
            hairColor: "cyan",
            height: "5' 5\""
        },
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/06/0001", primary: true }
        ],
        aliases: [ "R-ACB3D9B21B21E299" ], 
        description: [
            "<Character>Susie</Character> is a <Important>RoBro</Important> created from a partial brain-scan of <Character>Rose (Lethal Lady #2)</Character>. However, a manufacturing defect has given her more freewill than intended, allowing her to express a strong dislike of violence."
        ],
        drive: "make as many friends as possible",
        homeworld: "Weapon World",
        images: {
            thumbnail: "img/npc/susie.png"
        },
        spotify: {
			primaryPlaylistID: "4XeEQwogXECnNaDGhnkJ4A"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        // name: "Winter Duskward",
        name: "Winter",
        id: "winter",
        subtitle: "Mystical Child",
        type: "crew",
        species: ["human"],
        occupation: ["mage", "child"],
        physical: {
            gender: "female",
            eyeColor: "teal",
            hairColor: "pinkish",
            height: "4' 2\"",
            weight: "50 lbs."
        },
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "08/28/0001", primary: true }
        ],
        aliases: [ "bastard", "burden", "disgrace", "half-breed", "Skipper", "Champ" ],
        description: [
            "<Character>Winter</Character> is an eleven-year-old mage who rarely speaks due to crippling shyness. Her attire suggests she came from a noble house."
        ],
        // homeworld: "Velarys",
        images: {
            thumbnail: "img/npc/winter2.png"
        },
        spotify: {
			primaryPlaylistID: "0zyxK6W0ROxoCzmHsCW9zS"
        },
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
            gender: "male",
            eyeColor: "blue",
            height: "4' 0\"",
            weight: "50 lbs."
        },
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "06/02/0001", primary: true },
            { name: "Zuzu Business", rank: "founder" }
        ],
        aliases: ["abomination", "monster", "shadow"],
        description: [
            "<Character>Zuzu</Character> is a young wizard of indeterminate species and a former slave. He looks to be anywhere between 8-10 years old but has memories of only half of that. He aspires to be just like his idol, <c>\"Wizard Nelson\"</c>."
        ],
        homeworld: "Velarys",
        images: {
            thumbnail: "img/npc/zuzu.png"
        },
        spotify: {
			primaryPlaylistID: "0P1Ckwy19TthbbCWApONXF",
            themeSong: "3MpK9vnxxgYvh0CNeGvx6G",
        },
        plotRelevance: 2,
        status: "alive"
    },
    //#endregion Player Crew

    //#region Rebirth Caucus
    
    //#endregion Rebirth Caucus
]);