<script setup lang="ts">
import type { PropType } from 'vue';
import Image from './Image.vue';
import type { IRandomTableEntry } from '@/interfaces/IRandomTable';
import { RandomTableUtils } from '@/scripts/random-tables-utils';

const props = defineProps({
	name: {
		type: String,
		required: false,
		default: ""
	},
	rows: {
		type: Array as PropType<IRandomTableEntry[]>,
		required: true
	}
});

let weightCounter = 1;
let diceSize = 0;
props.rows.forEach(row => {
	diceSize += RandomTableUtils.getWeightForRow(row);
});

function getRowWeightRange(row: IRandomTableEntry): string {
	let rowWeight = RandomTableUtils.getWeightForRow(row);
	let rangeStart = weightCounter;
	let rangeEnd = rangeStart + rowWeight - 1;
	weightCounter+= rowWeight;

	return rangeEnd > rangeStart ? 
		rangeStart.toString() + '-' + rangeEnd.toString()
		: rangeStart.toString();
}
</script>

<template>
	<div class="border rounded mt-2">
		<table class="random-table table table-striped table-sm">
			<caption class="ps-2 caption-top fw-bold" v-if="name.length > 0">{{ name }}</caption>
			<thead>
				<th scope="col" class="ps-2">1d{{ diceSize }}</th>
				<th scope="col">Result</th>
			</thead>
			<tbody class="table-group-divider">
				<tr v-for="row, i in rows">
					<th scope="row" class="ps-2">{{ getRowWeightRange(row) }}</th>
					<td>{{ row.result }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>