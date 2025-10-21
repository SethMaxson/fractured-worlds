import { IDate } from "./IDate";

/** A child of the raw JSON data for a world. */
export interface INotableDestination {
    /** e.g. 'Destination Name' */
	name: string;
    /** A succinct description of the destination. */
	description: string;
}

/** The raw JSON data for a world. */
export interface IWorldData {
    /** e.g. 'World Name' */
	name: string;
    /** e.g. 'world-name' */
	id: string;
	
	/** Text for this world */
	copy: {
		description: string[];
		/** A summary of the party's actions here. */
		history?: {
			html: string,
			date?: IDate
		}[];
		/** Snappy summary (preferably 1 sentence). */
		oneLiner: string;
		/**Evocative quote from the world */
		quote?: string;
	}

	details: {
		/** The location of the World Anchor (if known). */
		anchor?: string;
		/** The effects of the chameleon circuit on the party in this world */
		disguise?: string;
		/**
		 * The location of the exit created by the party's Lightship's Anchor Circuit.
		 * @example	 
		 * "closet inside of the Bizarre Room"
		 * "per episode"
		 */
		exit?: string;
		kindredWorlds?: string[];
		/** Meaningful locations within this world. */
		notableDestinations?: INotableDestination[];
		/** e.g. Destroyed, Lost, Unknown, etc */
		status?: string;
		/**The flow of time within this world. 
		 * Uses the Looping, Resting, Standard labels set forth by the Voidspace explorer Marco Rayleigh.
		 */
		timeType: "looping" | "resting" | "standard" | "unknown";
	}

	images: {
		token?: string;
		wallpaper?: string;
	}

	meta?: {
		/** The default Challenge Rating of the world */
		battleLevel?: number;
		/**
		 * The primary genre of this world (e.g. mystery, racing). Max of 2.
		 * @example	 
		 * "adventure"
		 * "comedy, horror"
		 */
		genre?: string;
		isLinear?: boolean;
		/** Indicates that a world exists outside the Cradle of Remaining Civilization (i.e. the player's will not be visiting) */
		outsidePlayerSpace?: boolean;
		/** Where did this world originate? */
		source?: string;
	}

	people: {
		allies?: string,
		/** A list of character IDs corresponding to notable NPCs */
		citizens?: string[]
		/** The identity of the N.L.E. agent assigned to this world, if any. */
		nleAgent?: string,
		/** The identity of this world's Pure Soul, if any. Max of 1. */
		pureSoul?: string,
		/** The identity of the Rebirth Caucus the party is most likely to encounter in this world, if any. */
		rebirthAgent?: string;
	}
}