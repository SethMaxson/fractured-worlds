<script setup lang="ts">
import Card from "@/components/core/Card.vue";
import CardDeck from "@/components/core/CardDeck.vue";
import Portrait from "@/components/core/Portrait.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from '@/components/core/text-tags/Important.vue';
</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="Factions">
				Some of the organizations at play in this story.
			</ViewBlurb>
		</header>
		<main>
			<CardDeck>
				<Card>
					<!-- <template #image>
						<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
					</template> -->
					<template #heading>Tankman Enterprises</template>
					<!-- <template #subheading>The Fellowship of Individuals for the Reclamation of Edolador</template> -->

					<Character>Tankman Enterprises</Character> appeared to be the manufacturer of the barrel of spectral monkeys that drifted to the docks of <Location>Somewhere</Location>.
				</Card>
				<Card>
					<template #heading>The Rebirth Caucus</template>

					The <Character>Rebirth Caucus</Character> is a shadowy organization that seems to be seeking <Important>Pure Souls</Important>.
				</Card>
				<!-- <Card>
					<template #heading>N.L.E.</template>
					<template #subheading>AKA: Nelly, The Network, Network of Like-minded Expatriates</template>

					<b>N.L.E.</b> is a shadowy, loosely connected group of individuals working together towards a common goal
				</Card> -->
			</CardDeck>
		</main>
	</PageContainerVue>
</template>
