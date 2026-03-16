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
		],
		links: [
			{
				to: 'green',
				segmentFrom: 1,
				segmentTo: 4,
				controlPoint: { x: 5 , y: 2 },
				unlockType: 'half_anchors',
				trackedNexus: 'violet'
			},
			{
				to: 'violet',
				segmentFrom: 3,
				segmentTo: 2,
				controlPoint: { x: -5 , y: -4 }
			},
			{
				to: 'royal',
				segmentFrom: 0,
				segmentTo: 2,
				unlockType: 'all_anchors',
			}
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
		],
		links: [
			
		]
	},
	{
		id: "green",
		color: "#85ff66",
		position: { x: 11.5, y: 24.5 },
		points: [
			{ x: 0.5, y: -2.25, worldId: 'coolsville' },
			{ x: 2.5, y: -0.5, worldId: 'bikini-bottom' },
			{ x: 1, y: 2.25, worldId: 'gotham' },
			{ x: -2.5, y: 1.75, worldId: 'agrabah' },
			{ x: -2.5, y: -1.25, worldId: 'toy-story' }
		],
		links: [
			{
				to: 'magenta',
				segmentFrom: 0,
				segmentTo: 1
			}
		]
	},
	{
		id: "magenta",
		color: "#eb8aff",
		position: { x: 15.5, y: 19.25 },
		points: [
			{ x: 1, y: -1.75, worldId: 'moon' },
			{ x: 1.5, y: 1.75, worldId: 'nyc-89' },
			{ x: -2, y: 0.25, worldId: 'battle-world' }
		],
		links: [
			{
				to: 'red',
				segmentFrom: 0,
				segmentTo: 2
			}
		]
	},
	{
		id: "red",
		color: "#ff0000",
		position: { x: 23.5, y: 19 },
		points: [
			{ x: 0.25, y: -2.25, worldId: 'jurassic-park' },
			{ x: 2.75, y: 0, worldId: 'sanctuary' },
			{ x: -0.25, y: 2.25, worldId: 'suburbs' },
			{ x: -2.75, y: -0.25, worldId: 'wubbulous-world' }
		],
		links: [
			{
				to: 'yellow',
				segmentFrom: 0,
				segmentTo: 0,
				controlPoint: { x: 10 , y: -4 }
			}
		]
	},
	{
		id: "yellow",
		color: "#ffff00",
		position: { x: 27, y: 12 },
		points: [
			{ x: 1, y: -1.75, worldId: 'strawberryland' },
			{ x: 1.5, y: 1.75, worldId: 'neon-coast-2' },
			{ x: -2, y: 0.25, worldId: 'ant-island' }
		],
		links: [
			{
				to: 'orange',
				segmentFrom: 2,
				segmentTo: 2,
				controlPoint: { x: -9 , y: -2 }
			}
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
		],
		links: [
			{
				to: 'tangerine',
				segmentFrom: 0,
				segmentTo: 2,
				controlPoint: { x: 2 , y: -8 }
			}
		]
	},
	{
		id: "tangerine",
		color: "#ffa750",
		position: { x: 18.75, y: 3.5 },
		points: [
			// { x: 0.1, y: -2.5 },
			{ x: 1.75, y: 0, worldId: 'dallas-shaolin' },
			{ x: -0.25, y: 2, worldId: 'looney-tune-land' },
			{ x: -1.75, y: -0.5, worldId: 'chocolate-factory' }
		],
		links: [
			{
				to: 'celadon',
				segmentFrom: 1,
				segmentTo: 1
			}
		]
	},
	{
		id: "celadon",
		color: "#45d693",
		position: { x: 12, y: 4.5 },
		points: [
			{ x: 0, y: -3, worldId: 'jade-palace' },
			{ x: 2.75, y: -1.5, worldId: 'hyrule' },
			{ x: 2.75, y: 1.5, worldId: 'haven' },
			{ x: 0, y: 3, worldId: 'wild-west' },
			{ x: -2.75, y: 1.5, worldId: 'nyc-2002' },
			{ x: -2.75, y: -1.5, worldId: 'unicornucopia' },
		],
		// points: [
		// 	{ x: 0, y: -2, worldId: 'jade-palace' },
		// 	{ x: 1.75, y: -1, worldId: 'hyrule' },
		// 	{ x: 1.75, y: 1, worldId: 'haven' },
		// 	{ x: 0, y: 2, worldId: 'wild-west' },
		// 	{ x: -1.75, y: 1, worldId: 'nyc-2002' },
		// 	{ x: -1.75, y: -1, worldId: 'unicornucopia' },
		// ],
		links: [
			{
				to: 'violet',
				segmentFrom: 3,
				segmentTo: 0
			}
		]
	},
	{
		id: "royal",
		color: "#0000ff",
		position: { x: 13, y: 13.5 },
		points: [
			{ x: -1.5, y: -1.25, worldId: 'lego-city' },
			{ x: 1.5, y: -0.25, worldId: 'camp-halfblood' },
			{ x: -0.5, y: 2, worldId: 'master-of-disguise' },
		],
		links: [
			{
				to: 'white',
				segmentFrom: 0,
				segmentTo: 2,
				controlPoint: { x: -1 , y: -6.5 }
			}
		]
	},
	{
		id: "white",
		color: "#ffffff",
		position: { x: 16, y: 11 },
		points: [
			{ x: 1.5, y: -1, worldId: 'neon-coast-3' },
			{ x: 0.5, y: 2, worldId: 'candy-world' },
			{ x: -2, y: -0.5, worldId: 'yharnam' }
		],
		links: [
		]
	},
];