<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
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
		<!-- <JournalHeader /> -->
		<header>
			<Breadcrumb path="/journal/mysteries" />
			<ViewBlurb header="">
				A few of the lingering mysteries that remain unsolved.
			</ViewBlurb>
		</header>
		<main>
			
			<!-- Quest Details Modal -->
			<div class="modal" id="questModal" tabindex="-1" aria-labelledby="questModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-4" id="questModalLabel">Definition</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">...</div>
						<div class="modal-footer">...</div>
					</div>
				</div>
			</div>


			<h3>Lingering Mysteries</h3>

			<div class="list-group fs-6">

				<button
					type="button"
					class="list-group-item list-group-item-action"
					data-bs-toggle="modal"
					data-bs-target="#questModal"
				>
					<span class="title main-quest text-primary-emphasis">
						<svg class="menu-button-icon theme-color d-inline"><use href="#globe2"></use></svg>
						The World Anchor Message
					</span>
					<span class="def">
						We have found a few <Important>World Anchors</Important> so far, and each contained a fragment of some message or passage.
					</span>
					<span class="footer">
						Main Quest
					</span>
				</button>
				<button
					type="button"
					class="list-group-item list-group-item-action"
					data-bs-toggle="modal"
					data-bs-target="#questModal"
				>
					<span class="title">
						The Psychic Voice of <Location>Somewhere</Location>
					</span>
					<span class="def">
						On rare occasions, we've heard a telepathic voice in the back of our minds while in <Location>Somewhere</Location>. When <Character>{{ GameStrings.Party.Cobb.first }}</Character> asked the voice who it was, it declined to give a direct answer, instead saying that we could simply think of it as '<Character>the spirit of Somewhere</Character>.'
					</span>
					<span class="footer">
						Side Quest
					</span>
				</button>
				<button
					type="button"
					class="list-group-item list-group-item-action"
					data-bs-toggle="modal"
					data-bs-target="#questModal"
				>
					<span class="title">
						<svg class="menu-button-icon theme-color d-inline"><use href="#nle"></use></svg>
						Nortle's Knowledge
					</span>
					<span class="def">
						Shortly after our disastrous meeting in the <Important>Rebirth Caucus</Important>'s headquarters, <Character>Li'l Phil</Character> wrote <Character>Nortle</Character> and informed him of the unscheduled invitation. <Character>Li'l Phil</Character> knew <Character>Nortle's</Character> tone well enough to notice that the elderly barkeep somehow already knew.
					</span>
					<span class="footer">
						Side Quest
					</span>
				</button>
			</div>
			
			<button class="btn btn-secondary w-100 mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#solvedMysteries" aria-expanded="false" aria-controls="solvedMysteries">
				<svg class="menu-button-icon theme-color d-inline"><use href="#arrow-down"></use></svg>
				Solved Mysteries
			</button>
			<div class="collapse pt-3" id="solvedMysteries">
				<CardDeck>
					<Card class="text-success">
						<template #heading>
							<svg class="menu-button-icon theme-color d-inline"><use href="#check2"></use></svg>
							<svg class="menu-button-icon theme-color d-inline"><use href="#nle"></use></svg>
							Nelly
						</template>
						<p class="text-decoration-line-through opacity-75 fst-italic">
							Several individuals have asked us if we are friends of "<Important>Nelly</Important>." We've learned from <Character>{{GameStrings.NLE.Cade.full}}</Character> that <Important>Nelly</Important> is "idealistic" as well as "green and warty." After we rescued <Character>Alice</Character>, Cade gave us a scrap of parchment bearing a strange symbol and told us to give it to the old man at the Happy Turtle if we want to meet Nelly.
						</p>

						<p>
							<strong>"Nelly"</strong> was actually a secret organization known as <Important>N.L.E. - the Network of Likeminded Expatriates</Important>. We became members after an interview with <Character>Nortle</Character>.
						</p>
					</Card>
					<Card class="text-success">
						<template #heading>
							<svg class="menu-button-icon theme-color d-inline"><use href="#check2"></use></svg>
							<svg class="menu-button-icon theme-color d-inline ms-1"><use href="#book-half"></use></svg>
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'Mysteries',
	data() {
		return {
			// definitions: {
			// 	essential: [
			// 		getGlossaryEntry("Bubble Coating"),
			// 		getGlossaryEntry("Optical Resonator"),
			// 		getGlossaryEntry("Register Basin"),
			// 	] as IGlossaryEntry[],
			// 	circuits: {
			// 		anchor: getDefinition("Anchor Circuit"),
			// 		chameleon: getDefinition("Chameleon Circuit"),
			// 		gravity: getDefinition("Gravity Circuit"),
			// 		language: getDefinition("Language Circuit"),
			// 	},
			// }
		};
	},
	mounted() {
		const exampleModal = document.getElementById('questModal');
		if (exampleModal) {
			exampleModal.addEventListener('show.bs.modal', event => {
				// Button that triggered the modal
				// @ts-ignore
				const button = event.relatedTarget as HTMLButtonElement;

				// Extract info from data children
				const title = button.querySelector('.title')?.innerHTML;
				const definition = button.querySelector('.def')?.innerHTML;
				const footer = button.querySelector('.footer')?.innerHTML;

				// Update the modal's content.
				const modalTitle = exampleModal.querySelector('.modal-title') as HTMLElement;
				const modalBody = exampleModal.querySelector('.modal-body') as HTMLElement;
				const modalFooter = exampleModal.querySelector('.modal-footer') as HTMLElement;

				modalTitle.innerHTML = title ? title : "Error";
				modalBody.innerHTML = definition? definition : "Whoops! Encountered an error finding the quest.";
				// modalFooter.innerHTML = footer ? footer : "";
				modalFooter.innerHTML = "Quest Details";
			})
		}
	},
});

</script>

<style lang="css" scoped>
.footer,
.def {
	display: none;
}

.main-quest {
	font-weight: bold;
}

.main-quest::before {
	content: 'MAIN:';
	text-decoration: underline;
	margin-right: 1rcap;
}
</style>