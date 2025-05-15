<template>
	<button type="button" class="world list-group-item list-group-item-action row ms-0" data-bs-toggle="modal" :data-bs-target="'#modal-'+idBase" :class="props.class">
		<div class="row py-1">
			<div class="col col-xl-2 pe-xl-1">
				<div class="fw-bold text-decoration-underline">
					<slot name="name"></slot>
				</div>
			</div>
			<div class="col my-xl-0 mx-xl-0 d-none d-lg-block">
				<slot name="one-liner"><slot></slot></slot>
			</div>
		</div>
	</button>

	<div class="modal fade" :id="'modal-'+idBase" tabindex="-1" aria-hidden="false">
		<div class="modal-dialog modal-dialog-scrollable modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 card-title">
						<slot name="name"></slot>
					</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" tabindex="-1"></button>
				</div>
				<div class="modal-body row background-image" :style='{ "backgroundImage": "linear-gradient( to bottom, transparent 0%, var(--fw-bs-body-bg) 40%  ), url(\"" + bgImg + "\")" }'>
					<div class="col-xl-4">
						<div class="card world">
							<slot name="image"></slot>
							<div class="card-body p-2 pt-0">
								<div class="card-subtitle pb-2 mb-2 text-muted border-bottom border-secondary-subtle text-center">
									<em v-if="quote && quote.length > 0">"{{ quote }}"</em>
								</div>
								<div class="card-text">
									<slot name="details"></slot>
								</div>
							</div>
						</div>
					</div>
					
					<div class="p-2 col-xl-8 ps-xl-4 d-flex flex-column" :class="props.class">
						<div class="card-body">
							<div class="card-text row">
								<div class="col">
									<slot></slot>
								</div>
							</div>
							<slot name="button"></slot>
						</div>
						<div class="card-footer text-muted" v-if="$slots.footer">
							<slot name="footer"></slot>
						</div>
					</div>
				</div>
				<div class="modal-footer text-muted" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
				<!-- <div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				</div> -->
			</div>
		</div>
	</div>
</template>

<style scoped>
.world {
	font-size: 1em;
	/* min-height: 100px; */
}

.world .img {
	max-height: 120px;
	max-width: 150px;
}

.card.world img {
	max-height: 250px !important;
	max-width: 250px;
}

.background-image {
  background-color: var(--kh2-c-bg-soft);
  /* position: absolute;
  top: 0;
  z-index: -1; */
  /* background-image: linear-gradient(
    to bottom, transparent, var(--fw-bs-body-bg)
  ), url("@/assets/images/worlds/blues_house.png"); */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script setup lang="ts">
import CardContents from '@/components/core/CardContents.vue';
import { id_ify } from '@/scripts/id_ify';
import { useSlots } from 'vue';

const props = defineProps({
	/** Any extra CSS classes to tack onto this element. */
	class: {
		type: String,
		required: false,
		default: ''
	},
	wallpaper: {
		type: String,
		required: false,
		default: ''
	}
})

const nonBodySlots = ["footer", "heading", "image", "name", "subheading", "wallpaper"];

const slots = useSlots();
const heading = slots.name && slots.name();

const idBase = id_ify(heading && heading[0].children? heading[0].children.toString() : "missing-id");

const quoteSlot = slots.quote && slots.quote();
const quote = quoteSlot && quoteSlot[0].children && quoteSlot[0].children.toString().trim();

const bgImg = props.wallpaper?.toString().trim();
</script>