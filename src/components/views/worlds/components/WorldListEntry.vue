<template>
	<li class="world list-group-item" :class="class">
		<div class="row">
			<div class="col-xl-1 img text-center pe-4">
				<slot name="image"></slot>
			</div>
			<div class="col-xl d-flex border-start flex-column justify-content-between p-0">
				<div class="ps-2 ps-xl-5 w-100">
					<div class="w-100 row row-cols-1 row-cols-xl-2">
						<div class="col pe-xl-1">
							<h4>
								<slot name="name"></slot>
							</h4>
							<slot></slot>
						</div>
						<slot name="details"></slot>
					</div>
				</div>
			</div>
		</div>
	</li>
</template>

<style scoped>
.world {
	font-size: 1em;
	min-height: 100px;
}

.world .img {
	max-height: 120px;
	max-width: 150px;
}

.list-group-item::before {
    position:absolute;
	top: 0.5em;
	left: 0.5em;
	
    content: counters(section, ".") ". ";
    counter-increment: section;
}

.maybe h4 { color: #070; }
</style>

<script setup lang="ts">
defineProps({
	/** Any extra CSS classes to tack onto this element. */
	class: {
		type: String,
		required: false,
		default: ''
	}
})
</script>