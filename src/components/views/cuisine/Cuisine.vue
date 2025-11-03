<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "../../core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import { Recipes } from "@/data/recipes";
import { Utils } from "@/scripts/utils";
import { useRoute } from "vue-router";
import type { IRecipe } from "@/interfaces/IRecipe";

const refPath = Utils.String.sanitizeUrl(useRoute().path);

const getHref = function(recipe: IRecipe) {
	return `/cuisine/${recipe.id}?path=${refPath}`
}
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/cuisine" />
			<ViewBlurb header="Cuisine">
				Recipes and such.
			</ViewBlurb>
		</header>
		<main>
			<div class="list-group">
				<router-link v-for="r in Recipes" :key="r.id" :to="getHref(r)" class="list-group-item list-group-item-action">
					<div class="d-flex w-100 justify-content-between">
						<h6 class="mb-1">{{r.name}}</h6>
						<small>{{r.author}}</small>
					</div>
					<small>{{r.summary}}</small>
				</router-link>
			</div>
		</main>
	</PageContainerVue>
</template>
