<script setup lang="ts">
import Panzoom from '@panzoom/panzoom'
import PageContainerVue from "@/components/core/PageContainer.vue";
import WorldInfo from "./components/WorldInfo.vue";
import WorldIcon from "./components/WorldIcon.vue";
import Image from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import { onMounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";

interface IWorldNexus {
	/** just the lowercase name of the nexus without the word 'nexus'.
	 * @example 'Cyan Nexus' -> 'cyan'
	 */
	id: string;
	/** HTML hex code to use for the color of this nexus. */
	color: string;
	position: { x: number; y: number; };
	points?: { x: number; y: number; }[];
}

//#region Map Data
const worldNexuses: IWorldNexus[] = [
	{
		id: "cyan",
		color: "#44e0f1",
		position: { x: 3, y: 2 },
		points: [
			{ x: 0, y: -1 },
			{ x: 2, y: 0 },
			{ x: 0, y: 1 },
			{ x: -2, y: 0 }
		]
	}
];
//#endregion Map Data

const mapUnitScale = 50;
//TODO: Deprecate this
const useCanvas = true;

// Initialize map and canvas stuff
onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("VoidspaceMap");

	const elem = document.getElementById('panzoom-element') as HTMLElement;
	// const canvas = document.getElementById('map-canvas') as HTMLCanvasElement;
	// const ctx = canvas.getContext("2d");
	const panzoom = Panzoom(elem, {
		maxScale: 5,
		contain: 'outside',
		canvas: true,
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
	elem.parentElement?.addEventListener('wheel', panzoom.zoomWithWheel);

	if (useCanvas) {
		draw();
	}
})

function draw() {
	const ctx = (document.getElementById("map-canvas") as HTMLCanvasElement).getContext("2d");

	if (!ctx) {
		console.error("Unable to find canvas!");
		return;
	}


	//#region scale fix
	// Get the DPR and size of the canvas
	const canvas = document.getElementById("map-canvas") as HTMLCanvasElement;
	const dpr = window.devicePixelRatio;
	const rect = canvas.getBoundingClientRect();

	// Set the "actual" size of the canvas
	canvas.width = rect.width * dpr;
	canvas.height = rect.height * dpr;

	// Scale the context to ensure correct drawing operations
	ctx.scale(dpr, dpr);

	// Set the "drawn" size of the canvas
	canvas.style.width = `${rect.width}px`;
	canvas.style.height = `${rect.height}px`;
	//#endregion scale fix

	// Draw guides
	ctx.globalAlpha = 1.0;
	ctx.strokeStyle = "#0099ff";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(1400, 0);
	ctx.moveTo(0, 1400);
	ctx.lineTo(1400, 1400);
	ctx.stroke();

	// Draw nexus lines
	ctx.globalAlpha = 0.6;
	ctx.lineWidth = 3;
	ctx.lineJoin = ctx.lineCap = "round";
	worldNexuses.forEach((nexus, i) => {
		ctx.strokeStyle = nexus.color;
		ctx.beginPath();
		const {position} = nexus;
		if (nexus.points?.length) {
			ctx.moveTo(
				(position.x + nexus.points[0].x) * mapUnitScale,
				(position.y + nexus.points[0].y) * mapUnitScale
			);
			nexus.points.forEach((pt, i) => {
				if (i == 0) {
					return;
				}
				ctx.lineTo(
					(position.x + pt.x) * mapUnitScale,
					(position.y + pt.y) * mapUnitScale
				);
			});
			ctx.lineTo(
				(position.x + nexus.points[0].x) * mapUnitScale,
				(position.y + nexus.points[0].y) * mapUnitScale
			);
		}
		ctx.stroke();
	});
}
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb />
			<ViewBlurb header="Voidspace Map" author="Susie">
				This is a map of Voidspace as we currently understand it.
			</ViewBlurb>
		</header>
		<main class="px-lg-5">
			<div class="text-center border border-black border-5 mx-lg-5 bg-dark-subtle overflow-hidden">
				<div id="panzoom-element" class="position-relative">
					<canvas
						id="map-canvas"
						class="position-absolute w-100"
						style="z-index: 1;"
						v-if="useCanvas"
					>
						Unable to render map. Please try again in a different browser.
					</canvas>
					<Image
						class="position-relative w-100"
						style="z-index: 0;"
						src="img/maps/voidspace.png"
					/>
				</div>
			</div>
		</main>
	</PageContainerVue>
</template>