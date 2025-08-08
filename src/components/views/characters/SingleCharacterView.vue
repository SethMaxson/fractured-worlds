<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Portrait from '@/components/core/Portrait.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";

import { CharacterDatas } from "@/data/character-datas";
import { Utils } from "@/scripts/utils";

const props = defineProps({
	id: {
		type: String,
		required: true
	}
})

function isArray(test: string|string[]): test is string[] {
	return Array.isArray(test);
}

const path = "/people/" + props.id;
const search = CharacterDatas.filter(char => char.id == props.id);
const person = search && search.length > 0 ? search[0] : undefined;
const subheader: string|undefined = person ? person.species.join(" ") + " " + person.occupation.join(" ") : undefined;
const rawBody = person ? person.description : undefined;
let bodyText = "";
if (person && rawBody) {
	if (isArray(rawBody)) {
		bodyText = "<p>" + Utils.String.replaceComponentsInString(rawBody.join("</p><p>")) + "</p>";
	}
	else {
		bodyText = Utils.String.replaceComponentsInString(rawBody);
	}
}

</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
		</header>
		<main>
			<div v-if="person">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-body">
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
								<div class="card-footer text-muted" v-if="$slots.footer || person.homeworld">
									<div v-if="person.homeworld">
										Homeworld: {{person.homeworld}}
									</div>
									<slot name="footer"></slot>
								</div>
							</div>
						</div>
						<div class="modal-footer text-muted" v-if="$slots.footer">
							<slot name="footer"></slot>
							<!-- <template v-slot:footer v-if="$slots.pcContact || $slots.met">
								<div v-if="$slots.pcContact">
									Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
								</div>
								<div v-if="$slots.met">
									Met: <slot name="met"></slot>
								</div>
							</template> -->
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