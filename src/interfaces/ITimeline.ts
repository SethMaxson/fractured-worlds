import type { ITimelineEntry } from "./ITimelineEntry";

export interface ITimeline {
	/** The ID of the entity tracked by this timeline. */
	id: string;
	/** The locations and events logged within this timeline. */
	log: ITimelineEntry[];
}