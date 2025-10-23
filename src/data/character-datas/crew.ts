import type { ICharacterData } from "@/interfaces/ICharacterData";

/** A set of character profiles for the crew of the party's Lightship.
 * Some records contain information that is not yet known to the players, which is currently commented out.
 */
export const CrewCharacterDatas: ICharacterData[] = [

    //#region Favorites
    {
        name: "Ootah",
        id: "ootah",
        subtitle: "\"Captain\" of the Brightside",
        type: "crew",
        species: ["orc"],
        occupation: ["Captain of the Brightside"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "\"Captain\"", joined: "04/02/0001", left: "08/28/0001" }
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
        status: "dead"
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
        homeworld: "Velarys",
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
    //#endregion Favorites

    //#region The Rest
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
    //#endregion The Rest

    //#region Yoshis
    {
        name: "Blackshi",
        id: "yoshi-black",
        subtitle: "Fashion, Baby",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", primary: true }
        ],
        description: [
            "<Character>Blackshi</Character> is a juvenile Yoshi and <Character>C.O.B.B.</Character>'s ward. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-black.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Boshi",
        id: "yoshi-blue",
        subtitle: "The best around",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", primary: true }
        ],
        description: [
            "<Character>Boshi</Character> is a juvenile Yoshi and <Character>Li'l Phil</Character>'s ward. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-blue.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Ted",
        id: "yoshi-green",
        subtitle: "From the Top Rope",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", primary: true }
        ],
        description: [
            "<Character>Ted</Character> is a juvenile Yoshi and <Character>Izzy</Character>'s ward. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-green.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Alfie",
        id: "yoshi-light-blue",
        subtitle: "hall monitor",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", primary: true }
        ],
        description: [
            "<Character>Alfie</Character> is a juvenile Yoshi and <Character>Li'l Phil</Character>'s ward. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-light-blue.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Lychee",
        id: "yoshi-pink",
        subtitle: "Footloose",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", primary: true }
        ],
        description: [
            "<Character>Lychee</Character> is a juvenile Yoshi and <Character>Tero</Character>'s ward. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-pink.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Bill",
        id: "yoshi-red",
        subtitle: "bookworm",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", primary: true }
        ],
        description: [
            "<Character>Bill</Character> is a juvenile Yoshi and <Character>Izzy</Character>'s ward. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-red.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Bowie",
        id: "yoshi-yellow",
        subtitle: "chillmaxxing",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", primary: true }
        ],
        description: [
            "<Character>Bowie</Character> is a juvenile Yoshi and <Character>Tero</Character>'s ward. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-yellow.png"
        },
        plotRelevance: 1,
        status: "alive"
    },

    {
        name: "Whiteshi",
        id: "yoshi-white",
        subtitle: "fifth gear",
        type: "crew",
        species: ["yoshi"],
        occupation: ["yoshi"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/10/0001", left: "07/13/0001" }
        ],
        description: [
            "<Character>Whiteshi</Character> is a juvenile Yoshi and a former ward of <Character>C.O.B.B.</Character>'s. We hatched the cute little creature after rescuing its egg from being crushed by a giant plant monster in <Location>Dinosaur Land</Location>. We left him behind on <Important>CinderSludge Isle</Important> as it sank into the seas near <l>Berk</l>. We haven't seen him since."
        ],
        homeworld: "Dinosaur Land, Mushroom World",
        images: {
            thumbnail: "img/tokens/yoshi-white.png"
        },
        plotRelevance: 1,
        status: "unknown"
    },
    //#endregion Yoshis

]