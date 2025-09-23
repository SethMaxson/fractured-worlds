export interface IDeprecatedTimeline {
	/** The ID of the entity tracked by this timeline. */
	id: string;
	/** The locations and events logged within this timeline. */
	log: IDeprecatedTimelineEntry[];
}

type DeprecatedTimelineEntryType = "backstory" | "location" | "personal";

export interface IDeprecatedTimelineEntry {
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
	entryType?: DeprecatedTimelineEntryType;
}