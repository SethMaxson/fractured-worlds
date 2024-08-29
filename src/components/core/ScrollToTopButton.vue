<script setup lang="ts">
import { reactive } from 'vue';


const props = defineProps({
	class: {
		type: String,
		required: false
	},
	style: {
		type: String,
		required: false
	}
})

var state = reactive({display: "none"});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    state.display = "block";
  } else {
    state.display = "none";
  }
}

</script>

<template>
	<button type="button" id="btn-back-to-top" class="btn btn-danger btn-floating btn-lg" :class="props.class" :style="{display: state.display}" v-on:click="backToTop">
		<img src="@/assets/IconArrowUp.svg" />
	</button>
</template>

<style scoped>
#btn-back-to-top {
	position: fixed;
	bottom: 20px;
	right: 20px;
	border-radius: 50%;
	/* width: 25px;
	height: 25px; */
	/* padding: 0; */
	aspect-ratio: 1 / 1;
	opacity: 0.7;
}

img {
	height: fit-content;
	width: fit-content;
	aspect-ratio: 1 / 1;
}
</style>

<script lang="ts">
export default {
	name: "ScrollToTopButton",
	methods: {
		backToTop: function() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	}
}
</script>