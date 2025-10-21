<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import World from "./components/WorldListEntry.vue";
import NittyGritty from "./components/WorldNittyGritty.vue";
import { GameStrings } from "@/scripts/game-strings";
import Image from "@/components/core/Image.vue";
</script>

<template>
	<PageContainerVue :isWide="false" class="px-0">
		<header>
			<Breadcrumb path="/gm/worlds" />
		</header>
		<main>
			<h2>Worlds from Fiction</h2>
			<p>Worlds borrowed from myriad works of fiction. These are accessed via lightship.</p>
			<ol class="list-group list-group-numbered">
				<World>
					<template v-slot:image>
						<Image src="img/worlds/agrabah.png" />
					</template>
					<template v-slot:name>
						Agrabah (Disney's Aladdin)
					</template>
					<template v-slot>
						See OneNote
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Cave of Wonders?"
							disguise="?"
							exit="per episode"
							partners="Aladdin, Abu"
							pure-soul="Jasmine"
							rebirth-agent="Jafar"
							:kindredWorlds='[]'
							:themes='["middle east", "desert", "thief", "princess", "lying hero"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/wonderland.png" />
					</template>
					<template v-slot:name>
						Wonderland
					</template>
					<template v-slot>
						See OneNote
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Depths of the Hedge Maze"
							partners="Alice?, Destiny's Child?"
							pure-soul="Alice"
							rebirth-agent="Jafar"
							nle-agent="Cade Brightcloak"
							:kindredWorlds="['Land of Oz', 'Wubbulous World']"
							:themes='["whimsy", "isekai", "nonsense"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/land_of_oz.png" />
					</template>
					<template v-slot:name>
						Land of Oz
					</template>
					<template v-slot>
						See OneNote
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Scarecrow's Field"
							partners="Scarecrow, Tinman, Cowardly Lion"
							pure-soul="Dorothy"
							:kindredWorlds="['Wonderland']"
							:themes='["whimsy", "fantasy", "isekai"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/transylvania.png" />
					</template>
					<template v-slot:name>
						Transylvania
					</template>
					<template v-slot>
						See OneNote
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Classic Monsters? Monster Hunters?"
							genre="horror"
							nle-agent="Althea?"
							partners="Van Helsing?"
							pure-soul="N/A"
							rebirth-agent="Dracula"
							:kindredWorlds='[]'
							:themes='["horror", "gothic", "monster", "supernatural"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/shrek.png" />
					</template>
					<template v-slot:name>
						Duloc Outlands (Shrek)
					</template>
					<template v-slot>
						See OneNote
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="The boulder that Donkey comments on in Shrek's swamp? Maybe in the Dragon's keep?"
							genre="comedy, fantasy"
							partners="Shrek, Donkey"
							nle-agent="none"
							pure-soul="Donkey"
							rebirth-agent="Farquaad, Fairy Godmother"
							:kindredWorlds='[]'
							:themes='["fantasy", "misfit", "medieval"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/wonka.png" />
					</template>
					<template v-slot:name>
						Willy Wonka
					</template>
					<template v-slot>
						See OneNote
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="?"
							disguise="Humans"
							exit="Flat against the inside of the very top of a tophat that spontaneously appears on one of the PCs"
							genre=""
							partners="?"
							pure-soul="Charlie Bucket"
							:kindredWorlds='[]'
							:themes='["modern", "food"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/big_apple.png" />
					</template>
					<template v-slot:name>
						Teenage Mutant Ninja Turtles
					</template>
					<template v-slot>
						See OneNote
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="The O'Neil farm"
							disguise="Humans or Mutant Animals"
							genre="action, comedy"
							partners="TMNT"
							nle-agent="Ella, Boo"
							pure-soul="Michelangelo"
							rebirth-agent="Shredder"
							:kindredWorlds='["Gotham"]'
							:themes='["modern", "superhero", "city", "animal", "nyc"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/tarzan.png" />
					</template>
					<template v-slot:name>
						Tarzan
					</template>
					<template v-slot>
						From Disney's Tarzan
					</template>
					<template v-slot:details>
						<NittyGritty
							partners="Tarzan"
							:kindredWorlds='[]'
							:themes='["jungle", "animal", "found family"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/muppet_treasure_island.png" />
					</template>
					<template v-slot:name>
						Treasure Island
					</template>
					<template v-slot>
						blank
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="?"
							disguise="Pirates and/or Muppets"
							genre="adventure"
							partners="Jim Hawkins"
							pure-soul="Jim Hawkins"
							:kindredWorlds='[]'
							:themes='["aquatic", "pirate", "adventure", "treasure"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/nottingham.png" />
					</template>
					<template v-slot:name>
						Robin Hood
					</template>
					<template v-slot>
						Maybe roll with the Disney version.
						<h6>Act 1 - Highway Robbery</h6>
						<h6>Act 2 - The Archery Tournament</h6>
						Robin wins, is exposed, sentenced to death. Big fight breaks out between the villagers and the Sheriff of Nottingham's men.
						<p>Robin and crew escape, hold party. Prince John triples the taxes on the villagers, arrests them when they can't pay, and sentences Friar Tuck to death for protesting when money is taken from the church's poor donation box.</p>
						<h6>Act 3 - The Rescue of Friar Tuck</h6>
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Forestmen?"
							partners="Robin Hood, Little John"
							:kindredWorlds='["Over the Hedge"]'
							:themes='["thief", "medieval", "fantasy"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/over_the_hedge.png" />
					</template>
					<template v-slot:name>
						The Suburbs (Over the Hedge)
					</template>
					<template v-slot>
						Animal food heist. The keyhole is probably in the HOA president's house.
						<h6>Act 1 - Rockin' the Suburbs</h6>
						First batch of thieving food from humans. Goes really well, until Verne tries to return it and it gets destroyed by a car.
						<h6>Act 2 - Hard Mode</h6>
						Animals try to steal a new batch of food while having to contend with traps and Dwayne the exterminator.
						<p>Episode ends with RJ fleeing with the food while the other animals are captured.</p>
						<h6>Act 3 - Vincent</h6>
						Party helps RJ rescue his friends and deal with Vincent.
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Forest Animals"
							genre="heist"
							nle-agent="N/A"
							partners="RJ, Verne"
							pure-soul="N/A"
							rebirth-agent="N/A"
							:kindredWorlds='["Robin Hood"]'
							:themes='["animal", "thief", "modern", "food", "lying hero"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/mad_max.png" />
					</template>
					<template v-slot:name>
						Thunderdome
					</template>
					<template v-slot>
						Mad Max
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Grungy Humans"
							genre="action"
							partners="?"
							:kindredWorlds='[]'
							:themes='["punk", "vehicle", "modern", "dystopia"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/neverland.png" />
					</template>
					<template v-slot:name>
						Neverland (Peter Pan)
					</template>
					<template v-slot>
						<h6>Act 1 - London to Neverland</h6>
						<p>Party finds themselves in Edwardian London, facing a mischievous shadow that is unrelated to blanks. Turns out to be Peter Pan's.</p>
						<p>Peter Pan convinces Tinkerbell to begrudgingly bring the 3 Darling children and the party to Neverland.</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							genre="adventure, family"
							partners="Peter Pan, Tinkerbell"
							pure-soul="Wendy Darling"
							:kindredWorlds='["Land of Oz"]'
							:themes='["coming of age", "fantasy", "isekai", "pirate", "whimsy"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/atlantica.png" />
					</template>
					<template v-slot:name>
						Atlantica (The Little Mermaid)
					</template>
					<template v-slot>
						<h6>Act 1 - The Storm</h6>
						<p>Party meets Ariel in her grotto, where she enthuses about the human world.</p>
						<p>She takes them to the surface to watch her crush's birthday party. A storm rolls in and the party must keep storm blanks at bay while Ariel rescues Prince Eric.</p>
						<p>Episode ends with Ariel deciding to make a deal with Ursula.</p>
						<h6>Act 2 - Kiss the Girl</h6>
						<p>Party reunites with Ariel just after she becomes human. They rush her to the surface, where she begins her efforts to win over Prince Eric.</p>
						<p>Focus of episode is the Kiss the Girl moment, with the party acting as secret wingmen along with Sebastian.</p>
						<p>Episode ends with Ursula cheating by arriving as 'Vanessa' and using Ariel's voice in combination with a hypnosis charm to arrange a marriage with Eric.</p>
						<h6>Act 3 - Ursula</h6>
						<p>Party arrives just in time for the sunset wedding and disrupts it. Eric is too slow to kiss Ariel, causing Ursula to own her. Triton volunteers to take her place, and Ursula turns him into a polyp with his own trident.</p>
						<p>Boss fight.</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Ariel's Grotto"
							disguise="Sea Creatures or Merfolk"
							genre="adventure, romance"
							partners="Ariel (Act 1+3), Sebastian (Act 2), Flounder (Act 1+2), Prince Eric (Act 3)"
							pure-soul="Ariel"
							:kindredWorlds='["Bikini Bottom"]'
							:themes='["aquatic", "belonging", "coming of age", "princess", "underwater"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/hercules.png" />
					</template>
					<template v-slot:name>
						Ancient Greece (Disney's Hercules)
					</template>
					<template v-slot>
						<h6>Act 1 - Hero Training</h6>
						<h6>Act 2 - The Hydra</h6>
						<h6>Act 3 - The Titans</h6>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Phil's cave"
							genre="action, adventure"
							partners="Hercules, Pegasus"
							rebirth-agent="Hades"
							:kindredWorlds='[]'
							:themes='["belonging", "coming of age"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/jurassic_park.png" />
					</template>
					<template v-slot:name>
						Jurassic Park
					</template>
					<template v-slot>
						<h6>Act 1 - The Tour</h6>
						<h6>Act 2 - The Hike</h6>
						<h6>Act 3 - The Escape</h6>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/seussland.png" />
					</template>
					<template v-slot:name>
						Wubbulous World (Seussland)
					</template>
					<template v-slot>
						<h6>Act 1 - The Cat in the Hat</h6>
						<h6>Act 2 - Green Eggs & Ham</h6>
						Party must aid Sam-I-Am in convincing the cranky fellow to like Green Eggs and Ham.
						<h6>Act 3 - The Cat in the Hat Comes Back</h6>
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Seussical"
							partners="Cat in the Hat"
							:kindredWorlds='["Wonderland"]'
							:themes='["whimsy", "nonsense"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/coolsville.png" />
					</template>
					<template v-slot:name>
						Scooby-Doo
					</template>
					<template v-slot>

					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Humans or talking animals"
							genre="mystery"
							partners="Scooby, Shaggy"
							pure-soul="Scooby-Doo"
							:kindredWorlds='["Ghostbusters"]'
							:themes='["supernatural", "modern", "cartoon"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/wild_west.png" />
					</template>
					<template v-slot:name>
						The Wild West
					</template>
					<template v-slot>
						Governor Mint's wild west
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Cowboys"
							genre="action"
							nle-agent="Airen"
							partners="something"
							:kindredWorlds='[]'
							:themes='["western", "desert", "defender"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/barbieland.png" />
					</template>
					<template v-slot:name>
						Barbieland
					</template>
					<template v-slot>
						<h6>Act 1: The Liberation of Barbieland</h6>
						Fight across the beach, forging a path to Ken the Conqueror's Mojo Dojo Casa House.
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Barbie's backyard"
							disguise="Barbie/Ken outfits"
							genre="adventure, comedy"
							partners="Stereotypical Barbie"
							pure-soul="Stereotypical Barbie"
							:kindredWorlds='["Andys Room", "The Lego Movie"]'
							:themes='["toy", "isekai", "defender"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/ghostbusters.png" />
					</template>
					<template v-slot:name>
						Ghostbusters
					</template>
					<template v-slot>
						<h6>Act 1: Haunted Hotel</h6>
						Slimer
						<h6>Act 3: Gozer</h6>
						Gozer
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Humans"
							genre="comedy, horror"
							partners="Ghostbusters?"
							:kindredWorlds='["Coolsville"]'
							:themes='["modern", "supernatural", "city", "nyc"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/bikini_bottom.png" />
					</template>
					<template v-slot:name>
						Bikini Bottom
					</template>
					<template v-slot>
						from One-Shot suggestions. Suggester: Scarlett.
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Sea Creatures"
							genre="cartoon, slice of life?"
							partners="SpongeBob, Patrick"
							rebirth-agent="Plankton?"
							:kindredWorlds='["Atlantica"]'
							:themes='["aquatic", "underwater", "cartoon", "animal"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/looney_tunes.png" />
					</template>
					<template v-slot:name>
						Looney Tunes
					</template>
					<template v-slot>
						Space Jam but the party fill the role of Michael Jordan
						<h6>Act 1 - The Court</h6>
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="N/A or cartoony"
							genre="cartoon, comedy"
							partners="Bugs Bunny, Daffy Duck"
							:kindredWorlds='[]'
							:themes='["hijinks", "sport", "cartoon", "animal"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Rubber Hose Cartoon Universe
					</template>
					<template v-slot>
						Black and white rubber hose cartoon shared universe. Felix the Cat, Oswald the Lucky Rabbit, Early Mickey, etc.
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="B&W Rubber Hose cartoon"
							genre="adventure, cartoon, comedy"
							partners="?"
							:kindredWorlds='[]'
							:themes='["cartoon", "hijinks"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/death_star.png" />
					</template>
					<template v-slot:name>
						Star Wars
					</template>
					<template v-slot>
						<h6>Act 1 - That's no Moon</h6>
						<p>Episode IV, the Princess Leia rescue mission. Party gets pulled in by the Death Star's tractor beam at the same time as the Millennium Falcon.</p>
						<div class="fw-bold">Definitely use Moon for the icon and the label, thus setting up "That's no moon."</div>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Millennium Falcon"
							genre="adventure, fantasy"
							partners="Luke Skywalker, Han Solo, Chewbacca"
							rebirth-agent="Emperor Palpatine"
							:kindredWorlds='[]'
							:themes='["space", "fantasy", "future"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/gotham.png" />
					</template>
					<template v-slot:name>
						<span class="suggestion">
							Gotham City (Batman '89)
						</span>
					</template>
					<template v-slot>
						<p>Follows the plot of the 1989 film.</p>
						<h6>Act 1 - Axis Chemicals</h6>
						<p>The birth of the Joker</p>
						<h6>Act 2 - Art Wrecko</h6>
						<p>Museum. Joker uses Vicki as a hostage to get the party to back off long enough for him to take her to her apartment.</p>
						<p>Bruce visits the apartment to reveal his secret identity, gets shot, but has serving tray as makeshift bulletproof vest.</p>
						<h6>Act 3 - The Last Laugh</h6>
						Final Joker confrontation.
					</template>
					<template v-slot:details>
						<NittyGritty
							genre="action"
							partners="Batman"
							:kindredWorlds='["TMNT"]'
							:themes='["superhero", "modern", "city", "gothic", "gritty", "modern"]'
						/>
					</template>
				</World>
				<!-- <World>
					<template v-slot:image>
						<Image src="img/worlds/suggestion.png" />
					</template>
					<template v-slot:name>
						<span class="suggestion">
							Indiana Jones?
						</span>
					</template>
					<template v-slot>
						from One-Shot suggestions
					</template>
				</World> -->
				<World>
					<template v-slot:image>
						<Image src="img/worlds/andys_room.png" />
					</template>
					<template v-slot:name>
						<span class="suggestion">
							Andy's Room
						</span>
					</template>
					<template v-slot>
						from One-Shot suggestions. Suggester: Jackson.
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Toys"
							genre=""
							partners="Woody, Buzz Lightyear"
							pure-soul="Andy"
							rebirth-agent="?"
							:kindredWorlds='["Barbie", "The Lego Movie"]'
							:themes='["modern", "toy", "secret life", "small"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/ant_island.png" />
					</template>
					<template v-slot:name>
						Ant Island (Bug's Life)
					</template>
					<template v-slot>
						<h6>Act 1 - The Big City</h6>
						Party finds themselves in Insect City, where the see a lone ant recruit a circus troop. Party probably returns to the Ant Colony with them.
						<h6>Act 2 - The Battle/Finale</h6>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="The food storage room? Insect City square?"
							disguise="Bugs"
							genre="adventure"
							partners="something"
							pure-soul="Dot?"
							rebirth-agent="?"
							:kindredWorlds='[]'
							:themes='["animal", "defender", "lying hero"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/blank.png" />
					</template>
					<template v-slot:name>
						Hyrule
					</template>
					<template v-slot>
						Need to pick or create a specific Zelda plot and era.

						<p>OoT? - Maybe use the Four Sword and sub the party in for Link?</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="?"
							disguise="Hyrulean Species"
							genre="adventure"
							partners="Link, Zelda?"
							pure-soul="Zelda"
							rebirth-agent="Ganondorf? Vaati?"
							:kindredWorlds='[]'
							:themes='["adventure", "fantasy", "medieval"]'
						/>
					</template>
				</World>
			</ol>
			<h2>Original Worlds</h2>
			<p>Worlds accessed via lightship, but invented by the GM for the purposes of this adventure.</p>
			<ol class="list-group list-group-numbered">
				<World>
					<template v-slot:image>
						<Image src="img/worlds/somewhere.png" />
					</template>
					<template v-slot:name>
						Somewhere
					</template>
					<template v-slot>
						<p>A home for lost things.</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Matthias' office beneath the city"
							disguise=""
							partners=""
							:kindredWorlds='[]'
							:themes='["cozy"]'
							time="standard"
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/blank.png" />
					</template>
					<template v-slot:name>
						Haven
					</template>
					<template v-slot>
						<p>A city of refugees, ruled with an iron fist by a dictator who treats the sanctuary the city provides as a privilege that can be revoked for disobeying him/her.</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor=""
							disguise=""
							partners=""
							:kindredWorlds='[]'
							:themes='["dictator"]'
							time="standard"
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/blank.png" />
					</template>
					<template v-slot:name>
						Weapon World
					</template>
					<template v-slot>
						<p>A world where everything is weapons? Maybe a world where everything is weapon themed?</p>
						<p>Home of Tankman.</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor=""
							disguise=""
							partners=""
							:kindredWorlds='[]'
							:themes='[]'
							time="standard"
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/unicornucopia.png" />
					</template>
					<template v-slot:name>
						Unicornucopia
					</template>
					<template v-slot>
						Basically MLP + Charlie the Unicorn (<s>and maybe +Care Bears?</s> No, <b>probably</b> +Care Bears.)
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor=""
							disguise=""
							partners=""
							:kindredWorlds='[]'
							:themes='[]'
							time="looping"
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/mortal_kombat.png" />
					</template>
					<template v-slot:name>
						Battle World
					</template>
					<template v-slot>
						<p>Interdimensional hub of battle. Inspired by Glitzville (Paper Mario TTYD) and Mortal Kombat</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor=""
							disguise=""
							partners=""
							:kindredWorlds='[]'
							:themes='[]'
							time="standard"
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Tinytropolis
					</template>
					<template v-slot>
						A thriving metropolis where everyone is about the size of a Lego Minifigure. This effectively makes the party kaiju in this world.
						<div class="nitty-gritty">
							<dl>
								<dt>Human Adult average height</dt>
								<dd>~= 170cm</dd>
								<dt>Lego Minifigure height (including head stud)</dt>
								<dd>~= 4cm</dd>
							</dl>
							<div>From: <a href="https://brickarchitect.com/scale/">https://brickarchitect.com/scale/</a></div>
						</div>
					</template>
				</World>
			</ol>
			<h2>Special Worlds</h2>
			<p>Worlds accessed by special means. Usually contained within an object.</p>
			<ol class="list-group list-group-numbered">
				<World>
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Fan Art + Fan Fiction world
					</template>
					<template v-slot>
						DeviantArt fan art with added fan fiction. Housed within some very strange (and probably lonely) child's notebook.
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/blues_house.png" />
					</template>
					<template v-slot:name>
						Stone-bound Storybook (Blue's Clues)
					</template>
					<template v-slot>
						<h6>Effectively the 100 Acre Wood from Kingdom Hearts</h6>
						A cozy world contained within a children's storybook with missing pages. The characters have lost their memories, and many characters are missing.
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Game Central Station
					</template>
					<template v-slot>
						A bunch of interconnected game worlds a la Wreck-it Ralph. Probably housed within an old console or arcade cabinet or something.
					</template>
				</World>
			</ol>
			<h2>Maybe's</h2>
			<p>Worlds borrowed from fiction and accessed by lightship, but whose inclusion I am uncertain about.</p>
			<ol class="list-group list-group-numbered">
				<World class="maybe">
					<template v-slot:image>
						<Image src="img/worlds/blank.png" />
					</template>
					<template v-slot:name>
						Cthulhu
					</template>
					<template v-slot>
<pre>
Flying Spaghetti Monster
+ Gritty Detective Noir?
</pre>
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Gritty, downtrodden peasants"
							genre="horror, mystery"
							partners="Some hardboiled detective? Maybe he slowly goes insane?"
							:kindredWorlds='[]'
							:themes='["horror", "eldritch", "20s"]'
						/>
					</template>
				</World>
				<!-- <World>
					<template v-slot:image>
						<Image src="img/worlds/suggestion.png" />
					</template>
					<template v-slot:name>
						<span class="suggestion">
							Wreck-It Ralph?
						</span>
					</template>
					<template v-slot>
						from One-Shot suggestions. Suggester: Jackson.
					</template>
					<template v-slot:details>
						<NittyGritty
							genre=""
							partners="Ralph, Vanellope"
							:KindredWorlds='[]'
							:themes='["modern", "digital", "misfit"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/suggestion.png" />
					</template>
					<template v-slot:name>
						<span class="suggestion">
							Muppet Cinematic Universe?
						</span>
					</template>
					<template v-slot>
						from One-Shot suggestions
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/suggestion.png" />
					</template>
					<template v-slot:name>
						<span class="suggestion">
							My Little Pony
						</span>
					</template>
					<template v-slot>
						from One-Shot suggestions. Suggester: Scarlett.
					</template>
				</World> -->
				<World class="maybe">
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Cloudy with a Chance of Meatballs?
					</template>
					<template v-slot>
						blank
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Humans"
							genre="genre"
							nle-agent="Althea?"
							partners="something"
							:kindredWorlds='[]'
							:themes='["something"]'
						/>
					</template>
				</World>
				<World class="maybe">
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Cats
					</template>
					<template v-slot>
						https://www.reddit.com/r/DnDBehindTheScreen/comments/efej31/cats_the_musical_cats_the_movie_and_now_cats_the/
					</template>
					<template v-slot:details>
						<NittyGritty
							disguise="Cats"
							genre="genre"
							partners="something"
							:kindredWorlds='[]'
							:themes='["something"]'
						/>
					</template>
				</World>
				<World class="maybe">
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Doom?
					</template>
					<template v-slot>
						blank
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="something"
							disguise="something"
							genre="genre"
							partners="something"
							:kindredWorlds='[]'
							:themes='["something"]'
						/>
					</template>
				</World>
				<World class="maybe">
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						The Lego Movie
					</template>
					<template v-slot>
						blank
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="something"
							disguise="LEGO Minifigures"
							genre="genre"
							partners="Emmet, Wyldstyle, Benny?, Batman?"
							pure-soul="Emmet"
							:kindredWorlds='["Andys Room", "Barbie"]'
							:themes='["toy"]'
						/>
					</template>
				</World>
				<World class="maybe">
					<template v-slot:image>
						<Image src="img/worlds/maybe.png" />
					</template>
					<template v-slot:name>
						Hogwarts
					</template>
					<template v-slot>
						Harry Potter and the Sorcerer's Stone
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="something"
							disguise="Human children"
							genre="fantasy"
							partners="Harry, Ron, Hermione"
							pure-soul="Ron or Hermione? (Harry is ineligible because he is a Horcrux)"
							:kindredWorlds='[]'
							:themes='["magic", "modern", "school"]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<Image src="img/worlds/blank.png" />
					</template>
					<template v-slot:name>
						blank
					</template>
					<template v-slot>
						blank
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="something"
							disguise="something"
							genre="genre"
							partners="something"
							:kindredWorlds='[]'
							:themes='["something"]'
						/>
					</template>
				</World>
			</ol>
		</main>
	</PageContainerVue>
</template>

<style scoped>
.suggestion {
	color: #a50b5e;
}

img {
	max-height: 100%;
	max-width: 100%;
	aspect-ratio: 1 1;
}

.nitty-gritty {
	background-color: var(--vt-c-black-mute);
	border: 1px solid var(--color-border);
	margin: 0.5rem;
	padding: 0.5rem;
}

dd {
	margin-left: 1rem;
}
</style>