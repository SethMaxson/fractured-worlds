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
						<CharacterCard>
							<template #image>
								<Portrait src="img/party/cobb-toon.png" />
							</template>
							<template #heading>C.O.B.B.</template>
							<template #subheading>Android Monk</template>
							<template #homeworld>Golarion</template>

							<Character>Construct Observing Biological Boundaries</Character>, or <Character>C.O.B.B.</Character>, is a gifted martial artist who is fascinated by the biological concept of mortality. With a mind as powerful as his blows, he seeks to unravel the mysteries of the <Location>Void Realm</Location>.
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait src="img/party/ozzy.png" />
							</template>
							<template #heading>Izzy Bones</template>
							<template #subheading>Skeleton Fighter</template>
							<template #homeworld>Necroworld</template>

							<Character>Izzy</Character> is a chill guy from a world where necromancers rule with an iron fist and an army of dead people. He really likes heavy metal music.
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait src="img/party/phil-toon.png" />
							</template>
							<template #heading>Li'l Phil Antonio</template>
							<template #subheading>Centaur Sorcerer</template>
							<template #homeworld>Wildwood Forest</template>

							<Character>Li'l Phil Antonio</Character> is a manic, unpredictable sorcerer whose purple skin makes him an oddity
							even among other centaurs. He was raised by a trio of witches and now seeks to find his place in the
							universe. His aloof tendencies naturally blend with the	curious magic that flows within his veins to 
							make Li'l Phil the ultimate agent of chaos.
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait src="img/party/tero-kawaii.png" />
							</template>
							<template #heading>Tero</template>
							<template #subheading>Kitsune Kineticist</template>
							<template #homeworld>Golarion</template>

							<Character>Tero</Character> is a gifted student of the elements with an appetite for strength seemingly rivaled only by her appetite for new experiences. She grew up in isolation deep within the <Location>Forest of Spirits</Location>, surrounded by snow and evergreen trees.
						</CharacterCard>
					</CharacterCardDeck>
				</AccordionItem>
				<!-- #endregion Player Characters -->

				<AccordionItem name="Crew" parent-id="characters-accordion">
					<Crew />
				</AccordionItem>

				<AccordionItem name="Allies" parent-id="characters-accordion">
					<CharacterCardDeck>
						<CharacterCard>
							<template #image>
								<Portrait class="bg-nle bg-opacity-50" src="img/npc/cade-toon.png" />
							</template>
							<template #heading>Cade Brightcloak</template>
							<template #subheading>Halfling Cleric</template>

							<Character>Cade Brightcloak</Character> is an amicable knight the heroes met in <Location>Wonderland</Location>. He operates as a scout for <Important>NLE</Important>.
							<!-- He is a devout adherent of the Cerulean Star. -->
							<template #footer>Faction: NLE | scout</template>
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait class="bg-nle bg-opacity-50" src="img/npc/nortle.png" />
							</template>
							<template #heading>Nortle</template>
							<template #subheading>Tortle Bartender</template>

							<Character>Nortle</Character> is the jovial proprietor of the <Location>Happy Turtle</Location>. His tavern makes the perfect cover for his secretive work as <Important>NLE</Important>'s courier.
							<template #footer>Faction: NLE | courier & 2nd in command</template>
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait class="bg-nle bg-opacity-50" src="img/npc/boo.png" />
							</template>
							<template #heading>Boo</template>
							<template #subheading>Canine Telepath</template>

							<Character>Boo</Character> is a telepathic, telekinetic dog the heroes met in the <Location>Big Apple</Location>. He is one of <Important>NLE</Important>'s foremost scouts.
							<template #footer>Faction: NLE | scout </template>
						</CharacterCard>
						<CharacterCard>
							<template #image>
								<Portrait class="bg-nle bg-opacity-50" src="img/npc/ella.png" />
							</template>
							<template #heading>Ella Fitzpatrick</template>
							<template #subheading>Half-elf Spellblade</template>

							<Character>Ella</Character> is an excitable young scholar the heroes first encountered in the <Location>Big Apple</Location>. She serves as <Important>NLE</Important>'s zoologist, and is currently apprenticed to <Character>Boo</Character> to prepare for solo fieldwork.
							<template #footer>Faction: NLE | zoologist, apprentice scout</template>
						</CharacterCard>
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
						<CharacterCard status="dead">
							<template #image>
								<Portrait src="img/party/tropey-toon.png" />
							</template>
							<template #heading>Tropey McTroperson</template>
							<template #subheading>Dwarf Champion</template>
							<template #homeworld>Hidden Valley</template>

							<Character>Tropey McTroperson</Character> was a dwarven paladin who hailed from a small farming village. After finding himself in the mysterious <Location>Void Realm</Location>, he made it his mission to search its myriad worlds for jelly beans. He fell in battle, honorably sacrificing himself to save his friends from an alien monster.
						</CharacterCard>
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
</style>