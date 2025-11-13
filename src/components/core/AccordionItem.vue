<script setup lang="ts">
import { id_ify } from '@/scripts/id_ify';
import { onMounted } from "vue";

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
const id = 'collapse-'+idBase;

const parent = typeof props.parentId == 'string' ? "AccordionState-" + props.parentId : undefined;
const lastParentState = (parent && sessionStorage.getItem(parent)) || undefined;
const startOpen = lastParentState ? lastParentState == id : props.defaultOpen;

onMounted(() => {

	const collapsible = document.getElementById(id);
	if (collapsible && parent) {
		collapsible.addEventListener('hide.bs.collapse', event => {
			sessionStorage.removeItem(parent);
		})
		collapsible.addEventListener('show.bs.collapse', event => {
			sessionStorage.setItem(parent, id);
		})
		// This one fires later, which makes it perfect for fixing anything overwritten by the hide listener
		collapsible.addEventListener('shown.bs.collapse', event => {
			sessionStorage.setItem(parent, id);
		})
	}

})
</script>

<template>
	<div class="accordion-item">
		<h2 class="accordion-header" :id="'heading-'+idBase">
			<button class="accordion-button" :class="{'collapsed': !startOpen}" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+id"
				:aria-expanded="startOpen" :aria-controls="'collapse-'+idBase">
				{{ name }}
			</button>
		</h2>
		<div 
			:id="id"
			class="accordion-collapse collapse"
			:class="{'show': startOpen}"
			:aria-labelledby="'heading-'+idBase"
			:data-bs-parent="oneAtATime && parentId? '#' + parentId : undefined"
		>
			<div class="accordion-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>