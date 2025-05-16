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
			<Breadcrumb path="/world-pages" />
		</header>
		<main>
			<AppIconContainer>
				<AppIcon svg="globe2" to="/world-pages/battle-world" class="dev">Battle World</AppIcon>
				<AppIcon svg="globe2" to="/world-pages/haven" class="dev">Haven</AppIcon>
				<AppIcon svg="globe2" to="/world-pages/somewhere" class="dev">Somewhere</AppIcon>
				<AppIcon svg="globe2" to="/world-pages/weapon-world" class="dev">Weapon World</AppIcon>
			</AppIconContainer>
		</main>
	</PageContainerVue>
</template>