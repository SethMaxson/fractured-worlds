<script setup lang="ts">
import { computed, onMounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import World from "./components/WorldListEntry.vue";
import NittyGritty from "./components/WorldNittyGritty.vue";
import LocationCharacterDeck from '@/components/views/characters/characterDecks/DynamicCharacterDeck.vue';
import Image from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import { WorldDatas } from "@/data/world-datas";
import type { IWorldData } from "@/interfaces/IWorldData";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import { WorldDataUtils } from "@/scripts/utils/world-data-utils";


onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("Worlds");
})

const knownWorlds = {
	discovered: [
		Utils.World.findWorld(WorldDatas, "somewhere"),
		Utils.World.findWorld(WorldDatas, "wonderland"),
		Utils.World.findWorld(WorldDatas, "big-apple"),
		Utils.World.findWorld(WorldDatas, "blues-house"),
		Utils.World.findWorld(WorldDatas, "neon-coast"),
		Utils.World.findWorld(WorldDatas, "land-of-oz"),
	] as IWorldData[],
	heardAbout: [],
}

const listedWorlds = computed(() => {
	return knownWorlds.discovered.map((v) => {
		return {
			cast: WorldDataUtils.findCharactersInWorld(CharacterDataUtils.getAll(), v.id),
			peopleAccordionID: `${v.id}-people-accordion`,
			...v
		}
	})
})

// TODO: deprecate this
const doPages = false;
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
				<template v-if="doPages">
					<router-link
						v-for="world in knownWorlds.discovered"
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
				</template>
				<template v-else>
					<World
						v-for="world in listedWorlds"
					>
						<template v-slot:image>
							<Image :src="world?.images.token || 'img/worlds/blank.png'" />
						</template>
						<template v-slot:name>
							{{ world?.name }}
						</template>
						<template v-slot:one-liner>
							{{ world?.copy.oneLiner }}
						</template>
						<template v-slot:quote v-if="world?.copy.quote">
							{{ world?.copy.quote }}
						</template>
						<template v-slot>
							<p v-for="text in world?.copy.description" v-html="Utils.String.replaceComponentsInString(text)"> </p>
							<p v-if="!world?.copy.description || world.copy.description.length == 0" v-html="world?.copy.oneLiner"> </p>
							<div class="accordion" :id="world.peopleAccordionID" v-if="world.cast.length > 0">
								<AccordionItem name="People" :parent-id="world.peopleAccordionID" :default-open="true">
									<LocationCharacterDeck :people="world.cast" :containedByModal="true" />
								</AccordionItem>
							</div>
						</template>
						<template v-slot:details>
							<NittyGritty
								:anchor="world?.details.anchor"
								:disguise="world?.details.disguise"
								:exit="world?.details.exit"
								:kindred-worlds="world?.details.kindredWorlds"
								:time="world?.details.timeType"
											
								:nle-agent="world?.people.nleAgent"
								:partners="world?.people.allies"
								:pure-soul="world?.people.pureSoul"
								:rebirth-agent="world?.people.rebirthAgent"
							/>
						</template>
					</World>
				</template>
			</ul>
		</main>
	</PageContainerVue>
</template>

<style scoped>
img {
	max-height: 100%;
	max-width: 100%;
	aspect-ratio: 1 1;
}

dd {
	margin-left: 1rem;
}
</style>