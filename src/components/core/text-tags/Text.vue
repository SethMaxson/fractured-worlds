<script setup lang="ts">
defineProps({
	class: {
		type: String,
		required: false
	},
	style: {
		type: String,
		required: false
	}
})
</script>

<template>
	<span class="fw-bold" :class="class" :style="style">
		<slot></slot>
	</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'Text'
})
</script>