<script setup lang="ts">

import { Birthdays } from '@/data/calendar/events/birthdays';
import { CharacterDatas } from "@/data/character-datas";
import { Utils } from "@/scripts/utils";
import { CharacterDataUtils } from "@/scripts/character-data-utils";
import Image from "@/components/core/Image.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import type { ICharacterData } from '@/interfaces/ICharacterData';
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
// const affiliations = person?.affiliations && person.affiliations.length > 0 ? 
const birthday = props.person && CharacterDataUtils.getBirthday(props.person, Birthdays);
const playlistEmbed = props.person?.spotify?.primaryPlaylistID? CharacterDataUtils.getSpotifyEmbedUrl(props.person.spotify.primaryPlaylistID) : undefined;
const themeSongEmbed = props.person?.spotify?.themeSong? CharacterDataUtils.getSpotifyEmbedUrl(props.person.spotify.themeSong, "song") : undefined;

//#region Check what accordion sections are present
if (playlistEmbed) {
	accordionItems.push("playlists");
}
//#endregion Check what accordion sections are present
</script>

<template>
	<div v-if="person" class="px-2 pb-2">
		
		<div class="col col-md-4 float-md-end ps-md-2 mb-3 mb-md-2">
			<Image class="portrait object-fit-fill rounded my-0 mx-auto img-thumbnail" alt="portrait" :src="person.images.thumbnail" v-if="person.images.thumbnail && person.images.thumbnail.length > 0" />
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
					<b>{{ person.aliases.length > 1 ? "Aliases" : "Alias" }}:</b> {{ person.aliases.join(", ") }}
				</div>
				<div v-if="person.affiliations && person.affiliations.length > 0">
					<ul class="list-inline mb-0">
						<li class="list-inline-item"><b>Affiliations:</b></li>
						<li class="list-inline-item" v-for="a, i in person.affiliations">
							{{ `${a.name} ${a.role || a.rank ? " (" + (a.role || a.rank) + ")" : ""}${i+1 == person.affiliations.length ? '' : ','}` }}
						</li>
					</ul>
				</div>
				<div class="big-details text-capitalize">
					<div v-if="person.homeworld">
						<b>Homeworld:</b> {{person.homeworld}}
					</div>
					<div v-if="birthday">
						<b>Birthday:</b> {{Utils.Date.Format.DMon(birthday)}}
					</div>
					<div v-if="person.drive">
						<b>Drive:</b> {{person.drive}}
					</div>
				</div>
				<div class="details mt-2" v-if="person.physical">
					<div v-if="person.physical.height">
						Height: {{person.physical.height}}
					</div>
					<div v-if="person.physical.weight">
						Weight: {{person.physical.weight}}
					</div>
					<div v-if="person.physical.eyeColor">
						Eyes: {{person.physical.eyeColor}}
					</div>
					<div v-if="person.physical.hairColor">
						Hair: {{person.physical.hairColor}}
					</div>
				</div>
			</div>

			<div class="mt-2 pe-md-2 d-flex align-items-top" v-if="themeSongEmbed && false">
				<div class="pe-3">Theme song:</div>
				<div class="flex-grow-1">
					<!-- TODO: Make this into a collapse, with the button label displaying the song title. -->
					<iframe data-testid="embed-iframe" style="border-radius:12px" :src="themeSongEmbed" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" v-if="themeSongEmbed"></iframe>
				</div>
			</div>
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
		
	</div>
	<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
		There doesn't seem to be any data for this person yet.
	</div>
</template>

<style scoped lang="css">
.portrait {
	max-width: 100%;
}


/* reference https://www.dreamworks.com/how-to-train-your-dragon/explore/hiccup */
</style>