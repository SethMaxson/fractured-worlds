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
			<Breadcrumb path="/journal" />
		</header>
		<main>
			<AppIconContainer>
				<AppIcon svg="letter" to="/journal/letters"> Letters </AppIcon>
				<AppIcon svg="book-half" to="/journal/log" class="dev"> Log </AppIcon>
				<AppIcon svg="todo" to="/journal/mysteries"> Mysteries </AppIcon>
				<AppIcon svg="timeline" to="/journal/timeline"> Timeline </AppIcon>
				<AppIcon svg="anchor" to="/journal/world-anchors"> World Anchors </AppIcon>
			</AppIconContainer>
		</main>
	</PageContainerVue>
</template>