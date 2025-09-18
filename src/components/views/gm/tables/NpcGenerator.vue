<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import RandomTableComponent from "@/components/core/RandomTable.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/gm/tables/npc-generator" />
		</header>
		<main>

			<div class="border rounded">
				<div class="input-group mb-3">
					<span class="input-group-text">Number to Generate:</span>
					<input class="form-control" type="number" placeholder="1" v-model="numberToGenerate" />
					<button class="btn btn-primary" type="button" @click="generateResults">Create</button>
				</div>
			</div>
			
			<!-- #region Embedded Tables -->
			<div class="accordion" id="npc-tables-accordion">

				<AccordionItem name="Generated Results" parent-id="npc-tables-accordion" :default-open="true">
					<div class="row row-cols-1 row-cols-md-2 g-4">
						<div class="col" v-for="result, index in results">
							<div class="card text-bg-secondary" style="font-size:1em;">
								<div class="card-header">
									<div class="input-group">
										<span class="input-group-text">Index: {{ index }}</span>
										<span class="input-group-text">Name:</span>
										<input class="form-control" type="text" placeholder="NPC Name" />
										<button class="btn btn-info" type="button" @click="toggleDetailView(result)">EDIT</button>
										<button class="btn btn-danger" type="button" @click="removeResult(index)">REMOVE</button>
									</div>
								</div>
								<div class="card-body">
									<!-- #region Readable Results -->
									<div purpose="readable-results">
										<div class="input-group">
											<span class="input-group-text">Origin:</span>
											<input class="form-control" type="text" :value="RandomTableUtils.lookupResult(tables.origin, result.origin)" disabled readonly />
										</div>
										<div class="input-group" v-if="isFromEarth(result)">
											<span class="input-group-text">Era:</span>
											<input class="form-control" type="text" :value="RandomTableUtils.lookupResult(tables.earthVariant.era, result.earthEra)" disabled readonly />
											<span class="input-group-text" v-if="showYear(result)">Year:</span>
											<input class="form-control" type="text" v-if="showYear(result)" :value="getYear(result)" disabled readonly />
										</div>
										<div class="input-group" v-if="isFromExistingFiction(result)">
											<span class="input-group-text">Category:</span>
											<input class="form-control" type="text" :value="RandomTableUtils.lookupResult(tables.existingFiction.category, result.fictionCategory)" disabled readonly />
											<span class="input-group-text">Medium:</span>
											<input class="form-control" type="text" :value="RandomTableUtils.lookupResult(tables.existingFiction.source, result.fictionSource)" disabled readonly />
										</div>
									</div>
									<!-- #endregion Readable Results -->

									<!-- #region Adjustable Inputs -->
									<div purpose="inputs" class="mt-3 border rounded text-bg-secondary" v-if="result.showRolls">
										<div class="input-group mb-3">
											<span class="input-group-text">Origin (1d100):</span>
											<input class="form-control" type="number" placeholder="0" v-model="result.origin" />
										</div>
										<h5 class="ps-2">Earth Variant</h5>
										<div class="input-group mb-3">
											<span class="input-group-text">Era (1d100):</span>
											<input class="form-control" type="number" placeholder="0" v-model="result.earthEra" />
											<span class="input-group-text">1900s (1d100):</span>
											<input class="form-control" type="number" placeholder="0" v-model="result.earth19" />
											<span class="input-group-text">2000s (1d100):</span>
											<input class="form-control" type="number" placeholder="0" v-model="result.earth20" />
										</div>
										<h5 class="ps-2">Existing Fiction</h5>
										<div class="input-group mb-3">
											<span class="input-group-text">Category (1d20):</span>
											<input class="form-control" type="number" placeholder="0" v-model="result.fictionCategory" />
											<span class="input-group-text">Medium (1d20):</span>
											<input class="form-control" type="number" placeholder="0" v-model="result.fictionSource" />
										</div>
									</div>
									<!-- #endregion Adjustable Inputs -->
								</div>
							</div>

						</div>
					</div>
				</AccordionItem>

				<AccordionItem name="Tables" parent-id="npc-tables-accordion">
					<div class="random-table-container">
						<h2>Knowing Ones</h2>
						<p>Tables for generating characters who exist outside of World Remnants.</p>


						<RandomTableComponent
							:name="tables.origin.name"
							:rows="tables.origin.rows"
						/>

						<div class="border rounded m-2 p-1">
							<h4>Earth Variant Tables</h4>
							<RandomTableComponent
								:name="tables.earthVariant.era.name"
								:rows="tables.earthVariant.era.rows"
							/>

							<RandomTableComponent
								:name="tables.earthVariant.century19.name"
								:rows="tables.earthVariant.century19.rows"
							/>

							<RandomTableComponent
								:name="tables.earthVariant.century20.name"
								:rows="tables.earthVariant.century20.rows"
							/>
						</div>

						<div class="border rounded m-2 p-1">
							<h4>Existing Fictional Setting Tables</h4>
							<RandomTableComponent
								:name="tables.existingFiction.category.name"
								:rows="tables.existingFiction.category.rows"
							/>
							<RandomTableComponent
								:name="tables.existingFiction.source.name"
								:rows="tables.existingFiction.source.rows"
							/>
						</div>
					</div>
				</AccordionItem>

			</div>
			<!-- #endregion Embedded Tables -->

		</main>
	</PageContainerVue>
</template>

<style scoped>
	.card * {
		font-size: inherit;
	}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import type { IRandomTable } from "@/interfaces/IRandomTable";
import { RandomTableUtils } from "@/scripts/random-tables-utils";
import { Utils } from "@/scripts/utils";

interface INPCResultRolls {
	// purely for ui
	showAll: boolean;
	showRolls: boolean;

	// real properties
	origin: number;
	earthEra: number;
	earth19: number;
	earth20: number;
	fictionCategory: number;
	fictionSource: number;
}

export default defineComponent({
	name: 'ReviewsComponent',
	data() {
		return {
			//#region Tables
			tables: {
				origin: {
					name: "Origin",
					dieSize: 100,
					rows: [
						{ weight: 40, result: "Earth Variant" },
						{ weight: 15, result: "Generic Sci-fi World" },
						{ weight: 20, result: "Generic Fantasy World" },
						{ weight: 20, result: "Existing Fictional World" },
						{ weight: 5, result: "Unique World" },
					]
				} as IRandomTable,
				earthVariant: {
					era: {
						name: "Table 5 - Era",
						dieSize: 100,
						rows: [
							{ weight: 10, result: "Prehistory" },
							{ weight: 10, result: "Ancient History" },
							{ weight: 15, result: "Medieval" },
							{ weight: 10, result: "Renaissance" },
							{ weight: 10, result: "1800s" },
							{ weight: 25, result: "1900s" },
							{ weight: 15, result: "2000s" },
							{ weight: 4, result: "Near Future" },
							{ weight: 1, result: "Distant Future" },
						]
					} as IRandomTable,
					century19: {
						name: "Table 5.1 - 1900s",
						dieSize: 100,
						rows: [
							{ weight: 30, result: "1900-1940s" },
							{ weight: 5, result: "1950s" },
							{ weight: 15, result: "1960s" },
							{ weight: 15, result: "1970s" },
							{ weight: 20, result: "1980s" },
							{ weight: 15, result: "1990s" }
						]
					} as IRandomTable,
					century20: {
						name: "Table 5.2 - 2000s",
						dieSize: 100,
						rows: [
							{ weight: 75, result: "2000s" },
							{ weight: 15, result: "2010s" },
							{ weight: 10, result: "2020s" }
						]
					} as IRandomTable,
				},
				existingFiction: {
					category: {
						name: "Table 1 - Setting Category",
						dieSize: 20,
						rows: [
							{ weight: 7, result: "Fantasy" },
							{ weight: 1, result: "Historical" },
							{ weight: 5, result: "Contemporary (modernish Earth)" },
							{ weight: 5, result: "Science Fiction" },
							{ weight: 2, result: "Totally Unique" }
						]
					} as IRandomTable,
					source: {
						name: "Table 1 - Setting Source",
						dieSize: 20,
						rows: [
							{ weight: 4, result: "Film" },
							{ weight: 4, result: "Television" },
							{ weight: 2, result: "Literature" },
							{ weight: 3, result: "Comic Book" },
							{ weight: 6, result: "Video Game" },
							{ weight: 1, result: "Other (or mulligan)" }
						]
					} as IRandomTable,
				}
			},
			//#endregion Tables
			numberToGenerate: 1,
			results: [] as INPCResultRolls[],
		}
	},
	methods: {
		generateResults() {
			for (let i = 0; i < this.numberToGenerate; i++) {
				this.results.push({
					//ui only
					showAll: false,
					showRolls: false,
					//real properties
					origin: Utils.Dice.rollDie(100),
					earthEra: Utils.Dice.rollDie(100),
					earth19: Utils.Dice.rollDie(100),
					earth20: Utils.Dice.rollDie(100),
					fictionCategory: Utils.Dice.rollDie(20),
					fictionSource: Utils.Dice.rollDie(20)
				} as INPCResultRolls)
			}
		},
		removeResult(index: number): void {
			this.results.splice(index, 1);
		},
		toggleDetailView(char: INPCResultRolls): void {
			char.showRolls = !char.showRolls;
		},
		isFromEarth(char: INPCResultRolls): boolean {
			return RandomTableUtils.lookupResult(this.tables.origin, char.origin) == "Earth Variant";
		},
		isFromExistingFiction(char: INPCResultRolls): boolean {
			return RandomTableUtils.lookupResult(this.tables.origin, char.origin) == "Existing Fictional World";
		},
		showYear(char: INPCResultRolls): boolean {
			if (!this.isFromEarth(char)) {
				return false;
			}
			const earthEra = RandomTableUtils.lookupResult(this.tables.earthVariant.era, char.earthEra);
			return /1900s|2000s/ig.test(earthEra);
		},
		getYear(char: INPCResultRolls): string {
			if (!this.showYear(char)) {
				return "";
			}
			const earthEra = RandomTableUtils.lookupResult(this.tables.earthVariant.era, char.earthEra);
			return earthEra == "1900s" ?
				RandomTableUtils.lookupResult(this.tables.earthVariant.century19, char.earth19)
				: RandomTableUtils.lookupResult(this.tables.earthVariant.century20, char.earth20);
		},
	},
	mounted() {
		this.generateResults();
	},
})

</script>