import { type IKnownWorldData, ExplorationState as es, KnownWorldDisplayType as dt } from "@/interfaces/IKnownWorldData";
import { CampaignDate } from "@/objects/CampaignDate";

export class CampaignState {
	static get CurrentDate() {
		return new CampaignDate(15, 1, 2);
	}
	//#region Progress
	// static get something() {
	//	 return something;
	// }
	static get KnownWorlds(): IKnownWorldData[] {
		return [
			{ worldId: 'somewhere', 		explorationState: es.Visited, 		prismKey: true, worldAnchor: false, displayType: dt.Full },
			{ worldId: 'wonderland', 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "big-apple", 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "blues-house", 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "neon-coast", 		explorationState: es.Visited, 		prismKey: false, worldAnchor: false, displayType: dt.Full },
			{ worldId: "land-of-oz", 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "weapon-world", 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "berk", 				explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "duloc", 			explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "battle-world", 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "treasure-island", 	explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "barbieland", 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "looney-tune-land", 	explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "dallas-shaolin", 	explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "sanctuary", 		explorationState: es.Visited, 		prismKey: true, worldAnchor: true, displayType: dt.Full },
			{ worldId: "toy-story", 		explorationState: es.Known, 		prismKey: false, worldAnchor: false, displayType: dt.NoName },
			{ worldId: "jurassic-park", 	explorationState: es.Known,			prismKey: false, worldAnchor: false, displayType: dt.Full },
			{ worldId: "suburbs",			explorationState: es.Discovered,	prismKey: false, worldAnchor: false, displayType: dt.Full },
			{ worldId: "wubbulous-world",	explorationState: es.Discovered,	prismKey: false, worldAnchor: false, displayType: dt.NoName },
			{ worldId: "transylvania",		explorationState: es.Discovered,	prismKey: false, worldAnchor: false, displayType: dt.NoName },
			{ worldId: "tokyo",				explorationState: es.Discovered,	prismKey: false, worldAnchor: false, displayType: dt.NoName },
			{ worldId: "nyc-89",			explorationState: es.Discovered,	prismKey: true, worldAnchor: false, displayType: dt.NoName },
			{ worldId: "moon",				explorationState: es.Discovered,	prismKey: false, worldAnchor: false, displayType: dt.NoNameOrIcon },
		];
	}
	//#endregion Progress
}