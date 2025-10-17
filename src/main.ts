import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";
import NotFound from "@/components/views/404.vue";
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
import Links from "./components/views/meta/Links.vue";
import Letters from "./components/views/journal/Letters.vue";
import Mysteries from "./components/views/journal/Mysteries.vue";
import Relationships from "./components/views/relationships/Relationships.vue";
import Reviews from "./components/views/reviews/Reviews.vue";
import Ship from "./components/views/ship/Ship.vue";
import ShipIndex from "./components/views/ship/Index.vue";
import ShipCrew from "@/components/views/ship/Crew.vue";
import SingleCharacterView from "@/components/views/characters/SingleCharacterView.vue";
import Timeline from "./components/views/timeline/Timeline.vue";
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
		// will match everything and put it under `route.params.pathMatch`
		{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
		{ path: '/', component: Home},
		{ path: '/home', name: 'Home', component: Home},
		{ path: '/bounties', component: BountyBoard},
		{ path: '/calendar', name: 'Calendar', component: Calendar},
		{ path: '/contacts', name: 'Contacts', component: Contacts},
		{ path: '/dm-worlds', component: DmWorlds},
		{ path: '/explorers-guide', name: 'Explorer\'s Guide', component: ExplorersGuide},
		{ path: '/factions', name: 'Factions', component: Factions},
		{ path: '/inventory', name: 'Inventory', component: Inventory},
		{ path: '/journal/letters', name: 'Letters', component: Letters},
		{ path: '/journal/log', name: 'Log', component: Journal},
		{ path: '/journal/mysteries', name: 'Mysteries', component: Mysteries},
		{ path: '/journal/world-anchors', name: 'World Anchors', component: WorldAnchors},
		{ path: '/links', name: 'External Links', component: Links},
		{ path: '/people', name: 'People', component: Characters, alias: '/characters'},
		{ path: '/people/:id', component: SingleCharacterView, props: true },
		{ path: '/perks', component: Effects},
		{ path: '/relationships', name: 'Relationships', component: Relationships},
		{ path: '/reviews', name: 'Yep! Reviews', component: Reviews},
		{ path: '/ship', name: 'Lightships', component: ShipIndex},
		{ path: '/ship/ship', name: 'Ship', component: Ship},
		{ path: '/ship/crew', name: 'Crew', component: ShipCrew},
		{ path: '/timeline', name: 'Timeline', component: Timeline},
		{ path: '/world-map', name: 'World Map', component: WorldMap},
		{ path: '/worlds', name: 'Worlds', component: Worlds, },
		...autoRoutes
	].sort((r1, r2) => {
		if (r1.path > r2.path) { return 1; }
		if (r1.path < r2.path) { return -1; }
		return 0;
	})
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