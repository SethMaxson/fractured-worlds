<script setup lang="ts">
import Link from "../../core/Link.vue";
import ViewBlurb from "../../core/ViewBlurb.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import GlossaryEntry from "@/components/core/GlossaryEntry.vue";
import { Glossary } from "@/data/glossary";
import { GlossaryListGroups } from "@/data/enums/glossary-list-groups";
import Image from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import { onMounted } from "vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("ExplorersGuide");
})
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/explorers-guide" />
			<ViewBlurb header="Explorer's Guide">
				The writings of Marco Rayleigh (and others).
			</ViewBlurb>
		</header>
		<main>
			<div class="accordion" id="guide-accordion">

				<!-- #region Explorer's Guild Guide -->

				<AccordionItem name="Introduction" parent-id="guide-accordion" :default-open="true">
					<h5>Introduction <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
					<p>
						If you are reading this book of compiled writings, whether you received it from a well-intentioned stranger or simply found it lying about, it would be wise to take a moment of pause and answer a few questions before reading any further. First, have you recently experienced a dramatic upheaval in your life? One that involved being suddenly and unexpectedly relocated to a place entirely unrecognizable to you? Did you see or hear something altogether unexplainable in the land you called home, only to awaken quite suddenly in a strange and foreign land? If the answer to any of those questions was 'no,' please destroy this book immediately. Forget you ever found it. <em><u>Reading any further could prove fatal.</u></em>
					</p>
					<p>
						If you are still reading, you may have already surmised that you are no longer in the universe you know. You have found yourself in the Void Realm, a universe previously unknown even to all of the dimensional travelers I have been able to consult. <em>I ask that you skip the rest of this paragraph if you find your new situation difficult to bear, or if you are easily given to despair.</em> The fact that you awakened within the Void Realm means that your original universe, or at least most of it, has been consumed. In all likelihood your home, your friends and family, and the life you knew are gone.
					</p>
					<p>
						If you learn only one thing from this book, let it be this: Despair and melancholy are lethal in the Void Realm. Find something that gives you a sense of purpose and strive towards it like your life depends on it, because it very much does.
					</p>
				</AccordionItem>

				<AccordionItem name="1 - The Void Realm" parent-id="guide-accordion">
					<!-- #region Chapter 1 -->
				
					<div class="accordion" id="chapter-1-accordion">
						<AccordionItem name="Cosmology of the Void Realm" parent-id="chapter-1-accordion" :default-open="true">
							<h5>On the Cosmology of the Void Realm <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
							<p>
								The Void Realm, like any other universe, is comprised of many smaller pieces, which gives it its own sort of order. Where most universes are made up of planets and stars found within solar systems which are in turn found within galaxies with ether filling the spaces between, the Void Realm has a somewhat different arrangement. Here, remnants of consumed worlds are found within nexuses, and the space between is called Voidspace.
							</p>
							<p>
								<strong>Voidspace</strong> and the Void Realm itself are so-named for their most apparent feature - vast stretches of empty space. Unlike the passive ether that fills the heavens of most universes, Voidspace is a strange, creeping thing that grows ever smaller as the things within it are entirely consumed, erased as if they were never there.
							</p>
							<p>
								The only celestial bodies found within the Void Realm are shattered remnants of planets or planet-like objects from other universes. For the sake of simplicity, and the fact that no whole planets have been discovered within Voidspace, these remnants are called <strong>Worlds</strong>. These worlds are mysteriously illuminated as if by whatever star lit them in their original universe, causing them to resemble dim stars when viewed from outside their atmosphere. There are no true stars in the Void Realm.
							</p>
							<p>
								Each world contains a World Anchor, which in turn creates a large, dim beam of light that connects it to its neighbors. Such a beam is called a <strong>Light Trail</strong>, and can be used as pathways by specialized vehicles that are described in another writing. This is the only means of locomotion through Voidspace.
							</p>
							<p>
								The light trails that connect worlds usually form a closed loop, with each world being connected to precisely two other worlds via light trail. This loop and the worlds contained within are referred to as a <strong>Nexus</strong>, and is the closest equivalent the Void Realm has to the solar systems that were found in many other realms.
							</p>
						</AccordionItem>
					</div>

					<!-- #endregion Chapter 1 -->
				</AccordionItem>

				<AccordionItem name="2 - Reaching Other Worlds" parent-id="guide-accordion">
					<!-- #region Chapter 2 -->

					<div class="accordion" id="chapter-2-accordion">
						<AccordionItem name="Traversing Voidspace" parent-id="chapter-2-accordion" :default-open="true">
							<h5>On Traversing Voidspace <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
							<p>
								The empty space between worlds, commonly referred to as Voidspace, is completely uninhabitable and entirely untraversable by normal means. The only way to directly travel through Voidspace is by using a Lightship to travel along pathways of light that connect disparate worlds.
							</p>
							<p>
								Based on the observations of myself and my peers, light trails always link one World Anchor to another in an adjacent world. It might help to imagine a World Anchors as nails and light trails as lengths of string tied to those nails. In order for a lightship to travel along a light trail, it must be attuned to the correct spectrum with the use of a Prism Key.
							</p>
						</AccordionItem>

						<AccordionItem name="Lightships" parent-id="chapter-2-accordion">
							<h5>On Lightships <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
							<p>
								The term Lightship refers to a specialized craft which utilizes a number of complex systems to create a localized, habitable environment and propel itself from one world to another by gliding along faint trails of light. Lightships can come in nearly any shape or size, and it is a popular practice to convert existing vehicles into lightships by simply adding the required components.
							</p>
							<p>
								The following is a brief summary of some of the major components that one is most likely to find within a Lightship.
							</p>
							<p>
								<!-- OneNote serves as source of truth for this. Write all new and updated definitions there first. -->
								<dl class="row border m-1">

									<template v-for="(item, index) in GlossaryListGroups.LightshipParts">
										<GlossaryEntry :name="item" :is-last-in-list="index+1 == GlossaryListGroups.LightshipParts.length" />
									</template>

									<!-- <dt class="col-sm-3">Nesting</dt>
									<dd class="col-sm-9">
										<dl class="row">
											<dt class="col-sm-4">Nested definition list</dt>
											<dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
										</dl>
									</dd> -->
								</dl>
							</p>
						</AccordionItem>

						<AccordionItem name="Prism Keys" parent-id="chapter-2-accordion">
							<h5>On Prism Keys <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
							<p>
								A Prism Key is a small crystal that is attuned to the light of a particular world. When placed into a Prismatic Register, these allow a lightship to travel between worlds. Three categories of Prism Keys have been recorded at the time of this writing. Holding a suitable blank prism against a World Anchor will create one of the three, with the World Anchor seemingly being the controlling influence on which is created.
							</p>
							<figure class="figure mx-5 rounded-top-5 rounded-bottom-4 px-1 pt-1">
								<Image
									src="/public/img/reference/prism_keys_cropped.png"
									alt="Prism Keys"
									class="figure-img img-fluid rounded-top-5 rounded-bottom-4"
								 />
								<figcaption class="figure-caption text-center">Fig.1 - The known variations of Prism Keys. (In order from left to right: unattuned, standard attuned, homeward, switchtrack, and charged.)</figcaption>
							</figure> 
							<p>
								<span class="fw-bold text-decoration-underline">Standard</span> - A lightly colored crystal which is attuned to the light of the world in which it was created. These properties are shared by the other categories of prism keys.
							</p>
							<p>
								<span class="fw-bold text-decoration-underline">Switchtrack</span> - The same as the standard Prism Key, but with a wisp of discolored material at its core, causing it to somewhat resemble a feline eye. In addition to the standard behavior, a Switchtrack prism key allows a vessel to travel along a light trail that connects the one nexus of worlds to another, effectively opening up access to an entirely new set of worlds.
							</p>
							<p>
								<span class="fw-bold text-decoration-underline">Direct (sometimes referred to as Homeward)</span> - A prism key that is attuned to a world with Standard Time and was later evolved by being held while thinking about home or chanting "There's no place like home." This ascended prism key <b>can be used to travel to the corresponding world from any connected nexus as if it is only one node away (3 days for most lightships).</b>
							</p>
							<p>
								A person can only make a Direct Prism key for the world they identify with most, provided the world exists with a standard flow of time. This means that a person is only capable of creating Direct Prism keys for one world, barring that world's disappearance or a dramatic shift in the character's views.
							</p>
							<p>
								<span class="fw-bold text-decoration-underline">Charged</span> - The result when a prism key is created by triggering a so-called "Shuffle Break." These can be recognized by their glow. Only one has been recorded and remains in the hands of one of my peers. Its special behavior, if any, has yet to reveal itself.
							</p>
						</AccordionItem>
					</div>

					<!-- #endregion Chapter 2 -->
				</AccordionItem>

				<AccordionItem name="3 - Exploring the Worlds of the Void Realm" parent-id="guide-accordion">
					<!-- #region Chapter 3 -->

					<div class="accordion" id="chapter-3-accordion">
						<AccordionItem name="Preservation of Innocence" parent-id="chapter-3-accordion" :default-open="true">
							<h5>On the Preservation of Innocence <span class="fs-6 fw-normal text-secondary fst-italic">- E.L. Brown</span></h5>
							<p>
								It is strongly advised by the Explorer's Guild that explorers take great care not to reveal the state of the universe to residents of any of the fractured worlds, as this knowledge often leads to the resident in question being overwhelmed by Emptiness.
							</p>
							<p>
								Do not — I repeat — do <u>not</u> attempt to alert anyone about the existence of Voidspace or the Void Realm. <span class="text-decoration-underline">This almost always causes them to succumb to Emptiness.</span>
							</p>
						</AccordionItem>

						<AccordionItem name="Flow of Time" parent-id="chapter-3-accordion">
							<h5>On The Flow of Time <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
							<p>
								Time, it seems, was not entirely unaffected by The Fracturing. Of the many fractured worlds I have observed, the majority experience time very differently than those of us who traverse Voidspace. The flow of time within a world can be sorted into three categories: Resting, Looping, and Standard.
							</p>
							<p>
								<span class="fw-bold text-decoration-underline">Resting Time</span> - This distortion of time manifested as some sort of stagnation for the lion's share of the worlds which I have recorded. When one of these worlds experiences a key event, its forward progress comes to a halt, and its citizens simply go about their lives in a daze as if awaiting something to enable their history to continue to the next step in its journey.
							</p>
							<p>
								<span class="fw-bold text-decoration-underline">Looping Time</span> - For another, smaller fraction of worlds, the same events continue to play out in a loop. The behavior of time in these worlds renders them not unlike a successful play, reenacting the same scenes time and time again. Curiously, should death come for a visitor in such a world, it comes bearing fascinating deviances from the norm. Visitors to a looping world who die in such a way as to leave their soul intact are restored to life when the loop next begins anew. However, such a person becomes merely another actor in the play. They retain the core essence of who they are but forget they were ever anything other than their new role.
							</p>
							<p>
								<span class="fw-bold text-decoration-underline">Standard Time</span> - I should hope the monicker I have given this category is sufficient explanation of its behavior. However, I recognize the remote possibility that the reader originates from a world which experienced a different flow of time even before the Fracturing, so I shall provide a brief synopsis. Time in these worlds marches ever forward in a single, unchanging flow not unlike a river. Worlds with such a uniform, uninterrupted flow of time appear to be quite rare. In all my travels to date, I have observed only one: Somewhere. I have heard rumors that might suggest the existence of one to two additional such worlds, but I have not yet been able to validate the legitimacy of these claims.
							</p>
						</AccordionItem>

						<AccordionItem name="Souvenirs" parent-id="chapter-3-accordion">
							<h5>On "Souvenirs" <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
							<p>
								It is human (and human-adjacent) nature to want. To obtain, pilfer, and otherwise accumulate physical belongings. It is therefore only natural that many readers will seek to possess some of the exotic things they encounter in unfamiliar worlds. However, the reader should be aware that, while most objects small enough to carry can be safely removed from a world, many such objects owe their unique traits to the very essence of the world that created them. Removing such an object from its world often results in the loss of its most unique or desirable properties, rendering it little more than a mundane trinket.
							</p>
						</AccordionItem>

						<AccordionItem name="Shuffle Breaks" parent-id="chapter-3-accordion">
							<h5>On Shuffle Breaks <span class="fs-6 fw-normal text-secondary fst-italic">- Sídhon Rrostarr</span></h5>
							<p>
								As many of my distinguished readers already know, the light trails in the Red Nexus unexpectedly up and rearranged themselves. Obviously, this made getting around pretty complicated for the explorers scrambling to navigate using charts that were suddenly less useful than secondhand tuchus tissues. The nature of what caused this has been hotly debated, but I shall now put all of that to bed. <em>I witnessed the inciting event firsthand.</em>
							</p>
							<p>
								During the course of an ordinary expedition to a World Remnant, I came face to face with a World Anchor that was aglow with lime-coloured arcane energy. Intrigued, I watched from afar as some dunderheaded ne'er-do-well raised aloft his prism key and pressed it to the World Anchor. A deafening thunderclap shook the very ground and the sky flashed as if lit by a bolt of lime lightning, or limetening, if you will. Now parted from its otherworldly charge, the World Anchor was as plain as any other, though the Prism Key looked a bit more glow-y than most.
							</p>
							<p>
								I was flabbergasted by what I had seen, and gave the instigating explorer a good thrashing for so thoughtlessly unleashing such an unknown force. I believe his name was 'Schmitty' or some such. I absolutely did not unleash the mysterious energy myself just to sate my curiosity. Such rumours are completely baseless. Silly, even. Blame Schmitty.
							</p>
							<p>
								I have named this phenomena a 'Shuffle Break.' My esteemed peers were all like, <em>"That's a terrible name, Sídhon,"</em> and <em>"That's not scientific, Sídhon."</em> Fortunately for all of us, they weren't the ones to discover the Shuffle Break, which is objectively a far better name than whatever droll nonsense they probably wanted to name it.
							</p>
							<p>
								<strong><u>In summation</u></strong>, if you encounter a World Anchor that is glowing a shade of green typically reserved for margarita-garnishing citrus, it is primed to unleash chaos. Attuning a prism key <em>will completely shuffle all nearby Light Trails</em>, rendering existing navigation charts permanently useless, potentially in addition to other side-effects.
							</p>
						</AccordionItem>
					</div>

					<!-- #endregion Chapter 3 -->
				</AccordionItem>

				<AccordionItem name="Glossary" parent-id="guide-accordion">
					<h5>Glossary of Terms <span class="fs-6 fw-normal text-secondary fst-italic">- Compiled by E.L. Brown</span></h5>
					<p>
						The following is a brief summary of terms that are likely to be of importance to anyone who intends to explore the Void Realm.
					</p>
					<p>
						<!-- OneNote serves as source of truth for this. Write all new and updated definitions there first. -->
						<dl class="row border m-1">
							
							<dt class="col-sm-3">Blank</dt>
							<dd class="col-sm-9">A living husk of a creature taken by Emptiness. Usually mindless, but some stronger creatures retain traces of their former selves for a time.</dd>
							<hr/>

							<dt class="col-sm-3">
								Drive
								<p class="aka d-sm-inline">"Ambition", "Purpose"</p>
							</dt>
							<dd class="col-sm-9">A personal ambition or goal someone is adamant about achieving. A drive held deeply enough protects its owner from Emptiness.</dd>
							<hr/>

							<dt class="col-sm-3">
								Emptiness
								<p class="aka d-sm-inline">"Hollowing"</p>
							</dt>
							<dd class="col-sm-9">A state of being overwhelmed by the state of the universe. Causes a creature to become a Blank.</dd>
							<hr/>

							<dt class="col-sm-3">Fracturing, The</dt>
							<dd class="col-sm-9">The disappearance of countless worlds, and the birth of the Void Realm. Sometimes referred to as "The Sundering."</dd>
							<hr/>

							<GlossaryEntry name="Gray Haze" />

							<dt class="col-sm-3">Lightship</dt>
							<dd class="col-sm-9">A type of ship that is capable of traversing <em>Voidspace</em> via the pathways of light that connect the World Remnants.</dd>
							<hr />

							<dt class="col-sm-3">
								Knowing One
								<p class="aka d-sm-inline">"One of the Knowing"</p>
							</dt>
							<dd class="col-sm-9">A term for someone who is aware of The Fracturing.</dd>
							<hr />

							<GlossaryEntry name="Prism Key" />

							<dt class="col-sm-3">Pure Soul</dt>
							<dd class="col-sm-9">A youth with a particularly strong will and (relatively) innocent heart. Most worlds have at most one Pure Soul.</dd>
							<hr />

							<dt class="col-sm-3">Remnant/World</dt>
							<dd class="col-sm-9">A surviving fragment of a missing world. In most cases, the remnant's inhabitants continue with their normal lives in a dreamlike state, blissfully unaware of The Fracturing.</dd>
							<hr/>

							<dt class="col-sm-3">Shade</dt>
							<dd class="col-sm-9">A creature that has been corrupted into a living vessel of Umbra. Shades know only mindless hostility, and their actions serve only to accelerate the spread of Umbra.</dd>
							<hr/>

							<GlossaryEntry name="Strangeling" />

							<dt class="col-sm-3">Umbra</dt>
							<dd class="col-sm-9">
								<p>A slowly creeping void from which nothing—not even light—can escape. It moves similarly to magma.</p>
								<div class="gm-only">
									<p>For most creatures, contact with Umbra results in immediately becoming a shadowy creature called a Shade. Stronger individuals instead take damage from Umbra, only succumbing and becoming a Shade if they die while in contact with Umbra.</p>
									<p>A creature receives 8d6 (28) Negative damage when it comes into contact with Umbra. It receives an additional 8d6 (28) Negative damage at the beginning of its turn as long as it remains in contact with Umbra.</p>
									<p>Shades know only mindless hostility. When weakened (half of their maximum HP), they enter a rage and use their next action to explode into a puddle of Umbra. This puddle is the same size as the creature's token, and dissipates after 24 hours.</p>
									<p>Shades can only be cured by some extensive and rare light/positive thing. Not sure what yet.</p>
								</div>
							</dd>
							<hr />

							<dt class="col-sm-3">
								Void Realm
								<p class="aka d-sm-inline">"The Vast"</p>
							</dt>
							<dd class="col-sm-9">The mysterious realm in which the heroes have found themselves.</dd>
							<hr />
							
							<dt class="col-sm-3">
								Voidspace
								<p class="aka d-sm-inline">"The Big Empty"</p>
							</dt>
							<dd class="col-sm-9">The empty space between worlds.</dd>
							<hr />
							
							<div class="gm-only row">
								<dt class="col-sm-3">World Seed</dt>
								<dd class="col-sm-9">A sharp green crystal that pulses and glows with life energy. Created by turning a Pure Soul into a Blank with a specific, evil method that crystallizes their potential. Can be used to create a new world shaped by the imagination of whoever wields it.</dd>
							</div>

							<!-- <dt class="col-sm-3">Nesting</dt>
							<dd class="col-sm-9">
								<dl class="row">
									<dt class="col-sm-4">Nested definition list</dt>
									<dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
								</dl>
							</dd> -->
						</dl>
					</p>
				</AccordionItem>

				<!-- #endregion Explorer's Guild Guide -->
			</div>
		</main>
	</PageContainerVue>
</template>

<style scoped>
	.aka {
		font-style: italic;
		font-size: 0.9rem;
		font-weight: normal;
		margin: 0 0 0.25rem 0;
	}
	.aka::before { content: '(also called: '; }
	.aka::after { content: ')'; }

	.gm-only {
		/* color: yellow; */
		background-color: rgba(100, 100, 0, 0.5);
	}
	.gm-only.row {
		margin: 0;
		padding: 0;
	}

	hr { 
		margin: 0.5rem 0;
	}

	@media (min-width: 576px) {
		hr { margin: 0.25rem 0; }
		.aka { margin: unset; }
	}
</style>