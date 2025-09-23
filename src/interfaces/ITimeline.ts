import type { IDate } from "./IDate";

export type TimelineEventType = "death" | "drug" | "faction" | "holiday" | "item" | "lightship" | "love" | "mystery" | "navigation" | "person" | "rebirth" | "world" | "world-special" | "zuzu";

/** An event on a timeline. */
export interface ITimelineEvent {
	date: IDate;
	endDate?: IDate;
	event?: string;
	extra?: ITimelineSubEvent[];
	/** This event is hidden from players when true. */
	gmOnly?: true;
	/** A nice, catchy title for the event.*/
	header: string;
	isMajor?: boolean;
	type?: TimelineEventType;
};

export type TimelineSubEventType = TimelineEventType | "birthday" | "left";

/** A smaller, more granular event within a broader, larger-scale event. */
export interface ITimelineSubEvent {
	/**
	 * @deprecated I like the idea of having a uniform point to filter/join subevents on, but I'm not sure I like how restrictive it can be.
	 */
	action?: "celebrated" | "discovered" | "joined" | "left" | "lost" | "met" | "obtained" | "reached" | "recruited" | "slew" | "unlocked" | string;
	/** A nice, catchy description for the event.*/
	name: string;
	type?: TimelineSubEventType;
};