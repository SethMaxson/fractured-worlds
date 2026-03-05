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
}