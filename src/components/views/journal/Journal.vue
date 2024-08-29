<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import JournalLabels from "./subviews/JournalLabels.vue";
import JournalEntry from "./subviews/JournalEntry.vue";
import Location from "@/components/core/text-tags/Location.vue";
import Important from "@/components/core/text-tags/Important.vue";
import Character from "@/components/core/text-tags/Character.vue";
import ScrollToTopButtonVue from "@/components/core/ScrollToTopButton.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="Journal">
				The story so far...
			</ViewBlurb>
		</header>
		<main>
			<div class="container border border-2 g-0 pb-5 pb-lg-0">
				<JournalLabels session="Session #" name="Name" party="Party Members" date="Date" class="bg-info fw-bold d-none d-md-flex" />
				<JournalEntry :session=1 name="Fizzy Lifting Drink" date="04/20/2022" party="Guidos, Murica, Peppa Shortbottom">
					A trio of adventurers were locked within the brig of an airship prisoner transport when the vessel was suddenly attacked by pirates. A stray piece of shrapnel destroyed the lock to their cell. The prisoners seized upon this opportunity, narrowly escaping by feeding an Anti Gravity Crystal to an ogrillon and using their new friend as a makeshift airship until they could make landfall.
				</JournalEntry>
				<JournalEntry :session=2 name="Landfall" date="05/05/2022" party="Floopy, Guidos, Murica">
					The gang reached dry land and completed their first adventuring contract. Afterwards, they tailed a squad of duergar bounty hunters to the secret city of Aphotia.
				</JournalEntry>
				<JournalEntry :session=3 name="Shuffling the Deck" date="05/11/2022" party="Floopy, Guidos, Murica">
					The gang met Ssssimon and purchased several mystical artifacts, including a Deck of Many Things. They drew several cards, losing them a crewmate but gaining them minor wealth.
				</JournalEntry>
				<JournalEntry :session=4 name="The Come-up" date="05/18/2022" party="Floopy, Guidos, Murica">
					The gang pooled their resources to purchase an airship before traveling to the city of Tilaporth to claim it. Upon arrival, they discovered that it was impounded for a human trafficking investigation. The party began an investigation of their own in the hopes of freeing their ship from the yellow tape. Floopy and Murica played catch with some poison darts they found, inflicting both with curses.
				</JournalEntry>
				<JournalEntry :session=5 name="New Car Smell" date="05/26/2022" party="Floopy, Guidos, Murica">
					The gang solved the crime, rescued most of the victims, and finally obtained their ship. The overworked official assigned to the case gave thanked the gang by giving them a map said to lead to the lost treasure of GreedBeard. Murica exploded 24 times and became a drow.
				</JournalEntry>
				<JournalEntry :session=6 name="Test Drive" date="06/01/2022" party="Floopy, Guidos, Murica">
					The gang set out to follow the treasure map in the newly christened 'The Flying Englishman.' They purchased a bag of 'shrooms and salvaged an airship whose crew had been slain by an extradimensional entity before finally arriving at the remote island shown on their treasure map.
				</JournalEntry>
				<JournalEntry :session=7 name="Dungeon Delving" date="06/15/2022" party="Floopy, Guidos, Murica">
					The gang began their exploration of the ancient catacombs on the remote island. Floopy found and donned an obviously cursed mask, which immediately fused to his face.
				</JournalEntry>
				<JournalEntry :session=8 name="Silly Rabbit, Trix are for Ancient Catacombs" date="06/23/2022" party="Floopy, Guidos, Murica">
					The gang discovered the legendary 'treasure' of GreedBeard: the <Important>GreedBurger secret formula</Important>. They made a final search of the catacombs, and stumbled onto a hidden, secret wing that housed occult imagery. Floopy managed to trigger a prophetic vision of cultists performing a ritual to summon an eldritch being known as <Important>Fwloaiolok</Important>, or '<Important>The First Hunger</Important>.'
				</JournalEntry>
				<JournalEntry :session=9 name="Windfall" date="07/12/2022" party="Floopy, Guidos, Murica">
					The gang sailed back to the mainland of <Location>Lagos</Location>, making a pit stop in <Location>The Essentials</Location> along the way. Floopy and Guidos made <Important>Blood Oaths</Important> with <Character>Ssssimon</Character> in exchange for magic items they could not otherwise afford. On the final leg of their return voyage, they crashed a <Important>mysterious gala</Important> hosted by a wealthy duchess on a large, luxury airship. They discovered the gala to be a birthday party for the duchess' violent talking doberman, <Character>Mr. Smoochums</Character>, who had been locked below decks after trying to eat party-goers' femurs. Floopy set the dog free, causing no small amount of chaos aboard the yacht. The party escaped before consequences could find them, but lost <Character>Teddy</Character> in the shuffle.
				</JournalEntry>
				<JournalEntry :session=10 name="Warmth for Orphans" date="07/21/2022" party="Floopy, Guidos, Murica">
					<p>The gang set about fulfilling Floopy and Guidos' <Important>Blood Oaths</Important> to <Character>Ssssimon</Character>, beginning with Guidos' pact to burn down a building in the city of <Location>Brassington</Location> inhabited by one of Ssssimon's previous clients who defaulted on their payments. On their journey, the party rescued a young ratfolk named <Character>Harbisoni Bocagi</Character> from bandits and convinced him to sail with them. The gang entered the city and learned that the building in question was an orphanage. Undeterred, they evacuated the orphans and staff before razing the building to the ground. Guards immediately began to swarm the burning orphanage, creating a window of opportunity that Guidos seized to seal an orphan's soul inside a <Important>Soul Card</Important>. The gang narrowly escaped the town guard during the ensuing chaos, after which they promptly set a course to fulfil Floopy's oath.</p>

					<p>During their journey, the party observed a camel falling through a Rift. They worked together to rescue the camel, which they named 'Giraffe,' and sealed it in one of Guidos' <Important>Soul Cards</Important>. Afterwards, the gang arrived safely outside the city of <Location>Emerald's Edge</Location>. Once inside the city, the gang set to work on kidnapping a noble's daughter as instructed by Ssssimon. They managed to infiltrate the palace, but were surprised to find that an empty void existed where their target's bedroom should have been. They fled the city and regrouped at their airship to formulate a new plan.</p>
				</JournalEntry>
				<JournalEntry :session=11 name="A Tangled Yarn" date="08/03/2022" party="Dilbert, Floopy, Guidos, Murica">
					The gang crash-landed in the <Location>Scorchwind Desert</Location> after their airship was severely damaged by forces from <Location>Emerald's Edge</Location>. Luckily, they discovered the small town of <Location>Goldman's Gulch</Location> nearby. It was here that they met <Character>Dilbert the Incontinent</Character>, a down-on-his-luck paladin. Floopy, Guidos, and Murica felt sympathy for the downtrodden Dilbert, and took him on a shopping spree at <Location>The Essentials</Location>, where they acquired an <Important>Accursed Anchor Earring</Important> among other things. The gang invited their new acquaintance to join their crew. During this time, Floopy's mask began to show him <Important>visions of an ancient land</Important> far to the west. Dilbert used the earring to become a temporary airship, and the party charted a course for the <Location>fallen kingdom of Edolador</Location> to investigate Floopy's visions.
				</JournalEntry>
				<JournalEntry :session=12 name="Welcome to the Jungle" date="08/10/2022" party="Dilbert, Floopy, Guidos, Murica">
					<p>
						The gang continued to sail towards the western continent of <Location>Paros</Location>, and Murica used her <Important>teleglyph</Important> to contact <Character>Kenji Cherrymoon</Character> and ask him to collect their airship <Important>The Damp Shark</Important> and meet them on their journey. Due to The Damp Shark's speed advantage over Dilbert as an airship, Kenji caught up just a few days later. He left The Damp Shark and the volunteer crew he had assembled in the care of the gang before leaving. 
					</p>
					<p>
						Several days of uneventful travel followed before the gang encountered the <Important>Sweet Child O' Brine</Important>, the official airship of <Character>Crossbows N' Daffodils</Character>, en route to Paros. The party stopped and mingled with Crossbows N' Daffodils for a while, and learned that they were headed to Paros to seek work in the growing conflict between the nation of <Location>Cian</Location> and the draconic warlord <Character>Bhazikth</Character>. They parted ways peacefully. 
					</p>
					<p>
						A few more days of calm winds and safe travels brought the gang to the coast of Paros, though they decided to sail farther inland before beginning their investigation. During the night, Floopy was visited in a dream by the entity known as <Character>Clubfoot</Character>, who charged Floopy with saying the word 'ribbit' in casual conversation at least 5 times the next day.
					</p>
					<p>
						The following day the gang began their investigation in <Location>Goldthrone</Location>, the Cianish capital city. They met an eccentric elderly dwarf named <Character>Flint Kevanarial</Character>, who Dilbert hired to join the crew. The gang encountered an erratic, muttering deep gnome and his imposing bodyguard while exploring the city's main street. The gang decided to ignore the murderously insane aura exuded by the gnome and approach him to strike up a conversation. The conversation quickly turned to talk of torture instruments, and the party managed to leave a positive impression on their new acquaintance by suggesting putting bees up someone's nose in their sleep as an unconventional method of inflicting suffering. It was only after parting ways that the gang realized that the gnome was <Character>Forryn Glim</Character>, an infamous mad scientist who had recently been headhunted to become <Important>one of Bhazikth's lieutenants</Important>.
					</p>
				</JournalEntry>
				<JournalEntry :session=13 name="Slayer of Tendies" date="08/24/2022" party="Dilbert, Floopy, Guidos, Murica">
					The gang entered and won a chicken nugget eating contest catered by <Important>Kilduff Fried Poultry</Important> before deciding to continue their quest to find the location indicated by <Important>Floopy's mask</Important>. Luckily, Murica was shockingly well read on the culture and history of the region, and suggested the party visit <Location>Altubreste</Location>. They arrived and found <Important>two rival camps</Important> set up near the entrance to the <Location>partially excavated ruins</Location>. A <Important>camp of humans</Important> wanted to use black powder to blast their way into the ruins in the hopes of finding a vault. Their rivals, a <Important>camp of gnomes</Important>, wanted to carefully excavate the ruins in the hopes of uncovering lost chapters of history. Dilbert agreed with the gnomes' view, and snapped the neck of the human leader. He spoke with the leader of the gnomish camp, and assisted them in translating some etchings reliefs inside the first few rooms of the catacombs. From these, they were able to determine that the ruins were once a holy site for the long extinct <Important>minotaur</Important> race.
				</JournalEntry>
				<JournalEntry :session=14 name="The Fate of the Minotaur" date="09/14/2022" party="Dilbert, Floopy, Guidos, Murica">
					The gang ventured back into the <Location>ruined temple</Location> at <Location>Altubreste</Location>, encountering traps and trails after venturing beyond the first few chambers. These magical challenges seemed to be intended to test how any interlopers measured up against minotaur values. As they pushed onward, they observed carvings that chronicled various chapters of the history of the minotaur.
				</JournalEntry>
				<JournalEntry :session=15 name="Trials and Revelations" date="09/21/2022" party="Dilbert, Floopy, Guidos, Murica">
					The gang continued to venture deeper into the <Location>temple</Location>, facing greater challenges the farther they went. A spectral piece of minotaur imagery appeared around the gang with each new trail they passed, until finally each hero bore at least spectral hooves, horns, and a tail. Finally, they reached the <Location>innermost sanctum</Location>, where they found the hastily carved chronicle of the final chapter in the story of the minotaur. It was written that <Important>draconic invaders</Important> had come from across the sea and layed siege to the temple. The carvings stopped after this point, presumably due to the temple falling to the invaders. The gang discovered a <Important>circular platform</Important> in the back of the innermost room that resembled teleportation circles.
				</JournalEntry>
				<JournalEntry :session=9999 name="COMING SOON" date="SOON" party="UNDER CONSTRUCTION">
					<i>I still need to write brief, coherent summaries for sessions #16-30. I apologize for the delay!</i>
				</JournalEntry>
				<!-- <JournalEntry :session=16 name="The Search Begins" date="10/05/2022" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=17 name="Golden Hoof" date="10/19/2022" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=18 name="Kitchen Nightmare" date="11/03/2022" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=19 name="The Good, the Bad, and the Corny" date="11/09/2022" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=20 name="Gift Tax" date="12/14/2022" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=21 name="Rudolph the Red" date="12/21/2022" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=22 name="When the Cows Came Home" date="01/05/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=23 name="A Head Shorter" date="01/11/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=24 name="Ghosts & Leprechauns" date="01/18/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=25 name="The Vault Part I" date="02/08/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=26 name="The Vault Part II" date="02/15/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=27 name="The White Dragon" date="03/01/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=28 name="Eye in the North" date="03/08/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=29 name="The Return of the Minotaur" date="03/15/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry>
				<JournalEntry :session=30 name="Homeward Dilbert" date="04/05/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry> -->
				<JournalEntry :session=31 name="Dilbertland Part I" date="04/12/2023" party="Dilbert, Floopy, Guidos, Murica">
					The gang reached <Location>Dilbertland</Location> and set to work uniting the four disparate tribes under one banner to defend against the looming invasion from <Location>Venland</Location> to the south. The gang successfully rallied the Swamp Dilberts and the Hill Dilberts to their cause, but lost <Character>Dave Meowthews</Character> in the process.
				</JournalEntry>
				<!-- <JournalEntry :session=32 name="Dilbertland Part II" date="04/19/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry> -->
				<!-- <JournalEntry :session=33 name="Landfall" date="05/03/2023" party="Dilbert, Floopy, Guidos, Murica">
					Summary
				</JournalEntry> -->

				<ScrollToTopButtonVue />
			</div>
		</main>
	</PageContainerVue>
</template>
