<script setup lang="ts">
defineProps({
	class: {
		type: String,
		required: false
	},
	session: {
		type: [Number, String],
		required: false,
		default: 0
	},
	name: {
		type: String,
		required: true
	},
	party: {
		type: String,
		required: false
	},
	date: {
		type: String,
		required: false
	}
})
</script>

<template>
	<div class="row border-bottom border-2 m-0" :class="class">
		<div class="col-1 border-end border-2 text-end d-none d-md-block">
			{{session}}
		</div>
		<div class="col border-end border-2 d-none d-md-block">
			{{name}}
		</div>
		<div class="col border-end border-2 d-none d-lg-block">
			{{party}}
		</div>
		<div class="col-2 text d-none d-md-block">
			{{date}}
		</div>
		<div class="col border-end border-2 d-block d-md-none bg-info-subtle fw-bold position-relative">
			{{session}}. {{name}}
			<span class="position-absolute top-50 end-0 translate-middle-y px-2">{{date}}</span>
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'JournalLabels',
}
</script>
