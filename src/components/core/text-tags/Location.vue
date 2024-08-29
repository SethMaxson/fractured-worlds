<template>
	<Text class="location">
		<slot></slot>
	</Text>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Text from "./Text.vue";

export default defineComponent({
    name: "Location",
    components: { Text }
})
</script>