<script setup lang="ts">
import { computed, onMounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { Utils } from "@/scripts/utils";
import { WorldDatas } from "@/data/world-datas";
import type { IWorldData } from "@/interfaces/IWorldData";
import { WorldDataUtils } from "@/scripts/utils/world-data-utils";


onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("Worlds");
})

enum KnownWorldDisplayType {
	Full = 'full',
	NoName = 'no_name'
};

enum ExplorationState {
	/** They discovered the world but know almost nothing about it */
	Discovered = 'discovered',
	/** They know a little about the world (i.e. they have heard about it) */
	Known = 'known',
	/** They have physically been to this world. */
	Visited = 'visited'
};

interface IKnownWorldData {
	worldId: string;
	explorationState: ExplorationState;
	/** They have a prism key corresponding to the World Anchor in this world.
	 * TODO: remove this and create a separate Prism Key management system
	*/
	prismKey: boolean;
	/** They have found and synced the World Anchor in this world. */
	worldAnchor: boolean;
	displayType?: KnownWorldDisplayType;
}

const knownWorlds: IKnownWorldData[] = [
	{ worldId: 'somewhere', 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: false },
	{ worldId: 'wonderland', 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "big-apple", 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "blues-house", 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "neon-coast", 		explorationState: ExplorationState.Visited, 	prismKey: false, worldAnchor: false },
	{ worldId: "land-of-oz", 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "weapon-world", 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "berk", 				explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "duloc", 			explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "battle-world", 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "treasure-island", 	explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "barbieland", 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "looney-tune-land", 	explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "dallas-shaolin", 	explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
	{ worldId: "sanctuary", 		explorationState: ExplorationState.Visited, 	prismKey: true, worldAnchor: true },
];

const worlds = {
	discovered: knownWorlds.map(kw => { return Utils.World.findWorld(WorldDatas, kw.worldId) }).filter(w => { return !!w }) as IWorldData[],
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