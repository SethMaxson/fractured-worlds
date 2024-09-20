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
					<!-- <template #image>
						<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
					</template> -->
					<template #heading>Nelly</template>
					<!-- <template #subheading>The Fellowship of Individuals for the Reclamation of Edolador</template> -->

					Several individuals have asked us if we are friends of "<Important>Nelly</Important>." We've learned from <Character>{{GameStrings.Cade}}</Character> that <Important>Nelly</Important> is "idealistic" as well as "green and warty."
				</Card>
				<Card>
					<template #heading>The Missing Book</template>

					The bookshelf in the back of information center in <Location>Somewhere</Location> had wear marks that indicated a sizeable, sturdy tome once sat among the other books. <Character>{{ GameStrings.Party.Cobb }}</Character> found a <Important>page</Important> from a children's book bearing the image of a <Important>salt shaker</Important> that had a similar size.
				</Card>
				<Card>
					<template #heading>The Psychic Voice of <Location>Somewhere</Location></template>

					On rare occasions, we've heard a telepathic voice in the back of our minds while in <Location>Somewhere</Location>. When <Character>{{ GameStrings.Party.Cobb }}</Character> asked the voice who it was, it declined to give a direct answer, instead saying that we could simply think of it as '<Character>the spirit of Somewhere</Character>.'
				</Card>
				<Card>
					<template #heading>The World Anchor Message</template>

					We have found one <Important>World Anchor</Important> so far, and it contained a fragment of some message or passage.
				</Card>
			</CardDeck>
		</main>
	</PageContainerVue>
</template>
