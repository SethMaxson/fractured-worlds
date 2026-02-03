<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import { GameStrings } from "@/scripts/game-strings";
import { onMounted } from "vue";
import { Utils } from "@/scripts/utils";

onMounted(() => {
	
Utils.LocalStorage.Dates.LastPageView.setNow("WorldAnchors");

const list = document.querySelector('.sortable-list');
let draggingItem: HTMLElement|null = null;

list?.addEventListener('dragstart', (e) => {
	draggingItem = e.target as HTMLElement;
	(e.target as HTMLElement).classList.add('dragging');
});

list?.addEventListener('dragend', (e) => {
	(e.target as HTMLElement).classList.remove('dragging');
	document.querySelectorAll('.sortable-item').forEach(item => item.classList.remove('over'));
	draggingItem = null;
});

list?.addEventListener('dragover', (e) => {
	e.preventDefault();
	const draggingOverItem = getDragAfterElement(list as HTMLElement, (e as DragEvent).clientY);

	// Remove .over from all items
	document.querySelectorAll('.sortable-item').forEach(item => item.classList.remove('over'));

	if (draggingOverItem) {
		draggingOverItem.classList.add('over'); // Add .over to the hovered item
		list.insertBefore(draggingItem as HTMLElement, draggingOverItem);
	} else {
		list.appendChild(draggingItem as HTMLElement); // Append to the end if no item below
	}
});

function getDragAfterElement(container: HTMLElement, y: number) {
	const draggableElements = [...container.querySelectorAll('.sortable-item:not(.dragging)')];

	return draggableElements.reduce((closest, child) => {
		const box = child.getBoundingClientRect();
		const offset = y - box.top - box.height / 2;
		if (offset < 0 && offset > closest.offset) {
			return { offset: offset, element: child };
		} else {
			return closest;
		}
		//@ts-ignore
	}, { offset: Number.NEGATIVE_INFINITY }).element;
}
})
</script>

<template>
	<PageContainerVue>
		<!-- <JournalHeader /> -->
		<header>
			<Breadcrumb path="/journal/world-anchors" />
			<ViewBlurb header="">
				The text we've discovered on World Anchors.
			</ViewBlurb>
		</header>
		<main>
			<ul class="list-group px-3 list-group-flush prevent-select sortable-list">
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"The heavens shattered in the world"
					</div>
					<span class="badge text-bg-info rounded-pill">Wonderland</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"contain its power. It struggled 'gainst its"
					</div>
					<span class="badge text-bg-info rounded-pill">Big Apple</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"three. They bargained with the Father of Void to"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-secondary rounded-pill me-1">Shared by NLE</span>
						<span class="badge text-bg-info rounded-pill">???</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"Decay. The Father of Decay awoke from his slumber in"
					</div>
					<span class="badge text-bg-info rounded-pill">Land of Oz</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"cracks, thus do the drifting fragments of worlds still slowly"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-secondary rounded-pill me-1">Shared by NLE</span>
						<span class="badge text-bg-info rounded-pill">Tokyo 2007</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"Void and Decay birthed great Chaos. The Chaos angered"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Weapon World</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"to spread decay and extinguish all that ever was."
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Berk</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"three wayfinding keystones from among the lights that point the"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Duloc Outlands</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"unworthy to seek it is vanity. The worthy shall know of the Fated"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Battle World</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"World: that it exists. The worthy shall gather keystones with which"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Treasure Island</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"that binds worlds shall point towards the Fated World, but for the"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Barbieland</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"way. By doing these things shall one be made worthy, and the secret road"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Looney Tune Land</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"All shall fade to naught, for the Heart lies in the Belly of the Father"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Shaolin Soccer</span>
					</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-start sortable-item" draggable="true">
					<div class="me-auto">
						"where it happened and in all worlds besides. All that remains drifts e'er"
					</div>
					<span class="m-0 p-0">
						<span class="badge text-bg-info rounded-pill">Sanctuary</span>
					</span>
				</li>
			</ul>
		</main>
	</PageContainerVue>
</template>

<style>
/* .sortable-list {
	list-style: none;
	padding: 0;
	width: 350px;
	margin: auto;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
} */
.sortable-item {
	/* padding: 15px 20px;
	margin: 8px 0;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
	font-size: 1.1em;
	color: #333;
	font-weight: bold; */
	cursor: grab;
	/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
	transition: background 0.2s, transform 0.2s;
}
.sortable-item:hover {
	background: #e8f0ff;
	transform: scale(1.03);
}
.dragging {
	opacity: 0.7;
	transform: rotate(-2deg);
}
.over {
	border: 2px dashed #ff8c42;
	background: #fff3e0;
}
</style>