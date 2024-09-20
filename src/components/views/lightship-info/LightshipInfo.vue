<script setup lang="ts">
import ViewBlurb from "../../core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from '@/components/core/text-tags/Important.vue';
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="Anatomy of a Lightship">
				A brief summary of some of the major parts found within a Lightship.
			</ViewBlurb>
		</header>
		<main>
			<!-- OneNote serves as source of truth for this. Write all new and updated definitions there first. -->
			<dl class="row border m-1">
				<dt class="col-sm-3">Bubble Coating</dt>
				<dd class="col-sm-9">A complex alchemical solution that projects a bubble around the ship in Voidspace, creating an artificial, livable atmosphere just large enough to cover the vessel.</dd>
				<hr/>

				<dt class="col-sm-3">Chameleon Circuit</dt>
				<dd class="col-sm-9">A complex tapestry of runes woven with alteration magic. If an explorer would stand out in such a way as to endanger the innocence of a visited world, the Chameleon Circuit will grant them new appearance so that they can reasonably pass as native of that world.</dd>
				<hr/>

				<dt class="col-sm-3">Gravity Circuit</dt>
				<dd class="col-sm-9">A comparatively simple series of evocation runes that creates an artificial source of gravity. Usually placed at the bottom of a vessel. Most version are monodirectional, but some vessels use bidirectional variants located at the vertical center of the craft to allow for gravity to pull downward on the upper decks, and upward on the lower decks.</dd>
				<hr/>

				<dt class="col-sm-3">Anchor Circuit</dt>
				<dd class="col-sm-9">
					<p>
						A complex, interconnected system of components that work together to allow a vessel to 'anchor' itself to a world so that its occupants can explore. The anchor is a beam made entirely of magical light, and is invisible to the inhabitants of a sheltered world. The crew can teleport almost instantly from one end of the beam to the other.
					</p>
					<p>
						When engaged, the anchor renders the ship invisible and weightless, and also deploys a protective field around the vessel. This field causes the vessel to be harmlessly pushed aside if it is bumped by another ship, leaving the occupants of the other ship completely unaware of the anchored vessel.
					</p>
				</dd>
				<hr/>

				<dt class="col-sm-3">Optical Resonator</dt>
				<dd class="col-sm-9">An assembly designed to channel and traverse the trails of light that connect the World Fragments scattered across Voidspace. Most are cylindrical, with a crystal focus centered between a highly reflective one-way mirror in the front and a partially reflective mirror in the rear. This configuration allows light to enter through the front and be released as a focused beam through the rear, providing a form of propulsion.</dd>
				<hr/>

				<dt class="col-sm-3">Prism Key</dt>
				<dd class="col-sm-9">A functional prism that has been attuned to the light of a particular World Fragment. These are needed for a Lightship to channel the trail of light that connects worlds. A prism key that is attuned to the light of a World Fragment can be used to sail to directly adjoining worlds.</dd>
				<hr/>

				<dt class="col-sm-3">Prismatic Register</dt>
				<dd class="col-sm-9">A specialized series of stone or metal tablets, usually bound in a style resembling a book, with engraved slots to insert and label Prism Keys. These are stored in a designated slot in a Lightship which allows the Prism Keys within the Prismatic Register to be utilized by the Optical Resonator.</dd>
				<hr/>

				<!-- <dt class="col-sm-3">Nesting</dt>
				<dd class="col-sm-9">
					<dl class="row">
						<dt class="col-sm-4">Nested definition list</dt>
						<dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
					</dl>
				</dd> -->
			</dl>
		</main>
	</PageContainerVue>
</template>

<style scoped>
	.aka {
		font-style: italic;
		font-size: 0.9rem;
		font-weight: normal;
		margin: 0 0 0.25rem 0;
	}
	.aka::before { content: '(also called: '; }
	.aka::after { content: ')'; }

	.gm-only {
		/* color: yellow; */
		background-color: rgba(100, 100, 0, 0.5);
	}
	.gm-only.row {
		margin: 0;
		padding: 0;
	}

	hr { 
		margin: 0.5rem 0;
	}

	@media (min-width: 576px) {
		hr { margin: 0.25rem 0; }
		.aka { margin: unset; }
	}
</style>