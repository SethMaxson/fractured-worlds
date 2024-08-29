/** A child of the raw JSON data for a world. */
export interface INotableDestination {
    /** e.g. 'Destination Name' */
	name: string;
    /** A succinct description of the destination. */
	description: string;
}

/** The raw JSON data for a world. */
export default interface IWorldData {
    /** e.g. 'World Name' */
	name: string;
    /** e.g. 'world-name' */
	id: string;
    /** The default Challenge Rating of the world */
	battleLevel: number;
	notableDestinations: INotableDestination[];
}