<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import WorldInfo from "./components/WorldInfo.vue";
import WorldIcon from "./components/WorldIcon.vue";
import Image from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import { onMounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("VoidspaceMap");
})
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb />
			<ViewBlurb header="Voidspace Map" author="Susie">
				This is a map of Voidspace as we currently understand it.
			</ViewBlurb>
		</header>
		<main>
			<div class="text-center">
				<Image class="img-fluid" src="img/maps/voidspace.png" />
			</div>
		</main>
	</PageContainerVue>
</template>