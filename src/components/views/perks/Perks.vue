<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";

import PerkLine from './components/PerkLine.vue';

</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/perks" />
			<ViewBlurb header="">
				Effects gained from our bonds with others that help or hinder our abilities.
			</ViewBlurb>
		</header>
		<main>
			<div name="menu" class="border-bottom my-1 pb-2">
				<div class="dropdown mb-3 mb-lg-0">
					<button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
						aria-expanded="false">
                        Character: <strong>{{ modeName }}</strong>
					</button>
					<ul class="dropdown-menu dropdown-menu-lg-end">
						<li v-for="opt, index in menu">
							<hr v-if="opt.value == 'separator'" class="dropdown-divider">
							<button v-else type="button" class="dropdown-item" :class="{ 'active': mode == opt.value }"
								href="#" @click="changeMenu(index)">{{ opt.text }}</button>
						</li>
					</ul>
				</div>
			</div>
			<div name="content">
                <ul class="list-group list-group-flush">
                    <div class="row border-bottom border-2 m-0 fw-bold bg-info-subtle">
                        <div class="col col-xl-2 border-end border-1">Name</div>
                        <div class="col text border-1 d-none d-xl-block">Source</div>
                        <div class="col col-xl-2 border-end border-1">Affected Score</div>
                        <div class="col-1 col-xl-1 text-center">Value</div>
                    </div>
                    <PerkLine
                        value="+1"
                        name="Blue Print Detective"
                    />
                </ul>
            </div>
		</main>
	</PageContainerVue>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";

export default defineComponent({
	name: 'PerkViewComponent',
	data() {
		return {
			menu: [
				{
					text: "All",
					value: "all"
				},
				{
					text: "",
					value: "separator"
				},
				{
					text: "C.O.B.B.",
					value: "cobb"
				},
				{
					text: "Li'l Phil Antonio",
					value: "phil"
				},
				{
					text: "Izzy Bones",
					value: "izzy"
				},
				{
					text: "Tero",
					value: "tero"
				},
			] as IComponentMenuOption[],
			mode: "all"
		}
	},
	computed: {
		capitalMode() {
			return this.mode.charAt(0).toUpperCase() + this.mode.slice(1);
		},
		modeName() {
			return this.menu.filter(o => o.value == this.mode)[0].text;
		},
        perks() {
            return 
        }
	},
	methods: {
		cleanText(text: string): string {
			return text.replace(/\n/ig, "<br/>");
		},
		changeMenu(index: number) {
			const mode = this.menu[index].value;
			this.mode = mode as string;
		},
	}
})
</script>