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
        { day: 4, name: "Christmas", definition: ["A joyous day to celebrate bonds with friends and family."] },
        { day: 28, name: "Vince the Thousand-Eyed's Birthday", definition: ["The unofficial birthday of the great old one called Vince the Thousand-Eyed."] }
    ] as ICalendarEvent[],
    // June
    [] as ICalendarEvent[],
    // July
    [] as ICalendarEvent[],
    // August
    [] as ICalendarEvent[],
    // September
    [] as ICalendarEvent[],
    // October
    [] as ICalendarEvent[],
    // November
    [] as ICalendarEvent[],
    // December
    [] as ICalendarEvent[]
];