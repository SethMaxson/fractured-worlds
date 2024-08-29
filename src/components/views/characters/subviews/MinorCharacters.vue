<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import WikiLink from '@/components/core/WikiLink.vue';
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
</script>

<template>
	<div class="accordion" id="minor-characters-accordion">
		<AccordionItem name="Somewhere" parent-id="minor-characters-accordion" :default-open="true">
			<CharacterCardDeck>
				<CharacterCard>
					<template #image>
						<img class="bg bg-secondary" alt="portrait" src="/public/tokens/Halfling Commoner 2.png" />
					</template>
					<template #heading>Kenny Cobblerock</template>
					<!-- <template #heading>Kenji Cherrymoon</template> -->
					<template #subheading>Halfling Dockworker</template>

					<b>Kenny Cobblerock</b> is a friendly dockworker in the city of <Location>Somewhere</Location>. His knowledge of events in and out of Somewhere is impressive even for someone who regularly interacts with sailors.
				</CharacterCard>
				<CharacterCard>
					<template #image>
						<img class="bg bg-secondary" alt="portrait" src="/public/tokens/Molefolk 3.png" />
					</template>
					<template #heading>Bowuf</template>
					<!-- <template #heading>Kenji Cherrymoon</template> -->
					<template #subheading>Burrowfolk Cobbler</template>

					<b>Bowuf</b> is an astoundingly elderly mole man. The heroes rescued him from Blanks when he wandered into the <Location>2nd District of Somewhere</Location>.
				</CharacterCard>
			<!-- <CharacterCard>
				<template #image>
					<Portrait src="characters/npc/killinggame/default-portrait.jpeg" />
				</template>
				<template #heading>Baddie</template>
				<template #subheading>Species Job</template>
				<template #pcContact>PCContact</template>

				<b>Baddie</b> is some kind of person.
			</CharacterCard> -->
			</CharacterCardDeck>
		</AccordionItem>
	</div>
</template>

<style>
#minor-characters-accordion > .accordion-item > .accordion-collapse > .accordion-body {
	padding: 0.25rem;
}
</style>