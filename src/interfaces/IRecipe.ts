export type RecipeType = 'biscuit' | 'curry' | 'drink' | 'ice cream';

type RecipeTag = 
	RecipeType
	// Colors
	| 'purple'
	// Ingredients
	| 'almond' | 'chocolate' | 'cocoa' | 'coconut' | 'taro' | 'white chocolate'
	// Cultures
	| 'halfling'|'gnome'|'tortle'
	// Worlds
	| 'geoss'
	// Biomes
	| 'beach'
;

/** A JSON definition for a cooking recipe. */
export interface IRecipe {
    /** @example 'Recipe Name' */
	name: string;
    /** @example 'recipe-name' */
	id: string;
	/** Who wrote this?
	 * @example 'Cade Brightcloak' */
	author: string;
	/** The original creator of the recipe. 
	 * @example 'Cade Brightcloak' */
	creator?: string;
	/** Where did this recipe originate?
	 * @example 'Traditional recipe from Clovershire' */
	source?: string;
	type: RecipeType;
	ingredients: string[];
	instructions: string[];
	originWriteUp: string[];
	summary?: string;
	tags: RecipeTag[];
}