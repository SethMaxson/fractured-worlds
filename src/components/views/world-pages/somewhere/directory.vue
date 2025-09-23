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
			<Breadcrumb path="/world-pages/somewhere/shopping" />
		</header>
		<main>
			<div class="p-4">
				At the time of our last data refresh, these stores and services were available.
			</div>
			<div class="container px-4 text-start">
				<div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
					<div class="col order-first">
						<h4>Apparel</h4>
						<ul>
							<li>Hairy's Headwarmers (haberdasher)</li>
							<li>The Posh Potato (tailor)</li>
							<li>The Ruby Slipper (cobbler)</li>
							<li>Tommy's Closet: In the Bag (handbags)</li>
						</ul>
					</div>
					<div class="col order-3 order-lg-4">
						<h4>Arms & Armor</h4>
						<ul>
							<li>Cold Steel (blacksmith)</li>
							<li>The Bing Bang (black powder)</li>
						</ul>
					</div>
					<div class="col pe-5 order-2">
						<h4>City Services</h4>
						<ul>
							<li>Information</li>
							<li>Library</li>
							<li>Sheriff</li>
							<li>Temple</li>
						</ul>
					</div>
					<div class="col pe-5 order-4 order-lg-5">
						<h4>Food</h4>
						<ul>
							<li>Bleemo</li>
							<li>Bört Bört Bïstro</li>
							<li>Café Somewhere</li>
							<li>Hotel Somewhere</li>
							<li>McDonald's</li>
							<li>Pizza Hut</li>
							<li>Public Ovens</li>
							<li>Starbucks</li>
							<li>Steamed Hams</li>
						</ul>
					</div>
					<div class="col order-5 order-lg-3">
						<h4>Lodging</h4>
						<ul>
							<li>Apartments</li>
							<li>Big Blue Bed & Breakfast</li>
							<li>Hotel Somewhere</li>
							<li>Refuge Row</li>
						</ul>
					</div>
					<div class="col order-last order-lg-6">
						<h4>Misc.</h4>
						<ul>
							<li>7-11 (general store)</li>
							<li>Arena</li>
							<li>Bathhouse</li>
							<li>Copper General (general store)</li>
							<li>Doctor</li>
							<li>Explorer's Guild</li>
							<li>Frost Lord's Bounty (jewels & accessories)</li>
							<li>Geppetto's (toys)</li>
							<li>The Happs (newspaper)</li>
							<li>Hooper's (general store)</li>
							<li>Print Shoppe</li>
							<li>Ship Stuff (lightship parts & repairs)</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	</PageContainerVue>
</template>