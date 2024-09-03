import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";
import Characters from "./components/views/characters/Characters.vue";
import DMView from "./components/views/dm/DM.vue";
import ExplorersGuideView from "./components/views/explorers-guide/ExplorersGuide.vue";
import FactionsView from "./components/views/factions/Factions.vue";
import GlossaryView from "./components/views/glossary/Glossary.vue";
import Home from "./components/views/home/Home.vue";
import InventoryView from "./components/views/inventory/Inventory.vue";
import JournalView from "./components/views/journal/Journal.vue";
import LinksView from "./components/views/links/Links.vue";
import WorldMap from "./components/views/world-map/WorldMap.vue";
import Worlds from "./components/views/worlds/Worlds.vue";

const router = createRouter({
	history: createWebHashHistory('/fractured-worlds/'),
	routes:[
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/characters', component: Characters},
		{ path: '/dm', component: DMView},
		{ path: '/explorers-guide', component: ExplorersGuideView},
		{ path: '/factions', component: FactionsView},
		{ path: '/glossary', component: GlossaryView},
		{ path: '/inventory', component: InventoryView},
		{ path: '/journal', component: JournalView},
		{ path: '/links', component: LinksView},
		{ path: '/world-map', component: WorldMap},
		{ path: '/worlds', component: Worlds}
	]
});

const app= createApp(App);

app.use(router);

app.mount('#app');
