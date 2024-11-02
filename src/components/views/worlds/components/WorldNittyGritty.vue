<template>
	<div class="nitty-gritty lh-sm col my-xl-0 mx-xl-0">
		<div class="nitty-gritty-header">
			<dl class="inline-dl dl-underline mb-1 text-secondary meta" v-if="themes.length > 0 || genre.length > 0">
				<dt>Core Themes:</dt>
				<dd> {{themes.join(', ')}} </dd>
				<dt v-if="genre.length > 0">Genre:</dt>
				<dd v-if="genre.length > 0"> {{genre}} </dd>
			</dl>
			<dl class="inline-dl dl-underline mb-0 pb-0">
				<template v-if="time.length > 0">
					<dt>Time Flow:</dt>
					<dd class="capitalize"> {{time}} </dd>
				</template>
				<template v-if="anchor.length > 0">
					<dt>World Anchor:</dt>
					<dd> {{anchor}} </dd>
				</template>
				<template v-if="exit.length > 0">
					<dt>Exit:</dt>
					<dd> {{exit}} </dd>
				</template>
			</dl>
			<hr class="my-1" />
		</div>
		<dl class="dl-main mb-0">
			<dt v-if="disguise.length > 0">{{ GameStrings.DisguiseSystem }}</dt>
			<dd v-if="disguise.length > 0">{{disguise}}</dd>
			<dt class="capitalize" v-if="kindredWorlds.length > 0">{{ GameStrings.KindredWorld }}s</dt>
			<dd v-if="kindredWorlds.length > 0">{{kindredWorlds.join(', ')}}</dd>
		</dl>
		<div v-if="displayCast">
			<hr class="my-1" />
			<h6 class="section-header">Cast</h6>
			<dl class="dl-condensed mb-0">
				<dt v-if="partners.length > 0">Guest Partners:</dt>
				<dd v-if="partners.length > 0">{{partners}}</dd>
				<dt v-if="pureSoul.length > 0">Pure Soul:</dt>
				<dd v-if="pureSoul.length > 0">{{pureSoul}}</dd>
				<dt v-if="rebirthAgent.length > 0">Rebirth agent:</dt>
				<dd v-if="rebirthAgent.length > 0">{{rebirthAgent}}</dd>
				<dt v-if="nleAgent.length > 0">N.L.E. Agent:</dt>
				<dd v-if="nleAgent.length > 0">{{nleAgent}}</dd>
			</dl>
		</div>
		
	</div>
</template>

<style scoped>
.nitty-gritty {
	background-color: var(--vt-c-black-mute);
	border: 1px solid var(--color-border);
	margin: 0.5rem;
	padding: 0.5rem;
	font-size: 0.85rem;
}

.section-header {
	font-size: 1.1em;
	/* font-weight: bold; */
}

.meta {
	font-size: 0.8rem;
	/* font-style: italic; */
}

/* #region dl-condensed and inline-dl */
.inline-dl dt,
.inline-dl dd {
	display: inline;
}
.dl-condensed dd, .inline-dl dd { margin-left: 0.25rem; }
.dl-underline dt { text-decoration: underline; }

.inline-dl dt:not(:first-of-type) { margin-left: 1rem; }

.dl-condensed {
	line-height: 1rem;
}
.dl-condensed dt,
.dl-condensed dd {
	float: left;
}
.dl-condensed dt {
	clear: left;
	break-before: always;
	margin-left: 1rem;
}
/* #endregion dl-condensed and inline-dl */

.dl-main dd { margin-left: 1rem; }
</style>

<script setup lang="ts">
import { GameStrings } from "@/scripts/game-strings";
import type { PropType } from "vue";

const props = defineProps({
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
	/**The location of the exit created by the party's Lightship's Anchor Circuit.
	 * 
	 * @example	 
	 * "closet inside of the Bizarre Room"
	 * "per episode"
	 */
	exit: {
		type: String,
		required: false,
		default: ''
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
	kindredWorlds: {
		type: Array<String>,
		required: false,
		default: []
	},
	/** The identity of the N.L.E. agent assigned to this world, if any. */
	nleAgent: {
		type: String,
		required: false,
		default: ''
	},
	partners: {
		type: String,
		required: false,
		default: '?'
	},
	/** The identity of this world's Pure Soul, if any. Max of 1. */
	pureSoul: {
		type: String,
		required: false,
		default: ''
	},
	/** The identity of the Rebirth Caucus the party is most likely to encounter in this world, if any. */
	rebirthAgent: {
		type: String,
		required: false,
		default: ''
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

const displayCast = props.nleAgent.length > 0 ||
					props.partners.length > 0 ||
					props.pureSoul.length > 0 ||
					props.rebirthAgent.length > 0;
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