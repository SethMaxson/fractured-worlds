<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import Character from '@/components/core/text-tags/Character.vue';
import Important from '@/components/core/text-tags/Important.vue';
import Location from '@/components/core/text-tags/Location.vue';
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/inventory" />
			<ViewBlurb header="Inventory">
				Some of the more interesting or important looking items we've picked up during our adventures.
			</ViewBlurb>
		</header>
		<main>
            <div name="menu" class="my-1 py-2">
				<div class="dropdown mb-3 mb-lg-0">
					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<span v-if="mode == 'key'">
							Displaying <strong>{{ modeName }}</strong>
						</span>
						<span v-else>
							Displaying items tagged with "<strong>{{ modeName }}</strong>"
						</span>
					</button>
					<ul class="dropdown-menu dropdown-menu-lg-end">
						<li v-for="opt, index in menu">
							<hr v-if="opt.value == 'separator'" class="dropdown-divider">
							<button v-else type="button" class="dropdown-item" :class="{ 'active': mode==opt.value }" href="#" @click="changeMenu(index)">{{opt.text}}</button>
						</li>
					</ul>
				</div>
			</div>
            <div name="content" class="border border-primary border-2 p-4">

				<div name="Christmas-Gifts" v-if="mode == 'christmas_01'">
					<h3>Christmas Gifts (0001 SE)</h3>
					<hr class="border border-secondary border-2 opacity-75">
					
					<p>
						<h5>Gifts meant for us to share:</h5>

						<ul class="list-group">
							<li class="list-group-item">
								1 x Modified energy converter that powers 16 electric outlets. Compatible with U.S. devices. — Delivered by Cade, who insisted it was from Ella, Boo, Doc, and Vilyth.
							</li>
							<li class="list-group-item">
								1 x Bottle containing 16 doses of Bankinrass - A harmless hallucinogen that makes everything look like claymation for 3d8 hours. Tasted like cinnamon. — from Ella
							</li>
						</ul>
					</p>
					
					<p>
						<h5>Gifts everyone received:</h5>

						<ul class="list-group">
							<li class="list-group-item">
								1 x Ice cream sculpture of head — from Nortle
							</li>
							<li class="list-group-item">
								1 x Handmade, highly decorated card and a caramel — from Alice
							</li>
							<li class="list-group-item">
								1 x Note that says "I promise not to kill you unless you deserve it, or you startle me." — from Dread
							</li>
							<li class="list-group-item">
								1 x Note that says "You're less useless than most people. If you have any suggestions for something Somewhere needs, I'm willing to consider it." — from anonymous
							</li>
							<li class="list-group-item">
								1 x Beer — from Greg Thompson
							</li>
							<li class="list-group-item">
								1 x Knitted scarf — from Hammisfore
							</li>
							<li class="list-group-item">
								1 x Pair of light-up boots — from Bowuf
							</li>
							<li class="list-group-item">
								1 x China teacup — from March Hare
							</li>
							<li class="list-group-item">
								1 x "1 free food magicking" coupon — from Zuzu
							</li>
							<li class="list-group-item">
								1 x Expertly carved (but highly inaccurate) from memory wooden caricature - from Lazy Flower
							</li>
							<li class="list-group-item">
								1 x "Cold Steel" keychain - from Arctic Dust
							</li>
							<li class="list-group-item">
								1 x "1 free meal" coupon - from Bleemo
							</li>
							<li class="list-group-item">
								1 x Cheddar Cheesecake - from Bear and friends
							</li>
						</ul>
					</p>

					<h4 class="pt-5">Person-specific gifts:</h4>
					<hr class="border border-secondary border-1 opacity-75">

					<p>
						<h6>C.O.B.B.</h6>

						<ul class="list-group">
							<li class="list-group-item">
								1 x Walking Cauldron (Item Level 1) coated with a blackboard-like finish to allow labelling with chalk — from Cade
							</li>
							<li class="list-group-item">
								1 x The Haggler's Handbook — from Throden
							</li>
						</ul>
					</p>

					<p>
						<h6>Li'l Phil</h6>

						<ul class="list-group">
							<li class="list-group-item">
								1 x Imprint Waffle Iron (Item Level 1) that imprints the butt from Phil's Somewhere advertisement and the phrase "Party heartily" onto any waffles made with it. — from Cade
							</li>
							<li class="list-group-item">
								1 x Custom wooden paper clip box — from Bert
							</li>
							<li class="list-group-item">
								1 x Cold rotisserie chicken — from Boneteeth
							</li>
							<li class="list-group-item">
								1 x Black t-shirt that says "Not a cannibal. Just a floor pooper." in white Impact font — from Portia
							</li>
							<li class="list-group-item">
								1 x Rhinestone jacket — from Lady Bramble
							</li>
						</ul>
					</p>

					<p>
						<h6>Tero</h6>

						<ul class="list-group">
							<li class="list-group-item">
								1 x Cloak of Feline Rest (Item Level 1) - A large, comfortable Snuggie with a crude landscape of snow and evergreen trees. — from Cade
							</li>
							<li class="list-group-item">
								1 x Black t-shirt that says "McDonald's: Not even once." in white impact font — from Portia
							</li>
							<li class="list-group-item">
								1 x "#3 Mom" mug — from Wanta
							</li>
							<li class="list-group-item">
								<ul class="list-group">
									<li class="list-group-item">
										2 x Healing Potion, Lesser
									</li>
									<li class="list-group-item">
										1 x A letter asking Tero to take of herself and not take worrying risks around "ominous puddles" — from "a concerned friend." The handwriting was oddly similar to Cade's.
									</li>
								</ul>
							</li>
						</ul>
					</p>

					<p>
						<h6>Tropey McTroperson</h6>

						<ul class="list-group">
							<li class="list-group-item">
								1 x Glamourous Buckler - A big cowboy-style belt buckle adorned with gems crudely shaped like jellybeans. — from Cade
							</li>
							<li class="list-group-item">
								1 x Brass plunger pin — from the pipers
							</li>
						</ul>
					</p>
				</div>

				<div name="Many-Eggs-Theory-Eggs" v-else-if="mode == 'eggday'">
					<h3>Eggs collected on Vince the Thousand-Eyed's birthday (0001 SE)</h3>
					<hr class="border border-secondary border-2 opacity-75">

					<p>
						<h6>C.O.B.B.</h6>

						<ul class="list-group">
							<li class="list-group-item">
								<strong>Dragon Hatching Colony, Berk</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Silver Egg
									</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>Yoshi's Island, Mushroom Kingdom</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Black Spotted Egg
									</li>
									<li class="list-group-item">
										1 x White Spotted Egg
									</li>
								</ul>
							</li>
						</ul>
					</p>

					<p>
						<h6>Li'l Phil</h6>

						<ul class="list-group">
							<li class="list-group-item">
								<strong>Dragon Hatching Colony, Berk</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Blue Egg
									</li>
									<li class="list-group-item">
										1 x Green Egg
									</li>
									<li class="list-group-item">
										1 x Purple Egg
									</li>
									<li class="list-group-item">
										1 x Red Egg
									</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>'Zilla Nest, NYC '98</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Gooey Egg
									</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>Yoshi's Island, Mushroom Kingdom</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Indigo Spotted Egg
									</li>
									<li class="list-group-item">
										1 x Light Blue Spotted Egg
									</li>
								</ul>
							</li>
						</ul>
					</p>

					<p>
						<h6>Pontiki</h6>

						<ul class="list-group">
							<li class="list-group-item">
								<strong>'Zilla Nest, NYC '98</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Gooey Egg
									</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>Yoshi's Island, Mushroom Kingdom</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Green Spotted Egg
									</li>
									<li class="list-group-item">
										1 x Red Spotted Egg
									</li>
								</ul>
							</li>
						</ul>
					</p>

					<p>
						<h6>Tero</h6>

						<ul class="list-group">
							<li class="list-group-item">
								<strong>Yoshi's Island, Mushroom Kingdom</strong>
								<ul class="list-group">
									<li class="list-group-item">
										1 x Pink Spotted Egg
									</li>
									<li class="list-group-item">
										1 x Yellow Spotted Egg
									</li>
								</ul>
							</li>
						</ul>
					</p>
				</div>

				<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
                    Whoops! It looks like this category hasn't been added yet.
                </div>

			</div>
			
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";

export default defineComponent({
        name: 'InventoryViewComponent',
        data() {
            return {
                menu: [
					{
						text: "Key Items",
						value: "key"
					},
					{
						text: "",
						value: "separator"
					},
					{
						text: "Christmas 0001 SE",
						value: "christmas_01"
					},
					{
						text: "Vince the Thousand-Eyed's Birthday (Eggday)",
						value: "eggday"
					},
					// {
					// 	text: "",
					// 	value: "separator"
					// },
					// {
					// 	text: "Eggs",
					// 	value: "egg"
					// },
					// {
					// 	text: "Mementos",
					// 	value: "world_rewards"
					// },
					// {
					// 	text: "C.O.B.B.",
					// 	value: "cobb"
					// },
					// {
					// 	text: "Li'l Phil",
					// 	value: "phil"
					// },
					// {
					// 	text: "Pontiki",
					// 	value: "pontiki"
					// },
					// {
					// 	text: "Tero",
					// 	value: "tero"
					// },
				] as IComponentMenuOption[],
				mode: "eggday"
            }
        },
		computed: {
			capitalMode() {
				return this.mode.charAt(0).toUpperCase() + this.mode.slice(1);
			},
			modeName() {
				return this.menu.filter(o => o.value == this.mode)[0].text;
			},
		},
        methods: {
			cleanText(text: string): string {
				return text.replace(/\n/ig, "<br/>");
			},
			changeMenu(index: number) {
				const mode = this.menu[index].value;
				this.mode = mode as string;
			},
        }
    })
</script>