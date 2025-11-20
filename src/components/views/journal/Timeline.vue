<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import TimelineDisplay from "@/components/core/timeline/TimelineDisplay.vue";
import { GameStrings } from "@/scripts/game-strings";

import { CampaignDate } from "@/objects/CampaignDate";
import { Utils } from "@/scripts/utils";
import type { ITimelineEvent, TimelineSubEventType } from "@/interfaces/ITimeline";
import type { IDate } from "@/interfaces/IDate";
import { computed, onMounted, reactive, ref } from "vue";
import { CampaignState } from "@/data/campaign-state";


onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("Timeline");
})

/** Display Settings states */
class TimelineDisplaySettings {
	/** Display the timeline dates in ascending order. */
	ascending = ref(false);
	/** A collection of filters. */
	filters = {
		/** Omit minor events. */
		majorOnly: ref(false),
		/** An array of tags to show (omits events that don't have the specified tags). */
		tags: ref<string[]>([]),
		/** An array of types to show (omits events that don't have the specified types). */
		types: ref<string[]>([]),
		/** An array of years to omit. */
		years: ref<number[]>([]),
	}
	/** Toggle the display of various components */
	displayToggles = {
		/** Show the event's detailed description */
		showDescription: ref(true),
		/** Show the breakdown of sub events */
		showExtra: ref(true),
		showFancyTables: ref(false),
		/** Show the separator headers for months and years */
		showHeaders: ref(false),
		/** NOT IMPLEMENTED */
		truncateDescription: ref(true),
	};

	constructor() {
		// this.filters = reactive({
		// 	majorOnly: false,
		// 	tags: [],
		// 	years:
		// });
	}
	
	public get fullView(): boolean {
		return this.displayToggles.showDescription.value && this.displayToggles.showExtra.value;
	}
	
	public set fullView(v : boolean) {
		this.displayToggles.showDescription.value = this.displayToggles.showExtra.value = v;
	}
}

const FilterSets = {
	tags: { },
	types: {
		worldVisits: ["world", "world-special"]
	},
	years: { },
}

// class ToggleableFilter {
// 	settings: TimelineDisplaySettings;
// 	set: string[];
// 	constructor(settings: any, section: string, set: string[]) {
// 		this.settings = settings;
// 		this.set = set;
// 	}
	
// 	//#region Filters
// 	public get worldsFilter(): boolean {
// 		return getMatchableArrayString(this.settings.filters.types).includes(getMatchableArrayString(FilterSets.types.worldVisits));
// 	}
	
// 	private set worldsFilter(v : boolean) {
// 		this.activeSettings.filters.types = v ? FilterSets.types.worldVisits : [];
// 	}
	
// 	public toggleWorldsFilter() {
// 		this.worldsFilter = !this.worldsFilter;
// 	}
// 	//#endregion Filters
// }


class TimelineDisplaySettingsManager {
	activeSettings;
	storedSettings;
	constructor() {
		this.activeSettings = reactive(new TimelineDisplaySettings());
		this.storedSettings = reactive(new TimelineDisplaySettings());
	}
	
	public backupSettings() {
		// Copy toggles
		const me = this;
		Object.keys(this.activeSettings.displayToggles).forEach(function(keyName) {
			const key = keyName as keyof typeof me.activeSettings.displayToggles;
			me.activeSettings.displayToggles[key] = me.storedSettings.displayToggles[key];
		});
	}
	public restoreSettings() {
		const me = this;
		// Copy toggles
		Object.keys(this.storedSettings.displayToggles).forEach(function(keyName) {
			const key = keyName as keyof typeof me.activeSettings.displayToggles;
			me.storedSettings.displayToggles[key] = me.activeSettings.displayToggles[key];
		});
	}
	//#region Views
	public worldsVisitedView() {
		// this.backupSettings();

		this.activeSettings.filters.types = ["world", "world-special"];
		this.activeSettings.displayToggles.showDescription = false;
		this.activeSettings.displayToggles.showExtra = false;
	}
	//#endregion Views
	
	//#region Filters
	public get worldsFilter(): boolean {
		return getMatchableArrayString(this.activeSettings.filters.types).includes(getMatchableArrayString(FilterSets.types.worldVisits));
	}
	
	private set worldsFilter(v : boolean) {
		this.activeSettings.filters.types = v ? FilterSets.types.worldVisits : [];
	}
	
	public toggleWorldsFilter() {
		this.worldsFilter = !this.worldsFilter;
	}
	//#endregion Filters
}

function getMatchableArrayString(array: string[]) {
	return ("|" + array.join("|") + "|")
}

const timelineEvents: ITimelineEvent[] = [
	{
		date: { year: 1, month: 3, day: 14 },
		isMajor: true,
		event: "Each of us awoke within the streets of an unfamiliar city in eternal twilight. Our last memories were of being swallowed by darkness after the skies of our respective homelands shattered like glass mirrors.",
		extra: [
			{ name: "discovered Somewhere", type: "world" }
		],
		header: "Awoke in Voidspace",
		type: "world-special"
	},
	{
		date: { year: 1, month: 4, day: 2 },
		isMajor: true,
		event: "We earned our first lightship—the One More Day—in gladiatorial combat.",
		extra: [
			{ name: "met Nortle", type: "person" },
			{ name: "obtained One More Day", type: "lightship" }
		],
		header: "Obtained First Lightship",
		type: "lightship"
	},
	{
		date: { year: 1, month: 4, day: 5 },
		isMajor: true,
		event: "We landed on a world fragment for the first time. We explored Wonderland, during which we met the Hedge Knight, slew the Queen of Hearts, and rescued Alice.",
		extra: [
			{ name: "reached Wonderland", type: "world" },
			{ name: "met Cade Brightcloak", type: "person" },
			{ name: "encountered Jafar", type: "rebirth" },
			{ name: "first run-in with the Rebirth Caucus", type: "rebirth" },
			{ name: "emptied Mad Hatter", type: "death" },
		],
		header: "Wonderland",
		type: "world"
	},
	{
		date: { year: 1, month: 4, day: 8 },
		isMajor: true,
		endDate: { year: 1, month: 4, day: 15 },
		extra: [
			{ name: "reached The Big Apple", type: "world" },
			{ name: "met Teenage Mutant Ninja Turtles", type: "person" },
			{ name: "met Ella Fitzpatrick", type: "person" },
			{ name: "met Boo", type: "person" },
			{ name: "encountered Shredder", type: "rebirth" },
			{ name: "encountered Doyle", type: "rebirth" },
		],
		event: "We landed on the <l>Big Apple</l>, a world fragment born from one of the many variant Earths. Phil and Tero went on a massive shopping spree. C.O.B.B. and Tropey were kidnapped by ninjas shortly afterwards. We met the Teenage Mutant Ninja Turtles, Cayiel, Ella, and a dog named Boo, then teamed up to rescue our allies.",
		header: "The Big Apple",
		type: "world"
	},
	{
		date: { year: 1, month: 4, day: 21 },
		isMajor: true,
		event: "After receiving a letter from the Hedge Knight (whom we now know to be called Cade Brightcloak), inviting us to learn more about 'Nelly', we boarded the <Location>Happy Turtle</Location> and met with Nortle. We were interviewed one at a time, with some follow-up interviews happening. Eventually, Nortle informed us of the nature of the Network of Like-minded Expatriates and inducted us as its newest members.",
		header: "Joined N.L.E.",
		type: "faction"
	},
	{
		date: { year: 1, month: 4, day: 22 },
		header: "Wanta's Pocket Rift",
		type: "world"
	},
	{
		date: { year: 1, month: 5, day: 4 },
		header: "Celebrated Christmas in Somewhere",
		type: "holiday"
	},
	{
		date: { year: 1, month: 5, day: 14 },
		isMajor: true,
		extra: [
			{ name: "reached Neon Coast", type: "world" },
			{ name: "met Gloria", type: "person" },
			{ name: "met Tommy One", type: "person" },
			{ name: "met Umbra Caller", type: "mystery" }
		],
		event: "We briefly explored the <l>Neon Coast</l>, a technologically advanced world fragment. During our visit, the world was destroyed by a powerful entity who seemed to be able to create and control <im>Umbra</im> at will. We narrowly escaped after a philosophical debate with C.O.B.B. caused the entity to allow us to leave.",
		header: "Neon Coast",
		type: "world-special"
	},
	{
		date: { year: 1, month: 5, day: 17 },
		header: "Land of Oz",
		type: "world"
	},
	{
		date: { year: 1, month: 5, day: 18 },
		header: "Met with Nortle concerning the Umbra Caller",
		type: "faction"
	},
	{
		date: { year: 1, month: 5, day: 20 },
		isMajor: true,
		extra: [
			{ name: "obtained Brightside", type: "lightship" },
			{ name: "lost Tropey", type: "death" }
		],
		event: "We discovered a large lightship resembling a whale adrift in Voidspace. We boarded it and learned that the crew had been slaughtered by an alien creature. We forced the creature off the vessel, but lost one of our number in so doing.",
		header: "Obtained the Brightside",
		type: "lightship"
	},
	{
		date: { year: 1, month: 5, day: 28 },
		endDate: { year: 1, month: 7, day: 3 },
		header: "Returned to Somewhere to repair our new ship",
		type: "world"
	},
	{
		date: { year: 1, month: 5, day: 28 },
		header: "Explored Tweedy Farms, Dragon Hatchery, Madison Square Garden, Bay of Pigs, and Dinosaur Land via a series of Kindred Portals",
		type: "world"
	},
	{
		date: { year: 1, month: 5, day: 28 },
		header: "Met Sam & Max, helped them defeat an elder god",
		extra: [
			{ name: "unlocked direct travel to Somewhere", type: "navigation" }
		],
		type: "world"
	},
	{
		date: { year: 1, month: 5, day: 31 },
		extra: [
			{ name: "met Zuzu", type: "zuzu" }
		],
		header: "Sam & Max dropped us off at Somewhere in the Desoto",
		type: "world"
	},
	{
		date: { year: 1, month: 6, day: 17 },
		extra: [
			{ name: "unlocked direct travel to Battle World", type: "navigation" },
			{ name: "unlocked direct travel to Weapon World", type: "navigation" }
		],
		header: "Cade delivered Direct Prism Keys to Battle World & Weapon World",
		type: "item"
	},
	{
		date: { year: 1, month: 7, day: 3 },
		header: "Todd Jenkins emptied",
		type: "death"
	},
	{
		date: { year: 1, month: 7, day: 6 },
		isMajor: true,
		event: "We reached Weapon World, where we met Tankman and agreed to allow his technicians to study our ship.",
		extra: [
			{ name: "reached Weapon World", type: "world" },
			{ name: "met Tankman", type: "person" },
			{ name: "met Susie", type: "person" },
			{ name: "invited to meet with the leader of the Rebirth Caucus", type: "rebirth" }
		],
		header: "Weapon World",
		type: "world"
	},
	{
		date: { year: 1, month: 7, day: 6 },
		isMajor: true,
		// event: "event",
		extra: [
			{ name: "reached The Oasis via Doyle", type: "world" },
			{ name: "met the Leader of the Rebirth Caucus", type: "rebirth" },
			{ name: "met Gojiro, who swore to make a game of hunting Phil", type: "rebirth" },
			{ name: "ejected early due to disruptive behavior", type: "rebirth" },
		],
		header: "The Oasis",
		type: "rebirth"
	},
	{
		date: { year: 1, month: 7, day: 13 },
		endDate: { year: 1, month: 7, day: 14 },
		isMajor: true,
		// event: "We reached Berk.",
		extra: [
			{ name: "reached Berk", type: "world" },
			{ name: "met Hiccup", type: "person" },
			{ name: "met Toothless", type: "person" },
			{ name: "met Astrid", type: "person" },
			{ name: "met Stormfly", type: "person" },
			{ name: "encountered Ganondorf", type: "rebirth" },
			{ name: "lost Tommy One", type: "death" },
			{ name: "lost Whiteshi", type: "death" }
		],
		header: "Berk",
		type: "world"
	},
	{
		date: { year: 1, month: 7, day: 18 },
		header: "Returned to Somewhere",
		type: "world"
	},
	{
		date: { year: 1, month: 7, day: 18 },
		header: "Gloria departed after ominous conversation with C.O.B.B. about Phil",
		type: "person"
	},
	{
		date: { year: 1, month: 7, day: 22 },
		header: "Reached Duloc, turned around to collect the dog Phil forgot",
		type: "world"
	},
	{
		date: { year: 1, month: 7, day: 25 },
		header: "Collected poodle in Somewhere",
		type: "world"
	},
	{
		date: { year: 1, month: 7, day: 27 },
		extra: [
			{ name: "met Sonic the Hedgehog", type: "person" },
			{ name: "met Knuckles the Echidna", type: "person" },
			{ name: "met Miles \"Tails\" Prower", type: "person" },
			{ name: "met Amy Rose", type: "person" },
			{ name: "met Big the Cat", type: "person" }
		],
		header: "Encountered the Tornado-7",
		type: "lightship"
	},
	{
		date: { year: 1, month: 7, day: 29 },
		endDate: { year: 1, month: 8, day: 3 },
		isMajor: true,
		// event: "We reached Duloc.",
		extra: [
			{ name: "reached Duloc Outlands", type: "world" },
			{ name: "met Shrek", type: "person" },
			{ name: "met Donkey", type: "person" },
			{ name: "met Fiona", type: "person" },
			{ name: "met Dragon", type: "person" },
			{ name: "slew Farquaad", type: "death" }
		],
		header: "Duloc Outlands",
		type: "world"
	},
	{
		date: { year: 1, month: 8, day: 3 },
		header: "Attended Shrek & Fiona's wedding",
		type: "love"
	},
	{
		date: { year: 1, month: 8, day: 3 },
		header: "Rescued Donkey from a member of the Rebirth Caucus who seemed almost pleased that we intervened",
		type: "mystery"
	},
	{
		date: { year: 1, month: 8, day: 7 },
		endDate: { year: 1, month: 8, day: 8 },
		isMajor: true,
		// event: "We reached place.",
		extra: [
			{ name: "reached Battle World", type: "world" },
			{ name: "met Doc - Doctor Emmet Brown", type: "person" },
			{ name: "met Ferret - Vilyth Koehlanna", type: "person" },
			{ name: "noticed increased anxiety from Ella", type: "mystery" },
			{ name: "hosted birthday party for Ootah, Bebop, and Gugg", type: "birthday" },
			{ name: "lost Betsy Boyle, Elaim Trueblood, Cucu, Kuku", type: "death" },
			{ name: "set course for Jurassic Park to see if Owl could resurrect Cucu", type: "navigation" },
		],
		header: "Battle World",
		type: "world-special"
	},
	{
		date: { year: 1, month: 8, day: 11 },
		isMajor: true,
		event: "<p>C.O.B.B. successfully restored Todd Jenkins humanity by heaping praise on his music and convincing him that his music had become widely celebrated.</p> <p>This is the first recorded case of a Blank being reverted into a person.</p>",
		header: "C.O.B.B. cures a Blank",
		type: "person"
	},
	{
		date: { year: 1, month: 8, day: 12 },
		header: "Sailed past NYC '89",
		type: "world"
	},
	{
		date: { year: 1, month: 8, day: 14 },
		extra: [
			{ name: "met Captain Toad", type: "person" },
			{ name: "met Toadette", type: "person" },
			{ name: "met Hint Toad", type: "person" },
			{ name: "met Yellow Toad", type: "person" },
			{ name: "met Banktoad", type: "person" },
			{ name: "met Mailtoad", type: "person" }
		],
		header: "Encountered the Starlight Shroom",
		type: "lightship"
	},
	{
		date: { year: 1, month: 8, day: 15 },
		header: "Discovered Cucu cocoons in Phil's closet. Phil watched one hatch.",
		type: "person"
	},
	{
		date: { year: 1, month: 8, day: 18 },
		header: "Reached The Suburbs. Charted new course since Cucu no longer needed resurrecting.",
		type: "world"
	},
	{
		date: { year: 1, month: 8, day: 21 },
		header: "Fast traveled to Weapon World, didn't stop",
		type: "world"
	},
	{
		date: { year: 1, month: 8, day: 23 },
		header: "Dealt with Cucus after they tried to sacrifice Phil's dog",
		type: "death"
	},
	{
		date: { year: 1, month: 8, day: 23 },
		extra: [
			{ name: "Ootah became high for 29 days", type: "drug" },
			{ name: "Phil nearly died, extended his high for an additional 62 days", type: "drug" },
			{ name: "Tero became high for 52 days", type: "drug" },
			{ name: "Fred the Poodle became high for 100 days", type: "drug" },
		],
		header: "Zuzu unwittingly ignited Phil's Novum Fatalis during the Cucu incident",
		type: "zuzu"
	},
	{
		date: { year: 1, month: 8, day: 24 },
		endDate: { year: 1, month: 8, day: 25 },
		isMajor: true,
		// event: "We reached Treasure Island.",
		extra: [
			{ name: "reached Treasure Island", type: "world" },
			{ name: "met Gonzo", type: "person" },
			{ name: "met Rizzo", type: "person" },
			{ name: "met Captain Smollett", type: "person" },
		],
		header: "Treasure Island",
		type: "world"
	},
	{
		date: { year: 1, month: 8, day: 28 },
		// endDate: { year: 1, month: 8, day: 3 },
		isMajor: true,
		// event: "We reached Duloc.",
		extra: [
			{ name: "reached Barbieland", type: "world" },
			// { name: "met Toadette", type: "person" },
		],
		header: "Barbieland",
		type: "world"
	},
	{
		date: { year: 1, month: 8, day: 28 },
		// endDate: { year: 1, month: 8, day: 3 },
		isMajor: true,
		// event: "We reached Looney Tune Land.",
		extra: [
			{ name: "reached Looney Tune Land", type: "world" },
			{ name: "lost Ootah", type: "death" },
			{ name: "won game against the Monstars", type: "holiday" }
		],
		header: "Looney Tune Land",
		type: "world"
	},
	{
		date: { year: 1, month: 9, day: 3 },
		extra: [
			{ name: "Teleglyph for Ella — from Cade", type: "item" },
			{ name: "Final Fantasy Fables: Chocobo Tales for Nintendo DS — from Cade", type: "item" },
			{ name: "Teleglyph for Owl — from Owl", type: "item" },
		],
		gmOnly: true,
		header: "The Starlight Shroom reaches Looney Tune Land",
		type: "lightship"
	},
	{
		date: { year: 1, month: 9, day: 4 },
		header: "Defeated the Monstars in basketball",
		type: "holiday"
	},
	{
		date: { year: 1, month: 9, day: 7 },
		extra: [
			// { name: "invited Tero", type: "person" },
			// { name: "invited Althea", type: "person" },
			// { name: "invited Boo", type: "person" },
			// { name: "invited Ella", type: "person" },
			// { name: "invited Nortle", type: "person" },
			// { name: "invited Susie", type: "person" },
			// { name: "invited Phil", type: "person" },
		],
		header: "Tero and Phil attended Gazelle concert with Cade & other members of NLE",
		type: "holiday"
	},
	{
		date: { year: 1, month: 9, day: 21 },
		header: "Ootah finally sobers up",
		type: "drug"
	},
	{
		date: { year: 1, month: 10, day: 14 },
		header: "Tero finally sobers up",
		type: "drug"
	},
	{
		date: { year: 1, month: 12, day: 1 },
		header: "Fred the Poodle finally sobers up",
		type: "drug"
	},
	{
		date: { year: 1, month: 12, day: 6 },
		header: "Phil finally sobers up",
		type: "drug"
	},
];

const sm = reactive(new TimelineDisplaySettingsManager());

function resetDisplay() {
	sm.activeSettings.ascending = false;
	sm.activeSettings.filters.majorOnly = false;
	sm.activeSettings.filters.tags = [];
	sm.activeSettings.filters.types = [];
	sm.activeSettings.filters.years = [];
	sm.activeSettings.displayToggles.showDescription = true;
	sm.activeSettings.displayToggles.showExtra = true;
	sm.activeSettings.displayToggles.showFancyTables = false;
	sm.activeSettings.displayToggles.showHeaders = false;
	sm.activeSettings.displayToggles.truncateDescription = true;
}

function toggleSortAsc() {
	sm.activeSettings.ascending = !sm.activeSettings.ascending;
}

const sortedTimeline = computed<ITimelineEvent[]>(() => {
	var sortedResults = timelineEvents.slice();
	sortedResults.push({
		header: "Now",
		date: CampaignState.CurrentDate,
		type: "now"
	})
	const settings = sm.activeSettings;

	// Filter
	if (settings.filters.majorOnly) {
		sortedResults = sortedResults.filter(event => event.isMajor);
	}
	if (settings.filters.types.length > 0) {
		sortedResults = sortedResults.filter(event => event.type && settings.filters.types.includes(event.type));
	}
	// Sort
	sortedResults = sortedResults.sort((a, b) => {
		return Utils.SortComparators.campaignDate(a.date, b.date, sm.activeSettings.ascending);
	})

	// Return
	return sortedResults;
});
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/journal/timeline" />
		</header>
		<main>
			<!-- #region Timeline Display Settings -->

			<div class="text-end py-2 border-bottom bg-dark-subtle">
				<!-- Button trigger modal -->
				<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
					<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#timelineSettingsModal">
						<svg class="menu-button-icon theme-color d-inline"><use href="#settings"></use></svg>
						Configure Display
					</button>
					<button class="btn btn btn-primary border-start" type="button" @click="toggleSortAsc">
						<svg class="menu-button-icon fs-4 theme-color">
							<use :href=" sm.activeSettings.ascending ? '#sort-asc' : '#sort-desc'"></use>
						</svg>
					</button>
					<button type="button" class="btn btn-primary border-start" @click="resetDisplay()">
						<svg class="menu-button-icon theme-color d-inline"><use href="#reset"></use></svg>
					</button>
				</div>
			</div>

			<!-- Modal -->
			<div class="modal fade" id="timelineSettingsModal" tabindex="-1" aria-labelledby="timelineSettingsModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="timelineSettingsModalLabel">Configure Timeline Display</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div id="settings-form">
							<div class="form-check form-switch">
								<input class="form-check-input" type="checkbox" role="switch" id="switchMajorOnly" v-model="sm.activeSettings.filters.majorOnly" />
								<label class="form-check-label" for="switchMajorOnly">Major Events Only</label>
							</div>
							<!-- <div class="form-check form-switch">
								<input class="form-check-input" type="checkbox" role="switch" id="switchFullView" :value="settings.displayToggles.showExtra" />
								<label class="form-check-label" for="switchFullView">Full View</label>
							</div> -->
							<div class="form-check form-switch">
								<input class="form-check-input" type="checkbox" role="switch" id="switchEventDescription" v-model="sm.activeSettings.displayToggles.showDescription" />
								<label class="form-check-label" for="switchEventDescription">Show Description</label>
							</div>
							<div class="form-check form-switch">
								<input class="form-check-input" type="checkbox" role="switch" id="switchEventSubevents" v-model="sm.activeSettings.displayToggles.showExtra" />
								<label class="form-check-label" for="switchEventSubevents">Show Subevents</label>
							</div>
							<hr />
							<h6>Filters</h6>
							<div class="mb-1">Event Type</div>
							<div class="btn-group btn-group-sm" role="group">
								<button class="btn btn-outline-primary" :class="{'active': sm.worldsFilter}" type="button" @click="sm.toggleWorldsFilter">Worlds Visits</button>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="resetDisplay()">
							<svg class="menu-button-icon theme-color d-inline"><use href="#reset"></use></svg>
							Defaults
						</button>
						<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Accept</button>
					</div>
					</div>
				</div>
			</div>
			<!-- #endregion Timeline Display Settings -->

			<!-- #region Timeline display -->
			 <TimelineDisplay
			 	:timeline-events="sortedTimeline"
				:settings="sm.activeSettings.displayToggles"
			 />
			<!-- #endregion Timeline display -->
		</main>
	</PageContainerVue>
</template>