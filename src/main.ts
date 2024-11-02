import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";
import Characters from "./components/views/characters/Characters.vue";
import DMView from "./components/views/dm/DM.vue";
import ExplorersGuide from "./components/views/explorers-guide/ExplorersGuide.vue";
import Factions from "./components/views/factions/Factions.vue";
import Home from "./components/views/home/Home.vue";
import Journal from "./components/views/journal/Log.vue";
import Links from "./components/views/links/Links.vue";
import Mysteries from "./components/views/journal/Mysteries.vue";
import WorldAnchors from "./components/views/journal/WorldAnchors.vue";
import WorldMap from "./components/views/world-map/WorldMap.vue";
import Worlds from "./components/views/worlds/Worlds.vue";

const router = createRouter({
	history: createWebHashHistory('/fractured-worlds/'),
	routes:[
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/characters', component: Characters},
		{ path: '/dm', component: DMView},
		{ path: '/explorers-guide', component: ExplorersGuide},
		{ path: '/factions', component: Factions},
		{ path: '/journal/log', component: Journal},
		{ path: '/journal/mysteries', component: Mysteries},
		{ path: '/journal/world-anchors', component: WorldAnchors},
		{ path: '/links', component: Links},
		{ path: '/world-map', component: WorldMap},
		{ path: '/worlds', component: Worlds}
	]
});

const app= createApp(App);

app.use(router);

app.mount('#app');
