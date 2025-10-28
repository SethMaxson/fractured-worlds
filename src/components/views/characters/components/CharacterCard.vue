<script setup lang="ts">
import { type PropType, useSlots } from 'vue';
import Card from '@/components/core/Card.vue';
import CardContents from '@/components/core/CardContents.vue';
import Portrait from '@/components/core/Portrait.vue';
import CharacterFullView from "./CharacterFullView.vue";
import { id_ify } from '@/scripts/id_ify';
import { useRoute } from 'vue-router';
import { Utils } from '@/scripts/utils';
import type { ICharacterData } from '@/interfaces/ICharacterData';

import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";

const props = defineProps({
	containedByModal: {
		type: Boolean,
		required: false,
		default: false
	},
	person: {
		type: Object as PropType<ICharacterData>
	},
	status: {
		type: String,
		required: false
	}
})

const refPath = Utils.String.sanitizeUrl(useRoute().path);
const slots = useSlots();
const heading = slots.heading && slots.heading();

const hrefID = props.person?.id;
const href = `#/people/${hrefID}?path=${refPath}`;

const primaryFaction = props.person?.affiliations.filter(a => a.primary)[0] || undefined;

// Configure the display
const npcTypeClass = Utils.Images.getPortraitClassesFromType(props.person?.type);
// const portraitClasses = npcTypeClass?.concat(" card-img-top ratio ratio-1x1");
const portraitClasses = npcTypeClass;
// const offerFullPageView = props.person?.plotRelevance && props.person.plotRelevance > 1 ? true : false;
const offerFullPageView = false;
const openIcon = offerFullPageView && false ? '#enter'
	: !props.containedByModal ? '#expand'
	: undefined;
const boxComponentType = props.containedByModal ? 'div'
    : offerFullPageView ? 'a'
    : 'button';
const disableClick = props.containedByModal;
</script>

<template>
	<div class="col">

		<!-- person object was passed -->
		<component
			:is="boxComponentType"
			class="w-100 h-100"
			:class="{ 'btn btn-secondary': !containedByModal }"
			:type="offerFullPageView || disableClick ? undefined : 'button'"
			:href="offerFullPageView && !disableClick ? href : undefined"
			:data-bs-target="offerFullPageView || disableClick ? undefined : '#modal-character'"
			:data-bs-toggle="offerFullPageView || disableClick ? undefined : 'modal'"
			v-if="person"
		>
			<CardContents :class="{'dead': status == 'dead'}" :truncated="!containedByModal" :truncate-header="!containedByModal" :open-icon="openIcon">
				<template #image>
					<Portrait :class="portraitClasses" :src="person?.images.portrait" />
				</template>
				<template #heading>{{ person.name }}</template>
				<template #subheading>
					<div class="text-capitalize" :class="{'text-truncate': !containedByModal}">{{ CharacterDataUtils.getSubheader(person) }}</div>
				</template>
				<template #homeworld>{{ person?.homeworld }}</template>

				<template #default>
					<div :class="{'text-truncate': !containedByModal}" v-html="CharacterDataUtils.getMainBodyText(person, { doParagraphs: containedByModal })"></div>
					<!-- Renderable content for modals and such -->
					<div class="d-none">
						<div class="has-person"></div>
						<h1 class="modal-title">
							<slot name="heading">{{ person?.name }}</slot>
						</h1>
						<div class="modal-body">
							<CharacterFullView :person="person" />
						</div>
					</div>
				</template>

				<template v-slot:footer v-if="person.type == 'nle' && primaryFaction">
					Faction: NLE | {{ primaryFaction?.role }}
				</template>
				<template v-slot:footer v-else-if="person.type == 'rebirth'">
					Faction: Rebirth Caucus
				</template>
				<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
					<slot :name="slot"></slot>
				</template>
			</CardContents>
		</component>

		<!-- no person object was passed -->
		<!-- can be either <button> or <a> depending on data shape -->
		<component
			:is="hrefID ? 'a' : 'button'"
			class="btn btn-secondary w-100 h-100"
			:type="hrefID ? undefined : 'button'"
			:href="hrefID ? href : undefined"
			:data-bs-target="hrefID ? undefined : '#modal-character'"
			:data-bs-toggle="hrefID ? undefined : 'modal'"
			v-else
		>
			<CardContents :class="{'dead': status == 'dead'}" :truncated="true" open-icon="#expand">
				<template v-slot:footer v-if="$slots.pcContact || $slots.met">
					<div v-if="$slots.pcContact">
						Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
					</div>
					<div v-if="$slots.met">
						Met: <slot name="met"></slot>
					</div>
				</template>
				<template #hidden>
					<!-- Renderable content for modals and such -->
					<div class="d-none">
						<h1 class="modal-title">
							<slot name="heading"></slot>
						</h1>
						<div class="modal-body">
							<div class="card h-100" :class="{'dead': status == 'dead'}">
								<slot name="image"></slot>
								<div class="card-body">
									<h5 class="card-title">
										<slot name="heading"></slot>
										<slot name="name"></slot>
									</h5>
									<h6 class="card-subtitle mb-2 text-muted border-bottom border-secondary-subtle text-capitalize">
										<slot name="subheading"></slot>
									</h6>
									<div class="card-text">
										<slot></slot>
									</div>
									<slot name="button"></slot>
								</div>
								<div class="card-footer text-muted" v-if="$slots.footer || $slots.homeworld">
									<div v-if="$slots.homeworld">
										Homeworld: <slot name="homeworld"></slot>
									</div>
									<slot name="footer"></slot>
								</div>
							</div>
						</div>
					</div>
				</template>
				<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
					<slot :name="slot"></slot>
				</template>
			</CardContents>
		</component>

	</div>
</template>

<script lang="ts">
export default {
  name: 'CharacterCard',
}
</script>

<style>
.card img {
	max-width: 100%;
}
.dead img::before {
	content: " ";
	/* background-image: url("@/assets/images/dead.png"); */
	background: red;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 5;
	opacity: 5;
}
</style>

<style scoped>
.btn {
	text-align: inherit;
	color: inherit;
	font-weight: inherit;
	font-size: inherit;
	padding: 0.1rem;
}
</style>
