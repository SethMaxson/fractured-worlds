<template>
	<div class="col">
		<CardContents :class="class">
			<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
				<slot :name="slot"></slot>
			</template>
		</CardContents>
	</div>
</template>

<script setup lang="ts">
import CardContents from '@/components/core/CardContents.vue';
defineProps({
	class: {
		type: [String, Boolean, Object],
		required: false
	}
})
</script>
<script lang="ts">
export default {
  name: 'Card',
}
</script>
