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
	notification: {
		type: Boolean,
		required: false,
		default: false
	},
	unread: {
		type: Number,
		required: false,
		default: 0
	},
})

const url = props.to || "#";
const svgID = props.svg && props.svg.includes("#")? props.svg : "#" + props.svg;
</script>

<template>
	<div class="col" :class="props.class">
		<router-link
			class="w-100 h-100 nav-link px-1 px-lg-3 pb-1 pt-2 p-lg-3 border border-primary-subtle rounded position-relative"
			:to="url"
		>
			<span v-if="unread > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
				{{unread > 99 ? '99+' : unread}} 
				<span class="visually-hidden">unread entries</span>
			</span>
			<span v-else-if="notification" class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
				<span class="visually-hidden">New alerts</span>
			</span>

			<div class="d-none d-lg-block m-0 mb-1 ratio ratio-1x1">
				<svg class="button-icon theme-color m-0 p-0" v-if="svg">
					<use :href="svgID"></use>
				</svg>
			</div>
			<div class="d-lg-none m-0 px-2 py-0 ratio ratio-1x1">
				<svg class="button-icon theme-color" v-if="svg">
					<use :href="svgID"></use>
				</svg>
			</div>
			<div class="p-0 m-0 small"><slot></slot></div>
		</router-link>
	</div>
</template>

<script lang="ts">
export default {
  name: 'AppIcon'
}
</script>
