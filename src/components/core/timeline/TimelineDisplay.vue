<script setup lang="ts">
import type { IDate } from "@/interfaces/IDate";
import type { ITimelineEvent, TimelineSubEventType } from "@/interfaces/ITimeline";
import { CampaignDate } from "@/objects/CampaignDate";
import { Utils } from "@/scripts/utils";
import type { PropType } from "vue";

const props = defineProps({
	timelineEvents: {
		type: Array<ITimelineEvent>,
		required: true,
		default: []
	},
	settings: {
		type: Object as PropType<ITimelineDisplayToggles>,
		required: true
	},
	class: {
		type: [String, Boolean],
		required: false,
		default: false
	}
})

interface ITimelineDisplayToggles {
	showDescription: boolean;
	showExtra: boolean;
	showFancyTables: boolean;
	showHeaders: boolean;
	truncateDescription: boolean;
}

function shouldAlignLeft(index: number) {
	if (!props.timelineEvents[index].isMajor) {
		return true;
	}
	const croppedArray = props.timelineEvents.slice(0, index);

	return croppedArray.filter(item => !!item.isMajor).length%2 == 0;
}

function shouldDrawMonthHeader(index: number): boolean {
	if (!props.settings.showHeaders) {
		return false;
	}

	if (index == 0) {
		return true;
	}
	
	return props.timelineEvents[index].date.month > props.timelineEvents[index - 1].date.month;
}

function prettyDate(date: IDate): string {
	return Utils.Dates.Format.MDY(date);
}

function getClassList(event: ITimelineEvent, index: number) {
	let list = event.isMajor ? ["major"] : ["minor"];
	list.push(shouldAlignLeft(index) ? "left" : "right");
	if (event.type) {
		list.push(event.type, "use-theme");

		if (event.type == "now") {
			list.push("text-primary-emphasis", "fw-bold", "opacity-100", "fs-5");
		}
	}

	if (shouldDrawMonthHeader(index)) {
		list.push("time-separator");
	}

	if (event.gmOnly) {
		list.push("gm-only");
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
			return "#grave";
		case "drug":
			return "#drug";
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
		case "now":
			return "#clock";
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
	<!-- #region Timeline display -->
	<div class="main-timeline">

		<div class="timeline" v-for="event, i in timelineEvents" :class="getClassList(event, i)">
			<svg class="event-icon" v-if="event.isMajor"><use :href="getIcon(event.type) || '#compass-rose'"></use></svg>
			<div class="time-header bg-info-subtle border border-info text-body" v-if="shouldDrawMonthHeader(i)">{{ event.date.month }}</div>

			
			<!-- Current date indicator -->
			<div class="card ms-4 p-0 border-0 now" v-if="event.type == 'now'">
				<div class="card-body ps-0 pe-4 py-0 now">
					<h6 class="text-primary-emphasis mb-1 fst-italic fs-5">
						<span class="pe-1">{{ prettyDate(event.date) + (event.endDate? ("  —  " + prettyDate(event.endDate)) : "")}} SE—</span>
						<span>
							<svg class="menu-button-icon theme-color me-1 d-inline"><use href="#clock"></use></svg>{{ event.header}}
						</span>
					</h6>
				</div>
			</div>

			<!-- #region major timeline event -->
			<div class="card" v-else-if="event.isMajor">
				<div class="card-body p-4 py-3">
					<h6 class="text-body p-1 px-2 fst-italic date bg-info-subtle border-info-subtle">
						<svg class="menu-button-icon theme-color me-1 d-inline"><use href="#clock"></use></svg>{{ prettyDate(event.date) + (event.endDate? (" — " + prettyDate(event.endDate)) : "")}} SE
					</h6>
					<h3>{{ event.header}}</h3>
					<p class="border-start ps-2 mt-2 mb-0 small text-secondary fst-italic" v-if="settings.showExtra && event.extra">
						<p class="mb-1" v-for="extra in event.extra">
							<svg class="menu-button-icon theme-color me-1 d-inline" v-if="extra.type && getIcon(extra.type)"><use :href="getIcon(extra.type, true)"></use></svg>
							{{ extra.name }}
						</p>
					</p>
					<p class="mb-0" v-if="settings.showDescription && event.event" v-html="getDescriptionHtml(event)"></p>
				</div>
			</div>
			<!-- #endregion major timeline event -->

			<!-- #region minor timeline event -->
			<div class="card ms-4 p-0 border-0" v-else>
				<div class="card-body p-0 text-secondary mb-1 fst-italic small border-bottom border-top" v-if="settings.showFancyTables">
					<table style="border-collapse: collapse; width: 100%;">
						<tbody>
							<tr>
								<td class="pe-1" style="vertical-align: top; width:1px; white-space: nowrap;">
									{{ prettyDate(event.date) + (event.endDate? ("—" + prettyDate(event.endDate)) : "")}}&nbsp;SE&nbsp;—
								</td>
								<td class="ps-2 pe-1 pb-1" style="vertical-align: top; width: 1px;" :class="{'border-start': settings.showExtra && event.extra}">
									<svg class="menu-button-icon theme-color me-1 d-inline" v-if="event.type && getIcon(event.type, true)"><use :href="getIcon(event.type, true)"></use></svg>
								</td>
								<td class="pb-1 pe-4 text-start">
									{{ event.header}}
								</td>
							</tr>
							<tr v-if="settings.showExtra && event.extra" v-for="extra in event.extra">
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
						<p class="my-0" v-if="settings.showExtra && event.extra" v-for="extra in event.extra">
							<span class="pe-1 hide d-none d-lg-inline pt-1">{{ prettyDate(event.date) + (event.endDate? ("  —  " + prettyDate(event.endDate)) : "")}} SE—</span>
							<span class="border-start ps-1 pt-1">
								<svg class="menu-button-icon theme-color me-1 d-inline" v-if="extra.type && getIcon(extra.type, true)"><use :href="getIcon(extra.type, true)"></use></svg>
								{{ extra.name }}
							</span>
						</p>
					</h6>
				</div>
			</div>
			<!-- #endregion minor timeline event -->

		</div>

	</div>
	<!-- #endregion Timeline display -->
</template>

<style scoped>
/*#region Theming */
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
.now {
	--event-color: var(--color-timeline-date);
	color: var(--color-timeline-date);
}
.love,
.zuzu,
.person {
	--event-color: var(--character-text-color);
}
.drug,
.world {
	--event-color: var(--location-text-color);
}
/*#endregion Theming */

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

.minor.left.now::before {
	content: " ";
	position: absolute;
	top: 0px;
	z-index: 1;
	right: 30px;
	border: medium solid;
	border-width: 8px 0 8px 8px;
	border-color: transparent transparent transparent var(--bs-primary-text);
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

.minor > .card.now {
	opacity: 1;
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

.gm-only * {
	color:rgba(255, 255, 0, 0.7) !important;
	border-color: rgba(255, 255, 0, 0.4) !important;
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
	
	.timeline.minor.left.now::before {
		border: medium solid var(--bs-primary-text);
		border-width: 8px 8px 8px 0;
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-left-color: transparent;
		right: auto;
		top: 4px;
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