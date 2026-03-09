<script setup lang="ts">
import ImageVue from "@/components/core/Image.vue";
import Panzoom, { type PanzoomObject } from '@panzoom/panzoom'
import { Utils } from "@/scripts/utils";
import { onBeforeUnmount, onMounted, onUnmounted, type PropType } from "vue";
import type { IWorldNexusData } from '@/interfaces/IWorldNexusData';
import { WorldDatas } from '@/data/world-datas';
import { WorldNexusDatas } from "@/data/world-nexus-datas";

const props = defineProps({
	worldNexuses: {
		type: Array as PropType<IWorldNexusData[]>,
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

const mapDimensions = { width: props.mapWidthInUnits, height: props.mapHeightInUnits };
const worldTokenMultiplier = 2;
let mapUnitScale = props.defaultUnitScale;
let panzoom: PanzoomObject;

let timestamp = 0;

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
						if (link.controlPoint) {
							ctx.quadraticCurveTo(
								(nexus.position.x + link.controlPoint.x) * mapUnitScale,
								(nexus.position.y + link.controlPoint.y) * mapUnitScale,
								endPoint.x,
								endPoint.y,
						);
						}
						else {
							ctx.lineTo(endPoint.x, endPoint.y);
						}
						ctx.stroke();
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
                    image.src = world.images.token;
                    document.body.append(image);
                    image.style.display = 'none';
                }
				drawTextWithBG(
					ctx,
					world.name,
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

/// expand with color, background etc.
function drawTextWithBG(ctx: CanvasRenderingContext2D, txt: string, font: string, x: number, y: number, color: string = "#dedede", padding: number = 0) {

    /// lets save current state as we make a lot of changes        
    ctx.save();

    /// set font
    ctx.font = font;

    /// draw text from top - makes life easier at the moment
    ctx.textBaseline = 'top';
	ctx.textAlign = 'center';

    /// color for background
    ctx.fillStyle = '#333';
    
    /// get width of text
    var width = ctx.measureText(txt).width;

    /// draw background rect assuming height of font
	const fontHeight = parseInt(font, 10);
    // ctx.fillRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding);
	ctx.beginPath();
    ctx.roundRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding, 5);
	ctx.fill();
    
    /// text color
    ctx.fillStyle = color;

    /// draw text on top
    ctx.fillText(txt, x, y-fontHeight/2);
    
    /// restore original state
    ctx.restore();
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