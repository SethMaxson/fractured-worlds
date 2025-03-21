import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";
import Calendar from "./components/views/calendar/Calendar.vue";
import Characters from "./components/views/characters/Characters.vue";
import DMView from "./components/views/dm/DM.vue";
import DmWorlds from "./components/views/dm-worlds/DmWorlds.vue";
import ExplorersGuide from "./components/views/explorers-guide/ExplorersGuide.vue";
import Effects from "./components/views/perks/Perks.vue";
import Factions from "./components/views/factions/Factions.vue";
import Home from "./components/views/home/Home.vue";
import Journal from "./components/views/journal/Log.vue";
import Links from "./components/views/links/Links.vue";
import Letters from "./components/views/journal/Letters.vue";
import Mysteries from "./components/views/journal/Mysteries.vue";
import Relationships from "./components/views/relationships/Relationships.vue";
import Ship from "./components/views/ship/Ship.vue";
import WorldAnchors from "./components/views/journal/WorldAnchors.vue";
import WorldMap from "./components/views/world-map/WorldMap.vue";
import Worlds from "./components/views/worlds/Worlds.vue";

const router = createRouter({
	history: createWebHashHistory('/fractured-worlds/'),
	routes:[
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/calendar', component: Calendar},
		{ path: '/characters', component: Characters}, // deprecated path, kept to avoid breaking any bookmarks
		{ path: '/dm', component: DMView},
		{ path: '/dm-worlds', component: DmWorlds},
		{ path: '/explorers-guide', component: ExplorersGuide},
		{ path: '/perks', component: Effects},
		{ path: '/factions', component: Factions},
		{ path: '/journal/letters', component: Letters},
		{ path: '/journal/log', component: Journal},
		{ path: '/journal/mysteries', component: Mysteries},
		{ path: '/journal/world-anchors', component: WorldAnchors},
		{ path: '/links', component: Links},
		{ path: '/people', component: Characters},
		{ path: '/relationships', component: Relationships},
		{ path: '/ship', component: Ship},
		{ path: '/world-map', component: WorldMap},
		{ path: '/worlds', component: Worlds}
	]
});

const app = createApp(App);

app.use(router);

app.mount('#app');

//#region stuff for Search Bar
export const routes = router
	.getRoutes()
	.map(r => r.path)
	.filter(r => !r.includes(':')) // removes routes with params

// export function sitemap () {
// 	const routes = router
// 		.getRoutes()
// 		.map(r => r.path)
// 		.filter(r => !r.includes(':')) // removes routes with params
// 		//.map(r => `<url><loc>https://mysite${r}</loc></url>`)
// 	// console.log(`
// 	// 	<?xml version='1.0' encoding='UTF-8'?>
// 	// 	<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
// 	// 		${routes.join('\n')}
// 	// 	</urlset>
// 	// `)
// }
//#endregion stuff for Search Bar