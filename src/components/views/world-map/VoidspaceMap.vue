<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import { Utils } from "@/scripts/utils";
import { onBeforeUnmount, onMounted, onUnmounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import type { IWorldNexusData } from '@/interfaces/IWorldNexusData';
import VoidspaceMapCanvas from "./components/VoidspaceMapCanvas.vue";
import { Config } from "@/scripts/config";
import { TravelLogs } from "@/data/travel-logs";
import { CampaignState } from "@/data/campaign-state";
import { KindredPortals } from "@/data/kindred-portals";
import { DataService } from "@/services/data-service";


//#region Map Data
//TODO: add filters and stuff instead of just using all the definitions.
const worldNexuses: IWorldNexusData[] = DataService.WorldNexus.getWorldNexuses();
//#endregion Map Data

const mapDimensions = { width: 34, height: 29 };

const log = DataService.TravelLog.get('party');
const selectedTravelLogs = log? [log] : [];

// Initialize map and canvas stuff
onMounted(() => {
  Utils.LocalStorage.Dates.LastPageView.setNow("VoidspaceMap");
})

onBeforeUnmount(() => {
	// store state stuff here
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
			<!-- background-image="img/voidspace.png" -->
			<VoidspaceMapCanvas
				:background-image="'img/voidspace.png'"
				:kindred-portals="KindredPortals"
				:known-worlds="CampaignState.KnownWorlds"
				:map-height-in-units="mapDimensions.height"
				:map-width-in-units="mapDimensions.width"
				:travel-logs="selectedTravelLogs"
				:use-canvas="true"
				:world-nexuses="worldNexuses"
				:draw-all="false"
			/>
		</main>
	</PageContainerVue>
</template>