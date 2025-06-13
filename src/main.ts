import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";
import BountyBoard from "@/components/views/bounty-board/BountyBoard.vue";
import Calendar from "./components/views/calendar/Calendar.vue";
import Characters from "./components/views/characters/Characters.vue";
import Contacts from "./components/views/contacts/Contacts.vue";
import DmWorlds from "./components/views/dm-worlds/DmWorlds.vue";
import Effects from "./components/views/perks/Perks.vue";
import ExplorersGuide from "./components/views/explorers-guide/ExplorersGuide.vue";
import Factions from "./components/views/factions/Factions.vue";
import Home from "./components/views/home/Home.vue";
import Inventory from "./components/views/inventory/Inventory.vue";
import Journal from "./components/views/journal/Log.vue";
import Links from "./components/views/links/Links.vue";
import Letters from "./components/views/journal/Letters.vue";
import Mysteries from "./components/views/journal/Mysteries.vue";
import Relationships from "./components/views/relationships/Relationships.vue";
import Reviews from "./components/views/reviews/Reviews.vue";
import Ship from "./components/views/ship/Ship.vue";
import ShipIndex from "./components/views/ship/Index.vue";
import ShipCrew from "@/components/views/ship/Crew.vue";
import WorldAnchors from "@/components/views/journal/WorldAnchors.vue";
import WorldMap from "@/components/views/world-map/WorldMap.vue";
import Worlds from "@/components/views/worlds/Worlds.vue";


const pages = import.meta.glob("./components/views/**/*.vue", { eager: true }) as Record<string, { default: any}>;
const autoRoutes = [];
const doAutoRouteExperiment = true;

function convertToKebabCase(text: string): string {
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

if (doAutoRouteExperiment) {
	for (const path of Object.keys(pages)) {
		const fileName = convertToKebabCase(path).match(/\.\/components\/views\/(.*)\.vue$/)?.[1];
		if (!fileName || fileName.includes("/subviews/") || fileName.includes("/components/")) {
			continue;
		}
		
		const normalizedPathName = fileName.includes("$")
			? fileName.replace("$", ":")
			: fileName.replace(/\/index/, "");
		
		autoRoutes.push({
			path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
			component: pages[path].default,
			// loader: pages[path]?.loader,
			// action: pages[path]?.action,
			// ErrorBoundary: pages[path]?.ErrorBoundary,
		});
	}
}


const router = createRouter({
	history: createWebHashHistory('/fractured-worlds/'),
	routes:[
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/bounties', component: BountyBoard},
		{ path: '/calendar', component: Calendar},
		{ path: '/contacts', component: Contacts},
		{ path: '/dm-worlds', component: DmWorlds},
		{ path: '/explorers-guide', component: ExplorersGuide},
		{ path: '/factions', component: Factions},
		{ path: '/inventory', component: Inventory},
		{ path: '/journal/letters', component: Letters},
		{ path: '/journal/log', component: Journal},
		{ path: '/journal/mysteries', component: Mysteries},
		{ path: '/journal/world-anchors', component: WorldAnchors},
		{ path: '/links', component: Links},
		{ path: '/people', component: Characters, alias: '/characters'},
		{ path: '/perks', component: Effects},
		{ path: '/relationships', component: Relationships},
		{ path: '/reviews', component: Reviews},
		{ path: '/ship', component: ShipIndex},
		{ path: '/ship/ship', component: Ship},
		{ path: '/ship/crew', component: ShipCrew},
		{ path: '/world-map', component: WorldMap},
		{ path: '/worlds', component: Worlds, },
		...autoRoutes
	]
});

const app = createApp(App);

app.use(router);

app.mount('#app');

//#region stuff for Search Bar
export const metaRoutes = router
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