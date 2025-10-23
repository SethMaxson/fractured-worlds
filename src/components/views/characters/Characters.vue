<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";

import MinorCharacters from './subviews/MinorCharacters.vue';
import Crew from '@/components/views/characters/characterDecks/Crew.vue';
import CrewFormer from "./characterDecks/CrewFormer.vue";

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";

const TheGang = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'cobb'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'izzy'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'phil'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'tero')
];

const Allies = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'boo'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'cade'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'ella'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'doc'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'nortle'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'owl'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'ferret'),
];

const DeadGang = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'tropey')
];
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
				<AccordionItem name="The Gang" parent-id="characters-accordion" :default-open="true">
					<CharacterCardDeck>
						<CharacterCard v-for="person in TheGang" :person="person" />
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
						<CharacterCard v-for="person in Allies" :person="person" />
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
						<CharacterCard>
							<template #image>
								<Portrait class="bg-rebirth bg-opacity-50" src="img/npc/jafar.png" />
							</template>
							<template #heading>Jafar</template>
							<template #subheading>Human Sorcerer</template>

							<Character>Jafar</Character> is a conniving, haughty sorcerer we encountered in <Location>Wonderland</Location>. He fled through a portal into another world after realizing that we and <Character>Cade Brightcloak</Character> outnumbered him five to one.
							<template #footer>Faction: Rebirth Caucus</template>
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait class="bg-rebirth bg-opacity-50" src="img/npc/shredder.png" />
							</template>
							<template #heading>Shredder</template>
							<template #subheading>Human Ninjutsu Master</template>

							<Character>Shredder</Character> was a cruel, prideful martial artist we encountered in the <Location>Big Apple</Location>. We fought him to a near standstill before he took one of the <Character>Turtles</Character>—<Character>Donatello</Character>—hostage. He was last seen falling into a garbage truck and being compacted.
							<template #footer>Faction: Rebirth Caucus</template>
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait class="bg-rebirth bg-opacity-50" src="img/npc/doyle.png" />
							</template>
							<template #heading>?</template>
							<template #subheading>Human Mage</template>

							This man was talking to <Character>Shredder</Character> shortly before our fight in the <Location>Big Apple</Location>. He attempted to abduct <Character>Michelangelo</Character> after the battle while the <Character>Turtles</Character> were distracted. We thwarted his kidnapping attempt, and he somehow teleported away in a mass of inky tendrils.
							<template #footer>Faction: Rebirth Caucus</template>
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait src="img/party/pontiki.png" />
							</template>
							<template #heading>Pontiki</template>
							<template #subheading>Ratfolk Gunslinger</template>
							<template #homeworld>Tomb of Sir Richard</template>

							<Character>Pontiki</Character> is a fierce warrior from an underground burrow. He learned the way of the gunslinger after an encounter with a destructive tomb raider left Pontiki scarred and without a family.
							<template #footer>Faction: None</template>
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem>

				<!-- <AccordionItem name="Acquaintances" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait class="bg-nle bg-opacity-50" src="img/npc/cade.png" />
							</template>
							<template #heading>Hedge Knight</template>
							<template #subheading>Halfling Cleric</template>

							<b>Cade "Destiny's Child" Brightcloak</b> is an amicable knight the heroes met in <Location>Wonderland</Location>. He is a devout adherent of the Cerulean Star.
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem> -->

				<!-- #endregion Major Characters -->

				<AccordionItem name="People that don't seem too important to our quest" parent-id="characters-accordion">
					<MinorCharacters />
				</AccordionItem>

				<AccordionItem name="People that are probably super important" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait src="img/npc/unknown.png" />
							</template>
							<template #heading>???</template>
							<template #subheading>The Father of Decay? Maybe the Father of Void?</template>

							<Character>This guy</Character> is pretty dang scary, kupo. Let's not go near him any more.
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait src="img/npc/marlowe-2.webp" />
							</template>
							<template #heading>Marlowe</template>
							<template #subheading>Friend. Maybe best friend.</template>

							<Character>Marlowe</Character> is super cool, and you should definitely not be angry if you ever find out that he has been following you since you first came to the <Location>Void Realm</Location>. Cookies, yes! You should give him cookies. Made with Kupo Nuts.
						</CharacterCard>
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
						<CharacterCard status="dead" v-for="person in DeadGang" :person="person" />
					</CharacterCardDeck>
				</AccordionItem>

			</div>
		</main>
	</PageContainerVue>
</template>

<style>
/* #characters-accordion .character {
	color: inherit;
} */
 
#crew-characters-accordion > .accordion-item > .accordion-collapse > .accordion-body {
	padding: 0.25rem;
}
</style>