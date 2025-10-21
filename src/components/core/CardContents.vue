<template>
	<div class="card h-100" :class="props.class">
		<slot name="image"></slot>
		<div class="card-body">
			<h5 class="card-title d-flex align-items-center" v-if="truncateHeader">
				<div class="w-100 flex-grow-1 text-truncate">
					<slot name="heading"></slot>
					<slot name="name"></slot>
				</div>
				<div class="flex-shrink-1">
					<svg v-if="openIcon" class="menu-button-icon theme-color d-inline ms-1 small"><use :href="openIcon"></use></svg>
				</div>
			</h5>
			<h5 class="card-title" v-else>
				<slot name="heading"></slot>
				<slot name="name"></slot>
				<svg v-if="openIcon" class="menu-button-icon theme-color d-inline ms-1 small"><use :href="openIcon"></use></svg>
			</h5>
			<h6 class="card-subtitle mb-2 text-muted border-bottom border-secondary-subtle">
				<slot name="subheading"></slot>
			</h6>
			<!-- <div class="card-text" v-if="truncated && openIcon">
				<div class="d-flex justify-content-between">
					<div class="flex-grow-1 text-truncate">
						<slot></slot>
					</div>
					<div class="ms-1">
						<svg class="menu-button-icon theme-color d-inline"><use :href="openIcon"></use></svg>
					</div>
				</div>
			</div> -->
			<div class="card-text" :class="{'text-truncate': truncated}">
				<slot></slot>
			</div>
			<slot name="button"></slot>
		</div>
		<div class="card-footer text-muted small" v-if="$slots.footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	class: {
		type: [String, Boolean, Object],
		required: false
	},
	openIcon: {
		type: [String],
		default: undefined
	},
	truncated: {
		type: [String, Boolean],
		default: false
	},
	truncateHeader: {
		type: [String, Boolean],
		default: false
	}
})
</script>
<script lang="ts">
export default {
  name: 'CardContents',
}
</script>
