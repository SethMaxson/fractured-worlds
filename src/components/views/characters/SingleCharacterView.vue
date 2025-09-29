<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Portrait from '@/components/core/Portrait.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";

import { CharacterDatas } from "@/data/character-datas";
import { Utils } from "@/scripts/utils";
import { CharacterDataUtils } from "@/scripts/character-data-utils";
import Image from "@/components/core/Image.vue";
import { useRoute } from "vue-router";

const props = defineProps({
	id: {
		type: String,
		required: true
	}
})

const queryPath = useRoute().query.path as string;

const path = (queryPath? queryPath + "/" : "/people/") + props.id;
const person = CharacterDataUtils.findCharacter(CharacterDatas, props.id);
const subheader = CharacterDataUtils.getSubheader(person);
const bodyText = CharacterDataUtils.getMainBodyText(person);
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
		</header>
		<main>
			<div v-if="person">
				<div class="row g-2 g-lg-4 row-cols-1 row-cols-md-2 mt-0">
					<div class="col col-lg-8 order-2 order-lg-1">
						<h1 class="border-bottom border-secondary-subtle pb-2 text-uppercase">
							{{ person.name }}
						</h1>
						<div class="details text-capitalize ps-md-3 ps-lg-4">
							<div class="subheader">
								<h6 v-if="subheader" class="text-muted mb-2">
									{{subheader}}
								</h6>
								<div class="text-muted mb-2" v-if="person.homeworld">
									Homeworld: <b>{{person.homeworld}}</b>
								</div>
							</div>
							<div class="details pt-2 text-muted" v-if="person.physical">
								<div v-if="person.physical.height">
									Height: {{person.physical.height}}
								</div>
								<div v-if="person.physical.weight">
									Weight: {{person.physical.weight}}
								</div>
								<div v-if="person.physical.eyeColor">
									Eyes: {{person.physical.eyeColor}}
								</div>
								<div v-if="person.physical.hairColor">
									Hair: {{person.physical.hairColor}}
								</div>
							</div>
						</div>
					</div>
					<div class="col col-lg-4 order-1 order-lg-2">
						<Image class="portrait object-fit-fill rounded my-0 mx-auto" alt="portrait" :src="person.images.thumbnail" v-if="person.images.thumbnail.length > 0" />
						<svg class="portrait object-fit-fill rounded my-0 mx-auto" width="300" height="300" v-else>
							<use href="#user2"></use>
						</svg>
					</div>
				</div>

				<div class="mt-4" v-html="bodyText"> </div>
				
			</div>
			<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
				There doesn't seem to be any data for this person yet.
			</div>
		</main>
	</PageContainerVue>
</template>

<style scoped lang="css">
.portrait {
	max-width: 100%;
}


/* reference https://www.dreamworks.com/how-to-train-your-dragon/explore/hiccup */
</style>