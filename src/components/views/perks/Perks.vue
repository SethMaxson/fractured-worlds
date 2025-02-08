<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";

import PerkLine from './components/PerkLine.vue';

</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="">
				Effects that help or hinder our abilities.
			</ViewBlurb>
		</header>
		<main>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <!-- <router-link class="nav-link" active-class="active" to="/journal/letters"> Letters </router-link> -->
                    <a class="nav-link active" aria-current="page" href="#/perks">{{ GameStrings.Party.Cobb.first }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/perks">{{ GameStrings.Party.Phil.first }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/perks">{{ GameStrings.Party.Tero.first }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/perks">{{ GameStrings.Party.Tropey.first }}</a>
                </li>
            </ul>
			<ul class="list-group list-group-flush">
                <div class="row border-bottom border-2 m-0 fw-bold bg-info-subtle" :class="class">
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
		</main>
	</PageContainerVue>
</template>
