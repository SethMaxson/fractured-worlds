<script setup lang="ts">
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<main>
			<!-- <h2>Us</h2> -->
			<AppIconContainer>
				<AppIcon svg="question" to="/faq">FAQ</AppIcon>
				<AppIcon svg="user2" to="/people">People</AppIcon>
				<AppIcon svg="anchor" to="/ship">Ship</AppIcon>
				<AppIcon svg="suitcase-bag" to="/inventory">Inventory</AppIcon>
				<AppIcon svg="contacts-book" to="/contacts">Contacts</AppIcon>
				<AppIcon svg="handshake" to="/perks">Banes & Boons</AppIcon>
				<AppIcon svg="reviews" to="/reviews"><span class="yep">YEP!</span> Reviews</AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start">People</h5>
				<AppIcon svg="people" to="/factions">Factions</AppIcon>
				<AppIcon svg="user2" to="/people">People</AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start">Journal</h5>
				<!-- <AppIcon svg="book-half" to="/journal">Journal</AppIcon> -->
				<AppIcon svg="letter" to="/journal/letters"> Letters </AppIcon>
				<AppIcon svg="book-half" to="/journal/log" class="dev"> Log </AppIcon>
				<AppIcon svg="todo" to="/journal/mysteries"> Mysteries </AppIcon>
				<AppIcon svg="timeline" to="/journal/timeline"> Timeline </AppIcon>
				<AppIcon svg="anchor" to="/journal/world-anchors"> World Anchors </AppIcon>				

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start">About Voidspace</h5>
				<AppIcon svg="calendar" to="/calendar">Calendar</AppIcon>
				<AppIcon svg="globe2" to="/worlds">Worlds</AppIcon>
				<AppIcon svg="compass-rose" to="/explorers-guide">Explorer's Guide</AppIcon>
				<AppIcon svg="link" to="/links">External Links</AppIcon>

				<h5 class="w-100 pt-3 pt-lg-4 m-0 col-5 text-start dev">In Development</h5>
				<AppIcon svg="list" to="/accomplishments" class="dev">Accomplishments</AppIcon>
				<AppIcon svg="relationship" to="/relationships" class="h-100 dev">Relationships</AppIcon>
				<AppIcon svg="timeline" to="/timeline" class="dev">NPC Timeline</AppIcon>
				<AppIcon svg="settings" to="/settings" class="dev">Settings</AppIcon>
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