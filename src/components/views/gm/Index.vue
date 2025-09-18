<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/gm" />
		</header>
		<main>
			<AppIconContainer>
				<AppIcon svg="people" to="/gm/emptiness-saves">Crew Emptiness Saves</AppIcon>
				<AppIcon svg="list" to="/gm/tables">Random Tables</AppIcon>
			</AppIconContainer>
		</main>
	</PageContainerVue>
</template>