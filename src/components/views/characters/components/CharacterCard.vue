<script setup lang="ts">
import Card from '@/components/core/Card.vue';

defineProps({
	status: {
		type: String,
		required: false
	}
})
</script>

<template>
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
</template>

<script lang="ts">
export default {
  name: 'CharacterCard',
}
</script>

<style>
	.card img {
		position: relative;
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
