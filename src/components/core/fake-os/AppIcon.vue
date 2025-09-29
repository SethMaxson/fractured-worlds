<script setup lang="ts">
const props = defineProps({
	svg: {
		type: String,
		required: false
	},
	class: {
		type: String,
		required: false
	},
	image: {
		type: String,
		required: false
	},
	text: {
		type: String,
		required: false
	},
	to: {
		type: String,
		required: true,
		default: "/"
	},
})

const url = props.to || "#";
const svgID = props.svg && props.svg.includes("#")? props.svg : "#" + props.svg;
</script>

<template>
	<div class="col" :class="props.class">
		<router-link
			class="w-100 h-100 nav-link px-1 px-lg-3 pb-1 pt-0 p-lg-3 border border-primary-subtle rounded"
			:to="url"
		>
			<!-- <div class="m-0 mb-1 px-2 py-0 py-lg-2 ratio ratio-1x1">
				<svg class="button-icon theme-color m-0 p-0" v-if="svg">
					<use :href="svgID"></use>
				</svg>
			</div> -->
			<div class="d-none d-lg-block m-0 mb-1 p-2">
				<svg class="button-icon theme-color m-0 p-0" v-if="svg">
					<use :href="svgID"></use>
				</svg>
			</div>
			<div class="d-lg-none m-0 px-2 py-0 ratio ratio-1x1">
				<svg class="button-icon theme-color" v-if="svg">
					<use :href="svgID"></use>
				</svg>
			</div>
			<div class="p-0 m-0"><slot></slot></div>
		</router-link>
	</div>
</template>

<script lang="ts">
export default {
  name: 'AppIcon'
}
</script>
