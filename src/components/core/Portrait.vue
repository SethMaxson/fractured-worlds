<script setup lang="ts">
import Image from './Image.vue';

defineProps({
	isExternal: {
		type: Boolean,
		required: false,
		default: false
	},
	src: {
		type: String,
		required: false,
		default: ""
	}
});
</script>

<template>
	<div class="overflow-hidden ratio portrait-container">
		<Image class="portrait object-fit-contain" alt="portrait" :src="src" :is-external="isExternal" v-if="src.length > 0" />
		<svg class="portrait object-fit-contain my-0 mx-auto" width="300" height="300" v-else>
			<use href="#user2"></use>
		</svg>
	</div>
</template>

<style>
.portrait-container {
	position: relative;
	width: 100%;
	padding-bottom: 100%;
}
</style>
