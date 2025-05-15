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
			class="w-100 h-100 nav-link px-3 pb-1 pt-0 p-lg-3 border border-primary-subtle rounded"
			:to="url"
		>
			<div class="m-0 mb-lg-1 p-0 p-lg-2">
				<svg class="button-icon theme-color m-0" v-if="svg">
					<use :href="svgID"></use>
				</svg>
			</div>
			<slot></slot>
		</router-link>
	</div>
</template>

<script lang="ts">
export default {
  name: 'AppIcon'
}
</script>
