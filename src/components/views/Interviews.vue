<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";

import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from "@/components/core/text-tags/Important.vue";
import { useRoute } from "vue-router";

const props = defineProps({
	id: {
		type: String,
		required: false
	}
})

const queryPath = useRoute().query.path as string;

const path = props.id ? (queryPath ? queryPath + "/" : "/interviews/") + props.id : "/interviews";


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
		title: "Talking to Myself: An expose",
		interviewee: "Susie",
		interviewer: "Susie",
		date: "07/15/0001",
		QnA: [
			{
				asker: "Bebop",
				question: "How do androids sleep?",
				answer: [
					{
						text: [
							"It depends on the model and manufacturer. I'm a proud RoBro, so I don't actually sleep at all! I just spend about 8 hours a night standing on my charging pad in the engine room."
						]
					}
				]
			},
			// {
			// 	question: "How do androids sleep?",
			// 	answer: [
			// 		{
			// 			text: [
			// 				"It depends on the model and manufacturer. I'm a proud RoBro, so I don't actually sleep at all! I just spend about 8 hours a night standing on my charging pad in the engine room."
			// 			]
			// 		}
			// 	]
			// }
		]
	},
	// {
	// 	title: "Template",
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

const id = props.id;
const hits = id ? Interviews.filter(i => id.toLowerCase() == (i.id || i.interviewee).toLowerCase()) : [];
const interview = hits.length > 0 ? hits[0] : undefined;
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
			<ViewBlurb v-if="!props.id" header="Interviews" author="Susie">
				Are you here to doomscroll or just to stalk somebody? Either way, have fun!
			</ViewBlurb>
			<ViewBlurb v-else-if="interview" :header="interview.title || `Interview with ${interview.interviewee}`" :author="interview.interviewer || 'Susie'">
				{{interview.blurb || "Hope you're ready for the tea!"}}
				<small class="ms-2 fst-italic">Interview conducted on {{ interview.date }}</small>
			</ViewBlurb>
			<ViewBlurb v-else header="Oopsie" author="Susie">
				I have no idea how you got here, but this path doesn't match any interviews. Are you trying to sneak a peek at one I haven't finished yet?
			</ViewBlurb>
		</header>

		<!-- Index -->
		<main v-if="!props.id" class="p-2 p-lg-4">
			<div class="list-group">
				<router-link v-for="i in Interviews" class="list-group-item list-group-item-action" :to="'/interviews/' + (i.id || i.interviewee).toLowerCase()">
					{{ i.interviewee + (i.title ? ' - ' + i.title : '') }}
				</router-link>
			</div>
		</main>

		<!-- Single Interview -->
		<main v-else-if="interview" class="p-2 p-lg-4">
			<div class="accordion" id="qna-accordion">
				<AccordionItem v-for="qna in interview?.QnA" :name="`${qna.question}${qna.asker ? ' (asked by ' + qna.asker + ')' : ''}`" parent-id="faq-accordion">
					<figure v-for="a in qna.answer">
						<blockquote class="blockquote">
							<p v-for="s in a.text" v-html="s"></p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">{{a.author || interview.interviewee}}</div>
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