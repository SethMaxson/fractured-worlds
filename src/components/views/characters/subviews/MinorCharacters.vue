<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import LocationCharacterDeck from '@/components/views/characters/characterDecks/DynamicCharacterDeck.vue';
</script>

<template>
	<div class="accordion" id="minor-characters-accordion">
		<AccordionItem name="Somewhere" parent-id="minor-characters-accordion" :default-open="true">
			<LocationCharacterDeck world-id="somewhere" />
		</AccordionItem>
	</div>
</template>