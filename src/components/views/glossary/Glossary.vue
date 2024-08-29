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
			<ViewBlurb header="Glossary">
				A glossary of terms within the {{ GameStrings.WorldName }}.
			</ViewBlurb>
		</header>
		<main>
			<!-- OneNote serves as source of truth for this. Write all new and updated definitions there first. -->
			<dl class="row border m-1">
				<dt class="col-sm-3">Blank</dt>
				<dd class="col-sm-9">A living husk of a creature taken by Emptiness. Usually mindless, but some stronger creatures retain traces of their former selves for a time.</dd>
				<hr/>

				<dt class="col-sm-3">
					Drive
					<p class="aka d-sm-inline">"Ambition", "Purpose"</p>
				</dt>
				<dd class="col-sm-9">A personal ambition or goal someone is adamant about achieving. A drive held deeply enough protects its owner from Emptiness.</dd>
				<hr/>

				<dt class="col-sm-3">
					Emptiness
					<p class="aka d-sm-inline">"Hollowing"</p>
				</dt>
				<dd class="col-sm-9">A state of being overwhelmed by the state of the universe. Causes a creature to become a Blank.</dd>
				<hr/>

				<dt class="col-sm-3">Fracturing, The</dt>
				<dd class="col-sm-9">The disappearance of countless worlds, and the birth of the Void Realm. Sometimes referred to as "The Sundering."</dd>
				<hr/>

				<dt class="col-sm-3">Lightship</dt>
				<dd class="col-sm-9">A type of ship that is capable of traversing <em>Voidspace</em> via the pathways of light that connect the World Remnants.</dd>
				<hr />

				<dt class="col-sm-3">Pure Soul</dt>
				<dd class="col-sm-9">A youth with a particularly strong will and (relatively) innocent heart. Most worlds have at most one Pure Soul.</dd>
				<hr />

				<dt class="col-sm-3">Remnant/World</dt>
				<dd class="col-sm-9">A surviving fragment of a missing world. In most cases, the remnant's inhabitants continue with their normal lives in a dreamlike state, blissfully unaware of The Fracturing.</dd>
				<hr/>

				<dt class="col-sm-3">Shade</dt>
				<dd class="col-sm-9">A creature that has been corrupted into a living vessel of Umbra. Shades know only mindless hostility, and their actions serve only to accelerate the spread of Umbra.</dd>
				<hr/>

				<dt class="col-sm-3">Umbra</dt>
				<dd class="col-sm-9">
					<p>A slowly creeping void from which nothing—not even light—can escape. It moves similarly to magma.</p>
					<div class="gm-only">
						<p>For most creatures, contact with Umbra results in immediately becoming a shadowy creature called a Shade. Stronger individuals instead take damage from Umbra, only succumbing and becoming a Shade if they die while in contact with Umbra.</p>
						<p>A creature receives 8d6 (28) Negative damage when it comes into contact with Umbra. It receives an additional 8d6 (28) Negative damage at the beginning of its turn as long as it remains in contact with Umbra.</p>
						<p>Shades know only mindless hostility. When weakened (half of their maximum HP), they enter a rage and use their next action to explode into a puddle of Umbra. This puddle is the same size as the creature's token, and dissipates after 24 hours.</p>
						<p>Shades can only be cured by some extensive and rare light/positive thing. Not sure what yet.</p>
					</div>
				</dd>
				<hr />

				<dt class="col-sm-3">
					Void Realm
					<p class="aka d-sm-inline">"The Vast"</p>
				</dt>
				<dd class="col-sm-9">The mysterious realm in which the heroes have found themselves.</dd>
				<hr />
				
				<dt class="col-sm-3">
					Voidspace
					<p class="aka d-sm-inline">"The Big Empty"</p>
				</dt>
				<dd class="col-sm-9">The empty space between worlds.</dd>
				<hr />
				
				<div class="gm-only row">
					<dt class="col-sm-3">World Seed</dt>
					<dd class="col-sm-9">A sharp green crystal that pulses and glows with life energy. Created by turning a Pure Soul into a Blank with a specific, evil method that crystallizes their potential. Can be used to create a new world shaped by the imagination of whoever wields it.</dd>
					<hr />
				</div>

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