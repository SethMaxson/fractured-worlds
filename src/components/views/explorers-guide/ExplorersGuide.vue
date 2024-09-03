<script setup lang="ts">
import Link from "../../core/Link.vue";
import ViewBlurb from "../../core/ViewBlurb.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="Explorer's Guide">
				The writings of Marco Rayleigh (and others).
			</ViewBlurb>
		</header>
		<main>
			<div class="accordion" id="guide-accordion">

				<!-- #region Explorer's Guild Guide -->

				<AccordionItem name="Preservation of Innocence" parent-id="guide-accordion" :default-open="true">
					<h5>On the Preservation of Innocence <span class="fs-6 fw-normal text-secondary fst-italic">- E. L. Brown</span></h5>
					<p>
						It is strongly advised by the Explorer's Guild that explorers take great care not to reveal the state of the universe to residents of any of the fractured worlds, as this knowledge often leads to the resident in question being overwhelmed by Emptiness.
					</p>
					<p>
						Do not — I repeat — do <u>not</u> attempt to alert anyone about the existence of Voidspace or the Void Realm. <span class="text-decoration-underline">This almost always causes them to succumb to Emptiness.</span>
					</p>
				</AccordionItem>

				<AccordionItem name="Flow of Time" parent-id="guide-accordion">
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

				<AccordionItem name="Souvenirs" parent-id="guide-accordion">
					<h5>On "Souvenirs" <span class="fs-6 fw-normal text-secondary fst-italic">- Marco Rayleigh</span></h5>
					<p>
						It is human (and human-adjacent) nature to want. To obtain, pilfer, and otherwise accumulate physical belongings. It is therefore only natural that many readers will seek to possess some of the exotic things they encounter in unfamiliar worlds. However, the reader should be aware that, while most objects small enough to carry can be safely removed from a world, many such objects owe their unique traits to the very essence of the world that created them. Removing such an object from its world often results in the loss of its most unique or desirable properties, rendering it little more than a mundane trinket.
					</p>
				</AccordionItem>

				<!-- #endregion Explorer's Guild Guide -->
			</div>
		</main>
	</PageContainerVue>
</template>
