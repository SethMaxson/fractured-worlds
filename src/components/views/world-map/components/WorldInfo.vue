<template>
	<div class="world-info h-100 px-5">
		<div class="row h-100">
			<div class="col-xl-4 d-flex flex-column align-items-stretch">
				<div class="border bg flex-grow-1 mt-xl-5">
					<div class="text-center">
						Notable destinations
					</div>
					<div class="border">
						<ul v-for="dest in notableDestinations">
							<li class="">{{ dest }}</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xl d-flex flex-column justify-content-between">
				<div class="ps-5">
					<div class="border bg-dark text-center">
						{{ name }}
					</div>
					<div class="row row-cols-2 bg-dark border ms-1 me-3">
						<div class="col-6 d-flex justify-content-between px-2">
							<div class="fs-5">BATTLE LV</div>
							<div class="fs-4 fst-italic">{{battleLevel}}</div>
						</div>
						<div class="col-6 d-flex justify-content-between">
							<div class="fs-5">VISITS</div>
							<div class="fs-4 fst-italic">{{visits}}</div>
						</div>
					</div>
				</div>
				<div class="border d-flex flex-column align-items-bottom">
					<div class="world-card world-card-bg p-3 rounded-3 position-relative">
						<div class="world-card-header rounded-pill px-3 border border-4 border-dark text-center col-12 col-xl-5 user-select-none position-absolute top-0 start-0 translate-middle-y">
							Past events
						</div>
						<div class="mt-1">
							the tasdflkjaweaxf asdf bell and apologizes.
							They grow closer, but eh spell is far from broken.
						</div>
					</div>
					<div class="world-card mt-5 position-relative">
						<div class="row">
							<div class="world-card-header rounded-pill ms-3 px-3 border border-4 border-dark text-center col-12 col-xl-5 user-select-none position-absolute top-0 start-0 translate-middle-y">
								Next objective
							</div>
						</div>
						<div class="world-card-bg px-3 pb-3 pt-4 rounded-3">
							the tasdflkjaweaxf asdf bell and apologizes.
							They grow closer, but eh spell is far from broken.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	name: {
		type: String,
		required: false,
		default: "World Name"
	},
	id: {
		type: String,
		required: false,
		default: "world-name"
	},
	battleLevel: {
		type: Number,
		required: false,
		default: -1
	},
	notableDestinations: {
		type: Array<String>,
		required: false,
		default: ["test", "tet2"]
	},
	pastEvents: {
		type: String,
		required: false,
		default: "———"
	},
	nextObjective: {
		type: String,
		required: false,
		default: "———"
	},
	visits: {
		type: Number,
		required: false,
		default: -1
	}
})
</script>

<style scoped>
.world-info {
	font-size: 1.5rem;
}

.world-card {
	color: white;
}

.world-card-bg {
	background: linear-gradient(#0b0, #050);
}

.world-card-header {
	background: linear-gradient(#070, #050);
	color: white;
}
</style>