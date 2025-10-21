<script setup lang="ts">
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<main class="py-4">
			<!-- <h2>Us</h2> -->
			<AppIconContainer>
				<AppIcon svg="list" to="/accomplishments" class="dev">Accomplishments</AppIcon>
				<AppIcon svg="menu-button-wide-fill" to="/dashboard" class="dev">Dashboard</AppIcon>
				<AppIcon svg="user2" to="/people">People</AppIcon>
				<AppIcon svg="relationship" to="/relationships" class="h-100 dev">Relationships</AppIcon>
				<AppIcon svg="anchor" to="/ship">Ship</AppIcon>
				<AppIcon svg="suitcase-bag" to="/inventory">Inventory</AppIcon>
				<AppIcon svg="contacts-book" to="/contacts">Contacts</AppIcon>
				<AppIcon svg="timeline" to="/timeline" class="dev">NPC Timeline</AppIcon>
				<AppIcon svg="handshake" to="/perks">Banes & Boons</AppIcon>
				<AppIcon svg="reviews-person" to="/reviews">Yep! Reviews</AppIcon>
			</AppIconContainer>
			<h2>Other People</h2>
			<AppIconContainer>
				<AppIcon svg="people" to="/factions">Factions</AppIcon>
				<AppIcon svg="user2" to="/people">People</AppIcon>
			</AppIconContainer>
			<h2>Journal</h2>
			<AppIconContainer>
				<!-- <AppIcon svg="book-half" to="/journal">Journal</AppIcon> -->
				<AppIcon svg="letter" to="/journal/letters"> Letters </AppIcon>
				<AppIcon svg="book-half" to="/journal/log" class="dev"> Log </AppIcon>
				<AppIcon svg="question" to="/journal/mysteries"> Mysteries </AppIcon>
				<AppIcon svg="timeline" to="/journal/timeline"> Timeline </AppIcon>
				<AppIcon svg="anchor" to="/journal/world-anchors"> World Anchors </AppIcon>
			</AppIconContainer>
			<h2>About Voidspace</h2>
			<AppIconContainer>
				<AppIcon svg="calendar" to="/calendar">Calendar</AppIcon>
				<AppIcon svg="paths" to="/world-map" class="h-100 dev">World Map</AppIcon>
				<AppIcon svg="globe2" to="/worlds">Worlds</AppIcon>
				<AppIcon svg="globe2" to="/world-pages" class="dev">World Pages</AppIcon>
				<AppIcon svg="compass-rose" to="/explorers-guide">Explorer's Guide</AppIcon>
				<AppIcon svg="link" to="/links">External Links</AppIcon>
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