/** The data for a switchtrack that links two world nexuses. */
export interface ISwitchtrackData {
	/** The id of the linked nexus */
	to: string;
	/** The index of the segment this links to */
	segmentFrom: number;
	/** The index of the segment this links to */
	segmentTo: number;
	/** The way this switchtrack is unlocked */
	unlockType?: 'half_anchors' | 'all_anchors' | 'specific_world' | 'final_world';
	/** The id of the tracked nexus.
	 * ONLY USE IF tracking a nexus other than the one defined in this link's parent IWorldNexusData.
	 */
	trackedNexus?: string;
	/** A control point to render the switchtrack link as a quadratic curve */
	controlPoint?: { x: number; y: number; };
	/** A control point to render the switchtrack link as a cubic Bezier curve */
	controlPoint2?: { x: number; y: number; };
	/** The id of the starting nexus.
	 * ONLY USED BY AUTOMATED PROCESSES.
	 */
	_from?: string;
}

/** The raw JSON data for a world nexus. */
export interface IWorldNexusData {
	/** just the lowercase name of the nexus without the word 'nexus'.
	 * @example 'Cyan Nexus' -> 'cyan'
	 */
	id: string;
	/** HTML hex code to use for the color of this nexus. */
	color: string;
	position: { x: number; y: number; };
	points?: { x: number; y: number; worldId?: string; }[];
	links?: ISwitchtrackData[];
}