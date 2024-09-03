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
		required: true
	}
})
</script>

<template>
	<Image class="class" alt="portrait" :src="src" :is-external="isExternal" />
</template>