import type { INotableDestination } from "./IWorldData";

/** A combined version of the  */
interface ICombinedNotableDestination extends INotableDestination {
    /** Does the party know of this location? */
	isKnown: boolean;
    /** Has the party been to this location? */
	hasVisited: boolean;
}

/** The combination of the saved campaign playthrough data and the raw JSON data for a world. */
export default interface ICombinedWorldData {
    /** e.g. 'World Name' */
	name: string;
    /** e.g. 'world-name' */
	id: string;
    /** The current Challenge Rating of the world */
	battleLevel: number;
	/** Notable destinations for this world. */
	notableDestinations: ICombinedNotableDestination[];
	/** A succinct summary of the party's last visit. */
	pastEvents: string;
	/** A succinct summary of the party's next objective. */
	nextObjective: string;
	/** How many times has the party visited this world? */
	visits: number;
}