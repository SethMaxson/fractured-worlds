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
	<Image class="portrait object-fit-fill ratio" alt="portrait" :src="src" :is-external="isExternal" v-if="src.length > 0" />
	<svg class="portrait my-0 mx-auto" width="300" height="300" v-else>
		<use href="#user2"></use>
	</svg>
</template>