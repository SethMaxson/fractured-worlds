<template>
	<div class="card h-100" :class="props.class">
		<slot name="image"></slot>
		<div class="card-body">
			<h5 class="card-title">
				<slot name="heading"></slot>
				<slot name="name"></slot>
			</h5>
			<h6 class="card-subtitle mb-2 text-muted border-bottom border-secondary-subtle">
				<slot name="subheading"></slot>
			</h6>
			<div class="card-text" :class="{'text-truncate': truncated}">
				<slot></slot>
			</div>
			<slot name="button"></slot>
		</div>
		<div class="card-footer text-muted" v-if="$slots.footer">
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
	truncated: {
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
