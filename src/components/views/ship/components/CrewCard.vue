<script setup lang="ts">
import { defineComponent, useSlots } from 'vue';
import Card from '@/components/core/Card.vue';
import CardContents from '@/components/core/CardContents.vue';
import { id_ify } from '@/scripts/id_ify';
import Image from '@/components/core/Image.vue';

const props = defineProps({
	simplified: {
		type: Boolean,
		default: false
	},
	balancing: {
		type: Boolean,
		default: false
	},
	name: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: false,
		default: "normal"
	},
	originType: {
		type: String,
		required: false
	},
	rarity: {
		type: String,
		default: "common",
		validator(value: string) {
			return ["common", "uncommon", "rare", "legendary"].includes(value);
		},
	},
	//#region Stats
	tech: {
		type: Number,
		default: 0,
		validator(value: number) {
			return value <= 5 && value >= 0;
		},
	},
	magic: {
		type: Number,
		default: 0
	},
	willpower: {
		type: Number,
		default: 0
	},
	intelligence: {
		type: Number,
		default: 1
	},
	strength: {
		type: Number,
		default: 1
	},
	speed: {
		type: Number,
		default: 1
	},
	//#endregion Stats
	//#region Collector Info
	numberInSeries: {
		type: [Number, String],
		default: "?"
	},
	seriesLength: {
		type: [Number, String],
		default: "?"
	},
	//#endregion Collector Info
})

const slots = useSlots();
const heading = slots.heading && slots.heading();

const idBase = id_ify(heading && heading[0].children? heading[0].children.toString() : "missing-id");

const stats = [
	{ name: "Technology", score: props.tech},
	{ name: "Magic", score: props.magic},
	{ name: "Intelligence", score: props.intelligence},
	{ name: "Willpower", score: props.willpower},
	{ name: "Strength", score: props.strength},
	{ name: "Speed", score: props.speed}
];

const simplifiedStats = {
	mind: props.intelligence,
	body: (props.strength + props.speed) / 2,
	drive: props.willpower,
};

const simplifiedSkills = [
	{ name: "Technology", score: props.tech},
	{ name: "Magic", score: props.magic},
];


console.log(props.name, simplifiedSkills);
console.log("props.tech, props.magic:", props.tech, props.magic);

const statTotal = props.intelligence + props.magic + props.speed + props.strength + props.tech + props.willpower;
const statAvg = statTotal / 6;

const starIconClasses = function (score: number): string[] {
			const boundedScore = Math.min(5, Math.max(0, score));
			const s = Math.round(boundedScore * 2);
			const classes: string[] = [];

			// special symbol for perfect score
			if (s == 10) {
				for (var i = 0; i < 4; i++) classes.push("#star-filled");
				classes.push("#stars-formation");
				return classes;
			}

			for (let i = 0; i < Math.floor(s-0.25)/2; i++) {
				classes.push("#star-filled");
			}
			if (s % 2 == 1) {
				classes.push("#star-half");
			}
			for (let i = Math.ceil(boundedScore-0.24); i < 5; i++) {
				classes.push("#star-empty");
			}

			return classes;
		};
		

var rarityStars: string[] = [];
switch (props.rarity.toLowerCase()) {
	case "legendary":
		rarityStars = ["#stars-formation", "#stars-formation", "#stars-formation"]
		break;
	case "rare":
		rarityStars = ["#star-filled", "#star-filled", "#star-filled"]
		break;
	case "uncommon":
		rarityStars = ["#star-filled", "#star-filled"]
		break;
	default:
		rarityStars = ["#star-filled"]
		break;
}
</script>

<template>
	<div class="col" name="minimal">
		<div class="w-100 h-100 rounded-4 pb-0 card-frame" :class="props.rarity">
			<div class="card h-100 text-center text-bg-secondary rounded-4 border-0">
				<div class="card-header font-emphasis text-start rounded-pill bg-primary-subtle border-bottom border-2 d-flex justify-content-between align-items-center m-1 mb-0">
					<h3 class="font-emphasis fs-3 my-0">
						{{ props.name }}
					</h3>
					<div>
						<template v-for="icon in rarityStars">
							<span class="icon" v-if="icon == 'spacer'"></span>
							<svg class="icon" v-else>
								<use :href="icon"></use>
							</svg>
						</template>
					</div>
				</div>
				<!-- <Image class="portrait card-img-top mx-auto my-0" alt="portrait" :src="props.img" :is-external="false" /> -->
				<div class="card-img card-img-top mx-auto my-0 text-start">
					<Image class="portrait cover" alt="portrait" :src="props.img" :is-external="false" />
				</div>
				<div class="card-body my-0 p-0 mx-1">
					<h6 class="card-subtitle px-2 px-lg-3 fs-5 font-emphasis rounded-pill bg-primary-subtle border border-2 border-secondary-subtle text-start">
						<span class="text-capitalize">
							<span v-if="props.type == 'tech'">
								<abbr title="Advanced Technology">Adv. Tech</abbr>
							</span>
							<span v-else-if="props.type == 'combat'"> Combatant </span>
							<span v-else-if="props.type == 'craft'"> Crafter </span>
							<span v-else-if="props.type == 'eng'"> Engineer </span>
							<span v-else-if="props.type == 'ent'"> Entertainer </span>
							<span v-else-if="props.type == 'mag'"> Mage </span>
							<span v-else-if="props.type == 'med'"> Medic </span>
							<span v-else-if="props.type == 'spec'"> Specialist </span>
							<span v-else>
								{{ props.type }}
							</span>
							—
						</span>
						<slot name="subheading"></slot>
					</h6>
					<div class="card-text px-3 text-start py-0 serif">

						<!-- GM Stat Balancing View -->
						<div v-if="props.balancing" class="text-bg-secondary bg-info-subtle my-0 px-2 stats simplified-stats border-3 border-info border-bottom">
							<div class="list-group-item my-0 py-1 border-dark-subtle border-top"
								:class="{ 'poor-score': statAvg < 1.5, 'max-score': statAvg > 4 }"
							>
								<span class="stat-label">
									Average:
								</span>
								<span>
									<svg class="icon" v-for="icon in starIconClasses(statAvg)">
										<use :href="icon"></use>
									</svg>
								</span>
							</div>
							<div class="list-group-item my-0 py-1 border-dark-subtle border-top"
							>
								<span class="stat-label">
									Total:
								</span>
								<span>
									{{statTotal}}
								</span>
							</div>
						</div>
						

						<!-- Simplified Stat View -->
						<div v-if="props.simplified" class="text-bg-secondary bg-info-subtle my-0 px-2 pt-1 stats simplified-stats">
							<div class="text-center border-bottom">
								<div class="row">
									<div class="col">
										Mind
									</div>
									<div class="col">
										Body
									</div>
									<div class="col">
										Drive
									</div>
								</div>
								<div class="row">
									<div class="col" :class="{ 'poor-score': simplifiedStats.mind < 1.5, 'max-score': simplifiedStats.mind > 4 }">
										<svg class="icon" v-for="icon in starIconClasses(simplifiedStats.mind)">
											<use :href="icon"></use>
										</svg>
									</div>
									<div class="col" :class="{ 'poor-score': simplifiedStats.body < 1.5, 'max-score': simplifiedStats.body > 4 }">
										<svg class="icon" v-for="icon in starIconClasses(simplifiedStats.body)">
											<use :href="icon"></use>
										</svg>
									</div>
									<div class="col" :class="{ 'poor-score': simplifiedStats.drive < 1.5, 'max-score': simplifiedStats.drive > 4 }">
										<svg class="icon" v-for="icon in starIconClasses(simplifiedStats.drive)">
											<use :href="icon"></use>
										</svg>
									</div>
								</div>
							</div>
							<div class="list-group-item my-0 py-1 border-dark-subtle border-top stat-line"
								v-for="stat in simplifiedSkills"
								:class="{ 'poor-score': stat.score < 1.5, 'max-score': stat.score > 4 }"
								:v-if="stat.score > 0"
							>
								<span class="stat-label">
									{{ stat.name }}:
								</span>
								<span v-if="stat.score == 0" class="text-muted"> N/A </span>
								<span v-else>
									<svg class="icon" v-for="icon in starIconClasses(stat.score)">
										<use :href="icon"></use>
									</svg>
								</span>
							</div>
						</div>
						

						<!-- Full Stat View -->
						<ul class="list-group list-group-flush my-0" v-else>
							<li class="list-group-item list-group-item-info py-1 stat-line"
								v-for="stat in stats"
								:class="{ 'poor-score': stat.score < 1.5, 'max-score': stat.score > 4 }"
								:v-if="stat.score > 0"
							>
								<span class="text-muted stat-label">
									{{ stat.name }}:
								</span>
								<span>
									<svg class="icon" v-for="icon in starIconClasses(stat.score)">
										<use :href="icon"></use>
									</svg>
									<span v-if="stat.score == 0" class="text-muted"> (N/A) </span>
								</span>
							</li>
						</ul>


					</div>
					<!-- <div class="card-text text-truncate">
						<slot></slot>
					</div> -->
				</div>
				<div class="card-footer m-0 p-1 pt-2 border-dark-subtle border-0 serif text-bg-dark row text-start">
					<div class="col text-muted">
						{{ props.numberInSeries }}/{{ props.seriesLength }} 
						<span class="text-capitalize">
							◉ {{ props.rarity }}
						</span>
					</div>
					<div class="col">
						
					</div>
					<!-- {{props.type.length > 0 ? props.type : "Normal"}} -->
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'CrewCard'
}
</script>

<style lang="css" scoped>
.card {
	line-height: 1;
	background: none !important;
}

.card-frame {
	border: 6px solid black;
	background: #000000;
}

/* .card img {
	position: relative;
	margin-top: -1rem;
	z-index: 1;
	max-width: 90%;
} */

div.card-img {
	position: relative;
	margin-top: -1rem;
	z-index: 1;
	width: 85%;
	padding-top: 85%; /* 1:1 Aspect Ratio */
	/* background: var(--fw-c-black); */
	background: radial-gradient(#202020 60%, #000000);
}

.cover {
  /* Image is scaled to fill the container. */
  /* Aspect ratio IS maintained */
  margin:0;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-footer {
	background: #000000 !important;
	font-size: 0.6rem;
}

.card-header,
.card-body {
	position: relative;
	z-index: 2;
}

.card-header {
	padding-top: 0;
	padding-bottom: 0;
	/* font-size: 2rem; */
	/* font-variant: small-caps; */
	line-height: 1.5rem;
}

@keyframes shimmer {
   to {
      background-position-x: 0%;
      background-position-y: 0%;
   }
}

.legendary {
	/* background: var(--kh-c-text-menu-header); */
	/* background: linear-gradient(-85deg, var(--card-c-bg-legendary) 40%, var(--card-c-bg-legendary-shine) 50%, var(--card-c-bg-legendary) 60%);
	background-size: 300%;
	background-position-x: 100%;
	background-position-y: 100%;
	animation: shimmer 2s infinite linear; */
	background: linear-gradient(-60deg, var(--card-c-bg-legendary) 35%, var(--card-c-bg-legendary-shine) 50%, var(--card-c-bg-legendary) 75%);
}

.legendary .card-footer,
.legendary .card-header,
.legendary .card-subtitle {
	border-color: var(--card-c-bg-legendary-shine) !important;
}


.uncommon .card-header .icon { color: var(--card-c-bg-uncommon-shine); }
.rare .card-header .icon { color: var(--card-c-bg-rare-shine); }
.legendary .card-header .icon { color: var(--card-c-bg-legendary-shine); }

/* .common { background: var(--card-c-bg-common); } */
.common,
.rare,
.uncommon { background: linear-gradient(-85deg, var(--card-c-bg-uncommon) 40%, var(--card-c-bg-uncommon-shine) 50%, var(--card-c-bg-uncommon) 60%); }
/* .rare { background: linear-gradient(-85deg, var(--card-c-bg-rare) 40%, var(--card-c-bg-rare-shine) 50%, var(--card-c-bg-rare) 60%); } */

.uncommon .card-footer,
.uncommon .card-header,
.uncommon .card-subtitle {
	/* border-color: var(--card-c-bg-uncommon-shine) !important; */
	border-color: var(--card-c-bg-uncommon-shine) !important;
}



.rare .card-footer,
.rare .card-header,
.rare .card-subtitle {
	/* border-color: var(--card-c-bg-rare-shine) !important; */
	border-color: var(--card-c-bg-rare) !important;
}


.serif {
	font-family: serif;
}

.font-emphasis {
	font-weight: 400;
	/* line-height: 1.1em; */
}

.stats,
.stat-label {
	font-size: 0.9rem;
}

/* .stat-line {
	height: 20px;
} */

/* .simplified-stats .stat-line {
	line-height: 16px;
} */

.icon {
    width: 0.9rem;
    height: 0.9rem;
    display: inline-block;
    background-size: cover;
	color: var(--kh-c-text-menu-header);
}

.poor-score .icon {
    color: var(--bs-danger-text);
}

/* .max-score .icon {
    color: var(--bs-success-text);
	color: var(--bs-warning);
} */

.max-score .icon:last-of-type {
    width: 1.2rem;
    height: 1.2rem;
}

.simplified-stats .icon,
.simplified-stats .max-score .icon:last-of-type {
    width: 0.75rem;
    height: 0.75rem;
}

.card-header .icon {
    width: 1.2rem;
    height: 1.2rem;
}
</style>