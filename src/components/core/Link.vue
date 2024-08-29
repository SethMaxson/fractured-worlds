<script setup lang="ts">
import { Config } from '@/scripts/config';

const props = defineProps({
	absoluteUrl: {
		type: Boolean,
		required: false,
		default: false
	},
	class: {
		type: String,
		required: false
	},
	href: {
		type: String,
		required: true
	},
	style: {
		type: String,
		required: false
	},
	target: {
		type: String,
		required: false,
		default: "_blank"
	}
})

const url = props.absoluteUrl? props.href : Config.BaseUrl + props.href;
</script>

<template>
	<a :class="props.class" :style="style" :href="url" :target="target" rel="noopener">
		<slot></slot>
	</a>
</template>