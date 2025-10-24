<script setup lang="ts">
defineProps<{
	header: string;
	author?: string;
	version?: string;
}>();
</script>

<template>
	<div class="greetings p-2 border-2 border-bottom mb-2">
		<h1 class="heading">
			<span v-html="header"></span>
			<span class="ms-3 fs-6 fw-normal text-secondary small" v-if="version" v-html="version"></span>
		</h1>
		<figure>
			<blockquote class="blockquote">
				<p class="fs-6 fs-lg-5 lead text-secondary-emphasis lh-sm"><slot></slot></p>
			</blockquote>
			<div v-if="author" class="blockquote-footer text-end fw-normal">{{author}}</div>
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
