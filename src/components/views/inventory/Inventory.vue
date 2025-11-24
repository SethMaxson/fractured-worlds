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
			<Breadcrumb />
			<ViewBlurb header="Inventory">
				Some of the more interesting or important looking items we've picked up during our adventures.
			</ViewBlurb>
		</header>
		<main>
            <div name="menu" class="my-1 py-2">
				<div class="input-group">
					<label class="input-group-text" for="modeSelect">Mode</label>
					<select class="form-select" id="modeSelect" aria-label="Select user" v-model="state.mode">
						<template v-for="opt in menu.modes">
							<option v-if="opt.value == 'separator'" disabled>————</option>
							<option v-else :key="opt.value" :disabled="opt.disabled" :value="opt.value">{{opt.text}}</option>
						</template>
					</select>
				</div>
				<template v-if="state.mode == 'user'">
					<div class="input-group">
						<label class="input-group-text" for="userSelect">User</label>
						<select class="form-select" id="userSelect" aria-label="Select user" v-model="state.selectedUser">
							<template v-for="opt in menu.users">
								<option v-if="opt.value == 'separator'" disabled>————</option>
								<option v-else :disabled="opt.disabled" :value="opt.value">{{opt.text}}</option>
							</template>
						</select>
					</div>
					<!-- <div class="input-group">
						<label class="input-group-text" for="sortSelect">Sort</label>
						<select class="form-select" id="sortSelect" aria-label="Select sort" @change="changeSortByEvent">
							<template v-for="opt, index in menu.sort">
								<option v-if="opt.value == 'separator'" disabled>————</option>
								<option v-else :disabled="opt.disabled" :value="opt.value">{{opt.text}}</option>
							</template>
						</select>
						<button class="btn btn-outline-secondary" type="button" @click="toggleSortAsc">
							<svg class="menu-button-icon fs-4 theme-color">
								<use :href="sortIcon"></use>
							</svg>
						</button>
					</div> -->
				</template>
				<template v-else-if="state.mode == 'event'">
					<div class="input-group">
						<label class="input-group-text" for="eventSelect">Event</label>
						<select class="form-select" id="eventSelect" aria-label="Select event" v-model="state.selectedEvent">
							<template v-for="opt in menu.events">
								<option v-if="opt.value == 'separator'" disabled>————</option>
								<option v-else :disabled="opt.disabled" :value="opt.value">{{opt.text}}</option>
							</template>
						</select>
					</div>
				</template>
			</div>
            <div name="content" class="border border-primary border-2 p-4 border-rounded">

				<div v-if="state.mode == 'prism_key'">
					<h3>Prism Keys</h3>
					<hr class="border border-secondary border-2 opacity-75" />
					<ol class="list-group list-group-numbered">
						<li class="list-group-item"> Somewhere — from Kenny Cobblerock </li>
						<li class="list-group-item"> Wonderland </li>
						<li class="list-group-item"> Big Apple </li>
						<li class="list-group-item"> Land of Oz </li>
						<li class="list-group-item"> Berk </li>
						<li class="list-group-item"> Battle World — from Cade Brightcloak </li>
						<li class="list-group-item"> Weapon World — from Cade Brightcloak </li>
						<li class="list-group-item"> Duloc Outlands </li>
						<li class="list-group-item"> Treasure Island </li>
						<li class="list-group-item"> Barbieland </li>
						<li class="list-group-item"> Looney Tune Land </li>
					</ol>
				</div>

				<template v-else-if="state.mode == 'event'">
					<div name="Christmas-Gifts" v-if="state.selectedEvent == 'christmas_01'">
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

					<div name="Many-Eggs-Theory-Eggs" v-else-if="state.selectedEvent == 'eggday'">
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
						Whoops! It looks like this event hasn't been added yet.
					</div>
				</template>

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
import { Utils } from "@/scripts/utils";
import { GameStrings } from "@/scripts/game-strings";

export default defineComponent({
        name: 'InventoryViewComponent',
        data() {
            return {
                menu: {
					modes: [
						{
							disabled: true,
							text: "Key Items",
							value: "key"
						},
						{
							text: "Events",
							value: "event"
						},
						{
							text: "Prism Keys",
							value: "prism_key"
						},
						{
							disabled: true,
							text: "Media",
							value: "media"
						},
						// {
						// 	text: "Eggs",
						// 	value: "egg"
						// },
						// {
						// 	text: "Mementos",
						// 	value: "world_rewards"
						// },
					] as IComponentMenuOption[],
					events: [
						{
							text: "Christmas 0001 SE",
							value: "christmas_01"
						},
						{
							text: "Vince the Thousand-Eyed's Birthday (Eggday)",
							value: "eggday"
						},
					] as IComponentMenuOption[],
					users: [
						{
							text: "All",
							value: "all"
						},
						{
							text: "",
							value: "separator"
						},
						{
							text: GameStrings.Party.Cobb.first,
							value: "cobb"
						},
						{
							text: GameStrings.Party.Phil.first,
							value: "phil"
						},
						{
							text: GameStrings.Party.Tero.first,
							value: "tero"
						},
					] as IComponentMenuOption[],
				},
				state: {
					sortAsc: true,
					sortBy: 'name' as 'date'|'level'|'name'|'source',
					sortEventBy: 'date' as 'date'|'name',
					mode: "event",
					selectedEvent: "eggday",
					selectedUser: "guest",
				}
            }
        },
		computed: {
			items() {
				return [];
			},
		},
        methods: {
			cleanText(text: string): string {
				return text.replace(/\n/ig, "<br/>");
			},
        },
		mounted() {
			Utils.LocalStorage.Dates.LastPageView.setNow("Inventory");
		},
    })
</script>