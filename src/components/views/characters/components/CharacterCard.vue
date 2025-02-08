<script setup lang="ts">
import { useSlots } from 'vue';
import Card from '@/components/core/Card.vue';
import CardContents from '@/components/core/CardContents.vue';
import { id_ify } from '@/scripts/id_ify';

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
	<!-- <Card :class="{'dead': status == 'dead'}">
		<template v-slot:footer v-if="$slots.pcContact || $slots.met">
			<div v-if="$slots.pcContact">
				Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
			</div>
			<div v-if="$slots.met">
				Met: <slot name="met"></slot>
			</div>
		</template>
		<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
			<slot :name="slot"></slot>
		</template>
	</Card> -->

	<div class="col" data-bs-toggle="modal" :data-bs-target="'#modal-'+idBase">
		<button type="button" class="btn btn-secondary w-100 h-100" data-bs-toggle="modal" :data-bs-target="'#modal-'+idBase">
			<CardContents :class="{'dead': status == 'dead'}" :truncated="true">
				<template v-slot:footer v-if="$slots.pcContact || $slots.met">
					<div v-if="$slots.pcContact">
						Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
					</div>
					<div v-if="$slots.met">
						Met: <slot name="met"></slot>
					</div>
				</template>
				<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
					<slot :name="slot"></slot>
				</template>
			</CardContents>
		</button>
	</div>

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
					<!-- <template v-slot:footer v-if="$slots.pcContact || $slots.met">
						<div v-if="$slots.pcContact">
							Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
						</div>
						<div v-if="$slots.met">
							Met: <slot name="met"></slot>
						</div>
					</template> -->
				</div>
				<!-- <div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'CharacterCard',
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
