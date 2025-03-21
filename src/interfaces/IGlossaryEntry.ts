/** A JSON definition for a glossary entry. */
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