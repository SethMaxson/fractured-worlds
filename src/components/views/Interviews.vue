<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";

import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from "@/components/core/text-tags/Important.vue";
import { useRoute } from "vue-router";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
			<ViewBlurb v-if="!state.id" header="Interviews" author="Susie">
				Are you here to doomscroll or just to stalk somebody? Either way, have fun!
			</ViewBlurb>
			<ViewBlurb v-else-if="interview" :header="`${ interview.title? interview.title + ' - with ' : 'Interview with' } ${interview.interviewee}`">
				{{interview.blurb || "Hope you're ready for the tea!"}}<br />
				<small class="mt-2 fst-italic">Interview conducted on {{ interview.date }} by {{ interview.interviewer || 'Susie' }}</small>
			</ViewBlurb>
			<ViewBlurb v-else header="Oopsie!" author="Susie">
				I have no idea how you got here, but this path doesn't match any interviews. Are you trying to sneak a peek at one I haven't finished yet?
			</ViewBlurb>
		</header>

		<!-- Index -->
		<main v-if="!state.id" class="p-2 p-lg-4">
			<div class="list-group">
				<router-link v-for="i in sortedInterviews" class="list-group-item list-group-item-action" :to="'/interviews/' + (i.id || i.interviewee).toLowerCase()">
					{{ i.interviewee + (i.title ? ' - ' + i.title : '') }}
				</router-link>
			</div>
		</main>

		<!-- Single Interview -->
		<main v-else-if="interview" class="p-2 p-lg-4">
			<div class="accordion" id="qna-accordion">
				<AccordionItem v-for="qna in interview?.QnA" :name="`<span style='font-size:0.9rem;'>${qna.question}${qna.asker ? '<div class=\'text-body-tertiary small ms-2 mt-1 fst-italic\'>– asked by ' + qna.asker + '</div>' : ''}</span>`" parent-id="faq-accordion">
					<figure v-for="a in qna.answer" class=" mb-0">
						<blockquote style="font-size: 0.9rem;" class="blockquote">
							<p class="mb-1" v-for="s in a.text" v-html="s"></p>
						</blockquote>
						<div class="blockquote-footer text-end mb-0">{{a.author || interview.interviewee}}</div>
					</figure>
				</AccordionItem>
			</div>
		</main>

		<!-- Error -->
		<main v-else class="pt-5 pb-3">
			<h2 class="text-warning text-center">Interview Not Found</h2>
			<div class="p-2 pb-5 text-center fst-italic fs-5">
				The requested interview could not be found.
			</div>
		</main>
	</PageContainerVue>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";
import { GameStrings } from "@/scripts/game-strings";
import { Utils } from "@/scripts/utils";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import type { ICharacterData } from "@/interfaces/ICharacterData";
import { CampaignDate } from "@/objects/CampaignDate";




interface IInterview {
	id?: string;
	title?: string;
	interviewer: string;
	interviewee: string;
	date: string;
	blurb?: string;
	QnA: {
		asker?: string;
		question: string;
		answer: {
			author?: string;
			text: string[];
		}[];
	}[]
}

const Interviews: IInterview[] = [
	{
		title: "Welcome to the Interview Portal!",
		interviewee: "Susie",
		interviewer: "Susie",
		date: "09/05/0001",
		QnA: [
			{
				asker: "Bebop",
				question: "How do androids sleep?",
				answer: [
					{
						text: [
							"It depends on the model and manufacturer. I'm a proud RoBro, so I don't actually sleep at all! I just spend about 8 hours a night standing on my charging pad in the engine room. It was a bit boring and lonely at first, but I found an awesome way to pass the time - I just rewatch my favorite memories and movies until I'm fully charged!"
						]
					}
				]
			},
			{
				asker: "Susie",
				question: "Why the heck are we doing interviews now?",
				answer: [
					{
						text: [
							"Because the fate of the world hangs in the balance! jkjk lol",
							"I just thought it'd be a nice way to learn more about each other, you know? We're all in the same boat (literally for most of us), so we might as well get to know each other."
						]
					}
				]
			},
			{
				asker: "Susie",
				question: "Who is going to be interviewed?",
				answer: [
					{
						text: [
							"Lots of people! I haven't really made up my mind yet, but I'm planning on pulling some names out of a hat every week and letting people vote for who they want to see interviewed the most. Right now I think I'll offer 4 candidates per week; 3 from our ship and 1 person we've met somewhere else. I guess I'll have to change it up once we've run out of crew members though."
						]
					}
				]
			},
			{
				asker: "Susie",
				question: "Why is this first interview so darn short?",
				answer: [
					{
						text: [
							"Because I haven't actually asked for more questions yet! Once I invite people to start submitting questions, this interview format will probably be soooo much cooler!"
						]
					}
				]
			}
		]
	},
	// {
	// 	title: "Talking to Myself: An expose",
	// 	interviewee: "Susie",
	// 	interviewer: "Susie",
	// 	date: "xx/xx/xxxx",
	// 	QnA: [ ]
	// },
	// {
	// 	title: "Template",
	//	id: "susie-2",
	// 	interviewee: "asdf",
	// 	interviewer: "Susie",
	// 	date: "xx/xx/xxxx",
	// 	QnA: [
	// 		{
	// 			question: "question?",
	// 			answer: [
	// 				{
	// 					text: [
	// 						"answer."
	// 					]
	// 				}
	// 			]
	// 		}
	// 	]
	// }
];

export default defineComponent({
	name: 'InterviewsViewComponent',
	props: {
		id: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			menu: {
				sort: [
					{
						text: 'Interview Date',
						value: 'met'
					},
					{
						text: 'Interviewee Name',
						value: 'name'
					},
				] as IComponentMenuOption[],
				users: [
					{
						text: "Select",
						value: "unset"
					},
					{
						text: "",
						value: "separator"
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
				] as IComponentMenuOption[],
			},
			state: {
				filterBy: 'all' as 'all'|'crew' | 'nle' | 'world',
				id: this.$route.params.id || undefined,
				sortAsc: false,
				sortBy: 'date' as 'date'|'name',
			},
		}
	},
	computed: {
		sortIcon() {
			return this.state.sortAsc ? '#sort-asc' : '#sort-desc';
		},
		interview(): IInterview | undefined {
			const id = this.state.id as string;
			const hits = id ? Interviews.filter(i => id.toLowerCase() == (i.id || i.interviewee).toLowerCase()) : [];
			const interview = hits.length > 0 ? hits[0] : undefined;
			return interview;
		},
		path() {
			const queryPath = useRoute().query.path as string;
			return this.state.id ? (queryPath ? queryPath + "/" : "/interviews/") + this.state.id : "/interviews";
		},
		sortedInterviews(): IInterview[] {
			// Filter
			const filteredInterviews = Interviews; // TODO: actually filter

			// Sort
			const sortMod = this.state.sortAsc ? -1 : 1; // sort direction
			if (this.state.sortBy == 'date') { // interview date
				// return filteredInterviews.sort((a, b) => Utils.SortComparators.campaignDate(a.date, b.date, !this.state.sortAsc))
				return filteredInterviews.sort((a, b) => {
					return (a.date == b.date ? 0
						: b.date > a.date ? 1
						: -1
						) * sortMod
				});
			}
			else { // interviewee name
				return filteredInterviews.sort((a, b) => {
					return (a.interviewee == b.interviewee ? 0
						: b.interviewee > a.interviewee ? 1
						: -1
						) * sortMod
				});
			}
		}
	},
	methods: {
		getName(person: string): string {
			return CharacterDataUtils.findCharacterById(person)?.name || person;
		},
		getPerson(person: string): ICharacterData | undefined {
			return CharacterDataUtils.findCharacterById(person);
		},
		toggleSortAsc(e: Event) {
			this.state.sortAsc = !this.state.sortAsc;
			sessionStorage.setItem("relationshipSortDir", this.state.sortAsc ? "asc" : "desc");
		},
		changeSortByEvent(e: Event) {
			e.preventDefault();
			this.state.sortBy = (document.getElementById("sortSelect") as HTMLSelectElement).value as 'date';
			sessionStorage.setItem("relationshipSortBy", this.state.sortBy);
		},
	},
	mounted() {
		Utils.LocalStorage.Dates.LastPageView.setNow("Interviews");
		let currentUser = Utils.LocalStorage.getUser();
		this.state.sortAsc = (sessionStorage.getItem("interviewSortDir") || "desc") == "asc";
		this.state.sortBy = sessionStorage.getItem("interviewSortBy") as "date" || "date";
	},
})
</script>