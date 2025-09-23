<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";

import { Months } from '@/data/calendar/months';
import { Birthdays } from '@/data/calendar/events/birthdays';
import { Holidays } from '@/data/calendar/events/holidays';

import { CampaignState } from '@/data/campaign-state';

import type { ICalendarEvent } from "@/interfaces/ICalendarEvent";

const currentDate = CampaignState.CurrentDate;
var showHidden: boolean = false;

/**Get the calendar events for a given day of a given month.
 * @param eventSet the collection of calendar events to search
 * @param month 0-indexed
 * @param day 1-indexed
 */
function getCalendarEvents(eventSet: ICalendarEvent[][], month: number, day: number) {
	const results: ICalendarEvent[] = [];

	return eventSet[month].filter(event => 
	event.day == day 
	&& (showHidden || !event.hide)
);
}

/**Get the birthdays for a given day of a given month.
 * @param month 0-indexed
 * @param day 1-indexed
 */
 function getBirthdays(month: number, day: number) {
	return getCalendarEvents(Birthdays, month, day);
}

/**Get the Holidays for a given day of a given month.
 * @param month 0-indexed
 * @param day 1-indexed
 */
 function getHolidays(month: number, day: number) {
	return getCalendarEvents(Holidays, month, day);
}

/**Get the Holidays for a given day of a given month.
 * @param month 0-indexed
 * @param day 1-indexed
 */
 function isToday(month: number, day: number) {
	return month == (currentDate.month-1) && day == currentDate.day;
}
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/calendar" />
			<ViewBlurb header="Calendar">
				The semi-official calendar of <Location>Somewhere</Location>.
			</ViewBlurb>
		</header>
		<main>
			<!-- <div name="menu" class="border-2 border-top my-1 py-2">


				<div class="d-flex justify-content-between border bg-secondary">
					<button type="button" class="btn btn-primary btn-lg">&lt;</button>
					<h3 class="flex-grow-1 m-0 px-2 py-1">
						First Month
					</h3>
					<button type="button" class="btn btn-primary btn-lg">&gt;</button>
				</div>


			</div> -->
			<!-- <div class="accordion" id="calendar-accordion"> -->
			<div class="carousel" id="calendar-carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="0" aria-label="Month 1" :class="{ active: currentDate.month == 1 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="1" aria-label="Month 2" :class="{ active: currentDate.month == 2 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="2" aria-label="Month 3" :class="{ active: currentDate.month == 3 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="3" aria-label="Month 4" :class="{ active: currentDate.month == 4 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="4" aria-label="Month 5" :class="{ active: currentDate.month == 5 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="5" aria-label="Month 6" :class="{ active: currentDate.month == 6 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="6" aria-label="Month 7" :class="{ active: currentDate.month == 7 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="7" aria-label="Month 8" :class="{ active: currentDate.month == 8 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="8" aria-label="Month 9" :class="{ active: currentDate.month == 9 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="9" aria-label="Month 10" :class="{ active: currentDate.month == 10 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="10" aria-label="Month 11" :class="{ active: currentDate.month == 11 }"></button>
					<button type="button" data-bs-target="#calendar-carousel" data-bs-slide-to="11" aria-label="Month 12" :class="{ active: currentDate.month == 12 }"></button>
				</div>


				<div class="carousel-inner px-0 px-lg-5" v-for="(month, index) in Months">
					<!-- <AccordionItem :name="month.name" parent-id="calendar-accordion" :default-open="true"> -->
					<div class="carousel-item border m-2" :class="{ active: index == (currentDate.month - 1) }">
						<h3 class="border m-0 px-2 py-1 bg-secondary">
							{{ month.name }}
						</h3>

						<div class="row row-cols-3 row-cols-lg-7 row-cols-sm-3 row-cols-md-4 g-0 p-3">
							<div class="col border" v-for="day in month.length">
								<div class="card border-0" :class="{ 'text-bg-primary text-body-emphasis': isToday(index, day) }">
									<div class="card-header">
										{{ day }}
									</div>
									<div class="card-body p-0">
										<ul class="list-group list-group-flush">
											<li class="list-group-item bg-transparent" v-for="holiday in getHolidays(index, day)" :class="{ 'text-body-emphasis': isToday(index, day), 'gm-only': holiday.gmOnly }">
												<svg class="menu-button-icon theme-color me-1 d-inline"><use href="#party-horn"></use></svg>
												{{ holiday.name }}
											</li>
											<li class="list-group-item bg-transparent" v-for="birthday in getBirthdays(index, day)" :class="{ 'text-body-emphasis': isToday(index, day), 'gm-only': birthday.gmOnly }">
												<svg class="menu-button-icon theme-color me-1 d-inline"><use href="#birthday-cake"></use></svg>
												{{ birthday.name }}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

					</div>
					<!-- </AccordionItem> -->
				</div>

				<button class="carousel-control-prev bg-primary" type="button" data-bs-target="#calendar-carousel" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next bg-primary" type="button" data-bs-target="#calendar-carousel" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
				<!-- </template> -->
			</div>

			<!-- <div class="card">
				<div class="card-header">
					Quote
				</div>
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p>A well-known quote, contained in a blockquote element.</p>
						<footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
					</blockquote>
				</div>
			</div> -->
		</main>
	</PageContainerVue>
</template>

<style scoped>
.card-body {
	min-height: 7rem;
}

.carousel-control-next,
.carousel-control-prev {
	width: 5%;
}
/* #characters-accordion .character {
	color: inherit;
} */
</style>