<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import Somewhere from '@/components/views/characters/characterDecks/Somewhere.vue';
</script>

<template>
	<div class="accordion" id="minor-characters-accordion">
		<AccordionItem name="Somewhere" parent-id="minor-characters-accordion" :default-open="true">
			<Somewhere />
		</AccordionItem>
	</div>
</template>

<style>
#minor-characters-accordion > .accordion-item > .accordion-collapse > .accordion-body {
	padding: 0.25rem;
}
</style>