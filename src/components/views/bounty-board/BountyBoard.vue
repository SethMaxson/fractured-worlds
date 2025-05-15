<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/bounty-board" />
		</header>
		<main>
            
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
export default {
	name: 'BountyBoard'
}
</script>