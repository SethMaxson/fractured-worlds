type CrewRarity = "common" | "uncommon" | "rare" | "legendary";
type CrewType = "normal" | "combat" | "craft" | "eng" | "ent" | "mag" | "med" | "tech" | "spec";

export interface ICrewCardData {
	name: string;
	subtitle: string;
	img: string;
	originType: string;
	type: CrewType;
	rarity: CrewRarity;
	numberInSeries: number;
	stats: {
		int: number;
		magic: number;
		spd: number;
		str: number;
		tech: number;
		will: number;
	}
}