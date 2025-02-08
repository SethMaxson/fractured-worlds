<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import { GameStrings } from "@/scripts/game-strings";

const routerLinkClass = "w-100 h-100 nav-link px-3 pb-1 pt-0 p-lg-3 border border-primary-subtle rounded";
const svgClass = "bi m-0";
const svgDivClass = "m-0 mb-lg-1 p-0 p-lg-2";
</script>

<template>
	<PageContainerVue>
		<main>
			<div class="container py-4 px-5 px-sm-4 px-md-2 px-lg-4 text-center">
				<div class="row g-3 g-lg-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
					<div class="col">
						<router-link :class="routerLinkClass" to="/people">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#user2"></use>
								</svg>
							</div>
							People
						</router-link>
					</div>
					<div class="col">
						<router-link :class="routerLinkClass" to="/factions">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#people"></use>
								</svg>
							</div>
							Factions							
						</router-link>
					</div>
					<div class="col h-100 dev">
						<router-link :class="routerLinkClass" to="/relationships">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#relationship"></use>
								</svg>
							</div>
							Relationships
						</router-link>
					</div>
					<div class="col h-100 dev">
						<router-link :class="routerLinkClass" to="/ship">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#anchor"></use>
								</svg>
							</div>
							Ship
						</router-link>
					</div>
					<div class="col h-100 dev">
						<router-link :class="routerLinkClass" to="/world-map">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#paths"></use>
								</svg>
							</div>
							World Map
						</router-link>
					</div>
					<div class="col">
						<router-link :class="routerLinkClass" to="/worlds"> 
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#globe2"></use>
								</svg>
							</div>
							Worlds
						</router-link>
					</div>
					<div class="col">
						<router-link :class="routerLinkClass" to="/explorers-guide">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#compass-rose"></use>
								</svg>
							</div>
							Explorer's Guide
						</router-link>
					</div>
					<div class="col">
						<router-link :class="routerLinkClass" to="/journal/mysteries">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#book-half"></use>
								</svg>
							</div>
							Journal
						</router-link>
					</div>
					<div class="col h-100 dev">
						<router-link :class="routerLinkClass" to="/perks">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#handshake"></use>
								</svg>
							</div>
							Banes & Boons
						</router-link>
					</div>
					<div class="col">
						<router-link :class="routerLinkClass" to="/links">
							<div :class="svgDivClass">
								<svg :class="svgClass">
									<use href="#link"></use>
								</svg>
							</div>
							External Links
						</router-link>
					</div>
				</div>
			</div>
		</main>
	</PageContainerVue>
</template>

<style scoped>
.bi {
  max-width: 100%;
  max-height: 100%;
  /* vertical-align: -.125em; */
  fill: currentcolor;
}

.col {
	text-decoration: underline;
}
</style>