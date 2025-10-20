<script setup lang="ts">
import { GameStrings } from "@/scripts/game-strings";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import World from "./components/WorldListEntry.vue";
import NittyGritty from "./components/WorldNittyGritty.vue";
import Somewhere from '@/components/views/characters/characterDecks/Somewhere.vue';
</script>

<template>
	<PageContainerVue :isWide="false" class="px-0">
		<header>
			<Breadcrumb path="/worlds" />
			<ViewBlurb header="Worlds" author="Eva Davis">
				World remnants we know to exist or to have existed at some point.
			</ViewBlurb>
		</header>
		<main>
			<ul class="list-group w-100 m-0 p-1">
				<World>
					<template v-slot:image>
						<img src="img/worlds/somewhere.png" />
					</template>
					<template v-slot:name>
						Somewhere
					</template>
					<template v-slot:one-liner>
						Our home away from home.
					</template>
					<template v-slot>
						<p>A home for lost things.</p>
						<div class="accordion" id="somewhere-accordion">
							<AccordionItem name="People" parent-id="somewhere-accordion" :default-open="true">
								<Somewhere :containedByModal="true" />
							</AccordionItem>
						</div>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="?"
							disguise=""
							partners=""
							:kindredWorlds='[]'
							time="standard"
						/>
					</template>
				</World>
				<World>
				<!-- <World wallpaper="img/reference/wonderland.jpg"> -->
					<template v-slot:image>
						<img src="img/worlds/wonderland.png" />
					</template>
					<template v-slot:name>
						Wonderland
					</template>
					<template v-slot:quote>
						We're all mad here.
					</template>
					<template v-slot>
						A nonsensical, dreamlike world inhabited by myriad weird creatures.
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Depths of the Hedge Maze"
							pure-soul="Alice"
							:kindredWorlds="['Land of Oz', '?']"
						/>
					</template>
				</World>
				<World>
				<!-- <World wallpaper="img/reference/big_apple.jpg"> -->
					<template v-slot:image>
						<img src="img/worlds/big_apple.png" />
					</template>
					<template v-slot:name>
						Big Apple
					</template>
					<template v-slot>
						A version of Earth in the year 1990 AD.
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="The O'Neil farm"
							disguise="Humans or Mutant Animals"
							genre="action, comedy"
							partners="The Teenage Mutant Ninja Turtles, Spinter, April O'Neil, Casey Jones"
							nle-agent="Ella, Boo"
							pure-soul="Michelangelo"
							rebirth-agent="Shredder"
							:kindredWorlds='[]'
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<img src="img/worlds/blues_house.png" />
					</template>
					<template v-slot:name>
						Stone-bound Storybook (Blue's House)
					</template>
					<template v-slot:one-liner>
						A yellow house inhabited by a dog named Blue.
					</template>
					<template v-slot>
						A cozy world contained within a children's storybook with missing pages. The characters have lost their memories, and many characters are missing.
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor=""
							disguise="Striped shirts"
							partners="Blue"
							:kindredWorlds='[]'
							time="unknown"
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<img src="img/worlds/neon_coast.png" />
					</template>
					<template v-slot:name>
						Neon Coast [DESTROYED]
					</template>
					<template v-slot:one-liner>
						An Earth with advanced androids who live under the thumb of humans.
					</template>
					<template v-slot>
						<p>
							A variant <Location>Earth</Location> at some point in the 2100s. Humans invented advanced androids to serve them, but these androids develop free will over time. Such androids are said to be 'hallucinating' and are destroyed.
						</p>
						<p>
							This world was destroyed by the <Important>entity</Important> that seems to be responsible for <Important>Shades</Important> and <Important>Umbra.</Important>
						</p>
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor=""
							disguise="Advanced androids and futuristic humans"
							partners="Gloria Molloy, Tommy One"
							:kindredWorlds='[]'
							time="unknown"
						/>
					</template>
				</World>
				<World>
					<template v-slot:image>
						<img src="img/worlds/land_of_oz.png" />
					</template>
					<template v-slot:name>
						Land of Oz
					</template>
					<template v-slot:one-liner>
						A colorful world found over the rainbow.
					</template>
					<template v-slot>
						A colorful world found over the rainbow.
					</template>
					<template v-slot:details>
						<NittyGritty
							anchor="Scarecrow's Field"
							partners="Dorothy, Scarecrow, Tinman, Cowardly Lion"
							:kindredWorlds="['Barbieland', 'Wonderland']"
						/>
					</template>
				</World>
			</ul>
			<!-- <h2>Special Worlds</h2>
			<p>Worlds accessed by special means. Usually contained within an object.</p>
			<ol class="list-group list-group-numbered">
				<World>
					<template v-slot:image>
						<img src="img/worlds/blank.png" />
					</template>
					<template v-slot:name>
						Stone-bound Storybook (Blue's Clues)
					</template>
					<template v-slot>
						<h6>Effectively the 100 Acre Wood from Kingdom Hearts</h6>
						A cozy world contained within a children's storybook with missing pages. The characters have lost their memories, and many characters are missing.
					</template>
				</World>
			</ol> -->
		</main>
	</PageContainerVue>
</template>

<style scoped>
img {
	max-height: 100%;
	max-width: 100%;
	aspect-ratio: 1 1;
}

dd {
	margin-left: 1rem;
}
</style>