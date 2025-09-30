<script setup lang="ts">
import { type PropType, useSlots } from 'vue';
import Card from '@/components/core/Card.vue';
import CardContents from '@/components/core/CardContents.vue';
import Portrait from '@/components/core/Portrait.vue';
import { id_ify } from '@/scripts/id_ify';
import { useRoute } from 'vue-router';
import { Utils } from '@/scripts/utils';
import type { ICharacterData } from '@/interfaces/ICharacterData';

import { CharacterDataUtils } from "@/scripts/character-data-utils";

const props = defineProps({
	status: {
		type: String,
		required: false
	},
	linkedID: {
		type: String,
		required: false
	},
	person: {
		type: Object as PropType<ICharacterData>
	}
})

const refPath = Utils.String.sanitizeUrl(useRoute().path);
const slots = useSlots();
const heading = slots.heading && slots.heading();

const hrefID = props.person? props.person.id : props.linkedID;
const href = `#/people/${hrefID}?path=${refPath}`;
const idBase = props.person
		? props.person.id
		: id_ify(heading && heading[0].children ? heading[0].children.toString()  : "missing-id");

const primaryFaction = props.person?.affiliations.filter(a => a.primary)[0] || undefined;

// Configure the display
const portraitClasses = props.person?.type == 'nle' ? 'bg-nle bg-opacity-50' : undefined;
</script>

<template>

	<!-- Modal version -->
	<div class="col show-on-modal">
		<Card :class="{'dead': status == 'dead'}">
			<template v-slot:footer v-if="$slots.pcContact || $slots.met">
				<div v-if="$slots.pcContact">
					Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
				</div>
				<div v-if="$slots.met">
					Met: <slot name="met"></slot>
				</div>
			</template>
			<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
				<slot :name="slot"></slot>
			</template>
		</Card>
	</div>

	<!-- #region Non-modal version -->
	<div class="col hide-on-modal">

		<!-- person object was passed -->
		<a
			class="btn btn-secondary w-100 h-100"
			:href="href"
			v-if="person"
		>
			<CardContents :class="{'dead': status == 'dead'}" :truncated="true">
				<template #image>
					<Portrait :class="portraitClasses" :src="person?.images.thumbnail" />
				</template>
				<template #heading>{{ person.name }}</template>
				<template #subheading><span class="text-capitalize">{{ CharacterDataUtils.getSubheader(person) }}</span></template>
				<template #homeworld>{{ person?.homeworld }}</template>

				<template #default>
					<div class="text-truncate" v-html="CharacterDataUtils.getMainBodyText(person, { doParagraphs: false })"></div>
					<div class="text-end pt-1">
						<span class="border-bottom border-2 text-primary bg-primary-subtle border-primary-subtle px-3 small">
							Details <svg class="menu-button-icon theme-color d-inline"><use href="#arrow-right-short"></use></svg>
						</span>
					</div>
				</template>

				<template v-slot:footer v-if="$slots.pcContact || $slots.met">
					<div v-if="$slots.pcContact">
						Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
					</div>
					<div v-if="$slots.met">
						Met: <slot name="met"></slot>
					</div>
				</template>
				<template v-slot:footer v-else-if="person.type == 'nle' && primaryFaction">
					Faction: NLE | {{ primaryFaction?.role }}
				</template>
				<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
					<slot :name="slot"></slot>
				</template>
			</CardContents>
		</a>

		<!-- no person object was passed -->
		<!-- can be either <button> or <a> depending on data shape -->
		<component
			:is="hrefID ? 'a' : 'button'"
			class="btn btn-secondary w-100 h-100"
			:type="hrefID ? undefined : 'button'"
			:href="hrefID ? href : undefined"
			:data-bs-target="hrefID ? undefined : '#modal-'+idBase"
			:data-bs-toggle="hrefID ? undefined : 'modal'"
			v-else
		>
			<CardContents :class="{'dead': status == 'dead'}" :truncated="true">
				<template v-slot:footer v-if="$slots.pcContact || $slots.met">
					<div v-if="$slots.pcContact">
						Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
					</div>
					<div v-if="$slots.met">
						Met: <slot name="met"></slot>
					</div>
				</template>
				<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
					<slot :name="slot"></slot>
				</template>
			</CardContents>
		</component>

	</div>
	<!-- #endregion Non-modal version -->

	<!-- #region Actual Modal -->
	<div class="modal fade" :id="'modal-'+idBase" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 card-title">
						<slot name="heading"></slot>
					</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="card h-100" :class="{'dead': status == 'dead'}">
						<slot name="image"></slot>
						<div class="card-body">
							<h5 class="card-title">
								<slot name="heading"></slot>
								<slot name="name"></slot>
							</h5>
							<h6 class="card-subtitle mb-2 text-muted border-bottom border-secondary-subtle">
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
				<div class="modal-footer text-muted" v-if="$slots.footer && false">
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
	<!-- #endregion Actual Modal -->
	
</template>

<script lang="ts">
export default {
  name: 'CharacterCard',
}
</script>

<style>
	.card img {
		position: relative;
		max-width: 100%;
	}

	.dead img::before {
		content: " ";
		background-image: url("@/assets/images/dead.png");
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
