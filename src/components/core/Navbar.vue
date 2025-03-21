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
						<router-link class="nav-link" to="/home">
							<svg :class="svgHomeClass">
								<use href="#home-1"></use>
							</svg>
							Home
						</router-link>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<svg :class="svgHomeClass"><use href="#book-half"></use></svg> Chronicle
						</a>
						<ul class="dropdown-menu">
							<li><router-link class="dropdown-item" to="/people">
								<svg :class="svgHomeClass"><use href="#user2"></use></svg> People </router-link>
							</li>
							<li><router-link class="dropdown-item" to="/factions">
								<svg :class="svgHomeClass"><use href="#people"></use></svg> Factions </router-link>
							</li>
							<li><router-link class="dropdown-item" to="/worlds">
								<svg :class="svgHomeClass"><use href="#globe2"></use></svg> Worlds </router-link>
							</li>
							<li><router-link class="dropdown-item" to="/journal/mysteries">
								<svg :class="svgHomeClass"><use href="#book-half"></use></svg> Journal </router-link>
							</li>
						</ul>
					</li>
					<!-- <li class="nav-item">
						<router-link class="nav-link" to="/inventory"> Inventory </router-link>
					</li> -->
					<li class="nav-item">
						<router-link class="nav-link" to="/explorers-guide">
							<svg :class="svgHomeClass"><use href="#compass-rose"></use></svg>
							Explorer's Guide
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/links">
							<svg :class="svgHomeClass"><use href="#link"></use></svg>
							External Links
						</router-link>
					</li>
					
					<li class="nav-item dropdown gm-only">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							GM Pages
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link class="dropdown-item" to="/dm-worlds">
									<svg :class="svgHomeClass"><use href="#globe2"></use></svg>
									Worlds (GM)
								</router-link>
							</li>
						</ul>
					</li>
					
					<li class="nav-item dropdown dev">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							In development
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link class="dropdown-item" to="/perks">
									<svg :class="svgHomeClass"><use href="#handshake"></use></svg>
									Banes & Boons
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" to="/calendar">
									<svg :class="svgHomeClass"><use href="#calendar"></use></svg>
									Calendar
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" to="/relationships">
									<svg :class="svgHomeClass"><use href="#relationship"></use></svg>
									Relationships
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" to="/ship">
									<svg :class="svgHomeClass"><use href="#anchor"></use></svg>
									Ship
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" to="/world-map">
									<svg :class="svgHomeClass"><use href="#paths"></use></svg>
									World Map
								</router-link>
							</li>
						</ul>
					</li>
					<!-- <li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li> -->
				</ul>
				<hr class="d-lg-none" />
				<ColorModeToggle />
				<GmModeToggle />
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

const svgHomeClass = "menu-button-icon theme-color me-1 d-inline";
const svgClass = svgHomeClass + " d-lg-none";
</script>