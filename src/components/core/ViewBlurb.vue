<script setup lang="ts">
defineProps<{
	header: string;
}>();
</script>

<template>
	<div class="greetings p-2">
		<h1 class="heading">{{ header }}</h1>
		<h3>
			<slot></slot>
		</h3>
	</div>
</template>

<style scoped>
h1 {
	font-weight: 500;
	font-size: 2.6rem;
	top: -10px;
}

h3 {
	font-size: 1.2rem;
}

/* .greetings h1,
.greetings h3 {
	text-align: center;
}

@media (min-width: 1024px) {

	.greetings h1,
	.greetings h3 {
		text-align: left;
	}
} */
</style>
