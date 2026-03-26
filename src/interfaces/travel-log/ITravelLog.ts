import type { IDate } from "../IDate";

export type TravelLogTimelineEventType = "world" | "switchtrack" | "rift" | "lightship" | "other";
export type WorldAccessMethods = "lightship" | "kindred-portal" | "darkness-portal" | "fracturing" | "summonstone" | "other";

/** A reference to another travel log. */
export interface ITravelLogReference {
	/** e.g. 'brightside' */
	id: string;
	/** start copying from this timestamp */
	dateStart: number | IDate;
	/** stop copying at this timestamp */
	dateEnd: number | IDate;
}

/** An event on a travel log. */
export interface ITravelLogTimelineEventServer {
	/** The ID of the location in this event, e.g. 'somewhere' */
	locationId: string;
	/** How did they get there? */
	accessMethod?: WorldAccessMethods;
	/** When did they get there? */
	dateStart: IDate;
	/** When did they leave? */
	dateEnd?: IDate;
	/** Anything notable to report about this event? */
	description?: string;
	/** What type of event is this? Usually indicates the location category. */
	eventType: TravelLogTimelineEventType;
	/** Did they actually set foot on this location? */
	stopped: boolean;
	/** Did they get there with a Direct/Homeward Prism Key? */
	fastTravel?: boolean;
}

/** An event on a travel log. */
export interface ITravelLogTimelineEvent extends ITravelLogTimelineEventServer {
	/** Time in ms for JavaScript date object */
	timeStart: number;
	/** Time in ms for JavaScript date object */
	timeEnd?: number;
}

/** Model for Overworld travel log (server-side). */
export interface ITravelLogServer {
    /** e.g. 'The Brightside' */
	name: string;
	/** e.g. 'brightside' */
	id: string;
	/** e.g. 'img/ships/whaleship.png' */
	token?: string;
	/** e.g. '#000' */
	themeColor: string;
	/** What type of entity is tracked by this path? */
	type: 'character'|'lightship'|'party';
	/** Copy travel history from other travel paths for the specified dates. */
	reference: ITravelLogReference[];
	/** history */
	history: ITravelLogTimelineEventServer[];
}

/** Model for Overworld travel log (client-side). */
export interface ITravelLog extends ITravelLogServer {
	/** history */
	history: ITravelLogTimelineEvent[];
}