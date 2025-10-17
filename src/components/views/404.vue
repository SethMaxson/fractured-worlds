<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import Image from "@/components/core/Image.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/not-found" />
		</header>
		<main class="pt-5 pb-3">
			<h2 class="text-warning text-center">Page Not Found</h2>
			<div class="p-2 pb-5 text-center fst-italic fs-5">
				The requested page could not be found.

				<Image class="d-block mx-auto mt-5" style="height:400px; width: 400px;" src="img/tokens/nihil.webp" />
			</div>
		</main>
	</PageContainerVue>
</template>