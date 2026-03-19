import type { IWorldData } from "@/interfaces/IWorldData";

/** Used to create a standardized set of world profiles that can be accessed from any page.
 * Some records contain information that is not yet known to the players.
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
            isHub: true,
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
        name: "Agrabah",
        id: "agrabah",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "A fool off his guard could fall and fall hard.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/agrabah.png",
        },
        people: {
            allies: "Aladdin, Abu, Jasmine",
            pureSoul: "Jasmine",
        }
    },
    {
        name: "Ant Island",
        id: "ant-island",
        copy: {
            description: ["A world of bugs."],
            oneLiner: "A world of bugs.",
            quote: "It's a bug-eat-bug world out there.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/ant_island.png",
        },
        people: {
            allies: "Flik, x",
            pureSoul: "Dot?",
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
        meta: {
            themeColor: "#DA1884"
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
            isHub: true,
        },
        images: {
            token: "img/worlds/mortal_kombat.png",
        },
        people: { },
    },
    {
        name: "Berk",
        id: "berk",
        copy: {
            description: ["A world filled with dragons and the vikings to train them."],
            oneLiner: "A world of dragons.",
            quote: "While other places have...ponies or parrots, we have... dragons!",
        },
        details: {
            anchor: "Inside CinderSludge Isle",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/berk.png",
        },
        people: {
            allies: "Hiccup, Toothless, Astrid, Stormfly",
            pureSoul: "Hiccup",
        }
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
        name: "Bikini Bottom",
        id: "bikini-bottom",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "If nautical nonsense be something ye wish...",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/bikini_bottom.png",
        },
        people: {
            
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
        name: "Camp Halfblood",
        id: "camp-halfblood",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/camp-halfblood.png",
        },
        people: {
            
        }
    },
    {
        name: "Candy World",
        id: "candy-world",
        copy: {
            description: [
                ""
            ],
            oneLiner: "",
            quote: "",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
            isHub: true,
        },
        images: {
            token: "img/worlds/candy_world.png",
        },
        people: {
            
        }
    },
    {
        name: "Chocolate Factory",
        id: "chocolate-factory",
        copy: {
            description: ["A mysterious chocolate factory run by a hermit."],
            oneLiner: "A mysterious chocolate factory run by a hermit.",
            quote: "Come with me, and you'll be in a world of pure imagination.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/wonka.png",
        },
        people: {
            
        }
    },
    {
        name: "Coolsville",
        id: "coolsville",
        copy: {
            description: ["The most haunted city on Earth."],
            oneLiner: "The most haunted city on Earth.",
            quote: "If we can count on you... I know we'll catch that villain.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/coolsville.png",
        },
        people: {
            
        }
    },
    {
        name: "Dallas, TX",
        id: "dallas-shaolin",
        copy: {
            description: ["A world with two surviving pieces that are still connected by a dreamlike path: a massive city under the thumb of an evil oil baron, and a secluded shaolin temple."],
            oneLiner: "A world where martial artists play soccer.",
            quote: "I'm not here to fight. I'm here to play soccer!",
        },
        details: {
            anchor: "Team Shaolin monastery",
            kindredWorlds: ["Big Apple", "???", "Looney Tune Land"],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/shaolin_soccer.png",
        },
        people: {
            allies: "Golden Leg Fung"
        }
    },
    {
        name: "Duloc Outlands",
        id: "duloc",
        copy: {
            description: ["A world filled with fairy tail creatures."],
            oneLiner: "A fairy tail world.",
            quote: "Ogres have layers.",
        },
        details: {
            anchor: "Nice Boulder (Shrek's Swamp)",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/shrek.png",
        },
        people: {
            allies: "Shrek, Donkey, Fiona",
            pureSoul: "Donkey",
        }
    },
    {
        name: "Gotham City",
        id: "gotham",
        copy: {
            description: ["A crumbling metropolis whose shadowy alleys house more criminals per capita than anywhere else on Earth."],
            oneLiner: "A crime-ridden metropolis.",
            quote: "It's not who you are underneath, but what you do that defines you.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/gotham.png",
        },
        people: {
            allies: "Batman",
        }
    },
    {
        name: "Haven",
        id: "haven",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "Obey.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "standard",
            isHub: true,
        },
        images: {
            token: "img/worlds/haven.png",
        },
        people: {
            
        }
    },
    {
        name: "Hyrule",
        id: "hyrule",
        copy: {
            description: ["A kingdom beset by an ancient curse."],
            oneLiner: "A kingdom beset by an ancient curse.",
            quote: "A sword wields no strength unless the hand that holds it has courage.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/hyrule.png",
        },
        people: {
            
        }
    },
    {
        name: "Jade Palace",
        id: "jade-palace",
        copy: {
            description: ["An ancient temple, home to kung fu masters."],
            oneLiner: "An ancient temple, home to kung fu masters.",
            quote: "One often meets his destiny on the road he takes to avoid it.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/jade_palace.png",
        },
        people: {
            
        }
    },
    {
        name: "Jurassic Park",
        id: "jurassic-park",
        copy: {
            description: ["A dinosaur-themed amusement park. The creator spared no expense."],
            oneLiner: "A world of ancient beasts.",
            quote: "Life finds a way.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/jurassic_park.png",
        },
        people: {

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
        name: "LEGO City",
        id: "lego-city",
        copy: {
            description: [
                ""
            ],
            oneLiner: "",
            quote: "",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/lego_city.png",
        },
        people: {
            
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
        name: "Master of Disguise",
        id: "master-of-disguise",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "Hiding right in front of your eyes.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/master-of-disguise.png",
        },
        people: {
            allies: "Pistachio Disguise"
        }
    },
    {
        name: "Monster High",
        id: "monster-high",
        copy: {
            description: [],
            oneLiner: "",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
            status: "destroyed"
        },
        images: {
            token: "img/worlds/blank.png",
        },
        people: { }
    },
    {
        name: "Moon",
        id: "moon",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "That's no moon.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/moon.png",
        },
        people: {
            
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
        name: "Resistance HQ",
        id: "neon-coast-2",
        copy: {
            description: [
                "A variant <Location>Earth</Location> at some point in the 2100s. Humans invented advanced androids to serve them, but these androids develop free will over time. Such androids are said to be 'hallucinating' and are destroyed."
            ],
            oneLiner: "An Earth with advanced androids who live under the thumb of humans.",
            quote: "Synths are just machines. They don't have Vapors.",
        },
        details: {
            anchor: "",
            disguise: "Advanced androids and futuristic humans",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/neon_coast.png",
        },
        people: {
            
        }
    },
    {
        name: "NYC '89",
        id: "nyc-89",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "I ain't 'fraid of no ghost.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/ghostbusters.png",
        },
        people: {
            
        }
    },
    {
        name: "NYC 2002",
        id: "nyc-2002",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "With great power comes great responsibility.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/big_apple.png",
        },
        people: {
            allies: "Spider-Man"
        }
    },
    {
        name: "The Oasis",
        id: "oasis",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "standard",
        },
        images: {
            token: "img/worlds/oasis.png",
        },
        people: {
            
        }
    },
    {
        name: "Sanctuary",
        id: "sanctuary",
        copy: {
            description: ["A patchwork world made of pieces of worlds that have been lost."],
            oneLiner: "A patchwork world made of pieces of worlds that have been lost.",
            quote: "In you and I, there's a new land.",
        },
        details: {
            anchor: "Hill Valley courthouse",
            kindredWorlds: [],
            timeType: "standard",
            isHub: true,
        },
        images: {
            token: "img/worlds/sanctuary.png",
        },
        people: {
            
        }
    },
    {
        name: "Strawberry Land",
        id: "strawberryland",
        copy: {
            description: ["A land of sweet desserts and the people who make them."],
            oneLiner: "A land of sweet desserts and the people who make them.",
            quote: "Feeling fine, doing better all the time.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/strawberryland.png",
        },
        people: {
            
        }
    },
    {
        name: "The Suburbs",
        id: "suburbs",
        copy: {
            description: ["Sprawling, perfect suburbs built over what was once a peaceful forest."],
            oneLiner: "Sprawling suburbs built over a peaceful forest.",
            quote: "We all ride for nothing, 'cause this train never stops.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/over_the_hedge.png",
        },
        people: {
            
        }
    },
    {
        name: "Synth City",
        id: "neon-coast-3",
        copy: {
            description: [
                "A variant <Location>Earth</Location> at some point in the 2100s. Humans invented advanced androids to serve them, but these androids develop free will over time. Such androids are said to be 'hallucinating' and are destroyed."
            ],
            oneLiner: "An Earth with advanced androids who live under the thumb of humans.",
            quote: "Synths are just machines. They don't have Vapors.",
        },
        details: {
            anchor: "",
            disguise: "Advanced androids and futuristic humans",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/neon_coast.png",
        },
        people: {
            
        }
    },
    {
        name: "Tokyo 2007",
        id: "tokyo",
        copy: {
            description: ["A bustling city with a secret society of street racers."],
            oneLiner: "A busting city with a secret society of street racers.",
            quote: "If you see it... then you know you have to go fast and furious.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/shibuya.png",
        },
        people: {
            
        }
    },
    {
        name: "Sunnyside Daycare",
        id: "toy-story",
        copy: {
            description: ["A world of living toys."],
            oneLiner: "A world of living toys.",
            quote: "You've got a friend in me.",
        },
        details: {
            anchor: "?",
            kindredWorlds: ["Barbieland", "LEGO City"],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/andys_room.png",
        },
        people: {
            allies: "Woody, Buzz Lightyear",
            pureSoul: "Andy",
        }
    },
    {
        name: "Transylvania",
        id: "transylvania",
        copy: {
            description: ["A world of darkness and monsters."],
            oneLiner: "A world of darkness and monsters.",
            quote: "Despair has its own calms.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/transylvania.png",
        },
        people: {
            allies: "?",
            pureSoul: "?",
            rebirthAgent: "Dracula"
        }
    },
    {
        name: "Treasure Island",
        id: "treasure-island",
        copy: {
            description: ["An island filled with peril, pirates, and pigs."],
            oneLiner: "An island filled with peril, pirates, and pigs.",
            quote: "Sailing for adventure on the big blue wet thing.",
        },
        details: {
            anchor: "Captain Flint's treasure horde",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/muppet_treasure_island.png",
        },
        people: {
            allies: "Jim Hawkins, Gonzo, Rizzo, Captain Smollett",
            pureSoul: "Jim Hawkins",
        }
    },
    {
        name: "Unicornucopia",
        id: "unicornucopia",
        copy: {
            description: [ "A world of prismatic horse-folk." ],
            oneLiner: "A world of prismatic horse-folk.",
            quote: "Be the party you want to see in the world.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/unicornucopia.png",
        },
        people: {
            
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
            isHub: true
        },
        images: {
            token: "img/worlds/shibuya.png",
        },
        people: { }
    },
    {
        name: "The Wild West",
        id: "wild-west",
        copy: {
            description: ["Wide open spaces."],
            oneLiner: "Wide open spaces.",
            quote: "placeholder",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/wild_west.png",
        },
        people: {
            nleAgent: "airen"
        }
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
    },
    {
        name: "Wubbulous World",
        id: "wubbulous-world",
        copy: {
            description: [ "" ],
            oneLiner: "",
            quote: "Buzz into a bubble.",
        },
        details: {
            anchor: "",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/seussland.png",
        },
        people: {
            
        }
    },
    {
        name: "Yharnam",
        id: "yharnam",
        copy: {
            description: ["A city overrun with beasts."],
            oneLiner: "A city overrun with beasts.",
            quote: "Fear the old blood.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/yharnam.png",
        },
        people: {
            
        }
    },
    {
        name: "Zootopia",
        id: "zootopia",
        copy: {
            description: ["A metropolis of evolved animals."],
            oneLiner: "A metropolis of evolved animals.",
            quote: "I won't give up, no, I won't give in.",
        },
        details: {
            anchor: "?",
            kindredWorlds: [],
            timeType: "resting",
        },
        images: {
            token: "img/worlds/blank.png",
        },
        people: {
            
        }
    },
];