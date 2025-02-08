/** A JSON definition for a modification to a skill or ability, such as a Bond Perk. */
export interface IPerk {
    /** e.g. 'Perk Name' */
	name: string;
    /** The amount by which the affected trait or ability is increased. Usually between -1 and 1. */
	value: number;
	/** e.g. 'Perception' */
	affectedScore: string;
	/** e.g. 'Friendship with Blue' */
	source?: string;
}