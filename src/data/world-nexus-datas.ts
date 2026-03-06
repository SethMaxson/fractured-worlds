import type { IWorldNexusData } from "@/interfaces/IWorldNexusData";


/** A standardized set of World Nexus definitions that can be accessed from any page.
 * Should be used in conjunction with travel timelines and Prism Key collections to allow the display to be updated for individual users/crews.
 * TODO: Finish adding nexus definitions into this array.
 */
export const WorldNexusDatas: IWorldNexusData[] = [
	{
		id: "cyan",
		color: "#44e0f1",
		position: { x: 7.5, y: 17 },
		points: [
			{ x: 0.5, y: -2, worldId: 'wonderland' },
			{ x: 3, y: 0.5, worldId: 'big-apple' },
			{ x: -0.5, y: 2, worldId: 'duloc' },
			{ x: -3, y: -0.5, worldId: 'somewhere' }
		]
	},
	{
		id: "violet",
		color: "#513a80",
		position: { x: 6, y: 9.5 },
		points: [
			{ x: 0.5, y: -2, worldId: 'transylvania' },
			{ x: 3, y: 0.5, worldId: 'tokyo' },
			{ x: -0.5, y: 2, worldId: 'land-of-oz' },
			{ x: -3, y: -0.5, worldId: 'neon-coast' }
		]
	},
	{
		id: "green",
		color: "#85ff66",
		position: { x: 11.5, y: 24.5 },
		points: [
			{ x: 0.5, y: -2.25, worldId: 'coolsville' },
			{ x: 2.5, y: -0.5, worldId: 'bikini-bottom' },
			{ x: 1, y: 2.25, worldId: 'gotham-city' },
			{ x: -2.5, y: 1.75, worldId: 'agrabah' },
			{ x: -2.5, y: -1.25, worldId: 'andys-room' }
		]
	},
	{
		id: "magenta",
		color: "#eb8aff",
		position: { x: 16, y: 19 },
		points: [
			{ x: 0.5, y: -1.5, worldId: 'death-star' },
			{ x: 1, y: 2, worldId: 'nyc-89' },
			{ x: -2.5, y: 0.5, worldId: 'battle-world' }
		]
	},
	{
		id: "red",
		color: "#ff0000",
		position: { x: 23.5, y: 19 },
		points: [
			{ x: 0.25, y: -2.25, worldId: 'jurassic-park' },
			{ x: 3, y: 0.25, worldId: 'sanctuary' },
			{ x: -0.25, y: 2.25, worldId: 'suburbs' },
			{ x: -3, y: -0.25, worldId: 'wubulous-world' }
		]
	},
	{
		id: "yellow",
		color: "#ffff00",
		position: { x: 27, y: 12 },
		points: [
			{ x: 0.5, y: -1.5, worldId: 'strawberryland' },
			{ x: 1, y: 2, worldId: 'neon-coast-2' },
			{ x: -2, y: 0.5, worldId: 'ant-island' }
		]
	},
	{
		id: "orange",
		color: "#ff7433",
		position: { x: 22.8, y: 7.75 },
		points: [
			{ x: 0.25, y: -1.75, worldId: 'barbieland' },
			{ x: 2.25, y: 0.25, worldId: 'treasure-island' },
			{ x: -0.25, y: 1.75, worldId: 'weapon-world' },
			{ x: -2.25, y: -0.25, worldId: 'berk' }
		]
	},
	{
		id: "tangerine",
		color: "#ffa750",
		position: { x: 20, y: 4.5 },
		points: [
			{ x: 0.5, y: -2 },
			{ x: 3, y: 0.5, worldId: 'dallas-shaolin' },
			{ x: -0.5, y: 2, worldId: 'looney-tune-land' },
			{ x: -3, y: -0.5, worldId: 'chocolate-factory' }
		]
	},
	{
		id: "celadon",
		color: "#ff0000",
		position: { x: 12, y: 4.5 },
		points: [
			{ x: 0.5, y: -2, worldId: 'jade-palace' },
			{ x: 3, y: 0.5, worldId: 'hyrule' },
			{ x: -0.5, y: 2, worldId: 'haven' },
			{ x: -3, y: -0.5, worldId: 'wild-west' }
		]
	},
	{
		id: "royal",
		color: "#0000ff",
		position: { x: 13, y: 13.5 },
		points: [
			{ x: 0.5, y: -1.5, worldId: 'lego-city' },
			{ x: 1, y: 2, worldId: 'camp-halfblood' },
			{ x: -2.5, y: 0.5, worldId: 'master-of-disguise' }
		]
	},
	{
		id: "white",
		color: "#ffffff",
		position: { x: 19, y: 12 },
		points: [
			{ x: 0.5, y: -1.5, worldId: 'neon-coast-3' },
			{ x: 1, y: 2, worldId: 'candy-world' },
			{ x: -2.5, y: 0.5, worldId: 'yharnam' }
		]
	},
];