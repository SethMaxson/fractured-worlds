<script setup lang="ts">
import Breadcrumb from '@/components/core/Breadcrumb.vue';
import CrewCard from '@/components/views/ship/components/CrewCard.vue';
import CardDeck from '@/components/core/CardDeck.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
	<PageContainerVue class="px-0 pt-0 mt-0 pb-0">
		<header>
			<Breadcrumb path="/ship/crew" />
			<div class="d-flex justify-content-between fs-5 py-1 px-2 m-0 mb-2 border-primary-subtle border-2 border-bottom text-bg-dark bg-dark-subtle">
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" role="switch" id="simpleCardView" v-model="simplifiedView">
					<label class="form-check-label" for="simpleCardView">Simplified View</label>
				</div>
				<div class="form-check form-switch gm-only">
					<input class="form-check-input" type="checkbox" role="switch" id="balancingCardView" v-model="balancingView">
					<label class="form-check-label" for="balancingCardView">Balancing View</label>
				</div>
			</div>
		</header>
		<main class="px-2">
			<CardDeck>
				<CrewCard v-for="char in crew"
					:simplified="simplifiedView"
					:balancing="balancingView"
					:name="char.name"
					:img="char.img as string"
					:origin-type="char.originType"
					:type="char.type || 'Normal'"
					:rarity="char.rarity || 'common'"

					:intelligence="safeStat(char.stats.int)"
					:magic="safeStat(char.stats.magic)"
					:speed="safeStat(char.stats.spd)"
					:strength="safeStat(char.stats.str)"
					:tech="safeStat(char.stats.tech)"
					:willpower="safeStat(char.stats.will)"

					:number-in-series="char.numberInSeries"
					:series-length="estimatedSeriesCurrentLength"
				>
					<template #subheading>{{ char.subtitle }}</template>
				</CrewCard>
			</CardDeck>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ICrewCardData } from '@/interfaces/ICrewCardData';
import { CrewCardStats } from '@/data/characters/crew-card-stats';
import { CharacterDataUtils } from '@/scripts/utils/character-data-utils';


export default defineComponent({
        name: 'CrewCards',
        data() {
            return {
				simplifiedView: true,
				balancingView: false,
				crewData: CrewCardStats
            }
        },
		computed: {
			crew() {
				let filteredCrew: ICrewCardData[] = [];
				// if (this.mode == "all") {
				// 	filteredCrew = filteredCrew.concat(this.reviews.party.map(r => ({ subject: "the party as a whole", ...r})));
				// 	filteredCrew = filteredCrew.concat(this.reviews.cobb.map(r => ({ subject: "C.O.B.B.", ...r})));
				// 	filteredCrew = filteredCrew.concat(this.reviews.phil.map(r => ({ subject: "Li'l Phil Antonio", ...r})));
				// 	filteredCrew = filteredCrew.concat(this.reviews.pontiki.map(r => ({ subject: "Pontiki", ...r})));
				// 	filteredCrew = filteredCrew.concat(this.reviews.tero.map(r => ({ subject: "Tero", ...r})));
				// }
				// else {
					filteredCrew = this.crewData;
				// }

				filteredCrew.forEach(c => {
					if (!c.img) {
						c.img = CharacterDataUtils.findCharacterById(c.id)?.images.portrait;
					}
				})

				return filteredCrew;
				// return filteredCrew.sort(function(a, b) {
				// 	const compA = a.date || "";
				// 	const compB = b.date || "";
				// 	return compA == compB ? 0
				// 		: compA > compB ? -1 : 1;
				// });
			},
			estimatedSeriesCurrentLength() {
				const highestSeriesIndex = this.crewData.reduce((a, b)=>(a.numberInSeries||1)>(b.numberInSeries||1)?a:b).numberInSeries || 1;
				return Math.max(highestSeriesIndex, this.crewData.length);
			}
		},
        methods: {
			cleanText(text: string): string {
				return text.replace(/\n/ig, "<br/>");
			},
			safeStat(statFromProperty: number): number {
				return statFromProperty === undefined ? 1 : statFromProperty;
			},
        }
    })
</script>