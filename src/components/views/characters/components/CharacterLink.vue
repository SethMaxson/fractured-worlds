<script setup lang="ts">
import type { PropType } from 'vue';
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
const offerFullPageView = true;
const boxComponentType = offerFullPageView ? 'a'
    : 'button';
</script>

<template>
	<component
		:is="boxComponentType"
		class="btn btn-link"
		:type="offerFullPageView ? undefined : 'button'"
		:href="offerFullPageView ? href : undefined"
		:data-bs-target="offerFullPageView ? undefined : '#modal-character'"
		:data-bs-toggle="offerFullPageView ? undefined : 'modal'"
	>
		{{ person.name }}
		<!-- <svg class="menu-button-icon theme-color d-inline ms-1 small"><use href="#expand"></use></svg> -->
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
</template>

<script lang="ts">
export default {
  name: 'CharacterLink',
}
</script>

<style scoped>
.btn {
	border-radius: unset;
	text-align: inherit;
	color: inherit;
	font-weight: inherit;
	font-size: inherit;
	display: block;
	padding-left: var(--bs-list-group-item-padding-x) !important;
	padding-right: var(--bs-list-group-item-padding-x) !important;
	text-decoration: underline;
}
</style>
