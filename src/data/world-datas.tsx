import type { IWorldData } from "@/interfaces/IWorldData";

/** Used to create a standardized set of world profiles that can be accessed from any page.
 * Some records contain information that is not yet known to the players, which is currently commented out.
 * TODO: Finish migrating the hardcoded data in world pages into this array.
 */
export const WorldDatas: IWorldData[] = [
    {
        name: "Somewhere",
        id: "somewhere",
        description: [],
        oneLiner: "Our home away from home.",
        quote: "In times likes these, it's nice to have somewhere to call home.",
        details: {
            anchor: "?",
            timeType: "standard",
        },
        images: {
            token: "img/worlds/somewhere.png",
        },
        people: {

        }
    },
    {
        name: "Wonderland",
        id: "wonderland",
        description: ["A nonsensical, dreamlike world inhabited by myriad weird creatures."],
        // oneLiner: "A nonsensical, dreamlike world inhabited by myriad weird creatures.",
        quote: "We're all mad here.",
        details: {
            anchor: "Depths of the Hedge Maze",
            kindredWorlds: ["Land of Oz", "?"],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/wonderland.png",
            wallpaper: "img/reference/wonderland.jpg",
        },
        people: {
            pureSoul: "Alice",
        }
    }
];