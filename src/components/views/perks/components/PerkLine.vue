<script setup lang="ts">
import { Perks } from "@/data/perks";

const props = defineProps({
	class: {
		type: String,
		required: false
	},
	affectedScore: {
		type: String,
		required: false
	},
	value: {
		type: String,
		required: false,
		default: 0
	},
	name: {
		type: String,
		required: true
	},
	source: {
		type: String,
		required: false
	}
})

const perk = Perks.find(e => e.name.toLowerCase() == props.name.toLowerCase());
const rawValue = perk?.value || Number.parseInt(props.value);
const formattedValue = (rawValue < 0 ? '-' : '+') + rawValue.toString();
</script>

<template>
	<div class="row border-bottom border-2 m-0" :class="class">
		<div class="col col-xl-2 border-end border-1">
			{{name}}
		</div>
		<div class="col text border-1 d-none d-xl-block">
			{{source || perk?.source}}
		</div>
		<div class="col col-xl-2 border-end border-1">
			{{perk?.affectedScore || affectedScore}}
		</div>
		<div class="col-1 col-xl-1 fw-bold text-end">
			{{formattedValue}}
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'PerkLine'
}
</script>
