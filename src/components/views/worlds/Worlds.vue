<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import World from "./components/WorldListEntry.vue";
import NittyGritty from "./components/WorldNittyGritty.vue";
import Somewhere from '@/components/views/characters/characterDecks/Somewhere.vue';
import Image from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import { WorldDatas } from "@/data/world-datas";

const knownWorlds = {
	discovered: [
		Utils.World.findWorld(WorldDatas, "wonderland"),
		Utils.World.findWorld(WorldDatas, "big-apple"),
		Utils.World.findWorld(WorldDatas, "blues-house"),
		Utils.World.findWorld(WorldDatas, "neon-coast"),
		Utils.World.findWorld(WorldDatas, "land-of-oz"),
	],
	heardAbout: [],
}

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
				<World>
					<template v-slot:image>
						<Image src="img/worlds/somewhere.png" />
					</template>
					<template v-slot:name>
						Somewhere
					</template>
					<template v-slot:one-liner>
						Our home away from home.
					</template>
					<template v-slot>
						<p>A home for lost things.</p>
						<div class="accordion" id="somewhere-accordion">
							<AccordionItem name="People" parent-id="somewhere-accordion" :default-open="true">
								<Somewhere :containedByModal="true" />
							</AccordionItem>
						</div>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="?"
							disguise=""
							partners=""
							:kindredWorlds='[]'
							time="standard"
						/>
					</template>
				</World>
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
						v-for="world in knownWorlds.discovered"
						:v-if="world"
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