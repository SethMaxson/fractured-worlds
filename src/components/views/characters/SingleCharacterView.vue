<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import CharacterFullView from "./components/CharacterFullView.vue";

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import { useRoute } from "vue-router";

const props = defineProps({
	id: {
		type: String,
		required: true
	}
})

const queryPath = useRoute().query.path as string;

const path = (queryPath ? queryPath + "/" : "/people/") + props.id;
const person = CharacterDataUtils.findCharacter(CharacterDatas, props.id);
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
		</header>
		<main>
			<CharacterFullView :person="person" />
		</main>
	</PageContainerVue>
</template>

<style scoped lang="css">
.portrait {
	max-width: 100%;
}


/* reference https://www.dreamworks.com/how-to-train-your-dragon/explore/hiccup */
</style>