/** A JSON definition for a single Calendar month. */
export interface ICalendarMonth {
    /** e.g. 'Month Name' */
	name: string;
    /** The number of days in this month. */
	length: number;
	/** The season in Somewhere at this time. e.g. 'spring'
     * Probably an unnecessary attribute.
     */
	season?: string;
}