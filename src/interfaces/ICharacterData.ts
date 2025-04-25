interface ICharacterAffiliation {
	/**
	 * @example
	 * "Rebirth Caucus"
	 */
	name: string;
	/**
	 * @example
	 * "Lieutenant"
	 */
	rank?: string;
	/** * Signals that this character is no longer a part of this organization. */
	former?: boolean;
	/** * Signals that this is the character's primary allegiance. */
	primary?: boolean;
}

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
    // /** The one-line subtitle to display beneath their name in the Character view. */
	// tagline?: string;
    /** A brief description for the character entry screen. */
	description: string[];
	/** An array containing any noteworthy organizations this character is/was a part of. */
	affiliations: ICharacterAffiliation[];
	/** The faction the character belongs to.
	 * @example
	 * "Rebirth Caucus"
	 */
	faction?: string;
    /** The world this character originally called home, if known. */
	homeworld?: string;
	/** The role the character plays within the party's entourage.
	 * @example
	 * "Deckhand (04/02/0001 SE-present)"
	*/
	role?: string;
	/** The faction the character belongs to.
	 * @example
	 * "alive" | "dead"
	 */
	status?: "alive"|"dead";
	/** A collection of images of and pertaining to this character. */
	images: {
		/**
		 * @example
		 * "img/party/cobb.png"
		 */
		thumbnail: string;
		/**
		 * @example
		 * [ "img/party/cobb.png" ]
		 */
		costumes?: string[];
	};
	/** (1-3) The overall plot importance of a character. Used to determine where and how prominently to display them, if it's used at all.	 
	 * @1 - Minor character. Background or bit players.
	 * @2 - Medium. Secondary and supporting cast.
	 * @3 - Major character. Protagonist or Antagonist level. Name would probably be on the movie poster.
	*/
	plotRelevance: number;
}