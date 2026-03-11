export enum KnownWorldDisplayType {
	Full = 'full',
	NoName = 'no_name',
	NoIcon = 'no_icon',
	NoNameOrIcon = 'no_name_or_icon'
};

export enum ExplorationState {
	/** They discovered the world but know almost nothing about it */
	Discovered = 'discovered',
	/** They know a little about the world (i.e. they have heard about it) */
	Known = 'known',
	/** They have physically been to this world. */
	Visited = 'visited'
};

export interface IKnownWorldData {
	worldId: string;
	explorationState: ExplorationState;
	/** They have a prism key corresponding to the World Anchor in this world.
	 * TODO: remove this and create a separate Prism Key management system
	*/
	prismKey: boolean;
	/** They have found and synced the World Anchor in this world. */
	worldAnchor: boolean;
	displayType?: KnownWorldDisplayType;
}