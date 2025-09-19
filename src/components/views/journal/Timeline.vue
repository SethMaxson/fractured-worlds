<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import { GameStrings } from "@/scripts/game-strings";

import { CampaignDate } from "@/objects/CampaignDate";
import { Utils } from "@/scripts/utils";

/** Display Settings states */
class TimelineDisplaySettings {
	/** Display the timeline dates in ascending order. */
	ascending: boolean = true;
	/** A collection of filters. */
	filters = {
		/** Omit minor events. */
		majorOnly: false,
		/** An array of tags to show (omits events that don't have the specified tags). */
		tags: [] as string[],
		/** An array of years to omit. */
		years: [] as number[],
	}
	/** Toggle the display of various components */
	displayToggles = {
		/** Show the event's detailed description */
		description: true,
		/** Show the breakdown of sub events */
		extra: true,
		fancyTables: false,
		/** Show the separator headers for months and years */
		headers: false,
	};
	/** Omit minor events. */
	majorOnly: boolean = false;
	/** NOT IMPLEMENTED */
	truncateDescription: boolean = false;
	
	public get fullView(): boolean {
		return this.displayToggles.description && this.displayToggles.extra;
	}
	
	public set fullView(v : boolean) {
		this.displayToggles.description = this.displayToggles.extra = v;
	}
}

type TimelineEventType = "death" | "faction" | "holiday" | "item" | "lightship" | "love" | "mystery" | "navigation" | "person" | "rebirth" | "world" | "world-special" | "zuzu";
type TimelineSubEventType = TimelineEventType | "birthday" | "left";
interface ITimelineDate { year: number; day: number; month: number; };
interface ITimelineSubEvent { 
	// action: "celebrated" | "discovered" | "joined" | "left" | "lost" | "met" | "obtained" | "reached" | "recruited" | "slew" | "unlocked" | string;
	name: string;
	type?: TimelineSubEventType;
};
interface ITimelineEvent {
	date: ITimelineDate;
	endDate?: ITimelineDate;
	event?: string;
	extra?: ITimelineSubEvent[];
	header: string;
	isMajor?: boolean;
	type?: TimelineEventType;
};

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
		type: "world"
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
		type: "world"
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
			{ name: "lost Tommy One", type: "death" }
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
		type: "world"
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
		type: "world"
	},
	{
		date: { year: 1, month: 8, day: 24 },
		// endDate: { year: 1, month: 8, day: 3 },
		isMajor: true,
		// event: "We reached Duloc.",
		extra: [
			{ name: "reached Treasure Island", type: "world" },
			// { name: "met Toadette", type: "person" },
		],
		header: "Treasure Island",
		type: "world"
	},
];

var sortedTimeline = timelineEvents.slice();
const settings = new TimelineDisplaySettings();

function shouldAlignLeft(index: number) {
	if (!sortedTimeline[index].isMajor) {
		return true;
	}
	const croppedArray = sortedTimeline.slice(0, index);

	console.log("Index", index);
	console.log(croppedArray);


	return croppedArray.filter(item => !!item.isMajor).length%2 == 0;
}

function shouldDrawMonthHeader(index: number): boolean {
	if (!settings.displayToggles.headers) {
		return false;
	}

	if (index == 0) {
		return true;
	}
	
	return sortedTimeline[index].date.month > sortedTimeline[index - 1].date.month;
}

function prettyDate(date: ITimelineDate): string {
	return new CampaignDate(date.day, date.month, date.year).dateMDY;
}

function getClassList(event: ITimelineEvent, index: number) {
	let list = event.isMajor ? ["major"] : ["minor"];
	list.push(shouldAlignLeft(index) ? "left" : "right");
	if (event.type) {
		list.push(event.type, "use-theme");
	}

	if (shouldDrawMonthHeader(index)) {
		list.push("time-separator");
	}

	return list.join(" ");
}

function getDescriptionHtml(event: ITimelineEvent) {
	return event.event? Utils.String.replaceComponentsInString(event.event) : "";
}

function getIcon(type: TimelineSubEventType | undefined, minor: boolean = false): string | undefined {
	switch (type) {
		case "birthday":
			return "#birthday-cake";
		case "death":
			return "#grave-fill";
		case "faction":
			return "#people";
		case "holiday":
			return "#party-horn";
		case "item":
			return "#suitcase-bag";
		case "lightship":
			return "#anchor";
		case "love":
			return "#heart";
		case "mystery":
			return "#question";
		case "navigation":
			return "#compass-rose";
		case "person":
			return "#person";
		case "rebirth":
			return "#rebirth";
		case "world":
		case "world-special":
			return "#globe2";
		case "zuzu":
			return "#witch-hat-fill";
		default:
			return undefined;
	}
}
</script>

<template>
	<PageContainerVue>
		<!-- <JournalHeader /> -->
		<header>
			<!-- <ViewBlurb header="">
				A rough timeline of the events we've experienced.
			</ViewBlurb> -->
			<Breadcrumb path="/journal/timeline" />
		</header>
		<main>
			<div class="main-timeline">
				<div class="timeline" v-for="event, i in sortedTimeline" :class="getClassList(event, i)">
					<svg class="event-icon" v-if="event.isMajor"><use :href="getIcon(event.type) || '#compass-rose'"></use></svg>
					<div class="time-header bg-info-subtle border border-info text-body" v-if="shouldDrawMonthHeader(i)">{{ event.date.month }}</div>

					<div class="card" v-if="event.isMajor">
						<div class="card-body p-4 py-3">
							<h6 class="text-body p-1 px-2 fst-italic date bg-info-subtle border-info-subtle">
								<svg class="menu-button-icon theme-color me-1 d-inline"><use href="#clock"></use></svg>{{ prettyDate(event.date) + (event.endDate? (" — " + prettyDate(event.endDate)) : "")}} SE
							</h6>
							<h3>{{ event.header}}</h3>
							<p class="border-start ps-2 mt-2 mb-0 small text-secondary fst-italic" v-if="settings.displayToggles.extra && event.extra">
								<p class="mb-1" v-for="extra in event.extra">
									<svg class="menu-button-icon theme-color me-1 d-inline" v-if="extra.type && getIcon(extra.type)"><use :href="getIcon(extra.type, true)"></use></svg>
									{{ extra.name }}
								</p>
							</p>
							<p class="mb-0" v-if="settings.displayToggles.description && event.event" v-html="getDescriptionHtml(event)"></p>
						</div>
					</div>
					<div class="card ms-4 p-0 border-0" v-else>
						<div class="card-body p-0 text-secondary mb-1 fst-italic small border-bottom border-top" v-if="settings.displayToggles.fancyTables">
							<table style="border-collapse: collapse; width: 100%;">
								<tbody>
									<tr>
										<td class="pe-1" style="vertical-align: top; width:1px; white-space: nowrap;">
											{{ prettyDate(event.date) + (event.endDate? ("—" + prettyDate(event.endDate)) : "")}}&nbsp;SE&nbsp;—
										</td>
										<td class="ps-2 pe-1 pb-1" style="vertical-align: top; width: 1px;" :class="{'border-start': settings.displayToggles.extra && event.extra}">
											<svg class="menu-button-icon theme-color me-1 d-inline" v-if="event.type && getIcon(event.type, true)"><use :href="getIcon(event.type, true)"></use></svg>
										</td>
										<td class="pb-1 pe-4 text-start">
											{{ event.header}}
										</td>
									</tr>
									<tr v-if="settings.displayToggles.extra && event.extra" v-for="extra in event.extra">
										<td></td>
										<td class="border-start ps-2 pe-1 pb-1" style="vertical-align: top;">
											<svg class="menu-button-icon theme-color me-1 d-inline" v-if="extra.type && getIcon(extra.type, true)"><use :href="getIcon(extra.type, true)"></use></svg>
										</td>
										<td class="pb-1 pe-4 text-start">
											{{ extra.name }}
										</td>
									</tr>
									<tr style="height: 0px;">
										<td></td>
										<td class="border-bottom"></td>
										<td class="border-bottom"></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="card-body ps-0 pe-4 py-0" v-else>
							<h6 class="text-secondary mb-1 fst-italic small">
								<span class="pe-1">{{ prettyDate(event.date) + (event.endDate? ("  —  " + prettyDate(event.endDate)) : "")}} SE—</span>
								<span>
									<svg class="menu-button-icon theme-color me-1 d-inline" v-if="event.type && getIcon(event.type, true)"><use :href="getIcon(event.type, true)"></use></svg>{{ event.header}}
								</span>
								<p class="mt-1 mb-0" v-if="settings.displayToggles.extra && event.extra" v-for="extra in event.extra">
									<span class="pe-1 hide d-none d-lg-inline">{{ prettyDate(event.date) + (event.endDate? ("  —  " + prettyDate(event.endDate)) : "")}} SE—</span>
									<span class="border-start ps-1">
										<svg class="menu-button-icon theme-color me-1 d-inline" v-if="extra.type && getIcon(extra.type, true)"><use :href="getIcon(extra.type, true)"></use></svg>
										{{ extra.name }}
									</span>
								</p>
							</h6>
						</div>
					</div>

				</div>
			</div>
		</main>
	</PageContainerVue>
</template>

<style scoped>
.main-timeline {
	--circle-size: 50px;
	--circle-x-offset: -25px;
	--time-header-total-gap: 3rem;


	--event-color: var(--color-timeline-date);
	--event-arrow-big: var(--color-timeline-arrow-big);
	--event-body: var(--bs-body-color);
	/* This matches the value of --bs-card-border-color */
	--event-border: var(--bs-border-color-translucent);
	--event-header: var(--bs-header-color);
	--event-icon: var(--color-timeline-line);
	--event-point-inner: var(--bs-body-bg);
	--event-point-outer: var(--color-timeline-line);
}
.use-theme {
	--event-arrow-big: var(--event-color);
	--event-body: var(--event-color);
	--event-border: var(--event-color);
	--event-header: var(--event-color);
	--event-icon: var(--event-color);
	--event-point-outer: var(--event-color);
}
.death {
	--event-color: var(--zelda-c-text-item);
}
.faction {
	--event-color: var(--zelda-c-text-tww-vermilion);
}
.birthday,
.holiday {
	--event-color: var(--zelda-c-text-tww-blue-light);
}
.item {
	--event-color: var(--item-text-color);
}
.lightship {
	--event-color: var(--item-text-color);
}
.rebirth,
.world-special,
.mystery {
	--event-color: var(--zelda-c-text-tww-purple);
}
.love,
.zuzu,
.person {
	--event-color: var(--character-text-color);
}
.world {
	--event-color: var(--location-text-color);
}

.main-timeline {
	position: relative;
	box-sizing: border-box;
	padding-top: 25px;
}

.main-timeline::after {
	content: '';
	position: absolute;
	width: 6px;
	background-color: var(--color-timeline-line);
	top: 0;
	bottom: 0;
	left: 50%;
	margin-left: -3px;
}

.timeline {
	position: relative;
	background-color: inherit;
	width: 50%;
}

.timeline.time-separator {
	margin-top: var(--time-header-total-gap);
}

.event-icon {
	position: absolute;
	width: 38px;
	height: 38px;
	right: -19px;
	top: 7px;
	color: var(--event-icon);
	fill: currentcolor;
	/* background-color: var(--event-point-inner);
	border: 5px solid var(--event-point-outer);
	border-radius: 50%; */
	z-index: 2;
}

.right .event-icon {
	left: -19px;
	right: auto;
}

/* Fancy circle */
.timeline.major::after {
	content: '';
	position: absolute;
	/* width: 25px;
	height: 25px;
	right: -13px;
	top: 15px; */
	width: var(--circle-size);
	height: var(--circle-size);
	right: var(--circle-x-offset);
	top: 1px;
	background-color: var(--event-point-inner);
	border: 3px solid var(--event-point-outer);
	/* border: 3px solid var(--color-timeline-line); */
	border-radius: 50%;
	z-index: 1;
}
/* Small fancy circle */
.timeline.minor::after {
	content: '';
	position: absolute;
	width: 14px;
	height: 14px;
	right: -7px;
	right: -7px;
	background-color: var(--color-timeline-line);
	top: 0px;
	border-radius: 50%;
	z-index: 1;
}

.left {
	padding: 0px 40px 20px 0px;
	left: 0;
}

.right {
	padding: 0px 0px 20px 40px;
	left: 50%;
}

.minor.left::before {
	content: " ";
	position: absolute;
	top: 0px;
	z-index: 1;
	right: 30px;
	border: medium solid;
	border-width: 6px 0 6px 6px;
	border-color: transparent transparent transparent rgba(var(--bs-secondary-rgb), 0.6);
	border-top-color: transparent;
	border-right-color: transparent;
	border-bottom-color: transparent;
}

.major.left::before {
	content: " ";
	position: absolute;
	top: 18px;
	z-index: 1;
	right: 30px;
	border: medium solid var(--event-arrow-big);
	border-width: 10px 0 10px 10px;
	border-color: transparent transparent transparent var(--event-arrow-big);
}

.right::before {
	content: " ";
	position: absolute;
	top: 18px;
	z-index: 1;
	left: 30px;
	border: medium solid var(--event-arrow-big);
	border-width: 10px 10px 10px 0;
	border-color: transparent var(--event-arrow-big) transparent transparent;
}

.right::after {
	/* left: -12px; */
	left: var(--circle-x-offset);
}

.card {
	padding: 0px 10px;
	position: relative;
	border-radius: 6px;
	border-color: var(--event-border);
}

.major > .card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.minor > .card {
	border-style: dashed !important;
	border-radius: 6px 6px;
	opacity: 0.6;
}

.minor td {
	border-style: dashed !important;
}

/* Color the text to match the event theme */
/* .major > .card p {
	color: var(--event-body);
}

.timeline h3 {
	color: var(--event-header);
} */

/* .timeline h6 {
	opacity: 0.6;
} */

.major .date {
	position: absolute;
	font-size: 1rem;
	line-height: 1.2rem;
	/* top: -0.6rem; */
	bottom: calc(100% - 1.2rem);
	right: 5px;
	border-radius: 1rem 0.5rem 0.5rem 1rem;
	/* border: 1px solid var(--event-border); */
	border: 1px solid var(--bs-border-color-translucent);
	opacity: 1;
}

.time-header {
	position: absolute;
	box-sizing: border-box;
	line-height: 1.5rem;
	width: 10rem;
	left: calc(100% - 5rem);
	top: -3rem;
	color: var(--event-icon);
	border-radius: 0.5rem;
	text-align: center;
	font-weight: bold;
	z-index: 1;
}

.right .time-header {
	left: -5rem;
	right: auto;
}

.hide {
	visibility: hidden
}

/* .date {
	color: var(--color-timeline-date) !important;
	text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.9);
} */

@media screen and (max-width: 600px) {
	.main-timeline::after {
		left: 31px;
	}

	.right .event-icon,
	.event-icon {
		left: calc(31px - 19px); /* (parent width) - (radius) */
		right: auto;
	}

	.timeline {
		width: 100%;
		padding-left: 70px;
		padding-right: 25px;
	}

	.timeline.left::before,
	.timeline::before {
		left: 60px;
		right: auto;
		border: medium solid var(--event-arrow-big);
		border-width: 10px 10px 10px 0;
		border-color: transparent var(--event-arrow-big) transparent transparent;
	}
	
	.timeline.minor.left::before {
		border: medium solid rgba(var(--bs-secondary-rgb), 0.6);
		border-width: 6px 6px 6px 0;
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-left-color: transparent;
	}

	/* Fancy circle */
	.left::after,
	.right::after {
		left: calc(31px - 25px); /* (parent width) - (radius) */
		right: auto;
	}

	/* Small fancy circle */
	.timeline.minor::after {
		left: 24px;
		right: auto;
	}

	.left::before {
		right: auto;
	}

	.right {
		left: 0%;
	}

	.major .date {
		right: 0px;
	}
}
</style>