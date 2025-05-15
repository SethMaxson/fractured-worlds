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
					:img="char.img"
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

type CrewRarity = "common" | "uncommon" | "rare" | "legendary";
type CrewType = "normal" | "combat" | "craft" | "eng" | "ent" | "mag" | "med" | "tech" | "spec";

interface ICrewCardData {
	name: string;
	subtitle: string;
	img: string;
	originType: string;
	type: CrewType;
	rarity: CrewRarity;
	numberInSeries: number;
	stats: {
		int: number;
		magic: number;
		spd: number;
		str: number;
		tech: number;
		will: number;
	}
}

export default defineComponent({
        name: 'CrewCards',
        data() {
            return {
				simplifiedView: true,
				balancingView: false,
				crewData: [
					{
						name: "C.O.B.B.",
						subtitle: "Android Surgeon",
						img: "img/party/cobb-toon.png",
						originType: "",
						type: "med",
						rarity:"legendary",
						stats: {
							int: 5,
							magic: 2,
							spd: 4,
							str: 4,
							tech: 3,
							will: 5
						},
						numberInSeries: 1,
					},
					{
						name: "Li'l Phil Antonio",
						subtitle: "Centaur Sorcerer",
						img: "img/party/phil-toon.png",
						originType: "",
						type: "mag",
						rarity:"legendary",
						stats: {
							int: 3,
							magic: 5,
							spd: 4,
							str: 2,
							tech: 2.5,
							will: 4
						},
						numberInSeries: 2,
					},
					{
						name: "Potiki",
						subtitle: "Ratfolk Gunslinger",
						img: "img/party/pontiki.png",
						originType: "",
						type: "normal",
						rarity:"legendary",
						stats: {
							int: 1,
							magic: 1,
							spd: 1,
							str: 1,
							tech: 1,
							will: 1
						}
					},
					{
						name: "Tero",
						subtitle: "Kitsune Kineticist",
						img: "img/party/tero-portrait.png",
						originType: "",
						type: "normal",
						rarity:"legendary",
						stats: {
							int: 3.5,
							magic: 4,
							spd: 3,
							str: 3,
							tech: 3.5,
							will: 4
						},
						numberInSeries: 3,
					},
					{
						name: "Hamisfore",
						subtitle: "Gnome Barbarian",
						img: "img/npc/hamisfore-toon.png",
						originType: "",
						type: "combat",
						rarity:"uncommon",
						stats: {
							int: 3.5,
							magic: 2,
							spd: 3,
							str: 3,
							tech: 3,
							will: 5
						},
						numberInSeries: 6,
					},
					{
						name: "Ootah",
						subtitle: "Orc Warrior",
						img: "img/npc/ootah.webp",
						originType: "",
						type: "combat",
						rarity:"common",
						stats: {
							int: 1.5,
							magic: 1,
							spd: 3,
							str: 4,
							tech: 1,
							will: 5
						},
						numberInSeries: 5,
					},
					{
						name: "Giuseppe da Albiate",
						subtitle: "Aspiring Painter",
						img: "img/npc/giuseppe.png",
						originType: "",
						type: "craft",
						rarity:"common",
						stats: {
							int: 3,
							magic: 0,
							spd: 3,
							str: 2,
							tech: 2,
							will: 3.5
						}
					},
					{
						name: "Tom Cox",
						subtitle: "Folk Singer",
						img: "img/npc/tom-cox.webp",
						originType: "",
						type: "ent",
						rarity:"common",
						stats: {
							int: 2,
							magic: 0,
							spd: 2,
							str: 3,
							tech: 2.5,
							will: 4
						}
					},
					{
						name: "Eva Davis",
						subtitle: "Computer Programmer",
						img: "img/npc/eva-davis.png",
						originType: "",
						type: "tech",
						rarity:"common",
						stats: {
							int: 4,
							magic: 0,
							spd: 2,
							str: 1,
							tech: 4,
							will: 3.5
						}
					},
					{
						name: "Carrie Ward",
						subtitle: "Registered Nurse",
						img: "img/npc/carrie-ward.webp",
						originType: "",
						type: "med",
						rarity:"common",
						stats: {
							int: 3.5,
							magic: 0,
							spd: 3,
							str: 3,
							tech: 3,
							will: 4
						}
					},
					{
						name: "Gloria",
						subtitle: "Dystopian Squatter",
						img: "img/npc/gloria.jpg",
						originType: "",
						type: "combat",
						rarity:"rare",
						stats: {
							int: 4,
							magic: 0,
							spd: 4,
							str: 2.5,
							tech: 4.5,
							will: 3
						}
					},
					{
						name: "Tommy One",
						subtitle: "Android Factory Reject",
						img: "img/npc/tommy-one.png",
						originType: "",
						type: "normal",
						rarity:"common",
						stats: {
							int: 1,
							magic: 0,
							spd: 2.5,
							str: 2.5,
							tech: 4.5,
							will: 5
						}
					},
					{
						name: "Zuzu",
						subtitle: "Mystical Child",
						img: "img/npc/zuzu.png",
						originType: "",
						type: "mag",
						rarity:"rare",
						stats: {
							int: 3,
							magic: 5,
							spd: 3,
							str: 1,
							tech: 2,
							will: 3
						}
					},
					{
						name: "Joey Morton",
						subtitle: "Mall Cop",
						img: "img/npc/joey-morton-2.png",
						originType: "",
						type: "normal",
						rarity:"common",
						stats: {
							int: 2,
							magic: 0,
							spd: 2.5,
							str: 3,
							tech: 4,
							will: 4
						}
					},
					{
						name: "Gugg",
						subtitle: "Neanderthal Hunter",
						img: "img/npc/gugg.png",
						originType: "",
						type: "combat",
						rarity:"common",
						stats: {
							int: 0.5,
							magic: 0,
							spd: 2,
							str: 4,
							tech: 0,
							will: 2.5
						}
					},
					{
						name: "Bebop",
						subtitle: "Mutant Enforcer",
						img: "img/tokens/bebop.png",
						originType: "",
						type: "combat",
						rarity:"uncommon",
						stats: {
							int: 1,
							magic: 0,
							spd: 2,
							str: 4.5,
							tech: 3,
							will: 3
						}
					},
					{
						name: "Blackhand Roo",
						subtitle: "Train Mechanic",
						img: "img/npc/blackhand-roo.png",
						originType: "",
						type: "eng",
						rarity:"uncommon",
						stats: {
							int: 3.5,
							magic: 0,
							spd: 4,
							str: 3.5,
							tech: 4,
							will: 3.5
						}
					},
					{
						name: "Per Schnorr",
						subtitle: "Spiritual Leader",
						img: "img/tokens/per-schnorr.png",
						originType: "",
						type: "normal",
						rarity:"common",
						stats: {
							int: 2,
							magic: 0.5,
							spd: 2.5,
							str: 2.5,
							tech: 1,
							will: 3
						}
					},
					{
						name: "Hoots the Owl",
						subtitle: "Jazz Musician",
						img: "img/npc/hoots.jpg",
						originType: "",
						type: "ent",
						rarity:"common",
						stats: {
							int: 2.5,
							magic: 0,
							spd: 2,
							str: 1,
							tech: 2.5,
							will: 4.5
						}
					},
				] as ICrewCardData[]
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

				return filteredCrew;
				// return filteredCrew.sort(function(a, b) {
				// 	const compA = a.date || "";
				// 	const compB = b.date || "";
				// 	return compA == compB ? 0
				// 		: compA > compB ? -1 : 1;
				// });
			},
			estimatedSeriesCurrentLength() {
				const highestSeriesIndex = this.crewData.reduce((a, b)=>a.numberInSeries||1>b.numberInSeries||1?a:b).numberInSeries || 1;
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