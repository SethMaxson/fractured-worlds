<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import Image from "@/components/core/Image.vue";
import LocationCharacterDeck from '@/components/views/characters/characterDecks/DynamicCharacterDeck.vue';
import NittyGritty from "./components/WorldNittyGritty.vue";
import { useRoute } from "vue-router";
import { Utils } from "@/scripts/utils";
import { WorldDatas } from "@/data/world-datas";
import { computed } from "vue";
import { WorldDataUtils } from "@/scripts/utils/world-data-utils";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";

const props = defineProps({
	id: {
		type: String,
		required: true
	}
})

const queryPath = useRoute().query.path as string;

const path = (queryPath? queryPath + "/" : "/worlds/") + props.id;
const world = Utils.World.findWorld(WorldDatas, props.id);
const cast = WorldDataUtils.findCharactersInWorld(CharacterDataUtils.getAll(), props.id);

const bgImg = world?.images.wallpaper?.trim();
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
		</header>
		<main>
			<div v-if="world">
				
				<!-- Header -->
				<div class="border-bottom border-secondary-subtle pb-2 d-flex flex-wrap align-items-baseline mb-2">
					<h1 class="small-caps flex-shrink-0 me-2 me-lg-3 py-0 my-0">
						{{ world.name }}
					</h1>
					<h4 v-if="world.copy.quote && world.copy.quote.length > 0" class="fst-italic text-muted text-capitalize small-caps d-none d-xl-block">
						"{{world.copy.quote}}"
					</h4>
				</div>
				
				<!-- Content -->
				<div class="row background-image" :style='{ "backgroundImage": "linear-gradient( to bottom, transparent 0%, var(--fw-bs-body-bg) 40%  ), url(\"" + bgImg + "\")" }'>
					
					<!-- wiki-style InfoBox -->
					<div class="col-xl-4">
						<div class="card world">
							<Image :src="world.images.token || 'img/worlds/blank.png'" />
							<div class="card-body p-2 pt-0">
								<div class="card-subtitle pb-2 mb-2 text-muted border-bottom border-secondary-subtle text-center">
									<em v-if="world.copy.oneLiner && world.copy.oneLiner.length > 0">{{ world.copy.oneLiner }}</em>
									<em v-else-if="world.copy.quote && world.copy.quote.length > 0">"{{ world.copy.quote }}"</em>
								</div>
								<div class="card-text">
									<NittyGritty
										:anchor="world.details.anchor"
										:disguise="world.details.disguise"
										:exit="world.details.exit"
										:kindred-worlds="world.details.kindredWorlds || []"
										:time="world.details.timeType"
										
										:nle-agent="world.people.nleAgent"
										:partners="world.people.allies"
										:pure-soul="world.people.pureSoul"
										:rebirth-agent="world.people.rebirthAgent"
									/>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Body -->
					<div class="p-2 col-xl-8 ps-xl-4 d-flex flex-column">

						<blockquote v-if="world.copy.quote && world.copy.quote.length > 0" class="blockquote text-center text-muted text-capitalize small-caps d-block d-xl-none">
							"{{world.copy.quote}}"
						</blockquote>

						<div class="card-body">
							<div class="card-text row">
								<div class="col">
									<p v-for="desc in world.copy.description" v-html="desc"></p>
									<p v-if="!world.copy.description || world.copy.description.length == 0" v-html="world.copy.oneLiner"></p>
								</div>
							</div>
						</div>

					</div>

				</div>

				<!-- This div fixes some weird float behavior -->
				<div class="clearfix m-0 p-0 d-none d-md-block">&nbsp;</div>
				
				<div class="accordion mt-4" id="world-peopleAccordionID" v-if="cast.length > 0">
					<AccordionItem name="People" parent-id="world-peopleAccordionID">
						<LocationCharacterDeck :people="cast" :containedByModal="false" />
					</AccordionItem>
				</div>

			</div>
		</main>
	</PageContainerVue>
</template>