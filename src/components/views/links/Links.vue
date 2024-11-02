<script setup lang="ts">
import Link from "../../core/Link.vue";
import ViewBlurb from "../../core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="External Links">
				Links to various useful pages outside of this web app.
			</ViewBlurb>
		</header>
		<main>
			<div class="list-group">
				<Link href="https://www.owlbear.app/room/0AfRzE9Ukr3T/TheWindyPort" class="list-group-item list-group-item-action" :absolute-url="true">
					<div class="d-flex w-100 justify-content-between">
						<h6 class="mb-1">Battle Map/VTT</h6>
						<small>owlbear.app</small>
					</div>
					<small>A page that is used to host and view interactive maps for this campaign.</small>
				</Link>
				<Link href="https://pathbuilder2e.com/" class="list-group-item list-group-item-action" :absolute-url="true">
					<div class="d-flex w-100 justify-content-between">
						<h6 class="mb-1">Character Creation/Management</h6>
						<small>pathbuilder2e.com</small>
					</div>
					<small>An application that allows for characters in this campaign to be created or edited.</small>
				</Link>
				<Link href="https://2e.aonprd.com/" class="list-group-item list-group-item-action" :absolute-url="true">
					<div class="d-flex w-100 justify-content-between">
						<h6 class="mb-1">Rules & Reference</h6>
						<small>2e.aonprd.com</small>
					</div>
					<small>Archives of Nethys is a comprehensive online resource for Pathfinder 1st and 2nd editions, with official errata, FAQs, and search engine. Find rules, monsters, feats, spells, and more for your gaming needs.</small>
				</Link>
				<Link href="https://sethmaxson.github.io/dnd/tiddlywiki/public.html" class="list-group-item list-group-item-action" :absolute-url="true">
					<div class="d-flex w-100 justify-content-between">
						<h6 class="mb-1">World Wiki</h6>
						<small>sethmaxson.github.io</small>
					</div>
					<small>A wiki containing information about the world of the campaign.</small>
				</Link>
			</div>
		</main>
	</PageContainerVue>
</template>
