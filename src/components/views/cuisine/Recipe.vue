<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";

import { useRoute } from "vue-router";
import { Recipes } from "@/data/recipes";
import AccordionItem from "@/components/core/AccordionItem.vue";

const props = defineProps({
	id: {
		type: String,
		required: true
	}
})

const queryPath = useRoute().query.path as string;

const path = (queryPath ? queryPath + "/" : "/cuisine/") + props.id;
const hits = Recipes.filter(r => r.id == props.id);
const recipe = hits && hits.length > 0 ? hits[0] : undefined;
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
		</header>
		<main>
			<div class="py-2" v-if="recipe">
				<h6>Ingredients</h6>
				<div class="ingredients mb-2">
					<div v-for="ingredient, i in recipe.ingredients" :key="ingredient">
						<input class="form-check-input me-2" type="checkbox" :id="'ingredient'+i">
						<label class="form-check-label" :for="'ingredient'+i">{{ingredient}}</label>
					</div>
				</div>
				<div class="accordion" id="recipe-accordion">
					<AccordionItem name="Directions" parent-id="recipe-accordion">
						<ol class="list-group list-group-numbered list-group-flush instructions">
							<li class="list-group-item" v-for="step, i in recipe.instructions" :key="step">
								<!-- <input class="form-check-input me-2" type="checkbox" :id="'step'+i">
								<label class="form-check-label" :for="'step'+i">{{ step }}</label> -->
								{{ step }}
							</li>
						</ol>
						<!-- <ol>
							<li class="mb-2" v-for="i in recipe.instructions" :key="i">
								{{ i }}
							</li>
						</ol> -->
					</AccordionItem>
					<AccordionItem name="About" parent-id="recipe-accordion">
						<figure>
							<blockquote class="blockquote">
								<p v-for="par, i in recipe.originWriteUp" :key="'paragraph-'+i">
									{{ par }}
								</p>
							</blockquote>
							<div class="blockquote-footer text-end fw-normal">{{recipe.author}}</div>
						</figure>
					</AccordionItem>
				</div>
			</div>
			<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
				Whoops! Couldn't find the selected recipe!
			</div>
		</main>
	</PageContainerVue>
</template>

<style lang="css">
.ingredients {
	column-count: 2;
	font-size: 0.8rem;
}

.instructions .form-check-label,
.ingredients .form-check-label {
	display: inline;
}

@media (min-width: 992px) {
	.ingredients {
		column-count: 3;
		font-size: 1rem;
	}	
}
</style>