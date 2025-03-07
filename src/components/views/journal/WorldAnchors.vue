<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from '@/components/core/text-tags/Important.vue';
import { GameStrings } from "@/scripts/game-strings";

import JournalHeader from './subviews/JournalHeader.vue';
</script>

<template>
	<PageContainerVue>
		<JournalHeader />
		<header>
			<ViewBlurb header="">
				The text we've discovered on World Anchors.
			</ViewBlurb>
		</header>
		<main>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                        "The heavens shattered in the world"
                    </div>
                    <span class="badge text-bg-info rounded-pill">Wonderland</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                        "contain its power. It struggled 'gainst its"
                    </div>
                    <span class="badge text-bg-info rounded-pill">Big Apple</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                        "three. They bargained with the Father of Void to"
                    </div>
                    <span class="m-0 p-0">
                        <span class="badge text-bg-secondary rounded-pill me-1">Shared by NLE</span>
                        <span class="badge text-bg-info rounded-pill">???</span>
                    </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                        "Decay. The Father of Decay awoke from his slumber in"
                    </div>
                    <span class="badge text-bg-info rounded-pill">Land of Oz</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                        "cracks, thus do the drifting fragments of worlds still slowly"
                    </div>
                    <span class="m-0 p-0">
                        <span class="badge text-bg-secondary rounded-pill me-1">Shared by NLE</span>
                        <span class="badge text-bg-info rounded-pill">Tokyo 2007</span>
                    </span>
                </li>
            </ul>
		</main>
	</PageContainerVue>
</template>
