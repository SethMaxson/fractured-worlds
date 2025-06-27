type TimelineEntryType = "backstory" | "location" | "personal";

export interface ITimelineEntry {
	startDate?: {
		day: number;
		month: number;
		year: number;
	};
	endDate?: {
		day: number;
		month: number;
		year: number;
	};
	location: string;
	notes?: string;
	/** Indicates the category of this entry so it can be sorted for relevance */
	entryType?: TimelineEntryType;
}