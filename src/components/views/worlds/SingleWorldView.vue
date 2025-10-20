<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import NittyGritty from "./components/WorldNittyGritty.vue";

import { useRoute } from "vue-router";
import { Utils } from "@/scripts/utils";
import { WorldDatas } from "@/data/world-datas";

const props = defineProps({
	id: {
		type: String,
		required: true
	}
})

const queryPath = useRoute().query.path as string;

const path = (queryPath? queryPath + "/" : "/worlds/") + props.id;
const world = Utils.World.findWorld(WorldDatas, props.id);

const bgImg = world?.images.wallpaper?.trim();
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb :path="path" />
		</header>
		<main>
			<div v-if="world">
				<div class="modal-header">
					<h1 class="modal-title fs-5 card-title">
						{{world.name}}
					</h1>
				</div>
				<div class="modal-body row background-image" :style='{ "backgroundImage": "linear-gradient( to bottom, transparent 0%, var(--fw-bs-body-bg) 40%  ), url(\"" + bgImg + "\")" }'>
					<div class="col-xl-4">
						<div class="card world">
							<img :src="world.images.token" />
							<div class="card-body p-2 pt-0">
								<div class="card-subtitle pb-2 mb-2 text-muted border-bottom border-secondary-subtle text-center">
									<em v-if="world.quote && world.quote.length > 0">"{{ world.quote }}"</em>
								</div>
								<div class="card-text">
									<NittyGritty
										anchor="?"
										disguise=""
										partners=""
										:kindredWorlds='[]'
										time="standard"
									/>
								</div>
							</div>
						</div>
					</div>
					
					<div class="p-2 col-xl-8 ps-xl-4 d-flex flex-column">
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
			</div>
		</main>
	</PageContainerVue>
</template>