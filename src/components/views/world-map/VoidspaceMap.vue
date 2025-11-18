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

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("VoidspaceMap");

	const elem = document.getElementById('panzoom-element') as HTMLElement;
	const panzoom = Panzoom(elem, {
		maxScale: 5,
		contain: 'outside',
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
})
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
					<Image
						class="position-relative"
						style="z-index: 0;"
						src="img/maps/voidspace.png"
					/>
				</div>
			</div>
		</main>
	</PageContainerVue>
</template>