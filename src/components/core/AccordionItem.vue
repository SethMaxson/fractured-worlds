<script setup lang="ts">
import { id_ify } from '@/scripts/id_ify';

const props = defineProps({
	defaultOpen: {
		type: Boolean,
		required: false,
		default: false
	},
	name: {
		type: String,
		required: true
	},
	oneAtATime: {
		type: Boolean,
		required: false,
		default: true
	},
	parentId: {
		type: String,
		required: false
	}
})

const idBase = id_ify(props.name);
</script>

<template>
	<div class="accordion-item">
		<h2 class="accordion-header" :id="'heading-'+idBase">
			<button class="accordion-button" :class="{'collapsed': !defaultOpen}" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-'+idBase"
				:aria-expanded="defaultOpen" :aria-controls="'collapse-'+idBase">
				{{ name }}
			</button>
		</h2>
		<div 
			:id="'collapse-'+idBase"
			class="accordion-collapse collapse"
			:class="{'show': defaultOpen}"
			:aria-labelledby="'heading-'+idBase"
			:data-bs-parent="oneAtATime && parentId? '#' + parentId : undefined"
		>
			<div class="accordion-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>