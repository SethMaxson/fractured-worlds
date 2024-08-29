<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
var nameClass = '';

const props = defineProps({
	class: {
		type: String,
		required: false
	},
	style: {
		type: String,
		required: false
	}
});

if (slots && slots.default) {
	const children = slots.default()[0].children;
	nameClass = children as string;
	if (nameClass) {
		nameClass = nameClass.split(' ')[0].toLowerCase();
	}
}

const classes = (props.class? props.class + ' ' : '') + nameClass;
</script>

<template>
	<Text class="character" :class="classes">
		<slot></slot>
	</Text>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Text from "./Text.vue";

export default defineComponent({
    name: "Character",
    components: { Text }
})
</script>