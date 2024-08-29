<template>
	<div class="nitty-gritty lh-sm col my-xl-0 mx-xl-0">
		<div class="nitty-gritty-header">
			<dl class="inline-dl mb-1" v-if="themes.length > 0 || genre.length > 0">
				<dt>Core Themes:</dt>
				<dd> {{themes.join(', ')}} </dd>
				<dt v-if="genre.length > 0">Genre:</dt>
				<dd v-if="genre.length > 0"> {{genre}} </dd>
			</dl>
			<dl class="inline-dl mb-0 pb-0">
				<template v-if="time.length > 0">
					<dt>Time Flow:</dt>
					<dd class="capitalize"> {{time}} </dd>
				</template>
				<template v-if="anchor.length > 0">
					<dt>Anchor:</dt>
					<dd> {{anchor}} </dd>
				</template>
			</dl>
			<hr class="my-1" />
		</div>
		<dl class="main-dl mb-0">
			<dt v-if="disguise.length > 0">{{ GameStrings.DisguiseSystem }}</dt>
			<dd v-if="disguise.length > 0">{{disguise}}</dd>
			<dt v-if="partners.length > 0">Guest Partners</dt>
			<dd v-if="partners.length > 0">{{partners}}</dd>
			<dt class="capitalize" v-if="KindredWorlds.length > 0">{{ GameStrings.KindredWorld }}s</dt>
			<dd v-if="KindredWorlds.length > 0">{{KindredWorlds.join(', ')}}</dd>
		</dl>
	</div>
</template>

<style scoped>
.nitty-gritty {
	background-color: var(--vt-c-black-mute);
	border: 1px solid var(--color-border);
	margin: 0.5rem;
	padding: 0.5rem;
}

.inline-dl dt,
.inline-dl dd {
	display: inline;
}
.inline-dl dd { margin-left: 0.25rem; }
.inline-dl dt { text-decoration: underline; }
.inline-dl dt:not(:first-of-type) { margin-left: 1rem; }

.main-dl dd { margin-left: 1rem; }
</style>

<script setup lang="ts">
import { GameStrings } from "@/scripts/game-strings";
import type { PropType } from "vue";

defineProps({
	/**The location of the Anchor in this world. */
	anchor: {
		type: String,
		required: false,
		default: '?'
	},
	disguise: {
		type: String,
		required: false,
		default: 'N/A'
	},
	/**The primary genre of this world (e.g. mystery, racing). Max of 2.
	 * 
	 * @example	 
	 * "adventure"
	 * "comedy, horror"
	 */
	genre: {
		type: String,
		required: false,
		default: ''
	},
	/**Indicates whether this world is linear or more open.
	 * @default true
	*/
	isLinear: {
		type: Boolean,
		required: false,
		default: true
	},
	partners: {
		type: String,
		required: false,
		default: '?'
	},
	KindredWorlds: {
		type: Array<String>,
		required: false,
		default: []
	},
	/**The core themes of this world listed as comma-separated tags. Try to limit to 3 or fewer.
	 * Primarily used to inform other decisions, such as determining links between kindred worlds.
	 * 
	 * @example	 
	 * "whimsy, nonsense, cartoon"
	 * "aquatic, fantasy, princess"
	 */
	themes: {
		type: Array as PropType<WorldThemeTags[]>,
		required: false,
		default: ''
	},
	/**The flow of time within this world. 
	 * Uses the Looping, Resting, Standard labels set forth by the Voidspace explorer Marco Rayleigh.
	 */
	time: {
		type: String as PropType<WorldTimeType>,
		required: false,
		default: 'resting'
	},
})
</script>

<script lang="ts">
export default {
  name: 'NittyGritty',
}

export type WorldThemeTags =
	"20s" |
	"adventure" |
	"animal" |
	"aquatic" |
	"belonging" |
	"cartoon" |
	"city" |
	"coming of age" |
	"cozy" |
	"defender" |
	"desert" |
	"dictator" |
	"digital" |
	"dystopia" |
	"eldritch" |
	"fantasy" |
	"food" |
	"found family" |
	"future" |
	"gothic" |
	"gritty" |
	"hijinks" |
	"horror" |
	"isekai" |
	/** Worlds with a focus on a jungle */
	"jungle" |
	"lying hero" |
	"magic" |
	"medieval" |
	"middle east" |
	"misfit" |
	"modern" |
	"monster" |
	"nonsense" |
	"nyc" |
	"pirate" |
	"princess" |
	"punk" |
	"school" |
	"secret life" |
	"small" |
	/** Invalid. Used for placeholders only. */
	"something" |
	"space" |
	"sport" |
	"superhero" |
	"supernatural" |
	"thief" |
	"toy" |
	"treasure" |
	"underwater" |
	"vehicle" |
	"western" |
	"whimsy"
;

export type WorldTimeType =
	"looping" |
	"resting" |
	"standard"
;
</script>