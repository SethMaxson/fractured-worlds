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
			<Breadcrumb />
			<ViewBlurb header="Relationships" author="Susie" version="0.2.1">
				<p>How many friends do you have, really?</p>
				Other than me, I mean ;P
			</ViewBlurb>
		</header>
		<main class="pb-4">
			
			<div class="menu border-bottom border-2 p-1 mb-2">
				<div class="input-group">
					<label class="input-group-text" for="userSelect">User</label>
					<select class="form-select" id="userSelect" aria-label="Select user" @change="changeUserEvent">
						<template v-for="opt, index in menu.users">
							<option v-if="opt.value == 'separator'" disabled>————</option>
							<option v-else :selected="state.user==opt.value" :value="opt.value">{{opt.text}}</option>
						</template>
					</select>
				</div>
				<div class="input-group">
					<label class="input-group-text" for="sortSelect">Sort</label>
					<select class="form-select" id="sortSelect" aria-label="Select sort" @change="changeSortByEvent">
						<template v-for="opt, index in menu.sort">
							<option v-if="opt.value == 'separator'" disabled>————</option>
							<option v-else :selected="state.sortBy==opt.value" :value="opt.value">{{opt.text}}</option>
						</template>
					</select>
					<button class="btn btn-outline-secondary" type="button" @click="toggleSortAsc">
						<svg class="menu-button-icon fs-4 theme-color">
							<use :href="sortIcon"></use>
						</svg>
					</button>
				</div>
			</div>

			<div class="content">
				<div class="row row-cols-1 g-0 px-1 px-lg-5">
					<div class="col" v-for="(item, index) in sortedRelationships" :key="item.person">
						<div class="card">
							<div class="row g-0 m-0 px-1">
								<div class="col-2 col-md-2 text-center p-1">
									<Portrait class="bg-nle bg-opacity-50 img-fluid rounded-circle border" :src="item.character?.images.portrait" />
								</div>
								<div class="col-10 col-md-10">
									<div class="card-body p-2 ps-lg-3">
										<h5 class="card-title d-flex flex-nowrap align-items-start justify-content-between p-0 mb-0">
											<h6 class="p-0 m-0">
												{{ item.character?.name || Utils.String.capitalize(item.person) }}
												<span class="fs-6 small fst-italic opacity-50" v-if="item.label">
													({{ item.label }})
												</span>
												<div style="font-size: 0.8rem;" class="fw-normal card-text small text-body-secondary" v-if="item.met">
													met {{ Utils.Dates.Format.MDY(item.met) }}
												</div>
											</h6>
											<div class="flex-shrink-0 ps-1" :class="item.rankDisplay.class" :key="item.person">
												<span style="font-size: 1rem;" class="pe-1 d-none d-md-inline">{{ item.rankDisplay.label }}</span>
												<svg class="menu-button-icon fs-3 theme-color d-none d-md-inline">
													<use :href="item.rankDisplay.icon"></use>
												</svg>
												<svg class="menu-button-icon fs-1 theme-color d-inline d-md-none">
													<use :href="item.rankDisplay.icon"></use>
												</svg>
											</div>
										</h5>
										<p style="font-size: 0.7rem;" class="card-text small mt-1 fst-italic" v-if="item.notes">
											{{ item.notes }}
										</p>
									</div>
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
import Portrait from "@/components/core/Portrait.vue";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";
import { GameStrings } from "@/scripts/game-strings";
import { Utils } from "@/scripts/utils";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import type { ICharacterData } from "@/interfaces/ICharacterData";
import { CampaignDate } from "@/objects/CampaignDate";

// enum RelationshipRank {
//   Vindictive = -3,
//   Despised = -2,
//   Avoided = -1,
//   Acquainted = 0,
//   Associated = 1,
//   Committed = 2,
//   Bonded = 3
// }
type RelationshipRank = -3|-2|-1|0|1|2|3;

interface ICharacterRelationship {
	person: string;
	rank: RelationshipRank;
	/** The date when these characters met. */
	met: CampaignDate;
	notes?: string;
	/** An optional label for the nature of this relationship.
	 * @example 'friend', 'mother', 'boyfriend', 'worshipper', etc */
	label?: string;
	/** @deprecated Too video-gamey */
	readyToRankUp?: boolean;
	change?: 'd'|'u';
}

interface IRelationshipBundle extends ICharacterRelationship {
	character?: ICharacterData;
	rankDisplay: {
		icon: string;
		label: string;
		class: string;
	}
}

const Relationships = {
	"unset": [
		// Yes, this is needed.
	] as ICharacterRelationship[],
	/** Relationships pertaining to each member of the party. Copied into individual character arrays upon render. */
	"all": [
		{
			person: "boo",
			met: new CampaignDate(8, 4, 1),
			rank: 1
		},
		{
			person: "cade",
			met: new CampaignDate(5, 4, 1),
			rank: 2
		},
		{
			person: "doyle-akor",
			notes: "Rebirth Caucus agent who teleports using eldritch powers",
			met: new CampaignDate(15, 4, 1),
			rank: -2
		},
		{
			person: "ella",
			met: new CampaignDate(8, 4, 1),
			rank: 2
		},
		{
			person: "ferret",
			met: new CampaignDate(7, 8, 1),
			rank: 0
		},
		{
			person: "hamisfore",
			met: new CampaignDate(2, 4, 1),
			rank: 2
		},
		{
			person: "nortle",
			met: new CampaignDate(2, 4, 1),
			rank: 1
		},
		{
			person: "puma",
			label: "NLE",
			notes: "the NLE agent in Somewhere",
			met: new CampaignDate(19, 3, 1),
			rank: -1
		},
		{
			person: "winter",
			met: new CampaignDate(28, 8, 1),
			rank: 1
		},
		{
			person: "zuzu",
			notes: "he's so cute I wanna die!",
			met: new CampaignDate(31, 5, 1),
			rank: 1
		},
	] as ICharacterRelationship[],
	/** Relationships pertaining to the party as a whole, independent of the relationships towards the individuals within it */
	"party": [
	] as ICharacterRelationship[],
	"cobb": [
		{
			person: "doyle-akor",
			met: new CampaignDate(15, 4, 1),
			notes: "he seems to hate you less than the rest of us",
			rank: 0
		},
		{
			person: "CORN",
			label: "weird clone",
			met: new CampaignDate(7, 7, 1),
			rank: 1
		},
		{
			person: "todd-jenkins",
			met: new CampaignDate(21, 4, 1),
			rank: 1
		},
		{
			person: "susie",
			label: "robo bros",
			notes: "hey fellow android!",
			met: new CampaignDate(6, 7, 1),
			rank: 1
		},
		{
			person: "somewhere-throden",
			met: new CampaignDate(15, 3, 1),
			rank: 1
		},
		{
			person: "yoshi-black",
			met: new CampaignDate(10, 7, 1),
			rank: 1
		},
	] as ICharacterRelationship[],
	"phil": [
		{
			person: "yoshi-light-blue",
			label: "ward",
			met: new CampaignDate(10, 7, 1),
			rank: 2
		},
		{
			person: "yoshi-blue",
			label: "ward",
			met: new CampaignDate(10, 7, 1),
			rank: 1
		},
		{
			person: "somewhere-portia",
			met: new CampaignDate(19, 3, 1),
			rank: -1
		},
		{
			person: "gloria",
			met: new CampaignDate(14, 5, 1),
			rank: -2
		},
		{
			person: "gojiro",
			label: "frenemy?",
			notes: "assaulting you seems to be his hobby",
			met: new CampaignDate(6, 7, 1),
			rank: 1
		},
		{
			person: "droogella",
			label: "mother",
			met: new CampaignDate(0, 0, 0),
			rank: 0
		},
		{
			person: "malladine",
			label: "mother",
			met: new CampaignDate(0, 0, 0),
			rank: 0
		},
		{
			person: "terribelle",
			label: "mother",
			met: new CampaignDate(0, 0, 0),
			rank: 0
		},
		{
			person: "marlowe",
			met: new CampaignDate(10, 7, 1),
			rank: 2
		},
		{
			person: "nortle",
			label: "basically ur dad lol",
			met: new CampaignDate(2, 4, 1),
			rank: 2
		},
		{
			person: "susie",
			notes: "maybe it's just me, but u seem kinda spiral-y",
			met: new CampaignDate(6, 7, 1),
			rank: 1
		},
		{
			person: "zuzu",
			notes: "isn't he just the best?",
			met: new CampaignDate(31, 5, 1),
			rank: 2
		},
	] as ICharacterRelationship[],
	"tero": [
		{
			person: "cade",
			label: "bf",
			met: new CampaignDate(5, 4, 1),
			rank: 3
		},
		{
			person: "somewhere-portia",
			met: new CampaignDate(5, 4, 1),
			rank: 0
		},
		{
			person: "susie",
			label: "bestie",
			notes: "hey bestie ;)",
			met: new CampaignDate(6, 7, 1),
			rank: 3
		},
		{
			person: "yoshi-yellow",
			label: "ward",
			met: new CampaignDate(10, 7, 1),
			rank: 2
		},
		{
			person: "yoshi-pink",
			label: "ward",
			met: new CampaignDate(10, 7, 1),
			rank: 2
		},
		{
			person: "zuzu",
			notes: "omg he's so precious!",
			met: new CampaignDate(31, 5, 1),
			rank: 2
		},
	] as ICharacterRelationship[]
}

export default defineComponent({
	name: 'RelationshipViewComponent',
	data() {
		return {
			relationships: Relationships,
			menu: {
				sort: [
					{
						text: 'Date Met',
						value: 'met'
					},
					{
						text: 'Relationship Rank',
						value: 'rank'
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
				sortAsc: true,
				sortBy: 'met' as 'met'|'rank',
				user: 'unset' as keyof typeof Relationships,
			},
		}
	},
	computed: {
		sortIcon() {
			return this.state.sortAsc ? '#sort-asc' : '#sort-desc';
		},
		selectedRelationships(): IRelationshipBundle[] {
			let rawRelationships = Relationships[this.state.user].slice();
			
			if (!['all', 'unset'].includes(this.state.user)) {
				rawRelationships = rawRelationships.concat(Relationships.all);
			}

			const unique = rawRelationships.reduce(function (acc: ICharacterRelationship[], curr: ICharacterRelationship) {
				if (acc.filter(p => p.person == curr.person).length == 0)
					acc.push(curr);
				return acc;
			}, []);

			return (unique as IRelationshipBundle[]).map(r => {
				return {
					...r,
					character: this.getPerson(r.person),
					rankDisplay: this.relationshipRankDisplay(r.rank)
				}
			}).sort((a, b) => {
				let aName = a.character?.name || a.person;
				let bName = b.character?.name || b.person;
				return aName == bName ? 0
					: aName > bName ? 1
					: -1
			});
		},
		sortedRelationships(): IRelationshipBundle[] {
			const sortMod = this.state.sortAsc ? -1 : 1;
			if (this.state.sortBy == 'met') {
				return this.selectedRelationships.sort((a, b) => Utils.SortComparators.campaignDate(a.met, b.met, !this.state.sortAsc))
			}
			else {
				return this.selectedRelationships.sort((a, b) => {
				return (a.rank == b.rank ? 0
					: b.rank > a.rank ? 1
					: -1
					) * sortMod
			});
			}
			return this.selectedRelationships;
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
			this.state.sortBy = (document.getElementById("sortSelect") as HTMLSelectElement).value as 'met';
			sessionStorage.setItem("relationshipSortBy", this.state.sortBy);
		},
		changeUserEvent(e: Event) {
			e.preventDefault();
			const newUser = (document.getElementById("userSelect") as HTMLSelectElement).value;
			this.changeUser(newUser);
		},
		changeUser(user: string) {
			this.state.user = user as keyof typeof Relationships;
			sessionStorage.setItem("relationshipUser", this.state.user);
		},
		relationshipRankDisplay(rank: RelationshipRank) {
			switch (rank) {
				case -3:
					return {
						class: "text-danger",
						icon: "#emoji-swear",
						label: "Vindictive"
					}
				case -2:
					return {
						class: "text-danger-emphasis",
						icon: "#emoji-angry",
						label: "Despised"
					}
				case -1:
					return {
						class: "text-warning-emphasis",
						icon: "#emoji-frown",
						label: "Avoided"
					}
				case 1:
					return {
						class: "text-primary-emphasis",
						icon: "#emoji-smile",
						label: "Associated"
					}
				case 2:
					return {
						class: "text-info",
						icon: "#emoji-smile-big",
						label: "Committed"
					}
				case 3:
					return {
						class: "text-info-emphasis",
						icon: "#emoji-laugh",
						label: "Bonded"
					}
				default:
					return {
						class: "",
						icon: "#emoji-mid",
						label: "Acquainted"
					}
			}
		},
	},
	mounted() {
		Utils.LocalStorage.Dates.LastPageView.setNow("Relationships");
		let currentUser = Utils.LocalStorage.getUser();
		this.changeUser(currentUser != "guest" ? currentUser : sessionStorage.getItem("relationshipUser") || "unset");
		this.state.sortAsc = (sessionStorage.getItem("relationshipSortDir") || "asc") == "asc";
		this.state.sortBy = sessionStorage.getItem("relationshipSortBy") as "met" || "met";
	},
})
</script>