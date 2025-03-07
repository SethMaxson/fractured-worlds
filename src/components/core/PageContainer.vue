<template>
	<div :class="classList">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	isWide: {
		type: Boolean,
		required: false,
		default: false
	},
	class: {
		type: [String, Boolean],
		required: false,
		default: false
	}
})

const classArray: string[] = ["pb-4 pb-lg-0"];
if (!props.isWide) {
	classArray.push("container");
	classArray.push("bg-body");
}
if (props.class && typeof props.class == "string") {
	classArray.push(props.class);
}
const classList = classArray.join(" ").trim();
</script>

<style scoped>
	.full-screen {
		position: absolute;
		left: 0;
		top: 5em;  /* Navbar offset */
		width: 100vw !important;
		max-width: 100vw !important;
		min-height: calc(100vh - 5em);
		/* padding-top: 10em; */
		overflow-x: auto;
		overflow-y: visible
	}
</style>