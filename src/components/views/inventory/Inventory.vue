<script setup lang="ts">
import EquipmentSubscreen from "./components/EquipmentSubscreen.vue";
</script>

<template>
	<div class="status-screen">
		<main>
			<div class="inventory-image"></div>
			<div class="inventory-screen">
				<button class="status-nav-button nav-left"></button>
				<button class="status-nav-button nav-right"></button>
				<div class="label"></div>
				<div class="status-screen-container">
					<EquipmentSubscreen />
				</div>
			</div>
		</main>
	</div>
</template>

<style>
/* #app {
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: stretch;
	align-items: stretch;
}

#app > .container {
	overflow: auto;
	flex: 2 2 80%;
} */
</style>

<style scoped>
.status-screen {
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	/* margin-left: -50vw; */
}
.status-screen > main {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	overflow: hidden;
}

img {
	display: block;
}

body {
	font-family: "PT Sans", sans-serif;
	font-size: 14px;
}

.inventory-image {
	background-image: url(https://i.kinja-img.com/gawker-media/image/upload/s--GzOUgABJ--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/yf0thsnqktiwgikj197t.png);
	background-size: cover;
	background-position: center center;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 1;
	-webkit-filter: blur(5px);
	filter: blur(5px);
}

.inventory-screen {
	background: rgba(0, 0, 0, 0.6);
	z-index: 2;
	position: fixed;
	width: 100%;
	height: 100%;
	color: white;
	font-family: "PT Sans";
	font-style: italic;
	display: flex;
	justify-items: center;
	align-items: stretch;
}
.status-screen-container {
	/* width: 100%;
	height: 100%; */
	position: relative;
	/* top: 0; */
	flex: 2 2 80%;
	margin: 3rem;
	/* background: red; */
}
.status-nav-button {
	width:3rem;
	height: 3rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 4;
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
	background-color: transparent;
	border: none;
}
.nav-left {
	left: 1.5rem;
	background-image: url(../../../assets/inventory/oot/button-left.png);
}
.nav-right {
	right: 1.5rem;
	background-image: url(../../../assets/inventory/oot/button-right.png);
}

.item-menu-button.active,
.item-menu-button:hover,
.item-menu-button:focus,
.item-menu-button:active {
	color: white;
	border-bottom: 2px solid white;
}

.label {
	background-image: url(../../../assets/inventory/oot/label.png);
	background-size: 100% 100%;
	background-position: center center;
	background-repeat: no-repeat;
	position: fixed;
	text-align: center;
	bottom: 5%;
	left: 50%;
	width: 42%;
	height:11%;
	transform: translateX(-50%);
	z-index: 4;
	/* padding-top: 10px; */
}
</style>

<script lang="ts">
export default {
	name: 'InventoryViewComponent',
}
</script>