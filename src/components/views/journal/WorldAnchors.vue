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
            </ul>
		</main>
	</PageContainerVue>
</template>
