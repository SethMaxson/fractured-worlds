<script setup lang="ts">
import { computed, onMounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { Utils } from "@/scripts/utils";
import { WorldDatas } from "@/data/world-datas";
import type { IWorldData } from "@/interfaces/IWorldData";
import { WorldDataUtils } from "@/scripts/utils/world-data-utils";
import { type IKnownWorldData, ExplorationState } from "@/interfaces/IKnownWorldData";
import { CampaignState } from "@/data/campaign-state";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("Worlds");
})

const worlds = {
	discovered: CampaignState.KnownWorlds.map(kw => { return kw.explorationState == ExplorationState.Visited && Utils.World.findWorld(WorldDatas, kw.worldId) }).filter(w => { return !!w }) as IWorldData[],
	heardAbout: [],
}
</script>

<template>
	<PageContainerVue :isWide="false" class="px-0">
		<header>
			<Breadcrumb path="/worlds" />
			<ViewBlurb header="Worlds" author="Eva Davis">
				World remnants we know to exist or to have existed at some point.
			</ViewBlurb>
		</header>
		<main>
			<ul class="list-group w-100 m-0 p-1">
				<router-link
					v-for="world in worlds.discovered"
					:v-if="world"
					:to="`/worlds/${world?.id}`"
					class="list-group-item list-group-item-action row ms-0"
				>
					<div class="row py-1">
						<div class="col col-xl-2 pe-xl-1">
							<div class="fw-bold text-decoration-underline">
								{{world?.name}}
							</div>
						</div>
						<div class="col my-xl-0 mx-xl-0 d-none d-lg-block">
							{{ world?.copy.oneLiner || world?.copy.description[0] }}
						</div>
					</div>
				</router-link>
			</ul>
		</main>
	</PageContainerVue>
</template>