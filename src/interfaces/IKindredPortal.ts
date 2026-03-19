/** The data for a link between two Kindred Worlds. */
export interface IKindredPortal {
	/** The id of the first linked world. This one will be used as the basis for styling. */
	from: string;
	/** The id of the second linked world. */
	to: string;
	/** A control point to render the link as a quadratic curve */
	controlPoint?: { x: number; y: number; };
	/** A control point to render the link as a cubic Bezier curve */
	controlPoint2?: { x: number; y: number; };
}