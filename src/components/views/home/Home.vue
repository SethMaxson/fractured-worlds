<script setup lang="ts">
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<main>
			<AppIconContainer>
				<AppIcon svg="user2" to="/people">People</AppIcon>
				<AppIcon svg="people" to="/factions">Factions</AppIcon>
				<AppIcon svg="relationship" to="/relationships" class="h-100 dev">Relationships</AppIcon>
				<AppIcon svg="anchor" to="/ship">Ship</AppIcon>
				<AppIcon svg="paths" to="/world-map" class="h-100 dev">World Map</AppIcon>
				<AppIcon svg="globe2" to="/worlds">Worlds</AppIcon>
				<AppIcon svg="globe2" to="/world-pages" class="dev">World Pages</AppIcon>
				<AppIcon svg="compass-rose" to="/explorers-guide">Explorer's Guide</AppIcon>
				<AppIcon svg="book-half" to="/journal/mysteries">Journal</AppIcon>
				<AppIcon svg="suitcase-bag" to="/inventory">Inventory</AppIcon>
				<AppIcon svg="calendar" to="/calendar">Calendar</AppIcon>
				<AppIcon svg="contacts-book" to="/contacts">Contacts</AppIcon>
				<AppIcon svg="reviews-person" to="/reviews">Yep! Reviews</AppIcon>
				<AppIcon svg="handshake" to="/perks" class="h-100 dev">Banes & Boons</AppIcon>
				<AppIcon svg="link" to="/links">External Links</AppIcon>
			</AppIconContainer>
		</main>
	</PageContainerVue>
</template>