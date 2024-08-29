<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import WorldInfo from "./components/WorldInfo.vue";
import WorldIcon from "./components/WorldIcon.vue";
</script>

<template>
	<PageContainerVue :isWide="true" class="full-screen px-0">
		<main class="vw-100">
			<WorldIcon
			/>
		</main>
	</PageContainerVue>
</template>