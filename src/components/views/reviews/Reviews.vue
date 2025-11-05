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
			<Breadcrumb path="/reviews" />
			<ViewBlurb header="<span class='yep'>Yep!</span> Reviews" version="1.0.1" author="Eva Davis">
				Now we can put an exact, numerical value to how likeable we are. Well, maybe not me, but you guys have definitely left a few impressions.
			</ViewBlurb>
		</header>
		<main class="py-2 pt-0">

			<!-- Full Review Modal -->
			<!-- <div class="modal" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-6" id="reviewModalLabel">Definition</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<b class="def-title">...</b> -
							<span class="def-text"></span>
						</div>
					</div>
				</div>
			</div> -->



            <div>
                <p class="d-flex justify-content-between align-items-start p-2 flex-column flex-lg-row border-bottom summary">
                    <div class="order-3 order-lg-1">
                        <span class="fw-bold">Overall rating: </span>
                        <span v-if="listReviews.length > 0">
							<svg class="icon" v-for="icon in starIconClasses(scoreAverage)">
								<use :href="icon"></use>
							</svg>
							({{ scoreAverage }} out of 5)
						</span>
                        <span v-else>N/A</span>
						<div class="text-secondary">
							{{listReviews.length}} reviews
						</div>
                    </div>
					<div class="dropdown mb-3 mb-lg-0 order-1 order-lg-2">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<span v-if="stateMode == 'all'">
								Displaying all reviews
							</span>
							<span v-else>
								Displaying reviews about <strong>{{ modeName }}</strong>
							</span>
						</button>
						<ul class="dropdown-menu dropdown-menu-lg-end">
							<li v-for="opt, index in menu.viewModes">
								<hr v-if="opt.value == 'separator'" class="dropdown-divider">
								<button v-else type="button" class="dropdown-item" :class="{ 'active': stateMode==opt.value }" href="#" @click="changeMenu(index)">{{opt.text}}</button>
							</li>
						</ul>
                    </div>
					

					<!-- TODO: Finish sort implementation -->
					<!-- <div class="btn-group order-2 order-lg-3" role="group">
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Sort
							</button>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Dropdown link</a></li>
								<li><a class="dropdown-item" href="#">Dropdown link</a></li>
							</ul>
						</div>
						
						<button type="button" class="btn btn-primary">2</button>
					</div> -->


                </p>
            </div>
			<!-- The reviews are shown here -->
            <div>
				<ul class="list-group list-group-flush" v-if="listReviews.length > 0">

					<!-- Review -->
					<li class="list-group-item review pb-0" v-for="review in listReviews" :class="{ 'negative-review': review.score < 2.5, 'glowing-review': review.score > 4 }">
						<div class="d-flex flex-wrap align-items-baseline">
							<div>
								<svg class="icon" v-for="icon in starIconClasses(review.score)">
									<use :href="icon"></use>
								</svg>
							</div>
							<!-- <div class="w-100 d-block d-lg-none" v-if="review.subject"></div> -->
							<div>
								<span class="fw-bold ps-1 ps-lg-2" v-html="reviewUsername(review)"></span>
								<small v-if="review.subject" class="ps-2 fst-italic">
									<span class="text-body-secondary">about</span>
									<span class="fw-bold ps-2">{{ review.subject }}</span>
								</small>
							</div>
						</div>
						<p class="ps-3 ps-lg-4">
							<div v-if="review.text" v-html="cleanText(review.text)"></div>
							<div v-if="review.edits">
								<div class="edit pt-1" v-for="edit in review.edits">
									<span class="fw-bold text-decoration-underline fst-italic pe-1 small">Edit on {{edit.date}}:</span>
									<span v-html="cleanText(edit.text)"></span>
								</div>
							</div>
							<div class="text-body-secondary">
								<small v-if="review.date">Written on {{ review.date }}.</small>
								<small class="ms-2" v-if="review.lastEdit">Last edit on {{ review.lastEdit }}.</small>
							</div>
						</p>
					</li>

				</ul>
				<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
                    There don't seem to be any reviews for this adventurer yet.
                </div>
            </div>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";
import { Utils } from "@/scripts/utils";
import { type ICharacterReview, type IPartyReviewCollection, Reviews } from "@/data/reviews";
import { UserProfiles } from "@/data/users";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import { GameStrings } from "@/scripts/game-strings";



export interface IReviewCollection extends IPartyReviewCollection {
	all: ICharacterReview[];
}

const validSorts = [
	"date",
	"edit"
];

export default defineComponent({
        name: 'ReviewsComponent',
        data() {
            return {
                menu: {
					viewModes: [
						{
							text: "All Reviews",
							value: "all"
						},
						{
							text: "",
							value: "separator"
						},
						{
							text: "The Entire Party",
							value: "party"
						},
						{
							text: GameStrings.Party.Cobb.first,
							value: "cobb"
						},
						{
							text: GameStrings.Party.Phil.first,
							value: "phil"
						},
						{
							text: GameStrings.Party.Tero.first,
							value: "tero"
						},
						{
							text: "",
							value: "separator"
						},
						{
							text: "Izzy",
							value: "izzy"
						},
						{
							text: "Pontiki",
							value: "pontiki"
						},
						{
							text: "Tropey",
							value: "tropey"
						}
					] as IComponentMenuOption[],
					sortModes: [
						{
							text: "Date",
							value: "date"
						},
						{
							text: "Edit",
							value: "edit"
						}
					] as IComponentMenuOption[]
				},
				reviews: Reviews,
				stateMode: "all" as keyof IReviewCollection,
				stateModeIndexSelected: 0,
				stateSortOn: 'date',
				stateSortAsc: true,
            }
        },
		computed: {
			capitalMode() {
				return this.stateMode.charAt(0).toUpperCase() + this.stateMode.slice(1);
			},
			modeName() {
				return this.menu.viewModes[this.stateModeIndexSelected].text;
			},
			listReviews() {
				let selectedReviews: ICharacterReview[] = [];
				if (this.stateMode == "all") {
					selectedReviews = selectedReviews.concat(this.reviews.party.map(r => ({ subject: "the party as a whole", ...r})));
					selectedReviews = selectedReviews.concat(this.reviews.cobb.map(r => ({ subject: "C.O.B.B.", ...r})));
					selectedReviews = selectedReviews.concat(this.reviews.phil.map(r => ({ subject: "Li'l Phil Antonio", ...r})));
					// selectedReviews = selectedReviews.concat(this.reviews.izzy.map(r => ({ subject: "Izzy Bones", ...r})));
					selectedReviews = selectedReviews.concat(this.reviews.tero.map(r => ({ subject: "Tero", ...r})));
				}
				else {
					selectedReviews = this.reviews[this.stateMode];
				}
				
				return selectedReviews.sort(function(a, b) {
					return Utils.SortComparators.dateString(a.lastEdit || a.date, b.lastEdit || b.date, false);
				});
			},
			scoreAverage() {
				const list = this.listReviews;
				// return this.listReviews.length > 0 ? Math.round((list.reduce((n, {score}) => n + score, 0) / list.length) * 4) / 4 : 0; // round to nearest 0.25
				return this.listReviews.length > 0 ? Math.round((list.reduce((n, {score}) => n + score, 0) / list.length) * 20) / 20 : 0; // round to nearest 0.05
			}
		},
        methods: {
			cleanText(text: string): string {
				let temp = text;
				if (temp.match(/\n\n/ig)) {
					temp = temp.replace(/\n\n(?![\s\S]*\n\n)/ig, "</p>"); // special handling for last paragraph to prevent weird space below review body
					temp = "<p>" + temp.replace(/\n\n/ig, "</p><p>");
				}
				return temp.replace(/\n/ig, "<br/>");
			},
			changeMenu(index: number) {
				const mode = this.menu.viewModes[index].value;
				localStorage.setItem("reviewsMode", mode);
				localStorage.setItem("reviewsIndex", index.toString());
				this.stateMode = mode as keyof IReviewCollection;
				this.stateModeIndexSelected = index;
			},
			changeSortOn(value: string) {
				const newSort = validSorts.includes(value) ? value : "edit";
				localStorage.setItem("reviewsSortOn", newSort);
				this.stateSortOn = newSort;
			},
			changeSortDirection(ascending: boolean) {
				localStorage.setItem("reviewsSortAscending", ascending ? "true" : "false");
				this.stateSortAsc = ascending;
			},
			reviewUsername(review: ICharacterReview): string {
				const usernameMatch = UserProfiles.filter(r => r.id == review.reviewer);
				if (usernameMatch.length > 0) {
					return usernameMatch[0].un;
				}
				else {
					let charMatch = CharacterDataUtils.findCharacterById(review.reviewer);
					return charMatch ? charMatch.name : review.reviewer;
				}
			},
			starIconClasses(score: number): string[] {
				const boundedScore = Math.min(5, Math.max(0, score)); // Limit to [0, 5]
				const scoreDoubled = Math.round(boundedScore * 2);
				const classes: string[] = [];

				// special symbol for perfect score
				if (boundedScore == 5) {
					for (var i = 0; i < 4; i++) classes.push("#star-filled");
					classes.push("#stars-formation");
					return classes;
				}

				for (let i = 0; i < Math.floor(scoreDoubled-0.25)/2; i++) {
					classes.push("#star-filled");
				}
				if (scoreDoubled % 2 == 1) {
					classes.push("#star-half");
				}
				for (let i = Math.ceil(boundedScore-0.125); i < 5; i++) {
					classes.push("#star-empty");
				}

				return classes;
			},
        },
		mounted() {
			Utils.LocalStorage.Dates.LastPageView.setNow("Reviews");
			
			this.changeMenu(parseInt(localStorage.getItem("reviewsIndex") || "0"));
			this.changeSortDirection(localStorage.getItem("reviewsSortAscending") == "true");
			this.changeSortOn(localStorage.getItem("reviewsSortOn") || "date");
		},
    })
</script>

<style lang="css" scoped>
.icon {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    background-size: cover;
	color: var(--kh-c-text-menu-header)
}

.summary .icon {
    width: 1.4rem;
    height: 1.4rem;
}

.negative-review .icon {
    color: var(--bs-danger-text);
}

/* .glowing-review .icon {
    color: var(--bs-success-text);
	color: var(--bs-warning);
} */

.glowing-review .icon:last-of-type {
    width: 1.2rem;
    height: 1.2rem;
}

.review em > u > b {
	display: block;
	margin-top: 10px;
}
</style>