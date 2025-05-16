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
			<!-- <ViewBlurb header="Lightship">
				
			</ViewBlurb> -->
			<Breadcrumb path="/world-pages/somewhere" />
		</header>
		<main>
			<AppIconContainer>
				<AppIcon svg="people" to="/world-pages/somewhere/about">About (Tourism Information)</AppIcon>
				<AppIcon svg="anchor" to="/world-pages/somewhere/shopping" class="dev"> Shopping (Mall Map & Directory)</AppIcon>
			</AppIconContainer>
		</main>
	</PageContainerVue>
</template>