import type { IPerk } from "@/interfaces/IPerk";

export const Perks: IPerk[] = [
    {
        name: "Blue Print Detective",
        value: 1,
        affectedScore: "Investigate",
        source: "Solved 2nd mystery with Blue"
    },
    {
        name: "Audience Participation",
        value: 1,
        affectedScore: "Perception",
        source: "Solved 3rd mystery with Blue"
    },
    {
        name: "Honorary Ninja",
        value: 1,
        affectedScore: "Acrobatics",
        source: "Survived two adventures with the Teenage Mutant Ninja Turtles"
    },
    {
        name: "Street Rat",
        value: 1,
        affectedScore: "Thievery",
        source: "Defeated Jafar in Agrabah"
    }
];