<script setup lang="ts">
import { Config } from '@/scripts/config';
import Link from '@/components/core/Link.vue';
import { useSlots } from 'vue';

const props = defineProps({
	class: {
		type: String,
		required: false
	},
	/** The title of the tiddler/wiki page to open. Examples: 'Elf', 'Lagos', 'Murica Bigbrain' */
	href: {
		type: String,
		required: false
	},
	style: {
		type: String,
		required: false
	},
	target: {
		type: String,
		required: false
	},
	/** Indicates whether this link concerns a character, location, item, etc. Will probably mostly be used for formatting. */
	type: {
		type: String,
		required: false
	}
});

const slots = useSlots();
const linkText = props.href || (slots && slots.default? slots.default()[0].children : '');

const url = Config.WikiUrl + '#' + linkText;
</script>

<template>
	<Link :class="props.class" :style="style" :href="url" :target="target" :absolute-url="true">
		<slot></slot>
	</Link>
</template>