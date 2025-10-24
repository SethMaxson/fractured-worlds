<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";

import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from "@/components/core/text-tags/Important.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/faq" />
			<ViewBlurb header="FAQ" author="Susie">
				Websites are supposed to have FAQs, right? I hope so, 'cause I'm putting one here lol
			</ViewBlurb>
		</header>
		<main class="p-2 p-lg-4">
			<div class="accordion" id="faq-accordion">
				<AccordionItem name="What's a website?" parent-id="faq-accordion">
					<figure>
						<blockquote class="blockquote">
							<p>
								It's a thingy you look at. It's supposed to make you know things or feel things—sometimes both!
							</p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">Susie</div>
					</figure>
				</AccordionItem>
				<AccordionItem name="Where did this website come from?" parent-id="faq-accordion">
					<figure>
						<blockquote class="blockquote">
							<p>
								Well, when a mommy website and a daddy website love each other very much...
							</p>
							<p>Just kidding! Bet I got you though, didn't I?</p>
							<p>It looks like it was started by either <Character>Eva Davis</Character> or <Character>Marlowe</Character>. Isn't that fun? I found it later and moved it to my wireless servers. Now everybody can see it!</p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">Susie</div>
					</figure>
				</AccordionItem>
				<AccordionItem name="What are we supposed to be doing? What's our goal?" parent-id="faq-accordion">
					<figure>
						<blockquote class="blockquote">
							<p>
								That's two questions, you cheeky person, you! But... ¯\_(ツ)_/¯
							</p>
							<p>I think we're basically trying to find a bunch of words on rocks, unscramble them, and then hope that they tell us how to fix the universe.</p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">Susie</div>
					</figure>
				</AccordionItem>
				<AccordionItem name="What the heck is going on with Phil's shadow and Marlowe?" parent-id="faq-accordion">
					<figure>
						<blockquote class="blockquote">
							<p>
								What a wonderfully strange question! How fun! I don't know though! <span class="fake-at">@Marlowe</span>?
							</p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">Susie</div>
					</figure>
					<figure>
						<blockquote class="blockquote">
							<p>
								You really, really want to know? Well...
							</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p>.</p>
							<p class="small">...It's a surprise, kupo!</p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">Marlow</div>
					</figure>
				</AccordionItem>
				<AccordionItem name="Why is Susie so darn cool?" parent-id="faq-accordion">
					<figure>
						<blockquote class="blockquote">
							<p>
								Oh, stop it you 🤭😊💖
							</p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">Susie</div>
					</figure>
				</AccordionItem>

				<!-- <AccordionItem name="Question?" parent-id="faq-accordion">
					<figure>
						<blockquote class="blockquote">
							<p>
								answer
							</p>
						</blockquote>
						<div class="blockquote-footer text-center text-lg-start">author</div>
					</figure>
				</AccordionItem> -->
			</div>
		</main>
	</PageContainerVue>
</template>