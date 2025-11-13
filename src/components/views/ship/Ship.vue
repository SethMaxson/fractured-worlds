<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/ship/ship" />
			<ViewBlurb header="The Brightside">
				A brief summary of our current vessel, the Brightside.
			</ViewBlurb>
		</header>
		<main>

			<!-- Ship Part Info Modal -->
			<div class="modal" id="spiModal" tabindex="-1" aria-labelledby="spiModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-6" id="spiModalLabel">Definition</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<b class="def-title">...</b> -
							<span class="def-text"></span>
						</div>
					</div>
				</div>
			</div>

			<!-- <div class="row g-2 g-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3"> -->
			<div class="row g-2 g-lg-4 row-cols-1 row-cols-md-2">

				<!-- Essential Components -->
				<div class="col">
					<button type="button" class="btn p-0 mb-1" data-bs-toggle="modal" data-bs-target="#spiModal">
						<h5 class="title"> Essential Components </h5>
						<span class="def">These are the bare minimum for a functional lightship. The ship would be nothing but a paper weight if it lost any of these.</span>
					</button>

					<div class="list-group">
						
						<button
							type="button"
							class="list-group-item list-group-item-action"
							data-bs-toggle="modal"
							data-bs-target="#spiModal"
							v-for="entry in definitions.essential"
						>
							<span class="title">{{ entry.name }}</span>
							<span class="def">{{ entry.definition.join("") }}</span>
						</button>
					</div>


				</div>

				<!-- Rune Circuits -->
				<div class="col">
					<!-- Button trigger modal -->
					<button type="button" class="btn p-0 mb-1" data-bs-toggle="modal" data-bs-target="#spiModal">
						<h5 class="title"> Rune Circuits </h5>
						<span class="def">Glowing runes etched into the ship to fulfill a specific need.</span>
					</button>


					<div class="list-group">
						<button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#spiModal">
							<span class="title">Anchor Circuit</span>
							<span class="def">{{ definitions.circuits.anchor }}</span>
						</button>
						<button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#spiModal">
							<span class="title">Chameleon Circuit</span>
							<span class="def">{{ definitions.circuits.chameleon }}</span>
						</button>
						<button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#spiModal">
							<span class="title">Gravity Circuit</span>
							<span class="def">{{ definitions.circuits.gravity }}</span>
						</button>
						<li class="list-group-item p-0">
							<ul class="list-group list-group-horizontal">
								<button type="button" class="list-group-item list-group-item-action border-0 border-end" data-bs-toggle="modal" data-bs-target="#spiModal">
									<span class="title">Language Circuit</span>
									<span class="def">{{ definitions.circuits.language }}</span>
								</button>
								<button type="button" class="list-group-item list-group-item-action border-0"> Greater </button>
							</ul>
						</li>
					</div>
				</div>

			</div>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Glossary } from "@/data/glossary";
import type { IGlossaryEntry } from "@/interfaces/IGlossaryEntry";
import { Utils } from "@/scripts/utils";

export default defineComponent({
	name: 'Ship',
	data() {
		return {
			definitions: {
				essential: [
					getGlossaryEntry("Bubble Coating"),
					getGlossaryEntry("Optical Resonator"),
					getGlossaryEntry("Register Basin"),
				] as IGlossaryEntry[],
				circuits: {
					anchor: getDefinition("Anchor Circuit"),
					chameleon: getDefinition("Chameleon Circuit"),
					gravity: getDefinition("Gravity Circuit"),
					language: getDefinition("Language Circuit"),
				},
			}
		};
	},
	mounted() {
		Utils.LocalStorage.Dates.LastPageView.setNow("ShipStats");

		const exampleModal = document.getElementById('spiModal');
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

function getGlossaryEntry(name: string) {
	return Glossary.find(e => e.name.toLowerCase() == name.toLowerCase());
}

function getDefinition(name: string): string {
	return (getGlossaryEntry(name)?.definition || [""]).join("");
}

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