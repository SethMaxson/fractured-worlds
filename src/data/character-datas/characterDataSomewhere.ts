import type { ICharacterData } from "@/interfaces/ICharacterData";

/** A location-specific set of character profiles.
 * Some records contain information that is not yet known to the players, which is currently commented out.
 */
export const SomewhereCharacterDatas: ICharacterData[] = [
    {
        // name: "Kenji Cherrymoon",
        name: "Kenny Cobblerock",
        id: "somewhere-kenny",
        type: "location",
        species: ["halfling"],
        occupation: ["dockworker"],
        affiliations: [ ],
        description: [
            "<Character>Kenny Cobblerock</Character> is a friendly dockworker in the city of <Location>Somewhere</Location>. His knowledge of events in and out of Somewhere is impressive even for someone who regularly interacts with sailors."
        ],
        location: "somewhere",
        images: {
            thumbnail: "img/npc/kenji-toon.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Bowuf",
        id: "somewhere-bowuf",
        type: "location",
        species: ["burrowfolk"],
        occupation: ["cobbler"],
        affiliations: [ ],
        description: [
            "<Character>Bowuf</Character> is an astoundingly elderly mole man. The heroes rescued him from Blanks when he wandered into the <Location>2nd District of Somewhere</Location>. He promised them each a free pair of shoes as a way to express his gratitude."
        ],
        location: "somewhere",
        images: {
            thumbnail: "img/tokens/Molefolk3.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Portia 'Jamjar' Fiddlewick",
        id: "somewhere-portia",
        type: "location",
        species: ["halfling"],
        occupation: ["journalist"],
        affiliations: [ ],
        description: [
            "<Character>Portia</Character> is a scrappy, fast-talking reporter and the head editor of <Location>Somewhere's</Location> newspaper, <Important>The Happs</Important>. A misunderstanding led to her running a story about <Character>Li'l Phil</Character> eating his parents, but she has since printed a retraction. "
        ],
        location: "somewhere",
        images: {
            thumbnail: "img/npc/portia-toon.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
    {
        name: "Throden",
        id: "somewhere-throden",
        type: "location",
        species: ["dragonborn"],
        occupation: ["merchant"],
        affiliations: [ ],
        description: [
            "<Character>Throden</Character> runs Somewhere's general store, the <Location>Copper General</Location>. He has a fondness for haggling and is determined to one day see <Character>C.O.B.B.</Character> master the art (or at least fully comprehend it)."
        ],
        location: "somewhere",
        images: {
            thumbnail: "img/npc/throden.png"
        },
        plotRelevance: 1,
        status: "alive"
    },
]