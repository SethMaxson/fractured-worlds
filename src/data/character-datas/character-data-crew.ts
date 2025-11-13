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
        mental: {
            drive: "find 'Candy World'"
        },
        homeworld: "\"Nunya stinkin' business\"",
        images: {
            portrait: "img/npc/ootah.webp"
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
        mental: {
            drive: "make as many friends as possible"
        },
        homeworld: "Weapon World",
        images: {
            portrait: "img/npc/susie-portrait.png"
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
            portrait: "img/npc/winter.png"
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
            portrait: "img/npc/zuzu.png"
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
            portrait: "img/npc/bebop.png"
        },
        spotify: {
			primaryPlaylistID: "3dZixNJssPoe8l0Ads4xyf"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Betsy Boyle",
        id: "betsy-boyle",
        type: "crew",
        species: ["human"],
        occupation: ["aspiring food critic"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/18/0001", left: "08/08/0001", primary: true }
        ],
        description: [
            "<Character>Betsy Boyle</Character> was an odd fellow who dressed almost exclusively in beige. He was slain in the <im>Birthday Massacre<im>."
        ],
        images: {
            portrait: "img/npc/betsy-boyle.webp"
        },
        spotify: {
			primaryPlaylistID: "6VtzbnJH1xVswYYj4LkV1l"
        },
        plotRelevance: 1,
        status: "dead"
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
            portrait: "img/npc/blackhand-roo.png"
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
            portrait: "img/npc/carrie-ward.webp"
        },
        spotify: {
			primaryPlaylistID: "3hT0RyxhMAKPf84X2WHnv6"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Elaim Trueblood",
        id: "elaim-trueblood",
        subtitle: "Stand-up Comic",
        type: "crew",
        species: ["dwarf"],
        occupation: ["aspiring comedian"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "07/18/0001", left: "08/08/0001", primary: true }
        ],
        description: [
            "<Character>Elaim Trueblood</Character> was an aspiring comedian. He was slain in the <im>Birthday Massacre<im>."
        ],
        images: {
            portrait: "img/npc/elaim-trueblood.png"
        },
        spotify: {
			primaryPlaylistID: "6ZG6fD4sCUSyxlPqWFilTB"
        },
        plotRelevance: 1,
        status: "dead"
    },
    {
        name: "Eva Davis",
        id: "eva-davis",
        type: "crew",
        species: ["human"],
        occupation: ["computer programmer"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "04/21/0001", left: "07/18/0001", primary: true }
        ],
        description: [
            "<Character>Eva Davis</Character> is a twenty-year-old computer programmer who worked for a company called 'Atari.' She arrived in <Location>Somewhere</Location> after her home, a variant of 1970's <Location>Earth</Location> was destroyed. She was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.",
            "Eva amicably left the crew on 07/18/01 after Giuseppe, citing the close friendship they had developed during our travels. She wished us luck and asked us to come back and hang out some time."
        ],
        physical: {
            eyeColor: "gray",
            hairColor: "brown",
        },
        homeworld: "Earth, 1970s",
        images: {
            portrait: "img/npc/eva-davis.png"
        },
        spotify: {
			primaryPlaylistID: "2Na0W104SEoRDyc8Sz4Xdn"
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
        physical: {
            eyeColor: "blue",
            hairColor: "blonde",
            height: "5' 6\"",
            hotness: 9,
        },
        homeworld: "Portugal, Earth, 1700s",
        images: {
            portrait: "img/npc/flavio.png"
        },
        spotify: {
			primaryPlaylistID: "3sqnhw5mDTdrcmhwXYOjiF"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Giuseppe da Albiate",
        id: "giuseppe-da-albiate",
        type: "crew",
        species: ["human"],
        occupation: ["painter"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "04/21/0001", left: "07/18/0001", primary: true }
        ],
        description: [
            "<Character>Giuseppe da Albiate</Character> is an eighteen-year-old with a love of painting. He arrived in <Location>Somewhere</Location> after his home, a variant of <Location>Renaissance Italy</Location> was destroyed. He was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.",
            "Giuseppe amicably departed our crew on 07/18/01 after learning that an unstaffed <im>art gallery</im> opened in Somewhere. He thanked us for allowing him to serve with us, and invited to visit the gallery as often as we want."
        ],
        physical: {
            eyeColor: "hazel",
            hairColor: "brown",
        },
        homeworld: "Italy, Earth, Renaissance",
        images: {
            portrait: "img/npc/giuseppe.png"
        },
        spotify: {
			primaryPlaylistID: "6dNdYWCXEt3dFx3AectPGs"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Gloria Molloy",
        id: "gloria",
        subtitle: "Dystopian Squatter",
        type: "crew",
        species: ["human"],
        occupation: ["squatter"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "05/10/0001", left: "07/18/0001", primary: true }
        ],
        description: [
            "<Character>Gloria Molloy</Character> is a kind-hearted but jaded young woman from the slums of the <Location>Neon Coast</Location> with large gaps in her memory. She already had suspicions about something being wrong with her reality even before meeting the gang, and was consequently quick to adapt to <Location>The Void Realm</Location>."
        ],
        physical: {
            eyeColor: "blue",
            hairColor: "red",
        },
        homeworld: "Neon Coast",
        images: {
            portrait: "img/npc/gloria.jpg"
        },
        spotify: {
			primaryPlaylistID: "0HEWagioX9kGslrTmfRpZB"
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
            "<Character>Gugg</Character> is a surprisingly soft-spoken caveman who seems to embody the phrase \"speak softly and carry a big stick\". He has a prosthetic right leg."
        ],
        homeworld: "Earth, prehistory",
        images: {
            portrait: "img/npc/gugg.png"
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
            portrait: "img/npc/hamisfore-toon.png"
        },
        spotify: {
			primaryPlaylistID: "0D5V8wlr6jXSG9Zkxo9WGH"
        },
        plotRelevance: 2,
        status: "alive"
    },
    {
        name: "Hoots the Owl",
        id: "hoots",
        subtitle: "Jazz Musician",
        type: "crew",
        species: ["muppet"],
        occupation: ["jazz musician"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Musician", joined: "06/02/0001", left: "07/18/0001", primary: true }
        ],
        description: [
            "<Character>Hoots the Owl</Character> served aboard our vessel for one trial tour to review our vessel as a potential pleasure cruise for citizens of <Location>Somewhere</Location>. We parted amicably, but I'm pretty sure he review-bombed us, kupo."
        ],
        images: {
            portrait: "img/npc/hoots.png"
        },
        spotify: {
			primaryPlaylistID: "1EIfQZpQ9GDMuStubtJIRh"
        },
        plotRelevance: 1,
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
        mental: {
            drive: "play every good video game ever released"
        },
        homeworld: "Scotland, Earth, 1998",
        images: {
            // portrait: "img/npc/joey-morton-cropped.png"
            portrait: "img/npc/joey-morton-2.png"
        },
        spotify: {
			primaryPlaylistID: "5ke9F1xiKQPtsdNTetNYet"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "March Hare",
        id: "march-hare",
        type: "crew",
        species: ["rabbit"],
        occupation: ["Tea Party-goer"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "04/05/0001", left: "04/21/0001", primary: true }
        ],
        description: [
            "The <Character>March Hare</Character> was briefly a part of our crew after joining us in <Location>Wonderland</Location>. He has since retired to the <Location>Happy Turtle.</Location>"
        ],
        homeworld: "Wonderland",
        images: {
            portrait: "img/npc/march-hare.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Mardred Fireforge",
        id: "mardred-fireforge",
        type: "crew",
        species: ["duargar"],
        occupation: ["janitor"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Janitor", joined: "07/18/0001", left: "08/23/0001", primary: true }
        ],
        description: [
            "<Character>Mardred Fireforge</Character> was an elderly Duergar janitor with deep-seated racism and pro-slavery beliefs. She was accidentally slain by <c>Zuzu</c> in a botched attempt to rescue her during the <c>Cucu</c> crisis, though Zuzu remains oblivious to his role in her demise. <c>Tero</c> cut Madred's corpse into pieces and fed it down a garbage disposal after hearing her call Zuzu a dwarfish slur in her final moments."
        ],
        images: {
            portrait: "img/npc/mardred-fireforge.png"
        },
        spotify: {
			primaryPlaylistID: "27T9FxMOUdNGOSfTx0uFVY"
        },
        plotRelevance: 1,
        status: "dead"
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
            portrait: "img/npc/matthew-law.png"
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
            portrait: "img/npc/per.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Teacher Barbie",
        id: "teacher-barbie",
        type: "crew",
        species: ["barbie"],
        occupation: ["teacher"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Teacher", joined: "09/02/0001", primary: true }
        ],
        description: [
            "<c>Teacher Barbie</c> is an elementary school teacher from Barbieland. Phil attempted to recruit her to teach the wayward children we have accumulated, and she agreed after visiting our ship and becoming concerned at what she perceived as an unfit environment for children."
        ],
        mental: {
            drive: "\"mold the future to make it awesome\""
        },
        physical: {
            gender: "female",
            eyeColor: "blue",
            hairColor: "blonde",
            height: "5' 9\"",
        },
        homeworld: "Barbieland",
        images: {
            portrait: "img/npc/teacher-barbie.jpg"
        },
        spotify: {
			primaryPlaylistID: "1ASyetImCel4uTVua9BVLC"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Todd Jenkins",
        id: "todd-jenkins",
        subtitle: "SoundCloud Rapper",
        type: "crew",
        species: ["human"],
        occupation: ["aspiring rapper"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "04/21/0001", primary: true }
        ],
        aliases: ["TehLeroyJenkins"],
        description: [
            "<Character>Todd Jenkins</Character> is an aspiring musician from one of the variant <Location>Earths</Location>. He fell to <im>Emptiness</im>, but <c>C.O.B.B.</c> managed to restore his humanity. That makes Todd the first recorded case of somebody coming back after turning into a <im>Blank</im>. Isn't that cool?"
        ],
        mental: {
            drive: "become the most famous rapper to ever live",
        },
        physical: {
            eyeColor: "brown",
            hairColor: "brown",
        },
        homeworld: "Illinois, Earth, 2016 AD",
        images: {
            portrait: "img/npc/todd-jenkins.png"
        },
        spotify: {
			primaryPlaylistID: "0MD68ffLgJvFfygYY01S8l"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Tom Cox",
        id: "tom-cox",
        type: "crew",
        species: ["human"],
        occupation: ["folk singer"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "04/21/0001", left: "07/18/0001", primary: true }
        ],
        description: [
            "<Character>Tom Cox</Character> is a twenty-four-year-old aspiring folk singer who arrived in <Location>Somewhere</Location> after his home, a variant of 1960's <Location>Earth</Location> was destroyed. He was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.",
            "Tom amicably departed the crew on 07/18/01 as a result of several other crew members leaving, explaining that <im>The Brightside</im> had become a \"pickle jar\" and lacked \"eye candy\"."
        ],
        physical: {
            eyeColor: "brown",
            hairColor: "brown",
        },
        homeworld: "USA, Earth, 1960s",
        images: {
            portrait: "img/npc/tom-cox.webp"
        },
        spotify: {
			primaryPlaylistID: "6nn5hvMFwLnQCbjCh8dI24"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Tommy One",
        id: "tommy-one",
        subtitle: "Android Factory Reject",
        type: "crew",
        species: ["synth"],
        occupation: ["rebel"],
        affiliations: [
            { name: "Brightside Crew", rank: "member", role: "Deckhand", joined: "05/10/0001", left: "07/13/0001", primary: true }
        ],
        description: [
            "<Character>Tommy</Character> is a friendly synth who was sold at a discount due to a manufacturing error that resulted in him being far more simple-minded and impressionable than other \"Ledcis\" model units. He escaped the <Location>Neon Coast</Location> with the gang. He doesn't seem to comprehend the <Location>Void Realm</Location> or <Important>The Fracturing</Important>, instead believing that the gang is simply exploring outer space."
        ],
        physical: {
            eyeColor: "brown",
            hairColor: "brown",
        },
        homeworld: "Neon Coast",
        images: {
            portrait: "img/npc/tommy-one.png"
        },
        spotify: {
			primaryPlaylistID: "3F6SEwmMzY0iy940wNONtn"
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
            portrait: "img/npc/yoshi-black.png"
        },
        spotify: {
            primaryPlaylistID: "2xumMU5CzUQ0t5MNzn0lqk"
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
            portrait: "img/npc/yoshi-blue.jpg"
        },
        spotify: {
            primaryPlaylistID: "1VhLZOOpQ8v972e38DDtrS"
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
            portrait: "img/npc/yoshi-green.png"
        },
        spotify: {
            primaryPlaylistID: "7fFUqeeBg2UnVKvKVDaUYU"
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
            portrait: "img/npc/yoshi-light-blue.png"
        },
        spotify: {
            primaryPlaylistID: "2dLFjGAOvBzieCy2RMfMGG"
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
            portrait: "img/npc/yoshi-pink.png"
        },
        spotify: {
            primaryPlaylistID: "12n3g9L7k0FUi9kKdbaXhv"
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
            portrait: "img/npc/yoshi-red.png"
        },
        spotify: {
            primaryPlaylistID: "6aIdL3gKfZZ3BxfPUxvJ1r"
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
            portrait: "img/npc/yoshi-yellow.png"
        },
        spotify: {
            primaryPlaylistID: "3Mfud8wqdN42FqOZH12Q8C"
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
            portrait: "img/npc/yoshi-white.png"
        },
        spotify: {
            primaryPlaylistID: "4ur7MDXuqSwF3qbNwSRM9L"
        },
        plotRelevance: 1,
        status: "unknown"
    },
    //#endregion Yoshis

]