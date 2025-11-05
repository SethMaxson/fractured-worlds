<script setup lang="ts">
import Card from "@/components/core/Card.vue";
import CardDeck from "@/components/core/CardDeck.vue";
import Portrait from "@/components/core/Portrait.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import { Utils } from "@/scripts/utils";
import { onMounted } from "vue";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("Factions");
})
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/factions" />
			<ViewBlurb header="">
				Organizations we know of that operate within the the <Location>Void Realm</Location>.
			</ViewBlurb>
		</header>
		<main>
			<CardDeck>
				<Card>
					<template #image>
						<Portrait src="img/emblems/tankman_soft.png" :class="'emblem'" />
					</template>
					<template #heading>Tankman Enterprises</template>
					<!-- <template #subheading>The Fellowship of Individuals for the Reclamation of Edolador</template> -->

					<Character>Tankman Enterprises</Character> appeared to be the manufacturer of the barrel of spectral monkeys that drifted to the docks of <Location>Somewhere</Location>.
				</Card>
				<Card>
					<template #image>
						<Portrait src="img/emblems/rebirth_gemini_3.jpg" :class="'emblem'" />
					</template>
					<template #heading>The Rebirth Caucus</template>

					The <Character>Rebirth Caucus</Character> is a shadowy organization that seeks <Important>Pure Souls</Important> for some nefarious goal.
				</Card>
				<Card>
					<template #image>
						<Portrait src="img/emblems/nle_soft.png" :class="'emblem'" />
					</template>
					<template #heading>N.L.E.</template>
					<template #subheading>AKA: Nelly, The Network, Network of Like-minded Expatriates</template>

					<Character>N.L.E.</Character> is a loosely connected group of individuals working in secret to find a way to restore the worlds that are being swallowed by the <Location>Void Realm</Location>.
				</Card>
			</CardDeck>
		</main>
	</PageContainerVue>
</template>

<style scoped>
	.emblem {
		max-height: 10rem;
		max-width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: contain;
	}
</style>