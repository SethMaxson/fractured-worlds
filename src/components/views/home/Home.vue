<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<main>
			<div class="container p-4 text-center">
				<div class="row g-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
					<div class="col">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/characters"> Characters </router-link>
					</div>
					<div class="col">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/factions"> Factions </router-link>
					</div>
					<div class="col dev">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/relationships"> Relationships </router-link>
					</div>
					<div class="col dev">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/world-map"> World Map </router-link>
					</div>
					<div class="col dev">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/worlds"> Worlds </router-link>
					</div>
					<div class="col">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/explorers-guide"> Explorer's Guide </router-link>
					</div>
					<div class="col">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/journal/mysteries"> Journal </router-link>
					</div>
					<div class="col">
						<router-link class="nav-link p-3 border border-primary-subtle" to="/links"> External Links </router-link>
					</div>
				</div>
			</div>
		</main>
	</PageContainerVue>
</template>
