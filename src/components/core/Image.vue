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

const url = props.isExternal ? Config.BaseImageUrl + props.src : props.src;
</script>

<template>
	<img :class="props.class" :alt="alt" :src="url" />
</template>