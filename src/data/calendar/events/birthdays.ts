import type { ICalendarEvent } from "@/interfaces/ICalendarEvent";

/** A collection of character birthdays.
 * To generate more, go to https://www.random.org/calendar-dates/?num=12&start_day=1&start_month=1&start_year=2000&end_day=31&end_month=12&end_year=2025&mondays=on&tuesdays=on&wednesdays=on&thursdays=on&fridays=on&saturdays=on&sundays=on&display=2&format=html&rnd=new
*/
export const Birthdays = [
    // January
    [
        { day: 2, name: "Tommy One", definition: [] },
        { day: 5, name: "Hoots the Owl", definition: [] },
        { day: 18, name: "Carrie Ward", definition: [] },
    ] as ICalendarEvent[],
    // February
    [
        { day: 17, name: "Vilyth Koehlanna", definition: [], hide: true },
        { day: 22, name: "Nortle", definition: [] },
        // Cool date, just need to put somebody here
        // { day: 25, name: "Placeholder", definition: [], hide: true },
    ] as ICalendarEvent[],
    // March
    [
        { day: 1, name: "Giuseppe da Albiate", definition: [] },
        { day: 25, name: "Cade Brightcloak", definition: [] },
    ] as ICalendarEvent[],
    // April
    [
        { day: 21, name: "Ella Fitzpatrick", definition: [] },
    ] as ICalendarEvent[],
    // May
    [
        { day: 4, name: "Kenji Cherrymoon", definition: [], hide: true },
        { day: 18, name: "Tom Cox", definition: [] },
    ] as ICalendarEvent[],
    // June
    [
        { day: 19, name: "Smith", definition: [], hide: true },
        { day: 28, name: "Gloria", definition: [] },
    ] as ICalendarEvent[],
    // July
    [
        { day: 12, name: "Blackhand Roo", definition: [] },
        { day: 20, name: "Hamisfore", definition: [] },
        { day: 27, name: "Per Schnorr", definition: [] },
    ] as ICalendarEvent[],
    // August
    [
        { day: 7, name: "Gugg", definition: [] },
        { day: 11, name: "Bebop", definition: [] },
        { day: 14, name: "Ootah", definition: [] },
    ] as ICalendarEvent[],
    // September
    [
        { day: 1, name: "Boo", definition: [] },
        { day: 12, name: "Joey Morton", definition: [] },
        { day: 15, name: "Eva Davis", definition: [] },
    ] as ICalendarEvent[],
    // October
    [
        // { day: 28, name: "Declaration of the Independence of New Zealand", definition: [] },
        { day: 28, name: "Airen", definition: [], hide: true },
    ] as ICalendarEvent[],
    // November
    [
        { day: 13, name: "Milimand Kingfisher", definition: [], hide: true },
        { day: 27, name: "Frederick Irithyl", definition: [], hide: true },
    ] as ICalendarEvent[],
    // December
    [
        { day: 14, name: "Althea Holimion", definition: [], hide: true },
        // { day: 22, name: "Egyptian Day (very unlucky or cursed day) [https://en.wikipedia.org/wiki/Egyptian_days]", definition: [] },
        { day: 22, name: "Zuzu", definition: [] },
    ] as ICalendarEvent[]
];