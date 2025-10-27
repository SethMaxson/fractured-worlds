import type { ITimelineEvent } from "./ITimeline";

export interface ICharacterDataAffiliation {
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
	/**
	 * @example
	 * "Scout"
	 */
	role?: string;
	/** Signals that this is the character's primary allegiance. */
	primary?: boolean;
	/** The date this character joined. */
	joined?: string;
	/** The date this character left. Signals that this character is no longer a part of this organization. */
	left?: string;
}

export interface ICharacterDataMentalTraits {
	/** What this person's drive appears to be on the surface. */
	apparentDrive?: string;
	/** This person's actual drive. */
	drive?: string;
}

export interface ICharacterDataPhysicalTraits {
	age?: string;
	eyeColor?: string;
	gender?: string;
	hairColor?: string;
	height?: string;
	hotness?: number;
	weight?: string;
}

/** The raw JSON data for a character. */
export interface ICharacterData {
    /** e.g. 'Character Name' */
	name: string;
    /** e.g. 'character-name' */
	id: string;
    /** e.g. 'Breaker of Chains' */
	subtitle?: string;
	/** An array containing any noteworthy factions and organizations this character is/was a part of.
	 * @example
	 * [
	 *		{ name: "Rebirth Caucus", rank: "leader", primary: true },
	 *		{ name: "Pretty Tea Party Sisterhood", rank: "Grey Earl" }
	 * ]
	 */
	affiliations: ICharacterDataAffiliation[];
    /** A list of known aliases. */
	aliases?: string[];
	/** Date (or at least month and day) of birth. */
	birthday?: { year?: number; day: number; month: number; };
    /** A brief description for the character entry screen. */
	description: string[];
    /** The world this character originally called home, if known. */
	homeworld?: string;
    /** The id of the world in which this character resides, for displaying on page pertaining to that world. */
	location?: string;
	/** The character's mental attributes/description. */
	mental?: ICharacterDataMentalTraits;
    /** The character's class or occupation. */
	occupation: string[];
	/** The character's physical attributes/description. */
	physical?: ICharacterDataPhysicalTraits;
	/** (1-3) The overall plot importance of a character. Used to determine where and how prominently to display them, if it's used at all.	 
	 * @1 - Minor character. Background or bit players.
	 * @2 - Medium. Secondary and supporting cast.
	 * @3 - Major character. Protagonist or Antagonist level. Name would probably be on the movie poster.
	*/
	plotRelevance: number;
	/** The role the character plays within the party's entourage.
	 * @example
	 * "Deckhand (04/02/0001 SE-present)"
	*/
	role?: string;
	spotify?: {
		/** The ID of this character's Spotify playlist, if any.
		 * @example
		 * "3kzkDLLYRRU5IYoreptAHH"
		*/
		primaryPlaylistID?: string;
		themeSong?: string;
		otherPlaylists?: string[]
	};
    /** The character's race or species. */
	species: string[];
	/** The character's last known status.
	 * @example
	 * "alive" | "dead"
	 */
	status?: "alive"|"dead"|"unknown";
	timeline?: ITimelineEvent[];
	/** The character's role within the story. Informs how some things are displayed. */
	type: "crew" | "location" | "nle" | "pc" | "rebirth" | "other";
	/** A collection of images of and pertaining to this character. */
	images: {
		/**
		 * @example
		 * "img/party/cobb.png"
		 */
		portrait?: string;
		/**
		 * @example
		 * [ "img/party/cobb.png" ]
		 */
		costumes?: string[];
	};
}