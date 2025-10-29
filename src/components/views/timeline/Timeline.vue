<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/timeline" />
			<ViewBlurb header="">
				A streamlined summary of approximately who has been where.
			</ViewBlurb>
		</header>
		<main>
			<div name="menu" class="my-1 py-2">
				<div class="dropdown mb-3 mb-lg-0">
					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
						aria-expanded="false">
						<span v-if="mode == 'key'">
							Displaying <strong>{{ modeName }}</strong>
						</span>
						<span v-else>
							Displaying items tagged with "<strong>{{ modeName }}</strong>"
						</span>
					</button>
					<ul class="dropdown-menu dropdown-menu-lg-end">
						<li v-for="opt, index in menu">
							<hr v-if="opt.value == 'separator'" class="dropdown-divider">
							<button v-else type="button" class="dropdown-item" :class="{ 'active': mode == opt.value }"
								href="#" @click="changeMenu(index)">{{ opt.text }}</button>
						</li>
					</ul>
				</div>
			</div>
			<div name="content" class="border border-primary border-2 p-1">

				<!-- #region Timeline display -->
				<div class="row">
					<div class="col border">
						<TimelineDisplay
							:timeline-events="sortedTimeline"
							:settings="settings"
						/>
					</div>
					<div class="col border">
						<TimelineDisplay
							:timeline-events="sortedTimeline"
							:settings="settings"
						/>
					</div>
				</div>
				<!-- #endregion Timeline display -->

			</div>

		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimelineDisplay from "@/components/core/timeline/TimelineDisplay.vue";
import type { IDeprecatedTimeline } from "@/interfaces/ITimeline_Deprecated";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";
import type { ITimelineEvent } from "@/interfaces/ITimeline";

const settings = {
	showDescription: true,
	showExtra: true,
	showFancyTables: false,
	showHeaders: false,
	truncateDescription: false
};

const TimelinesBad: IDeprecatedTimeline[] = [
	{
		id: "happy-turtle",
		log: [
			{
				startDate: { day: 2, month: 4, year: 1 },
				endDate: { day: 2, month: 4, year: 1 },
				location: "Somewhere"
			}
		]
	},
	{
		id: "cade",
		log: [
			{
				startDate: { day: 0, month: 0, year: 0 },
				endDate: { day: 17, month: 4, year: 1 },
				location: "Wonderland"
			},
			{
				startDate: { day: 17, month: 4, year: 1 },
				endDate: { day: 20, month: 4, year: 1 },
				location: "Happy Turtle"
			},
			{
				startDate: { day: 20, month: 4, year: 1 },
				endDate: { day: 5, month: 5, year: 1 },
				location: "Somewhere"
			},
			{
				startDate: { day: 6, month: 5, year: 1 },
				endDate: { day: 11, month: 6, year: 1 },
				location: "Happy Turtle"
			}
		]
	}
];

const Timelines: { id: string, log: ITimelineEvent[] }[] = [
	{
		id: "cade",
		log: [
			{
				date: { year: 1, month: 0, day: 0 },
				endDate: { year: 1, month: 4, day: 17 },
				header: "Wonderland",
				type: "world",
				isMajor: true,
			},
			{
				date: { year: 1, month: 4, day: 17 },
				header: "Happy Turtle",
				type: "lightship",
			},
			{
				date: { year: 1, month: 4, day: 20 },
				endDate: { year: 1, month: 5, day: 5 },
				header: "Somewhere",
				type: "world",
				isMajor: true,
			},
			{
				date: { year: 1, month: 5, day: 6 },
				header: "Happy Turtle",
				type: "lightship",
			},
		]
	},
	{
		id: "happy-turtle",
		log: [
			{
				date: { year: 1, month: 4, day: 2 },
				endDate: { year: 1, month: 4, day: 2 },
				header: "Somewhere",
				type: "world",
				isMajor: true,
			}
		]
	}
]

export default defineComponent({
	name: 'TimelineViewComponent',
	data() {
		return {
			timelines: Timelines,
			menu: [
				{
					text: "All",
					value: "all"
				},
				{
					text: "",
					value: "separator"
				},
				{
					text: "People",
					value: "person"
				},
				{
					text: "Lightships",
					value: "lightship"
				}
			] as IComponentMenuOption[],
			displayKeys: [
					'cade',
					'nortle',
					"happy-turtle"
				] as string[],
			mode: "lightship"
		}
	},
	computed: {
		capitalMode() {
			return this.mode.charAt(0).toUpperCase() + this.mode.slice(1);
		},
		modeName() {
			return this.menu.filter(o => o.value == this.mode)[0].text;
		},
		sortedTimeline() {
			return this.selectedTimeline;
		},
		selectedTimeline(): ITimelineEvent[] {
			return Timelines[0].log;
			
		},
	},
	methods: {
		cleanText(text: string): string {
			return text.replace(/\n/ig, "<br/>");
		},
		changeMenu(index: number) {
			const mode = this.menu[index].value;
			this.mode = mode as string;
		},
	}
})
</script>