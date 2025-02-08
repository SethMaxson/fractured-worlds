<script setup lang="ts">
import { useSlots } from 'vue';
import CardContents from '@/components/core/CardContents.vue';
import { id_ify } from '@/scripts/id_ify';

/** Not yet used for anything. May eventually be used to create a standardized set of character modals that can be accessed from any page. */

defineProps({
	status: {
		type: String,
		required: false
	}
})

const slots = useSlots();
const heading = slots.heading && slots.heading();

const idBase = id_ify(heading && heading[0].children? heading[0].children.toString() : "missing-id");
</script>

<template>
	<div class="modal fade" :id="'modal-'+idBase" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 card-title">
						<slot name="heading"></slot>
					</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<CardContents :class="{'dead': status == 'dead'}">
						<template v-for="(slot, index) in Object.keys($slots).filter(s => s != 'footer')" :key="index" v-slot:[slot]>
							<slot :name="slot"></slot>
						</template>
					</CardContents>
				</div>
				<div class="modal-footer text-muted" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'CharacterModal',
}
</script>

<style>
	.card img {
		position: relative;
		max-width: 100%;
	}

	.dead img::before {
		content: " ";
		background-image: url("@/assets/images/dead.png");
		background: red;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 5;
		opacity: 5;
	}
</style>

<style scoped>
.btn {
	text-align: inherit;
	color: inherit;
	font-weight: inherit;
	font-size: inherit;
	padding: 0.1rem;
}
</style>
