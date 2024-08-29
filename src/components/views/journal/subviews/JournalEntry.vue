<script setup lang="ts">
import JournalLabels from './JournalLabels.vue';

defineProps({
	session: {
		type: Number||String,
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
	<JournalLabels :session="session" :name="name" :party="party" :date="date" class="bg-light" />
	<div class="m-0 p-2 border-bottom border-3 border-info">
		<slot></slot>
	</div>
</template>

<script lang="ts">
export default {
    name: "JournalEntry",
    components: { JournalLabels }
}
</script>
