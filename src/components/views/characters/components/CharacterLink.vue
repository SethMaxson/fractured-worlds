<script setup lang="ts">
import { type PropType } from 'vue';
import CharacterFullView from "./CharacterFullView.vue";
import { useRoute } from 'vue-router';
import { Utils } from '@/scripts/utils';
import type { ICharacterData } from '@/interfaces/ICharacterData';

const props = defineProps({
	person: {
		type: Object as PropType<ICharacterData>,
		required: true
	}
})

const refPath = Utils.String.sanitizeUrl(useRoute().path);

const hrefID = props.person?.id;
const href = `#/people/${hrefID}?path=${refPath}`;

// Configure the display
const npcTypeClass = Utils.Images.getPortraitClassesFromType(props.person?.type);
const offerFullPageView = false;
const boxComponentType = offerFullPageView ? 'a'
    : 'button';
</script>

<template>
	<div class="col">

		<!-- person object was passed -->
		<component
			:is="boxComponentType"
			class="btn btn-link"
			:type="offerFullPageView ? undefined : 'button'"
			:href="offerFullPageView ? href : undefined"
			:data-bs-target="offerFullPageView ? undefined : '#modal-character'"
			:data-bs-toggle="offerFullPageView ? undefined : 'modal'"
		>
			{{ person.name }}
			<div class="d-none">
				<div class="has-person"></div>
				<h1 class="modal-title">
					<slot name="heading">{{ person?.name }}</slot>
				</h1>
				<div class="modal-body">
					<CharacterFullView :person="person" />
				</div>
			</div>
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
