<script setup lang="ts">
defineProps({
	containedByModal: {
		type: Boolean,
		required: false,
		default: false
	}
})
</script>

<template>
	<div :class="containedByModal? 'row row-cols-1 row-cols-lg-2 g-2' : 'row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2'">
		<slot></slot>
	</div>
</template>

<script lang="ts">
export default {
  name: 'CardDeck',
}
</script>
