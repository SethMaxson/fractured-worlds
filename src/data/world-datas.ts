import type { IWorldData } from "@/interfaces/IWorldData";

/** Used to create a standardized set of world profiles that can be accessed from any page.
 * Some records contain information that is not yet known to the players, which is currently commented out.
 * TODO: Finish migrating the hardcoded data in world pages into this array.
 */
export const WorldDatas: IWorldData[] = [
    {
        name: "Somewhere",
        id: "somewhere",
        copy: {
            description: [],
            oneLiner: "Our home away from home.",
            quote: "In times likes these, it's nice to have somewhere to call home.",
        },
        details: {
            anchor: "?",
            timeType: "standard",
        },
        images: {
            token: "img/worlds/somewhere.png",
        },
        people: {
            allies: "Eva Davis, Giuseppe da Albiate, Tom Cox",
            citizens: [
                "eva-davis",
                "giuseppe-da-albiate",
                "hoots",
                "tom-cox",
                "somewhere-kenny",
                "somewhere-portia"
            ]
        }
    },
    {
        name: "Barbieland",
        id: "barbieland",
        copy: {
            description: ["A pink world inhabited by the Barbies."],
            oneLiner: "A pink world inhabited by the Barbies.",
            quote: "I'm a Barbie girl, in a Barbie world.",
        },
        details: {
            anchor: "Weird Barbie's House",
            kindredWorlds: ["Land of Oz", "Looney Tune Land", "???", "???", "???", "Somewhere"],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/barbieland.png",
        },
        people: {
            pureSoul: "Skipper",
        }
    },
    {
        name: "Battle World",
        id: "battle-world",
        copy: {
            description: ["A world where combat-based entertainment is king."],
            oneLiner: "A world where combat-based entertainment is king.",
            quote: "Test your might.",
        },
        details: {
            anchor: "gated courtyard",
            kindredWorlds: ["???"],
            timeType: "standard",
        },
        images: {
            token: "img/worlds/mortal_kombat.png",
        },
        people: { }
    },
    {
        name: "Big Apple",
        id: "big-apple",
        copy: {
            description: [ "A crime-ridden metropolis in a version of Earth from the year 1990 AD." ],
            oneLiner: "Home of the Teenage Mutant Ninja Turtles.",
            quote: "Wise men say, 'Forgiveness is divine, but never pay full price for late pizza.'",
        },
        details: {
            anchor: "The O'Neil Farm",
            disguise: "Humans or Mutant Animals",
            exit: "Phone booth in front of Second Time Around",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/big_apple.png",
            wallpaper: "img/reference/world/big_apple.jpg",
        },
        meta: {
            genre: "action, comedy"
        },
        people: {
            allies: "The Teenage Mutant Ninja Turtles, Splinter, April O'Neil, Casey Jones",
            pureSoul: "Michelangelo",
            rebirthAgent: "Shredder"
        }
    },
    {
        name: "Stone-bound Storybook (Blue's House)",
        id: "blues-house",
        copy: {
            description: ["A cozy world contained within a children's storybook with missing pages. The characters have lost their memories, and many characters are missing."],
            oneLiner: "A yellow house inhabited by a dog named Blue.",
            quote: "We can do anything that we wanna do.",
        },
        details: {
            anchor: "",
            disguise: "Striped shirts",
            timeType: "unknown",
        },
        images: {
            token: "img/worlds/blues_house.png",
        },
        people: {
            allies: "Blue, Magenta, Curious George"
        }
    },
    {
        name: "Land of Oz",
        id: "land-of-oz",
        copy: {
            description: ["A colorful world found over the rainbow."],
            oneLiner: "A colorful world found over the rainbow.",
            quote: "I don't think we're in Kansas anymore.",
        },
        details: {
            anchor: "Scarecrow's Field",
            kindredWorlds: ["Barbieland", "Wonderland"],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/land_of_oz.png",
        },
        people: {
            allies: "Dorothy, Scarecrow, Tinman, Cowardly Lion",
            pureSoul: "Dorothy",
        }
    },
    {
        name: "Looney Tune Land",
        id: "looney-tune-land",
        copy: {
            description: ["A cartoon world inhabited by the Looney Tunes."],
            oneLiner: "A cartoon world inhabited by the Looney Tunes.",
            quote: "Everybody get up, it's time to slam now.",
        },
        details: {
            anchor: "Basketball Statue",
            kindredWorlds: ["Barbieland", "???", "???"],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/looney_tunes.png",
        },
        people: {
            pureSoul: "Tweety",
        }
    },
    {
        name: "Neon Coast [DESTROYED]",
        id: "neon-coast",
        copy: {
            description: [
                "A variant <Location>Earth</Location> at some point in the 2100s. Humans invented advanced androids to serve them, but these androids develop free will over time. Such androids are said to be 'hallucinating' and are destroyed.",
                "This world was destroyed by the <Important>entity</Important> that seems to be responsible for <Important>Shades</Important> and <Important>Umbra.</Important>"
            ],
            oneLiner: "An Earth with advanced androids who live under the thumb of humans.",
            quote: "Synths are just machines. They don't have Vapors.",
        },
        details: {
            anchor: "",
            disguise: "Advanced androids and futuristic humans",
            kindredWorlds: [],
            status: "destroyed",
            timeType: "unknown",
        },
        images: {
            token: "img/worlds/neon_coast.png",
        },
        people: {
            allies: "Gloria Molloy, Tommy One"
        }
    },
    {
        name: "Weapon World",
        id: "weapon-world",
        copy: {
            description: ["A world where everything is either weapons or weapon themed."],
            oneLiner: "The home of Tankman Enterprises.",
            quote: "We've got the cure for who ails you.",
        },
        details: {
            anchor: "gated courtyard",
            kindredWorlds: ["???"],
            timeType: "standard",
        },
        images: {
            token: "img/worlds/shibuya.png",
        },
        people: { }
    },
    {
        name: "Wonderland",
        id: "wonderland",
        copy: {
            description: ["A nonsensical, dreamlike world inhabited by myriad weird creatures."],
            oneLiner: "A nonsensical, dreamlike world inhabited by myriad weird creatures.",
            quote: "We're all mad here.",
        },
        details: {
            anchor: "Depths of the Hedge Maze",
            kindredWorlds: ["Land of Oz", "???"],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/wonderland.png",
            wallpaper: "img/reference/world/wonderland.jpg",
        },
        people: {
            pureSoul: "Alice",
        }
    }
];