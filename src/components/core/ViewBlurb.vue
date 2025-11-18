<script setup lang="ts">
defineProps<{
	header: string;
	author?: string;
	version?: string;
}>();
</script>

<template>
	<div class="greetings p-2 pb-0 border-2 border-bottom mb-2">
		<h1 class="heading">
			<span v-html="header"></span>
			<span class="ms-3 fs-6 fw-normal text-secondary small" v-if="version" v-html="version"></span>
		</h1>
		<figure class="mb-1">
			<blockquote class="blockquote mb-1">
				<p style="font-size: 1rem;" class="lead text-secondary-emphasis lh-sm"><slot></slot></p>
			</blockquote>
			<div v-if="author" class="blockquote-footer text-end fw-normal py-0 mb-0">{{author}}</div>
		</figure>
	</div>
</template>

<style scoped>
h1 {
	/* font-family: 'Scones and Crossbows', sans-serif; */
	/* font-family: 'BrickShapers', sans-serif; */
	/* font-family: "Gajraj One", sans-serif; */
	font-weight: normal;
	/* font-weight: 500; */
	font-size: 1.75rem;
	letter-spacing: 0.1rcap;
	top: -10px;
}
</style>
