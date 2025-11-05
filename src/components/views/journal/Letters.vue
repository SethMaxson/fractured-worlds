<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from '@/components/core/text-tags/Important.vue';
import { GameStrings } from "@/scripts/game-strings";
import { Utils } from "@/scripts/utils";
import { onMounted } from "vue";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("Letters");
})
</script>

<template>
	<PageContainerVue>
		<!-- <JournalHeader /> -->
		<header>
			<Breadcrumb path="/journal/letters" />
			<ViewBlurb header="">
				A log of some of the letters we've received during our travels.
			</ViewBlurb>
		</header>
		<main>
			<div class="accordion" id="letter-accordion">

				<!-- #region Letters addressed to entire party -->

				<AccordionItem name="04/09/0001 SE - Cade Brightcloak" parent-id="letter-accordion" :default-open="true">
					<p>
						Dearest friends,
					</p>
					<p>
						The girl is still safe, and made a swift recovery from her shock. She is possessed of a curious mind and a keen intellect, and I'm sure she will make wonderful use of the future your actions have given her. I have consulted with members of my order and made arrangements to secure her continued safety.
					</p>
					<p>
						Since your departure, I have kept watch over the hatted fellow who succumbed to emptiness. To my relief, he seems content to silently stalk the hedge maze, far from anyone he might hurt or who might hurt him. At times I can almost swear I see a flash of the person he once was cross his face, but it always vanishes as quickly as it appears. Perhaps the poor fellow isn't fully gone, merely waiting for us to discover some way to save those who have become blanks. One can hope.
					</p>
					<p>
						A friend of mine has agreed to ensure the Joyful Sea Beast we discussed will be present at Somewhere in roughly ten days' time, where it will remain for a tenday so that you might visit it. I was unable to secure a longer window, but I'm sure I can negotiate another visit if you are unable to reach Somewhere during this one.
					</p>
					<p>
						At the risk of peeling a bald potato, I shall end this letter by reminding you that each of you are gallant, virtuous individuals and precisely the caliber of hero that might put this realm right. Don't any of you dare go empty.
					</p>
					<p>
						Rooting for you,<br />
						C.B.
					</p>
					<p class="ps">
						P.S. Are there any foods that do not agree with your palate, beliefs, or customs?
					</p>
				</AccordionItem>

				<AccordionItem name="05/04/0001 SE - Ella Fitzpatrick" parent-id="letter-accordion">
					<p>
						Dearest C.O.B.B., Li'l Phil, Tero, and Tropey,
					</p>
					<p>
						Oh my goodness, it feels like ages since we last saw each other! I do hope this letter finds you all well and in good spirits. Thinking back to our time together in the Big Apple, battling that dreadful Shredder and protecting those delightful turtles, brings a smile to my face. Such an adventure! I truly enjoyed working alongside you all.
					</p>
					<p>
						I've just learned that it's nearly… Christmas? Yes, Christmas! A most joyous occasion, and quite similar to the Winter Solstice celebrations of my home world, I believe. I wanted to send my warmest wishes for a very Merry Christmas and a splendid New Year! May your holidays be filled with laughter, good cheer, and perhaps a bit of eggnog? I've heard it's quite the festive beverage.
					</p>
					<p>
						Boo also sends his… well, he sends something. More literally, he sends a grunt and a slightly annoyed sounding huff. Which, knowing Boo, is just him trying to sound all indifferent and cool. I just know he likes you guys, no matter what he says.
					</p>
					<p>
						On a more scientific note, I haven't given up hope of convincing you, Phil, to allow me a small blood sample. Think of the possibilities! The knowledge we could gain! But no pressure, of course. Just… something to consider before our paths next cross, perhaps?
					</p>
					<p>
						With the fondest of thoughts,<br />
						Ella Fitzpatrick
					</p>
					<p class="ps">
						P.S. I've arranged a small gift for you all. The bottle contains sixteen doses of Bankinrass. I just know you will find it enjoyable. Do let me know what you think!
					</p>
				</AccordionItem>

				<!-- #endregion Letters addressed to entire party -->
			</div>
		</main>
	</PageContainerVue>
</template>

<style scoped>
	.ps {
		font-style: italic;
		margin: 0 0 0.25rem 0;
	}
</style>
