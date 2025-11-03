export type RecipeType = 'cookie' | 'curry' | 'drink' | 'ice cream';

/** A JSON definition for a cooking recipe. */
export interface IRecipe {
    /** e.g. 'Recipe Name' */
	name: string;
    /** e.g. 'recipe-name' */
	id: string;
	/** e.g. 'Cade Brightcloak' */
	author: string;
	/** e.g. 'Traditional recipe from Clovershire' */
	source?: string;
	type: RecipeType;
	ingredients: string[];
	instructions: string[];
	summary?: string;
	originWriteUp: string[];
}