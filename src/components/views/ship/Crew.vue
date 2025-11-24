<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/ship/ship" />
			<ViewBlurb header="Crew Roster">
				The crew of our current vessel, the Brightside.
			</ViewBlurb>
		</header>
		<main class="px-2 px-lg-5">

			<!-- Info Modal -->
			<div class="modal" id="crewDefModal" tabindex="-1" aria-labelledby="crewDefModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-6" id="crewDefModalLabel">Definition</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<b class="def-title">...</b> -
							<span class="def-text"></span>
						</div>
					</div>
				</div>
			</div>

			<h4>Officers</h4>
			<ul class="list-group">
				<li class="list-group-item p-0" v-for="role in officers" :key="role.role">
					<ul class="list-group list-group-horizontal">
						<button v-if="role.definition" type="button" class="list-group-item list-group-item-action border-0 border-end py-1" data-bs-toggle="modal" data-bs-target="#crewDefModal">
							<span class="title">{{ role.role }}</span>
							<span class="def" v-html="role.definition"></span>
						</button>
						<li class="list-group-item list-group-item-action border-0 border-end py-1" v-else>
							{{ role.role }}
						</li>


						<CharacterLink class="list-group-item list-group-item-action border-0 py-1" :person="role.person" :key="role.personId" v-if="role.person" />
						<li class="list-group-item list-group-item-action border-0 py-1 fst-italic text-warning" v-else>
							Unassigned
						</li>
					</ul>
				</li>
			</ul>

			<h4 class="mt-4">Enlisted</h4>
			<div class="list-group">
				<CharacterLink v-for="person in enlisted" class="list-group-item list-group-item-action py-1" :person="person" :key="person.id" />
			</div>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Utils } from "@/scripts/utils";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import { CharacterDatas } from "@/data/character-datas";
import type { ICharacterData } from "@/interfaces/ICharacterData";
import CharacterLink from "../characters/components/CharacterLink.vue";

const TheGang = [
	CharacterDataUtils.findCharacter(CharacterDatas, 'cobb'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'phil'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'tero')
];

const matches = CharacterDatas.filter((c) => {
    if (c.type == "crew") {
        let a = CharacterDataUtils.getAffiliation(c, "Brightside Crew");
        return a && !a.left;
    }
    return false;
});

const TheCrew = TheGang.concat(matches).sort(function(a, b) {
    return !a?.name || !b?.name ? 0
		: a?.name > b?.name ? 1
		: a?.name < b?.name ? -1
		: 0;
});

interface CrewRole {
	role: string;
	definition?: string;
	personId: string;
	person?: ICharacterData;
}

export default defineComponent({
	name: 'Ship',
	data() {
		return {
			definitions: {
				captain: "",
			},
			officerRoles: [
				{
					role: 'Captain',
					definition: "<p>People usually think that most pirate Captains commanded by an iron fist, but in most cases, it was not true. The pirate Captains were selected because they were respected, not feared. When selecting a Captain, the crew looked for someone capable of commanding and navigating a ship. Also, the Captain needed courage and skill in sword and pistol fighting.</p>																	<p>Captain had absolute control only in a battle. In everyday life, Captains did not have much more rights than any other crewmember. Even sail courses were determined by voting.</p>																															<p>In the Navy, captains and officers had military ranks. There was always a big gap between a common sailor and an officer. However, on a ship full of murderers, bandits, and thieves, most decisions were determined by voting! The Pirates were Democrats! They had their pirate ranks! On a pirate's ship, there was no such thing as a member of the privileged class. Everybody had the same rights, and their roles and duties were appointed according to their abilities and knowledge.</p>",
					personId: 'tero'
				},
				{
					role: 'Cook',
					personId: ''
				},
				{
					role: 'Enchanter',
					definition: "In charge of all ship's magical components and runes",
					personId: 'zuzu'
				},
				{
					role: 'Engineer',
					definition: "In charge of all ship's engines",
					personId: 'blackhand-roo'
				},
				{
					role: 'First Mate',
					definition: "First Mate ranks just below the Captain. They take control of the ship if the Captain can no longer perform their duties.",
					personId: ''
				},
				{
					role: 'Master Gunner',
					definition: "In charge of all ship's armaments",
					personId: 'bebop'
				},
				{
					role: 'Musician',
					personId: ''
				},
				{
					role: 'Navigator',
					personId: 'tero'
				},
				{
					role: 'Quartermaster',
					definition: "After Captain, the most authority on a pirate ship belongs to the Quartermaster. As a Captain's right hand, he is in charge when Captain is not around. He has the authority and can punish men for not obeying commands. The Quartermaster is also in charge of food and water supplies.",
					personId: 'hamisfore'
				},
				{
					role: 'Shipwright',
					personId: ''
				},
				{
					role: 'Surgeon',
					definition: "The Surgeon is the only medical officer on the ship and is assisted by one or more Surgeon's Mates (inferior warrant officers). They are responsible for the sick and injured, performing surgical operations as necessary and dispense medicine. They are required to keep a journal of treatment and advise the Captain on health matters.",
					personId: 'cobb'
				},
				{
					role: 'Tutor',
					personId: 'teacher-barbie'
				}
			] as CrewRole[]
		};
	},
	computed: {
		enlisted() {
			var results = [] as ICharacterData[];
			const assignedCrewMembers = this.officerIDs;

			TheCrew.forEach(c => {
				if (c?.id && !assignedCrewMembers.includes(c?.id)) {
					results.push(c);
				}
			})

			return results;
		},
		officers() {
			var filteredResults = this.officerRoles.slice();

			filteredResults.forEach(c => {
				c.person = CharacterDataUtils.findCharacterById(c.personId || "");
			})

			return filteredResults;
		},
		officerIDs() {
			return this.officerRoles.slice().map(a => a.personId);
		}
	},
	mounted() {
		Utils.LocalStorage.Dates.LastPageView.setNow("ShipCrewRoster");

		const exampleModal = document.getElementById('crewDefModal');
		if (exampleModal) {
			exampleModal.addEventListener('show.bs.modal', event => {
				// Button that triggered the modal
				// @ts-ignore
				const button = event.relatedTarget as HTMLButtonElement;

				// Extract info from data children
				const title = button.querySelector('.title')?.innerHTML;
				const definition = button.querySelector('.def')?.innerHTML;

				// Update the modal's content.
				const modalTitle = exampleModal.querySelector('.modal-body .def-title') as HTMLElement;
				const modalBody = exampleModal.querySelector('.modal-body .def-text') as HTMLElement;

				modalTitle.textContent = title ? title : "Error";
				modalBody.innerHTML = definition? definition : "Whoops! Encountered an error finding the definition.";
			})
		}
	},
});

</script>

<style scoped>
button.list-group-item .title,
.btn .title {
	position: relative;
}

button.list-group-item .title::after,
.btn .title::after {
	position: absolute;
	content: "ⓘ";
	opacity: 0.5;
	line-height: 1rem;
	height: 1rem;
	width: 1rem;
	font-size: 0.9rem;
	left: calc(100% + 0.3rem);
	top: 50%;
	transform: translateY(-50%);
}

.def {
	display: none;
}
</style>