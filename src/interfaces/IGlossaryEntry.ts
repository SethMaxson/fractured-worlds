/** A JSON definition for a modification to a skill or ability, such as a Bond Perk. */
export interface IGlossaryEntry {
    /** e.g. 'Glossary Entry Name' */
	name: string;
    /** The definition to be displayed with the entry. */
	definition: string[];
	/** e.g. 'href/path/image.png' */
	image?: string;
	/** e.g. 'also called: "Some Alias"' */
	aka?: string;
}