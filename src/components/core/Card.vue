<template>
	<div class="col">
		<div class="card" :class="class">
			<slot name="image"></slot>
			<div class="card-body">
				<h5 class="card-title">
					<slot name="heading"></slot>
				</h5>
				<h6 class="card-subtitle mb-2 text-muted">
					<slot name="subheading"></slot>
				</h6>
				<div class="card-text">
					<slot></slot>
				</div>
				<slot name="button"></slot>
			</div>
			<div class="card-footer text-muted" v-if="$slots.footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	class: {
		type: [String, Boolean, Object],
		required: false
	}
})
</script>
<script lang="ts">
export default {
  name: 'Card',
}
</script>
