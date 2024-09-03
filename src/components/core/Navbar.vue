<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-navbar">
		<!-- <div class="container-fluid"> -->
		<div class="container">
			<router-link class="navbar-brand" to="/"> Fractured Worlds </router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
				aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarToggler">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" to="/home"> Home </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/characters"> Characters </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/factions"> Factions </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/glossary"> Glossary </router-link>
					</li>
					<li class="nav-item dev">
						<router-link class="nav-link" to="/world-map"> World Map </router-link>
					</li>
					<li class="nav-item gm-only">
						<router-link class="nav-link" to="/worlds"> Worlds </router-link>
					</li>
					<!-- <li class="nav-item">
						<router-link class="nav-link" to="/inventory"> Inventory </router-link>
					</li> -->
					<li class="nav-item">
						<router-link class="nav-link" to="/explorers-guide"> Explorer's Guide </router-link>
					</li>
					<li class="nav-item dev">
						<router-link class="nav-link" to="/journal"> Journal </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/links"> External Links </router-link>
					</li>
					<ColorModeToggle />
					<GmModeToggle />
					<!-- <li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li> -->
				</ul>
				<!-- <form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form> -->
			</div>
		</div>
	</nav>
</template>

<style scoped>
	.navbar-brand {
		font-family: 'Kingdom Hearts', sans-serif;
		padding-top: 0;
		padding-bottom: 0;
		font-size: 2rem;
		/* line-height: 1.5rem; */
	}

	.dev,
	.gm-only {
		color: yellow;
		background-color: rgba(100, 100, 0, 0.5);
		font-style: italic;
	}
	
	.dev > *,
	.gm-only > * {
		color: yellow;
	}
</style>

<script setup lang="ts">
import ColorModeToggle from "./ColorModeToggle.vue";
import GmModeToggle from "./GmModeToggle.vue";
defineProps<{
	activePage?: string;
}>();
</script>