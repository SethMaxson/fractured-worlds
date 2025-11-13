<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import WorldInfo from "./components/WorldInfo.vue";
import WorldIcon from "./components/WorldIcon.vue";
import Image from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import { onMounted } from "vue";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("VoidspaceMap");
})
</script>

<template>
	<PageContainerVue>
		<main>
			<div class="text-center">
				<Image src="img/maps/voidspace.png" />
			</div>
		</main>
	</PageContainerVue>
</template>