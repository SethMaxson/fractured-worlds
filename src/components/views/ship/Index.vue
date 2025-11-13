<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
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
		<header>
			<!-- <ViewBlurb header="Lightship">
				
			</ViewBlurb> -->
			<Breadcrumb path="/ship" />
		</header>
		<main>
			<AppIconContainer>
				<AppIcon svg="people" to="/ship/crew" :notification="notification('ShipCrewRoster')">Crew</AppIcon>
				<AppIcon svg="brightside" to="/ship/ship" :notification="notification('ShipStats')">Ship</AppIcon>
				<AppIcon svg="card" to="/ship/crew-cards" :notification="notification('ShipCrewCards')">Trading Cards/Stats</AppIcon>
			</AppIconContainer>
		</main>
	</PageContainerVue>
</template>