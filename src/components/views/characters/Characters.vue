<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";

import Crew from './characterDecks/Crew.vue';
import CrewFormer from "./characterDecks/CrewFormer.vue";
import LocationCharacterDeck from './characterDecks/DynamicCharacterDeck.vue';

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import { Utils } from "@/scripts/utils";
import { onMounted } from "vue";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("People");
})

const TheGang = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'cobb'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'phil'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'tero')
];

const Allies = CharacterDataUtils.findCharactersByType("nle").sort((a, b) => { return a.name > b.name ? 1 : -1; });

const DeadGang = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'tropey'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'izzy'),
];

const ImportantChars = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'nihil'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'marlowe')
];

const OtherEnemies = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'pontiki')
];

const Rebirth = CharacterDataUtils.findCharactersByType("rebirth").sort((a, b) => { return a.name > b.name ? 1 : -1; });
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/people" />
			<ViewBlurb header="">
				Some of the more noteworthy people we've encountered.
			</ViewBlurb>
		</header>
		<main>
			<div class="accordion" id="characters-accordion">

				<!-- #region Major Characters -->

				<!-- #region Player Characters -->
				<AccordionItem name="The Gang" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard v-for="person in TheGang" :person="person" :key="person?.id" />
					</CharacterCardDeck>
				</AccordionItem>
				<!-- #endregion Player Characters -->

				<AccordionItem name="Crew" parent-id="characters-accordion">
					<div class="accordion" id="crew-characters-accordion">
						<AccordionItem name="Active Crew" parent-id="crew-characters-accordion" :default-open="true">
							<Crew />
						</AccordionItem>
						<AccordionItem name="Former Crew" parent-id="crew-characters-accordion">
							<CrewFormer />
						</AccordionItem>
					</div>
				</AccordionItem>

				<AccordionItem name="Allies" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard v-for="person in Allies" :person="person" :key="person?.id" />
						<!-- <CharacterCard>
							<template #image>
								<Portrait src="img/npc/kenji.png" />
							</template>
							<template #heading>Kenji Cherrymoon</template>
							<template #subheading>Halfling Dockworker</template>

							<Character>Kenji Cherrymoon</Character> is a friendly dockworker in the city of <Location>Somewhere</Location>. His knowledge of events in and out of <Location>Somewhere</Location> is impressive even for someone who regularly interacts with sailors.
							<template #footer>Faction: NLE | informant</template>
						</CharacterCard> -->
					</CharacterCardDeck>
				</AccordionItem>

				<!-- <AccordionItem name="Frenemies" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait src="characters/npc/gojiro.png" />
							</template>
							<template #heading>Gojiro</template>
							<template #subheading>Tabaxi Mercenary</template>

							<Character>Gojiro</Character> is an infamous mercenary known for his martial prowess, stealth, and tracking ability. He seems to have taken a shine to the gang.
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem> -->

				<AccordionItem name="Enemies" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard v-for="person in Rebirth" :person="person" :key="person.id" />
						<CharacterCard v-for="person in OtherEnemies" :person="person" :key="person?.id" />
					</CharacterCardDeck>
				</AccordionItem>

				<AccordionItem name="People that don't seem too important to our quest" parent-id="characters-accordion">
					<MinorCharacters />
					<div class="accordion" id="minor-characters-accordion">
						<AccordionItem name="Somewhere" parent-id="minor-characters-accordion" :default-open="true">
							<LocationCharacterDeck world-id="somewhere" />
						</AccordionItem>
					</div>
				</AccordionItem>

				<AccordionItem name="People that are probably super important" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard v-for="person in ImportantChars" :person="person" :key="person?.id" />
						<!-- <CharacterCard>
							<template #image>
								<Portrait :is-external="true" src="img/npc/ssssimon.png" />
							</template>
							<template #heading>Ssssimon</template>
							<template #subheading>The Father of Void</template>

							<Character>Ssssimon</Character> was an extradimensional collector of magical trinkets and artifacts.
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait :is-external="true" src="characters/npc/nihil.png" />
							</template>
							<template #heading>Nihil</template>
							<template #subheading>The Father of Decay</template>

							<Character>Nihil</Character> is a powerful entity who works to accelerate the natural decay of Voidspace.
						</CharacterCard> -->
					</CharacterCardDeck>
				</AccordionItem>

				<AccordionItem name="Fallen Comrades" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard status="dead" v-for="person in DeadGang" :person="person" :key="person?.id" />
					</CharacterCardDeck>
				</AccordionItem>

			</div>
		</main>
	</PageContainerVue>
</template>