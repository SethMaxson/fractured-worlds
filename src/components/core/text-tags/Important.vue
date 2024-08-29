<template>
	<Text class="important">
		<slot></slot>
	</Text>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Text from "./Text.vue";

export default defineComponent({
    name: "Important",
    components: { Text }
})
</script>