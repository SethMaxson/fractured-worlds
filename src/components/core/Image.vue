<script setup lang="ts">
import { Config } from '@/scripts/config';

const props = defineProps({
	alt: {
		type: String,
		required: false
	},
	class: {
		type: String,
		required: false
	},
	src: {
		type: String,
		required: true
	}
})

const url = Config.BaseImageUrl + props.src;
</script>

<template>
	<img :class="props.class" :alt="alt" :src="url" />
</template>