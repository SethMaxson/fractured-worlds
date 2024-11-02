/** The raw JSON data for a character. */
export default interface ICharacterData {
    /** e.g. 'Character Name' */
	name: string;
    /** e.g. 'character-name' */
	id: string;
    /** The character's race or species. */
	species: string[];
    /** The character's class or occupation. */
	occupation: string[];
    /** A brief description for the character entry screen. */
	description: string[];
	/** The faction the character belongs to.
	 * @example
	 * "Rebirth Caucus"
	 */
	faction?: string;
	/** The role the character plays within the party's entourage.
	 * @example
	 * "Deckhand (04/02/0001 SE-present)"
	*/
	role?: string;
	/**
	 * @example
	 * "img/party/cobb.png"
	 */
	img: string;
	/** (1-3) The overall plot importance of a character. Used to determine where and how prominently to display them, if it's used at all.	 
	 * @1 - Minor character. Background or bit players.
	 * @2 - Medium. Secondary and supporting cast.
	 * @3 - Major character. Protagonist or Antagonist level. Name would probably be on the poster.
	*/
	plotRelevance: number;
}