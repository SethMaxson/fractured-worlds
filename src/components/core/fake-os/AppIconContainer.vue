<script setup lang="ts">
const props = defineProps({
	class: {
		type: String,
		required: false
	},
});
</script>

<template>
	<div class="container fake-os py-4 px-5 px-sm-4 px-md-2 px-lg-4 text-center" :class="props.class">
		<div class="row g-3 g-lg-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'AppIconContainer'
}
</script>
