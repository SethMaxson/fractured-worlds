<script setup lang="ts">

import { Birthdays } from '@/data/calendar/events/birthdays';
import { Utils } from "@/scripts/utils";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import Image from "@/components/core/Image.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import type { ICharacterData, ICharacterDataAffiliation, ICharacterDataPhysicalTraits } from '@/interfaces/ICharacterData';
import type { PropType } from 'vue';

const props = defineProps({
	person: {
		type: Object as PropType<ICharacterData|undefined>,
		required: true
	}
})

type CharacterAccordionSectionTypes = "backstory" | "playlists" | "timeline";
const accordionItems: CharacterAccordionSectionTypes[] = [];

const subheader = CharacterDataUtils.getSubheader(props.person);
const bodyText = CharacterDataUtils.getMainBodyText(props.person);

const affiliationKeyCrew = "Brightside Crew";
const specialAffiliations = [
	affiliationKeyCrew
];
const affiliations = props.person?.affiliations ? {
	crew: CharacterDataUtils.getAffiliation(props.person, affiliationKeyCrew),
	other: props.person.affiliations.filter((c) => {
		return !specialAffiliations.includes(c.name);
	})
}
: undefined;

const birthday = props.person && CharacterDataUtils.getBirthday(props.person, Birthdays);
const playlistEmbed = props.person?.spotify?.primaryPlaylistID? CharacterDataUtils.getSpotifyEmbedUrl(props.person.spotify.primaryPlaylistID) : undefined;
const themeSongEmbed = props.person?.spotify?.themeSong? CharacterDataUtils.getSpotifyEmbedUrl(props.person.spotify.themeSong, "song") : undefined;

const physicalTraitDisplay: { key: keyof ICharacterDataPhysicalTraits; label: string }[] = [
	{ key: "gender", label: "Gender"},
	{ key: "height", label: "Height"},
	{ key: "weight", label: "Weight"},
	{ key: "eyeColor", label: "Eyes"},
	{ key: "hairColor", label: "Hair"}
];

//#region Check what accordion sections are present
if (playlistEmbed) {
	accordionItems.push("playlists");
}
//#endregion Check what accordion sections are present

function getSpecialAffiliationString(a: ICharacterDataAffiliation): string {
	return `${a.role || a.rank} (${a.joined}${a.left? "—" + a.left : ""} SE)`;
}
</script>

<template>
	<div v-if="person" class="px-2 pb-2">
		
		<div class="col col-md-4 float-md-end ps-md-2 mb-3 mb-md-2">
			<Image class="portrait object-fit-fill rounded my-0 mx-auto img-thumbnail" alt="portrait" :src="person.images.portrait" v-if="person.images.portrait && person.images.portrait.length > 0" />
			<svg class="portrait object-fit-fill rounded my-0 mx-auto img-thumbnail" width="300" height="300" v-else>
				<use href="#user2"></use>
			</svg>
		</div>
		
		<div class="mt-2 mt-md-0">

			<div class="border-bottom border-secondary-subtle pb-2 d-flex flex-wrap align-items-baseline mb-2">
				<h1 class="small-caps flex-shrink-0 me-2 me-lg-3 py-0 my-0">
					{{ person.name }}
				</h1>
				<h4 v-if="subheader" class="fst-italic text-muted text-capitalize small-caps">
					{{subheader}}
				</h4>
			</div>

			<div class="details ps-md-2 ps-lg-3 text-muted">
				<div v-if="person.aliases && person.aliases.length > 0">
					{{ person.aliases.length > 1 ? "Aliases" : "Alias" }}: <b>{{ person.aliases.join(", ") }}</b>
				</div>
				<div v-if="affiliations?.crew">
					{{affiliations.crew.name}}: <b>{{getSpecialAffiliationString(affiliations.crew)}}</b>
				</div>
				<div v-if="affiliations?.other && affiliations.other.length > 0">
					<ul class="list-inline mb-0">
						<li class="list-inline-item">{{ person.affiliations.length > affiliations.other.length ? "Other Affiliations" : "Affiliations" }}:</li>
						<li class="list-inline-item fw-bold" v-for="a, i in affiliations.other">
							{{ `${a.name} ${a.role || a.rank ? " (" + (a.role || a.rank) + ")" : ""}${i+1 == affiliations.other.length ? '' : ','}` }}
						</li>
					</ul>
				</div>
				<div class="big-details text-capitalize">
					<div v-if="person.homeworld">
						Homeworld: <b>{{person.homeworld}}</b>
					</div>
					<div v-if="birthday">
						Birthday: <b>{{Utils.Date.Format.DMon(birthday)}}</b>
					</div>
					<div v-if="person.mental?.drive">
						Drive: <b>{{person.mental.drive}}</b>
					</div>
				</div>
				<div class="details mt-2" v-if="person.physical">
					<template v-for="trait in physicalTraitDisplay">
						<div v-if="person.physical[trait.key]">
							{{trait.label}}: {{person.physical[trait.key]}}
						</div>
					</template>
				</div>
			</div>

			<!-- <div class="mt-2 pe-md-2 d-flex align-items-top" v-if="themeSongEmbed">
				<div class="pe-3">Theme song:</div>
				<div class="flex-grow-1">
					<!- TODO: Make this into a collapse, with the button label displaying the song title. ->
					<iframe data-testid="embed-iframe" style="border-radius:12px" :src="themeSongEmbed" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" v-if="themeSongEmbed"></iframe>
				</div>
			</div> -->
		</div>

		<div class="mt-4" v-html="bodyText"> </div>

		<!-- This div fixes some weird float behavior -->
		<div class="clearfix m-0 p-0 d-none d-md-block">&nbsp;</div>

		<!-- <div class="mt-4 accordion" id="section-collapse" v-if="accordionItems.length > 0"> -->
			<div class="mt-4 accordion" id="playlist-collapse" v-if="playlistEmbed">
				<AccordionItem name="Playlist" parent-id="playlist-collapse">
					<!-- height="352" -->
					<iframe data-testid="embed-iframe" style="border-radius:12px" :src="playlistEmbed" width="100%" height="704" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" v-if="playlistEmbed"></iframe>
				</AccordionItem>
			</div>
		<!-- </div> -->

		<!-- TODO: Put an image gallery somewhere near here. Take inspiration from standard wiki formats like these:
		 	https://www.mariowiki.com/Gallery:Yoshi_(2010-2019)
			https://www.mariowiki.com/Gallery:Mario_%2B_Rabbids_Kingdom_Battle
		-->
		
	</div>
	<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
		There doesn't seem to be any data for this person yet.
	</div>
</template>

<style scoped lang="css">
.portrait {
	max-width: 100%;
}


/* reference https://www.dreamworks.com/how-to-train-your-dragon/explore/hiccup
	https://www.mariowiki.com/Luigi
	*/
</style>