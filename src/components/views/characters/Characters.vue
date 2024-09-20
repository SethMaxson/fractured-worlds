<script setup lang="ts">
import PartyCards from "./subviews/PartyCards.vue";
import MinorCharacters from './subviews/MinorCharacters.vue';
import AccordionItem from "@/components/core/AccordionItem.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import WikiLink from '@/components/core/WikiLink.vue';
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="Characters">
				Everyone knows a story is only as good as its cast.
			</ViewBlurb>
		</header>
		<main>
			<div class="accordion" id="characters-accordion">

				<!-- #region Major Characters -->

				<AccordionItem name="Main Characters" parent-id="characters-accordion" :default-open="true">
					<PartyCards />
				</AccordionItem>

				<AccordionItem name="Crew" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait src="img/npc/hamisfore.png" />
							</template>
							<template #heading>Duvamil "Hamisfore" Turen</template>
							<template #subheading>Gnome</template>

							<Character>Hamisfore</Character> is a brightly colored, middle-aged gnomish woman whose 'crazy aunt' energy hides a world-weary heart. Recruited after facing her in gladiatorial combat in <Location>Somewhere</Location>.

							<template #footer>Role: Deckhand (04/02/0001 SE-present)</template>
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait src="img/npc/ootah.png" />
							</template>
							<template #heading>Ootah</template>
							<template #subheading>Orc Child</template>

							<Character>Ootah</Character> is a five year old orphan who believes herself to be the captain of the <Important>One More Day</Important>. She exhibits behavior that suggests extreme narcissism. Recruited after facing her in gladiatorial combat in <Location>Somewhere</Location>.
							<template #footer>Role: Captain? (04/02/0001 SE-present)</template>
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem>

				<!-- <AccordionItem name="Allies" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait src="img/npc/kenji.png" />
							</template>
							<template #heading>Kenji Cherrymoon</template>
							<template #subheading>Halfling Dockworker</template>

							<Character>Kenji Cherrymoon</Character> is a friendly dockworker in the city of <Location>Somewhere</Location>. His knowledge of events in and out of <Location>Somewhere</Location> is impressive even for someone who regularly interacts with sailors.
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem> -->

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
								<Portrait class="bg-danger bg-opacity-50" src="img/npc/jafar.png" />
							</template>
							<template #heading>Jafar</template>
							<template #subheading>Human Sorcerer</template>

							<Character>Jafar</Character> is a conniving, haughty sorcerer the party encountered in <Location>Wonderland</Location>.
							<template #footer><u>Faction</u>: Rebirth Caucus</template>
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem>

				<AccordionItem name="Acquaintances" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait src="img/npc/hedge-knight.png" />
							</template>
							<template #heading>Hedge Knight</template>
							<template #subheading>Halfling Cleric</template>

							<!-- <b>Cade "Destiny's Child" Brightcloak</b> is a devout adherent of the Cerulean Star. -->
							The <Character>Hedge Knight</Character> is a mysterious, seemingly amicable knight the heroes met in <Location>Wonderland</Location>.
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem>

				<!-- <AccordionItem name="Fallen Comrades" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard status="dead">
							<template #image>
								<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
							</template>
							<template #heading>Dilbert the Incontinent</template>
							<template #subheading>Human Paladin</template>

							<b>Dilbert the Incontinent</b> is a formidable warrior with a natural tendency towards good-natured altruism. He
							has uncommonly high self-doubt, which may be the only thing hampering his otherwise tactical mind.
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait src="characters/npc/wednesday-warriors/dave-meowthews.png" />
							</template>
							<template #heading>Dave Meowthews</template>
							<template #subheading>Tabaxi Farmer</template>

							<Character>Leaf in the Cyclone</Character>, also known as <b>Dave Meowthews</b>, was a middle-aged tabaxi who dreamed of one day becoming a sky-pirate captain.
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem> -->

				<!-- <AccordionItem name="Important Figures" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait :is-external="true" src="characters/npc/ssssimon.png" />
							</template>
							<template #heading>Ssssimon</template>
							<template #subheading>The Father of Decay</template>

							<Character>Ssssimon</Character> was an extradimensional collector of magical trinkets and artifacts.
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem> -->

				<!-- #endregion Major Characters -->

				<AccordionItem name="Minor Characters" parent-id="characters-accordion">
					<MinorCharacters />
				</AccordionItem>

			</div>
		</main>
	</PageContainerVue>
</template>

<style>
/* #characters-accordion .character {
	color: inherit;
} */
</style>