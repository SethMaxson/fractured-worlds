<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";

const baseIcons: string[] = [];

const svgRepo = document.getElementById("svg-collection") as HTMLElement;
const symbols = [...svgRepo.querySelectorAll('symbol')];

symbols.forEach(symbol => {
	baseIcons.push(symbol.id);
});

const icons = baseIcons.sort();
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/gm/icons" />
		</header>
		<main>
			<div class="container fake-os py-4 px-5 px-sm-4 px-md-2 px-lg-4 text-center">
				<div class="row g-1 row-cols-3 row-cols-sm-4 row-cols-md-5 row-cols-lg-6">
					<div class="col" v-for="icon in icons" :svg="icon">
						<div class="w-100 h-100 p-2 border border-primary-subtle rounded">
							<div class="m-0 mb-1">
								<svg class="button-icon theme-color m-0">
									<use :href="'#' + icon"></use>
								</svg>
							</div>
							{{icon}}
						</div>
					</div>
				</div>
			</div>
		</main>
	</PageContainerVue>
</template>