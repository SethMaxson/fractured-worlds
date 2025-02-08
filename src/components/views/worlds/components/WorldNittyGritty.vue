<template>
	<div class="nitty-gritty lh-sm p-1">
		<div class="nitty-gritty-header">
			<h6 class="section-header text-muted">Details</h6>
			<!-- <dl class="dl-condensed row dl-underline mb-0 pb-0"> -->
			<dl class="dl-condensed row mb-0 pb-0">
				<template v-if="time.length > 0">
					<dt class="col-4">Time Flow:</dt>
					<dd class="col capitalize"> {{time}} </dd>
				</template>
				<div class="w-100"></div>
				<template v-if="anchor.length > 0">
					<dt class="col-4">World Anchor:</dt>
					<dd class="col"> {{anchor}} </dd>
				</template>
				<div class="w-100"></div>
				<template v-if="exit.length > 0">
					<dt class="col-4">Exit:</dt>
					<dd class="col"> {{exit}} </dd>
				</template>
			</dl>
			<hr class="my-0 mb-1" />
		</div>
		<!-- <dl class="dl-main mb-0"> -->
		<dl class="dl-condensed row mb-0">
			<dt class="col-5" v-if="disguise.length > 0">{{ GameStrings.DisguiseSystem }}:</dt>
			<dd class="col" v-if="disguise.length > 0">{{disguise}}</dd>

			<div class="w-100"></div>

			<dt class="col-5 capitalize" v-if="kindredWorlds.length > 0">{{ GameStrings.KindredWorld }}s:</dt>
			<dd class="col" v-if="kindredWorlds.length > 0">{{kindredWorlds.join(', ')}}</dd>
		</dl>
		<div v-if="displayCast">
			<hr class="my-0 mb-1" />
			<h6 class="section-header text-muted">People</h6>
			<dl class="dl-condensed row mb-0">
				<dt class="col-3" v-if="partners.length > 0">Allies:</dt>
				<dd class="col" v-if="partners.length > 0">{{partners}}</dd>
				
				<div class="w-100"></div>
				
				<dt class="col-3" v-if="pureSoul.length > 0">Pure&nbsp;Soul:</dt>
				<dd class="col" v-if="pureSoul.length > 0">{{pureSoul}}</dd>
				
				<div class="w-100"></div>

				<dt class="col-3" v-if="nleAgent.length > 0">NLE Agent:</dt>
				<dd class="col" v-if="nleAgent.length > 0">{{nleAgent}}</dd>
			</dl>
			<dl class="dl-condensed mb-0">
			</dl>
		</div>
		
	</div>
</template>

<style scoped>
.nitty-gritty {
	font-size: 0.85rem;
}

.section-header {
	font-size: 1.1em;
	color: inherit;
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
.inline-dl dd { margin-left: 0.25rem; }
.dl-underline dt { text-decoration: underline; }
.dl-indent dt { margin-left: 1rem; }

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
	white-space: nowrap;
	/* margin-left: 1rem; */
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
		default: ''
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
					props.pureSoul.length > 0;
</script>

<script lang="ts">
export default {
  name: 'NittyGritty',
}

export type WorldTimeType =
	"looping" |
	"resting" |
	"standard" |
	"unknown"
;
</script>