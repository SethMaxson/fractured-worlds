<script setup lang="ts">
import Breadcrumb from '@/components/core/Breadcrumb.vue';
import CardDeck from '@/components/core/CardDeck.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Image from '@/components/core/Image.vue';
</script>

<template>
	<PageContainerVue class="px-0 pt-0 mt-0 pb-0">
		<header>
			<Breadcrumb path="/gm/emptiness-saves" />
			<div class="d-flex justify-content-between fs-5 py-1 px-2 m-0 mb-2 border-primary-subtle border-2 border-bottom text-bg-dark bg-dark-subtle">
				<button type="button" class="btn btn-primary btn-lg" @click="rollAllSaves">Roll All Saves!</button>
			</div>
		</header>
		<main class="px-2">
			<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
				<div class="col" v-for="char, i in crew"
					:name="char.name"
					:rarity="char.rarity || 'common'"
				>
					<div class="d-inline-flex gap-1 p-2 border align-items-stretch">
						<Image v-if="char.img" class="portrait cover" alt="portrait" :src="char.img" :is-external="false" style="max-width: 5rem; max-height: 5rem;" />
						<svg class="portrait cover" width="300" height="300" v-else>
							<use href="#user2"></use>
						</svg>
						<div>
							<span>{{ char.name }}</span>
							<div class="d-inline-flex gap-1">
								<div class="input-group input-group-sm">
									<span class="input-group-text" :id="'willpower-' + i">Will:</span>
									<input type="number" class="form-control" :aria-describedby="'willpower-' + i" :value="adjustedWillpower(char)">
								</div>
								<button type="button" class="btn btn-primary btn-sm" @click="rollSave(i, adjustedWillpower(char))">Roll!</button>
							</div>
							<div class="d-inline-flex gap-1">
								<div class="input-group input-group-sm">
									<span class="input-group-text" :id="'rolled-save-' + i">Save:</span>
									<input type="text" class="form-control" placeholder="na" :aria-describedby="'rolled-save-' + i" :value="crewSaves[i]">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ICrewCardData } from '@/interfaces/ICrewCardData';
import { CrewCardStats } from '@/data/characters/crew-card-stats';
import { CharacterDataUtils } from '@/scripts/utils/character-data-utils';


export default defineComponent({
        name: 'EmptinessSaves',
        data() {
            return {
				simplifiedView: true,
				balancingView: false,
				crewData: CrewCardStats,
				crewSaves: Array(CrewCardStats.length).fill(0)
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
		},
        methods: {
			adjustedWillpower(char: ICrewCardData): number {
				return Math.round((char.stats.will * 3) - 5);
			},
			rollSave(index: number, willpower: number): number {
				const d20 = Math.floor(20 * Math.random()) + 1;
				this.crewSaves[index] = d20 + willpower;
				return this.crewSaves[index];
			},
			rollAllSaves(): void {
				for (let index = 0; index < this.crewData.length; index++) {
					const char = this.crewData[index];
					this.rollSave(index, this.adjustedWillpower(char));
				}
			}
        }
    })
</script>