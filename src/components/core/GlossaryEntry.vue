<script setup lang="ts">
import { Glossary } from "@/data/glossary";

const props = defineProps({
	aka: {
		type: String,
		required: false
	},
	class: {
		type: String,
		required: false
	},
	definition: {
		type: Array<String>,
		required: false
	},
	image: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	isLastInList: {
		type: Boolean,
		required: false,
		default: false
	},
})

const entry = Glossary.find(e => e.name.toLowerCase() == props.name.toLowerCase());
const aka = entry?.aka? entry.aka : props.aka;
const definition = (entry?.definition? entry.definition : props.definition) || [""];
</script>

<template>
	<template v-if="entry && definition.length > 0">
		<dt class="col-sm-3" :class="class">
			{{name}}
			<p class="aka d-sm-inline" v-if="aka">{{aka}}</p>
		</dt>
		<dd class="col-sm-9">
			<template v-if="definition.length > 1">
				<p v-for="(item, index) in definition">
					{{ item }}
				</p>
			</template>
			<template v-else>
				{{ definition[0] }}
			</template>
		</dd>
		<hr v-if="!isLastInList" />
	</template>
</template>

<script lang="ts">
export default {
  name: 'GlossaryEntry'
}
</script>

<style scoped>
	.aka {
		font-style: italic;
		font-size: 0.9rem;
		font-weight: normal;
		margin: 0 0 0.25rem 0;
	}
	.aka::before { content: '(also called: '; }
	.aka::after { content: ')'; }

	.gm-only {
		/* color: yellow; */
		background-color: rgba(100, 100, 0, 0.5);
	}
	.gm-only.row {
		margin: 0;
		padding: 0;
	}

	hr { 
		margin: 0.5rem 0;
	}

	@media (min-width: 576px) {
		hr { margin: 0.25rem 0; }
		.aka { margin: unset; }
	}
</style>
