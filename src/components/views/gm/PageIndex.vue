<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";
import { useRouter } from "vue-router";

const baseIcons: string[] = [];

const svgRepo = document.getElementById("svg-collection") as HTMLElement;
const symbols = [...svgRepo.querySelectorAll('symbol')];

symbols.forEach(symbol => {
	baseIcons.push(symbol.id);
});


const rawRoutes = useRouter().getRoutes();

const routes = rawRoutes.sort();
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/gm/page-index" />
		</header>
		<main>
			<div class="container py-4 px-5 px-sm-4 px-md-2 px-lg-4">
				<ul class="list-group">
					<li class="list-group-item" v-for="route in rawRoutes">
						<div class="row">
							<div class="col">
								{{ route.path }}
							</div>
							<div class="col">
								{{ route.name }}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</main>
	</PageContainerVue>
</template>