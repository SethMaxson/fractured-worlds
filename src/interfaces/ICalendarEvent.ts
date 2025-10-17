import type { IGlossaryEntry } from "./IGlossaryEntry";

/** A JSON definition for a special day to list on a calendar, such as a holiday or birthday. */
export interface ICalendarEvent extends IGlossaryEntry {
    /** The numerical day of the month this event occurs. */
	day: number;
    /** Whether or not to hide this from the party. */
    gmOnly?: boolean;
    /** Do not bother showing this event. */
    hide?: boolean;
    id?: string;
}

/** A more complete version of ICalendarEvent, containing more information. */
export interface IFullCalendarEvent extends ICalendarEvent {
    /** The numerical month in which this event occurs. */
	month: number;
    /** Should be omitted from the UI when not present. */
    year?: number;
}