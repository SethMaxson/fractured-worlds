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
			<div v-if="recipe">
				<div class="accordion" id="recipe-accordion">
					<AccordionItem name="Ingredients" parent-id="recipe-accordion" :default-open="true">
						<ul class="list-group list-group-flush">
							<li class="list-group-item" v-for="i in recipe.ingredients" :key="i">
								{{ i }}
							</li>
						</ul>
						<!-- <ul>
							<li class="mb-1" v-for="i in recipe.ingredients" :key="i">
								{{ i }}
							</li>
						</ul> -->
					</AccordionItem>
					<AccordionItem name="Directions" parent-id="recipe-accordion">
						<ol class="list-group list-group-numbered list-group-flush">
							<li class="list-group-item" v-for="i in recipe.instructions" :key="i">
								{{ i }}
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