import type { IGlossaryEntry } from "./IGlossaryEntry";

/** A JSON definition for a special day to list on a calendar, such as a holiday or birthday. */
export interface ICalendarEvent extends IGlossaryEntry {
    /** The numerical day of the month this event occurs. */
	day: number;
    /** Whether or not to hide this from the party. */
    hide?: boolean;
}