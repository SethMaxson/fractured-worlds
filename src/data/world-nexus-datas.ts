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
			{ x: 0.5, y: -2 },
			{ x: 3, y: 0.5 },
			{ x: -0.5, y: 2 },
			{ x: -3, y: -0.5 }
		]
	},
	{
		id: "green",
		color: "#85ff66",
		position: { x: 11.5, y: 24.5 },
		points: [
			{ x: 0.5, y: -2.25 },
			{ x: 2.5, y: -0.5 },
			{ x: 1, y: 2.25 },
			{ x: -2.5, y: 1.75 },
			{ x: -2.5, y: -1.25 }
		]
	},
	{
		id: "magenta",
		color: "#eb8aff",
		position: { x: 16, y: 19 },
		points: [
			{ x: 0.5, y: -1.5 },
			{ x: 1, y: 2 },
			{ x: -2.5, y: 0.5 }
		]
	},
	{
		id: "red",
		color: "#ff0000",
		position: { x: 23.5, y: 19 },
		points: [
			{ x: 0.25, y: -2.25 },
			{ x: 3, y: 0.25 },
			{ x: -0.25, y: 2.25 },
			{ x: -3, y: -0.25 }
		]
	},
	{
		id: "yellow",
		color: "#ff0000",
		position: { x: 27, y: 12 },
		points: [
			{ x: 0.5, y: -1.5 },
			{ x: 1, y: 2 },
			{ x: -2, y: 0.5 }
		]
	},
	{
		id: "orange",
		color: "#ff7433",
		position: { x: 22.8, y: 7.75 },
		points: [
			{ x: 0.25, y: -1.75 },
			{ x: 2.25, y: 0.25 },
			{ x: -0.25, y: 1.75 },
			{ x: -2.25, y: -0.25 }
		]
	},
	{
		id: "tangerine",
		color: "#ffa750",
		position: { x: 20, y: 3 },
		points: [
			{ x: 0.5, y: -2 },
			{ x: 3, y: 0.5 },
			{ x: -0.5, y: 2 },
			{ x: -3, y: -0.5 }
		]
	},
	{
		id: "lime",
		color: "#ff0000",
		position: { x: 12, y: 4.5 },
		points: [
			{ x: 0.5, y: -2 },
			{ x: 3, y: 0.5 },
			{ x: -0.5, y: 2 },
			{ x: -3, y: -0.5 }
		]
	}
];