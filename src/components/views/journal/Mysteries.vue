<script setup lang="ts">
import Card from "@/components/core/Card.vue";
import CardDeck from "@/components/core/CardDeck.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from '@/components/core/text-tags/Important.vue';
import { GameStrings } from "@/scripts/game-strings";

import JournalHeader from './subviews/JournalHeader.vue';
</script>

<template>
	<PageContainerVue>
		<JournalHeader />
		<header>
			<ViewBlurb header="">
				A few of the lingering mysteries that remain unsolved.
			</ViewBlurb>
		</header>
		<main>
			<CardDeck>
				<Card>
					<template #heading>The Psychic Voice of <Location>Somewhere</Location></template>

					On rare occasions, we've heard a telepathic voice in the back of our minds while in <Location>Somewhere</Location>. When <Character>{{ GameStrings.Party.Cobb.first }}</Character> asked the voice who it was, it declined to give a direct answer, instead saying that we could simply think of it as '<Character>the spirit of Somewhere</Character>.'
				</Card>
				<Card>
					<template #heading>The World Anchor Message</template>

					We have found a few <Important>World Anchors</Important> so far, and each contained a fragment of some message or passage.
				</Card>
			</CardDeck>
			
			<button class="btn btn-secondary w-100 mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#solvedMysteries" aria-expanded="false" aria-controls="solvedMysteries">
				<svg class="menu-button-icon theme-color d-inline"><use href="#arrow-down"></use></svg>
				Solved Mysteries
			</button>
			<div class="collapse pt-3" id="solvedMysteries">
				<CardDeck>
					<Card>
						<template #heading>
							<svg class="menu-button-icon theme-color d-inline"><use href="#check2"></use></svg>
							Nelly
						</template>
						<p class="text-decoration-line-through opacity-75 fst-italic">
							Several individuals have asked us if we are friends of "<Important>Nelly</Important>." We've learned from <Character>{{GameStrings.Cade}}</Character> that <Important>Nelly</Important> is "idealistic" as well as "green and warty." After we rescued <Character>Alice</Character>, Cade gave us a scrap of parchment bearing a strange symbol and told us to give it to the old man at the Happy Turtle if we want to meet Nelly.
						</p>

						<p>
							<strong>"Nelly"</strong> was actually a secret organization known as <Important>N.L.E. - the Network of Likeminded Expatriates</Important>. We became members after an interview with <Character>Nortle</Character>.
						</p>
					</Card>
					<Card>
						<template #heading>
							<svg class="menu-button-icon theme-color d-inline"><use href="#check2"></use></svg>
							The Missing Book
						</template>
						<p class="text-decoration-line-through opacity-75 fst-italic">
							The bookshelf in the back of information center in <Location>Somewhere</Location> had wear marks that indicated a sizeable, sturdy tome once sat among the other books. <Character>{{ GameStrings.Party.Cobb.first }}</Character> found a <Important>page</Important> from a children's book bearing the image of a <Important>salt shaker</Important> that had a similar size.
						</p>

						<p>
							The book was returned anonymously, and was a children's book with nearly every page torn out. Reattaching the <Important>salt shaker</Important> page enabled us to enter the world of the book, where we met a <Character>blue puppy</Character>, appropriately named <Character>Blue</Character>.
						</p>
					</Card>
				</CardDeck>
			</div>
		</main>
	</PageContainerVue>
</template>
