<script setup lang="ts">
const props = defineProps({
	class: {
		type: String,
		required: false
	},
});
</script>

<template>
	<div class="container fake-os py-0 py-lg-4 px-4 px-sm-3 px-md-2 px-lg-4 text-center" :class="props.class">
		<div class="row g-2 g-lg-4 row-cols-3 row-cols-md-5 row-cols-lg-6 row-cols-xl-8">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'AppIconContainer'
}
</script>
