<script setup lang="ts">
import Image from './Image.vue';

defineProps({
	src: {
		type: String,
		required: true
	}
})
</script>

<template>
	<Image class="class" alt="portrait" :src="src" />
</template>