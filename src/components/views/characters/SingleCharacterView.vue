<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Portrait from '@/components/core/Portrait.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";

import { CharacterDatas } from "@/data/character-datas";
import { Utils } from "@/scripts/utils";
import { CharacterDataUtils } from "@/scripts/character-data-utils";

const props = defineProps({
	id: {
		type: String,
		required: true
	}
})

const path = "/people/" + props.id;
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
				<div class="card h-100">
					<Portrait :src="person.images.thumbnail" />
					<div class="card-body">
						<h5 class="card-title">
							{{ person.name }}
						</h5>
						<h6 v-if="subheader" class="card-subtitle mb-2 text-muted border-bottom border-secondary-subtle" style="text-transform:capitalize;">
							{{subheader}}
						</h6>
						<div class="card-text" v-html="bodyText">
						</div>
					</div>
					<div class="card-footer text-muted" v-if="person.homeworld">
						<div v-if="person.homeworld">
							Homeworld: {{person.homeworld}}
						</div>
					</div>
				</div>
			</div>
			<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
				There doesn't seem to be any data for this person yet.
			</div>
		</main>
	</PageContainerVue>
</template>