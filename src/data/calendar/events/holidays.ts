import type { ICalendarEvent } from "@/interfaces/ICalendarEvent";

/** A collection of annual holidays. */
export const Holidays = [
    // January
    [] as ICalendarEvent[],
    // February
    [] as ICalendarEvent[],
    // March
    [] as ICalendarEvent[],
    // April
    [] as ICalendarEvent[],
    // May
    [
        { day: 4, name: "Christmas (synced to Earth 184)", definition: ["A joyous day to celebrate bonds with friends and family."] },
        { day: 28, name: "Vince the Thousand-Eyed's Birthday", definition: ["The unofficial birthday of the great old one called Vince the Thousand-Eyed."] }
    ] as ICalendarEvent[],
    // June
    [] as ICalendarEvent[],
    // July
    [] as ICalendarEvent[],
    // August
    [] as ICalendarEvent[],
    // September
    [
        { day: 7, name: "Gazelle Concert", definition: ["Cade invites Tero, Ella, Althea, Nortle, and Boo to a Gazelle concert in Zootopia."], gmOnly: true }
    ] as ICalendarEvent[],
    // October
    [
        { day: 31, name: "Halloween", definition: ["A spooky day to celebrate the things that go bump in the night."] }
    ] as ICalendarEvent[],
    // November
    [] as ICalendarEvent[],
    // December
    [
        { day: 25, name: "Christmas (traditional date)", definition: ["A joyous day to celebrate bonds with friends and family."] }
    ] as ICalendarEvent[]
];