<script setup lang="ts">
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import { AppState } from "@/data/app-state";
import { GameStrings } from "@/scripts/game-strings";
import { Utils } from "@/scripts/utils";

function notification(pageName: keyof typeof AppState.PageMostRecentUpdates) {
	return Utils.Pages.hasNotification(pageName, AppState.PageMostRecentUpdates[pageName] as Date);
}
</script>

<template>
	<PageContainerVue>
		<main>
			<!-- <h2>Us</h2> -->
			<AppIconContainer>
				<div class="col">
					<button
						type="button"
						class="w-100 h-100 nav-link px-1 px-lg-3 pb-1 pt-2 p-lg-3 border border-primary-subtle rounded position-relative btn"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasSettings"
					>
						<div class="d-none d-lg-block m-0 mb-1 ratio ratio-1x1">
							<svg class="button-icon theme-color m-0 p-0">
								<use href="#settings"></use>
							</svg>
						</div>
						<div class="d-lg-none m-0 px-2 py-0 ratio ratio-1x1">
							<svg class="button-icon theme-color">
								<use href="#settings"></use>
							</svg>
						</div>
						<div class="p-0 m-0 small">Settings</div>
					</button>
				</div>
				<AppIcon svg="question" to="/faq">FAQ</AppIcon>
				<AppIcon svg="user2" to="/people" :notification="notification('People')">People</AppIcon>
				<AppIcon svg="brightside" to="/ship" :notification="notification('ShipCrewCards') || notification('ShipCrewRoster') || notification('ShipStats')">Ship</AppIcon>
				<AppIcon svg="suitcase-bag" to="/inventory">Inventory</AppIcon>
				<AppIcon svg="handshake" to="/perks">Banes & Boons</AppIcon>
				<AppIcon svg="reviews" to="/reviews" :notification="notification('Reviews')"><span class="yep">YEP!</span> Reviews</AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start">People</h5>
				<AppIcon svg="contacts-book" to="/contacts" :notification="notification('Contacts')">Contacts</AppIcon>
				<AppIcon svg="people" to="/factions">Factions</AppIcon>
				<AppIcon svg="chat" to="/interviews" :notification="notification('Interviews')">Interviews</AppIcon>
				<AppIcon svg="user2" to="/people" :notification="notification('People')">People</AppIcon>
				<AppIcon svg="relationship" to="/relationships" :notification="notification('Relationships')">Relationships</AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start">Journal</h5>
				<!-- <AppIcon svg="book-half" to="/journal">Journal</AppIcon> -->
				<AppIcon svg="letter" to="/journal/letters"> Letters </AppIcon>
				<AppIcon svg="book-half" to="/journal/log" class="dev"> Log </AppIcon>
				<AppIcon svg="todo" to="/journal/mysteries" :notification="notification('QuestLog')"> Mysteries </AppIcon>
				<AppIcon svg="timeline" to="/journal/timeline" :notification="notification('Timeline')"> Timeline </AppIcon>
				<AppIcon svg="anchor" to="/journal/world-anchors"> World Anchors </AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start">About Voidspace</h5>
				<AppIcon svg="calendar" to="/calendar">Calendar</AppIcon>
				<AppIcon svg="globe2" to="/worlds">Worlds</AppIcon>
				<AppIcon svg="paths" to="/voidspace-map" :notification="notification('VoidspaceMap')">Voidspace Map</AppIcon>
				<AppIcon svg="compass-rose" to="/explorers-guide" :notification="notification('ExplorersGuide')">Explorer's Guide</AppIcon>
				<AppIcon svg="link" to="/links">External Links</AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start dev">In Development</h5>
				<AppIcon svg="list" to="/accomplishments" class="dev">Accomplishments</AppIcon>
				<AppIcon svg="timeline" to="/timeline" class="dev">NPC Timeline</AppIcon>
				<AppIcon svg="paths" to="/world-map" class="h-100 dev">World Map</AppIcon>
				<AppIcon svg="globe2" to="/world-pages" class="dev">World Pages</AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start dev">Planned</h5>
				<AppIcon svg="chef-hat" to="/cuisine" class="dev">Cuisine</AppIcon>
				<AppIcon svg="menu-button-wide-fill" to="/dashboard" class="dev">Dashboard</AppIcon>
			</AppIconContainer>
			<h2 class="dev">Developer Pages</h2>
			<AppIconContainer class="dev">
				<AppIcon svg="list" to="/gm" class="dev">Index</AppIcon>
				<AppIcon svg="grid-fill" to="/gm/icons" class="dev">Icons List</AppIcon>
				<AppIcon svg="file-earmark-richtext" to="/gm/page-index" class="dev">Site Page List</AppIcon>
			</AppIconContainer>
		</main>
	</PageContainerVue>
</template>