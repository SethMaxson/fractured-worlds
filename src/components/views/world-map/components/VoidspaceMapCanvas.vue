<script setup lang="ts">
import ImageVue from "@/components/core/Image.vue";
import Panzoom, { type PanzoomObject } from '@panzoom/panzoom'
import { Utils } from "@/scripts/utils";
import { onBeforeUnmount, onMounted, onUnmounted, type PropType } from "vue";
import type { IWorldNexusData } from '@/interfaces/IWorldNexusData';
import { WorldDatas } from '@/data/world-datas';
import { WorldNexusDatas } from "@/data/world-nexus-datas";
import type { ITravelLogTimelineEvent, ITravelLog } from "@/interfaces/travel-log/ITravelLog";
import { KnownWorldDisplayType, type IKnownWorldData } from "@/interfaces/IKnownWorldData";

const props = defineProps({
	worldNexuses: {
		type: Array as PropType<IWorldNexusData[]>,
		required: true
	},
	travelLogs: {
		type: Array as PropType<ITravelLog[]>,
		required: true
	},
	knownWorlds: {
		type: Array as PropType<IKnownWorldData[]>,
		required: true
	},
	defaultUnitScale: {
		type: Number,
		required: false,
		default: 30
	},
	mapWidthInUnits: {
		type: Number,
		required: false,
		default: 34
	},
	mapHeightInUnits: {
		type: Number,
		required: false,
		default: 18
	},
	/**Indicates whether this map should use the canvas.
     * TODO: Deprecate this
	 * @default true
	*/
	useCanvas: {
		type: Boolean,
		required: false,
		default: true
	},
	/**
     * The background image for this map display.
	 * @example "img/maps/voidspace.png"
     * @default "img/maps/voidspace.png"
	 */
	backgroundImage: {
		type: String,
		required: false,
		default: 'img/maps/voidspace.png'
	},
})

interface IWorldPositionEntry {
	x: number;
	y: number;
	worldId: string;
	nexusId: string;
}

const mapDimensions = { width: props.mapWidthInUnits, height: props.mapHeightInUnits };
const worldTokenMultiplier = 2;
const travelStopIconRadius = 4;
let mapUnitScale = props.defaultUnitScale;
let panzoom: PanzoomObject;
let timestamp = 0;

let worldPositions: IWorldPositionEntry[];

// Initialize map and canvas stuff
onMounted(() => {
    const elem = document.getElementById('panzoom-element') as HTMLElement;
	timestamp = Date.now();
	// const canvas = document.getElementById('map-canvas') as HTMLCanvasElement;
	// const ctx = canvas.getContext("2d");
	panzoom = Panzoom(elem, {
		maxScale: 5,
		contain: 'outside',
		// canvas: true,
		// // Can add an element reference
		// exclude: [document.getElementById('link')],
		// // ...or set a class on the element
		// excludeClass: 'custom-excluded-class'
	});
	// panzoom.pan(10, 10);
	// panzoom.zoom(2, { animate: true });

	// Panning and pinch zooming are bound automatically (unless disablePan is true).
	// There are several available methods for zooming
	// that can be bound on button clicks or mousewheel.
	// button.addEventListener('click', panzoom.zoomIn);
	// elem.parentElement?.addEventListener('wheel', panzoom.zoomWithWheel);
	elem.addEventListener('wheel', panzoom.zoomWithWheel);

	if (props.useCanvas) {
		const canvas = document.getElementById("map-canvas") as HTMLCanvasElement;
		const bound = elem.getBoundingClientRect();
		canvas.height = bound.height;
		canvas.width = bound.width;
		mapUnitScale = Math.round(bound.width / mapDimensions.width);
		draw();
	}

	worldPositions = [];
	props.worldNexuses.forEach(nexus => {
		nexus.points?.forEach(world => {
			if (!world.worldId) {
				return;
			}

			worldPositions.push({
				x: nexus.position.x + world.x,
				y: nexus.position.y + world.y,
				worldId: world.worldId,
				nexusId: nexus.id
			});
		});
	});
})

onBeforeUnmount(() => {
	panzoom.destroy();
})

function draw() {
	const ctx = getMapCanvas().getContext("2d");

	if (!ctx) {
		console.error("Unable to find canvas!");
		return;
	}

	//#region scale fix
	// Get the DPR and size of the canvas
	const canvas = getMapCanvas();
	const dpr = window.devicePixelRatio;
	const panZoomScale = panzoom.getScale();
	const rect = canvas.getBoundingClientRect();

	// Set the "actual" size of the canvas
	canvas.width = rect.width * dpr;
	canvas.height = rect.height * dpr;

	// Scale the context to ensure correct drawing operations
	ctx.scale(dpr * panZoomScale, dpr * panZoomScale);

	// Set the "drawn" size of the canvas
	canvas.style.width = `${rect.width}px`;
	canvas.style.height = `${rect.height}px`;
	//#endregion scale fix

	//#region Draw nexuses
	ctx.globalAlpha = 0.6;
	ctx.lineWidth = 3;
	ctx.lineJoin = ctx.lineCap = "round";
	
	// iterate over nexuses
	props.worldNexuses.forEach((nexus, i) => {
		ctx.fillStyle = ctx.strokeStyle = nexus.color;
		const {position, points} = nexus;
		if (points?.length) {
		    // draw lines
		    ctx.beginPath();
			ctx.moveTo(
				(position.x + points[0].x) * mapUnitScale,
				(position.y + points[0].y) * mapUnitScale
			);
			points.forEach((pt, i) => {
				if (i == 0) {
					return;
				}
				ctx.lineTo(
					(position.x + pt.x) * mapUnitScale,
					(position.y + pt.y) * mapUnitScale
				);
			});
			ctx.lineTo(
				(position.x + points[0].x) * mapUnitScale,
				(position.y + points[0].y) * mapUnitScale
			);
		    ctx.stroke();

			//#region draw switchtracks
			if (nexus.links?.length && nexus.links.length > 0) {
				ctx.save();
				for (let i = 0; i < nexus.links.length; i++) {
					const link = nexus.links[i];
					const linkedNexus = nexus.links?.length ? getNexus(nexus.links[i].to) : undefined;
					if (link && linkedNexus) {
						ctx.fillStyle = ctx.strokeStyle = linkedNexus.color;
						let pointFrom = getLinkPoint(nexus, link.segmentFrom);
						let pointTo = getLinkPoint(linkedNexus, link.segmentTo);
						ctx.beginPath();
						ctx.moveTo(
							(position.x + pointFrom.x) * mapUnitScale,
							(position.y + pointFrom.y) * mapUnitScale
						);
						const endPoint = { x: (linkedNexus.position.x + pointTo.x) * mapUnitScale, y: (linkedNexus.position.y + pointTo.y) * mapUnitScale };

						//#region actually draw the switchtrack link
						if (link.controlPoint && link.controlPoint2) {
							// draw curve with two control points
							ctx.bezierCurveTo(
								(nexus.position.x + link.controlPoint.x) * mapUnitScale,
								(nexus.position.y + link.controlPoint.y) * mapUnitScale,
								(nexus.position.x + link.controlPoint2.x) * mapUnitScale,
								(nexus.position.y + link.controlPoint2.y) * mapUnitScale,
								endPoint.x,
								endPoint.y,
							);
						}
						else if (link.controlPoint) {
							// draw curve with one control points
							ctx.quadraticCurveTo(
								(nexus.position.x + link.controlPoint.x) * mapUnitScale,
								(nexus.position.y + link.controlPoint.y) * mapUnitScale,
								endPoint.x,
								endPoint.y,
							);
						}
						else {
							// draw straight line
							ctx.lineTo(endPoint.x, endPoint.y);
						}
						ctx.stroke();
						//#endregion actually draw the switchtrack link
					}
				}
				ctx.restore();
			}
			//#endregion draw switchtracks

            // draw world at point
            ctx.globalAlpha = 1;
			points.forEach((pt, i) => {
				if (!pt.worldId || pt.worldId.length == 0) {
					return;
				}
				const world = Utils.World.findWorld(WorldDatas, pt.worldId);
				const worldKnowledge = props.knownWorlds.find(k => k.worldId == world?.id);
                if (!world || !world.images.token) {
                    return;
                }
                let image = document.getElementById(world.id+"img") as HTMLImageElement|undefined;
                if (image) { // the image element has already been created
					if (image.complete && (typeof image.naturalWidth === "undefined" || image.naturalWidth === 0)) {
						// Image is broken. Set a default image.
						image.src = "img/worlds/atlantica.png";
					}
					else {
						// image is fine, render normally
						ctx.drawImage(image, (position.x + pt.x - (worldTokenMultiplier/2)) * mapUnitScale, (position.y + pt.y - (worldTokenMultiplier/2)) * mapUnitScale, mapUnitScale * worldTokenMultiplier, mapUnitScale * worldTokenMultiplier);
					}
                }
                else {
                    image = new Image(mapUnitScale, mapUnitScale); // Using optional size for image
                    image.id = world.id+"img";
                    // image.src = world.images.token;
					image.src = worldKnowledge?.displayType == KnownWorldDisplayType.NoIcon || worldKnowledge?.displayType == KnownWorldDisplayType.NoNameOrIcon ? "img/worlds/blank.png" : world.images.token,
                    document.body.append(image);
                    image.style.display = 'none';
                }
				drawTextWithBG(
					ctx,
					worldKnowledge?.displayType == KnownWorldDisplayType.NoName || worldKnowledge?.displayType == KnownWorldDisplayType.NoNameOrIcon ? "???" : world.name,
					"8px sans-serif",
					(position.x + pt.x) * mapUnitScale,
					((position.y + pt.y + (worldTokenMultiplier/2)) * mapUnitScale) + 4,
					world.details.isHub? '#ffc800' : '#dedede',
					2
				)
			});
		}

		// draw label
        ctx.globalAlpha = 0.8;
		ctx.fillStyle = ctx.strokeStyle = nexus.color;
		ctx.font = "italic 8px serif";
		ctx.textAlign = 'center';
		ctx.fillText(`${Utils.String.capitalize(nexus.id)} Nexus`, position.x * mapUnitScale, (position.y * mapUnitScale) + 4); // '+ 4' because it is half of the current font size.
	});
	//#endregion Draw nexuses

	//#region Draw travel paths
	ctx.save();
	props.travelLogs.forEach(log => {
		const stops = log?.history || [];
		const startPosition = worldPositions && worldPositions.length > 0 ? worldPositions.find(w => w.worldId == stops[0].locationId) : undefined;
		if (startPosition) {
			ctx.strokeStyle = log?.themeColor || "#fff";
			ctx.fillStyle = shadeColor(ctx.strokeStyle as string, 10);
			const stopSpaceMods = spaceStopMods(stops);
			ctx.globalAlpha = 0.9;
			ctx.lineWidth = 1;
			ctx.setLineDash([4, 4]);
			const yOffset = 5;

			ctx.beginPath();
			ctx.moveTo(
				(startPosition.x) * mapUnitScale,
				(startPosition.y) * mapUnitScale + yOffset
			);
			
			// dashed lines
			stops.forEach((stop, i) => {
				// no need to handle the first stop
				if (i == 0) {
					return;
				}

				const position = worldPositions.find(w => w.worldId == stop.locationId);
				if (stop.eventType == 'world' && position) {
					ctx.lineTo((position.x + stopSpaceMods[i].x) * mapUnitScale, (position.y + stopSpaceMods[i].y) * mapUnitScale + yOffset);
				}
			});
			ctx.stroke();

			// points at stops
			ctx.globalAlpha = 1;
			ctx.lineWidth = 3;
			ctx.setLineDash([]);
			ctx.strokeStyle = shadeColor(ctx.strokeStyle as string, -40);
			stops.forEach((stop, i) => {
				const position = worldPositions.find(w => w.worldId == stop.locationId);
				if (stop.eventType == 'world' && position && stop.stopped) {
					ctx.beginPath();
					ctx.ellipse((position.x + stopSpaceMods[i].x) * mapUnitScale, (position.y + stopSpaceMods[i].y) * mapUnitScale + yOffset, travelStopIconRadius, travelStopIconRadius, 0, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fill();
				}
			});
		}
	});	
	ctx.restore();
	//#endregion Draw travel paths

	// queue next frame
	requestAnimationFrame(draw);
}

interface ISimplePoint { x: number, y: number };
function getMidpoint(a: ISimplePoint, b: ISimplePoint): ISimplePoint {
	return { x: (a.x + b.x)/2, y: (a.y + b.y)/2}
}
function getSegmentEnds(points: ISimplePoint[], segmentIndex: number): ISimplePoint[] {
	let firstEnd = points[segmentIndex];
	let secondEnd = segmentIndex >= points.length-1 ? points[0] : points[segmentIndex+1];
	return [firstEnd, secondEnd];
}
function getLinkPoint(nexus: IWorldNexusData, segmentIndex: number = 0): ISimplePoint {
	if (!nexus.points) {
		return {x:0,y:0};
	}
	const ends = getSegmentEnds(nexus.points, segmentIndex);
	return getMidpoint(ends[0], ends[1]);
}

function getNexus(id: string): IWorldNexusData | undefined {
	return WorldNexusDatas.filter(n => n.id == id)[0];
}

function spaceStopMods(stops: ITravelLogTimelineEvent[]): {x :number, y: number}[] {
	let foundCounter: { worldId: string, count: number}[] = [];
	const processedStops: {x:number, y:number}[] = [];
	const stopModIncrement = 0.3;
	stops.forEach((stop, i) => {
		// count how many times this world has been visited
		if (foundCounter.filter(f => f.worldId == stop.locationId)[0]) {
			foundCounter.filter(f => f.worldId == stop.locationId)[0].count++;
		}
		else {
			foundCounter.push({worldId: stop.locationId, count: 1});
		}

		let count = foundCounter.filter(f => f.worldId == stop.locationId)[0].count;

		processedStops.push({
			x: (count - 1) * stopModIncrement * 0.5,
			y: (count - 1) * stopModIncrement,
		});
	});
	return processedStops;
}

/// expand with color, background etc.
function drawTextWithBG(ctx: CanvasRenderingContext2D, txt: string, font: string, x: number, y: number, color: string = "#dedede", padding: number = 0) {

    // save current state as we make a lot of changes        
    ctx.save();
	
    ctx.font = font;
    ctx.textBaseline = 'top'; // draw text from top - makes life easier at the moment
	ctx.textAlign = 'center';
    ctx.fillStyle = '#333';

    // draw background rect assuming height of font
	const fontHeight = parseInt(font, 10);
    const width = ctx.measureText(txt).width;
    // ctx.fillRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding);
	ctx.beginPath();
    ctx.roundRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding, 5);
	ctx.fill();

    // draw text on top
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y-fontHeight/2);
    
    // restore original state
    ctx.restore();
}

/** Only works on HTML hex codes
 * Source - https://stackoverflow.com/a/13532993
 * Posted by Pablo, modified by community. See post 'Timeline' for change history
 * Retrieved 2026-03-10, License - CC BY-SA 4.0
 */
function shadeColor(color: string, percent: number) {
	const shortForm = color.length < 7;
    var R = shortForm ? parseInt(color.substring(1,2),16) : parseInt(color.substring(1,3),16);
    var G = shortForm ? parseInt(color.substring(2,3),16) : parseInt(color.substring(3,5),16);
    var B = shortForm ? parseInt(color.substring(3,4),16) : parseInt(color.substring(5,7),16);

    R = R * (100 + percent) / 100;
    G = G * (100 + percent) / 100;
    B = B * (100 + percent) / 100;

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}


function getMapCanvas() {
    return document.getElementById("map-canvas") as HTMLCanvasElement;
}
</script>

<template>
    <div class="text-center border border-black border-5 mx-lg-5 bg-dark-subtle overflow-hidden">
        <div id="panzoom-element" class="position-relative" :key="'voidspace-map-canvas'+timestamp">
            <canvas
                id="map-canvas"
                class="position-absolute w-100 h-100"
                style="z-index: 1;"
                v-if="useCanvas"
				:key="'map-canvas-' + timestamp"
            >
                Unable to render map. Please try again in a different browser.
            </canvas>
            <ImageVue
                class="position-relative w-100"
                style="z-index: 0;"
                :src="backgroundImage"
            />
        </div>
    </div>
</template>