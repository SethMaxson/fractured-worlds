<template>
	<nav aria-label="breadcrumb" class="p-2 m-0 border-2 border-primary border-bottom border-top fs-5 bg-navbar" :class="props.class">
		<ol class="breadcrumb my-0">
			<template v-for="part in breadcrumbs">
				<li class="breadcrumb-item active" aria-current="page" v-if="part.isLast">
					{{part.name}}
				</li>
				<li class="breadcrumb-item" v-else>
					<router-link active-class="active" :to="part.path">{{part.name}}</router-link>
				</li>
			</template>
			
		</ol>
	</nav>
</template>

<script setup lang="ts">
const props = defineProps({
	path: {
		type: String,
		required: false,
		default: false
	},
	class: {
		type: [String, Boolean],
		required: false,
		default: false
	}
})

const pageDictionary = [
	{ path: "/", name: "Home"},
	{ path: "/gm", name: "GM"},
	{ path: "/gm/emptiness-saves", name: "Emptiness Saves"},
	{ path: "/home", name: "Home"},
	{ path: "/ship", name: "Lightship"},
	{ path: "/ship/ship", name: "Ship"},
	{ path: "/ship/crew", name: "Roster"},
	{ path: "/world-pages", name: "World Pages"},
	{ path: "/world-pages/somewhere", name: "Somewhere"},
]

const pathParts = props.path.split("/");
const breadcrumbs = [ { path: "/", name: "Home", isLast: pathParts.length < 2 } ];
for (let index = 1; index < pathParts.length; index++) {
	breadcrumbs.push(
		{
			path: getCompiledPathPart(index),
			name: getPathPartName(index),
			isLast: index == pathParts.length-1,
		}
	);
}

function getPathPartName(index: number): string {
	const compiledPath = getCompiledPathPart(index).toLowerCase();
	const hits = pageDictionary.filter(d => d.path == compiledPath);
	if (hits.length > 0) {
		return hits[0].name;
	}
	else {
		return "Home";
	}
}

function getCompiledPathPart(index: number): string {
	const targetPathParts = [];
	for (let i = 0; i <= index; i++) {
		targetPathParts.push(pathParts[i]);
	}
	const compiledPath = targetPathParts.length > 0 ? targetPathParts.join("/") : "/";
	return compiledPath.replace("/home/", "/");
}
</script>