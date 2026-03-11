<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import Image from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import { onBeforeUnmount, onMounted, onUnmounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { WorldNexusDatas } from '@/data/world-nexus-datas';
import type { IWorldNexusData } from '@/interfaces/IWorldNexusData';
import VoidspaceMapCanvas from "./components/VoidspaceMapCanvas.vue";
import { Config } from "@/scripts/config";
import { TravelLogs } from "@/data/travel-logs";
import { CampaignState } from "@/data/campaign-state";


//#region Map Data
//TODO: add filters and stuff instead of just using all the definitions.
const worldNexuses: IWorldNexusData[] = WorldNexusDatas;
//#endregion Map Data

const mapDimensions = { width: 34, height: 29 };

const log = TravelLogs.find(t => t.id == 'party');
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
			<VoidspaceMapCanvas
				:map-height-in-units="29"
				:map-width-in-units="34"
				:world-nexuses="worldNexuses"
				:use-canvas="Config.IsDebug"
				:travel-logs="selectedTravelLogs"
				:known-worlds="CampaignState.KnownWorlds"
				:draw-all="false"
			/>
		</main>
	</PageContainerVue>
</template>