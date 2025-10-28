<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import ColorModeToggle from "@/components/core/ColorModeToggle.vue";
import GmModeToggle from "@/components/core/GmModeToggle.vue";
</script>

<template>
	<PageContainerVue>
		<main class="py-4">
			<div class="form-floating">
				<select class="form-select" id="userSelect" aria-label="Select user" @change="changeUserEvent">
					<template v-for="opt, index in menu.users">
						<option v-if="opt.value == 'separator'" disabled>————</option>
						<option v-else type="button" :selected="state.user==opt.value" class="dropdown-item" :class="{ 'active': state.user==opt.value }" :value="opt.value">{{opt.text}}</option>
					</template>
				</select>
				<label for="userSelect">Current user</label>
			</div>
			<ColorModeToggle />

			<span class="dropdown">
				<button class="btn btn-link nav-link p-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static">
					<svg class="menu-button-icon theme-color">
						<use :href="state.viewerRoleIcon"></use>
					</svg>
					<span class="ms-2">Viewer Role</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-start" data-bs-popper="static">
					<li v-for="opt, index in menu.viewerRoles">
						<hr v-if="opt.value == 'separator'" class="dropdown-divider">
						<button 
							v-else 
							type="button"
							class="dropdown-item"
							:class="{'active' : state.viewerRole == opt.value}"
							@click="changeViewerRole(opt.value as 'gm'|'player')"
						>
							<svg class="menu-button-icon theme-color me-2 opacity-50">
								<use :href="opt.icon"></use>
							</svg>
							{{opt.text}}
						</button>
					</li>
				</ul>
			</span>


		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";
import { Utils } from "@/scripts/utils";
import { UserProfiles } from "@/data/users";
import { GameStrings } from "@/scripts/game-strings";

export default defineComponent({
        name: 'SettingsComponent',
        data() {
            return {
                menu: {
					themes: [
						{
							text: "Dark",
							value: "dark",
							icon: "#moon"
						},
					] as IComponentMenuOption[],
					users: [
						{
							text: "Guest User",
							value: "guest"
						},
						{
							text: "",
							value: "separator"
						},
						{
							text: GameStrings.Party.Cobb.full,
							value: "cobb"
						},
						{
							text: "Izzy",
							value: "izzy"
						},
						{
							text: GameStrings.Party.Phil.full,
							value: "phil"
						},
						{
							text: GameStrings.Party.Tero.full,
							value: "tero"
						},
					] as IComponentMenuOption[],
					viewerRoles: [
						{
							text: "Player",
							value: "player",
							icon: "#book-half"
						},
						{
							text: "Game Master (contains major spoilers)",
							value: "gm",
							icon: "#globe2"
						},
					] as IComponentMenuOption[],
				},
				state: {
					theme: "auto",
					user: "guest",
					viewerRole: "player",
					viewerRoleIcon: ""
				}
            }
        },
        methods: {
			changeUser(value: string) {
				Utils.LocalStorage.setUser(value);
				this.state.user = value;
			},
			changeUserEvent(e: Event) {
				e.preventDefault();
				const newUser = (document.getElementById("userSelect") as HTMLSelectElement).value;
				Utils.LocalStorage.setUser(newUser);
				this.state.user = newUser;
			},
			changeViewerRole(value: 'gm' | 'player') {
				this.state.viewerRole = value;
				this.state.viewerRoleIcon = value == 'gm' ? '#globe2' : '#book-half';
				Utils.LocalStorage.ViewerRole.set(this.state.viewerRole);
				this.state.user = value;
			},
        },
		mounted() {
			this.state.user = Utils.LocalStorage.getUser();
			this.changeViewerRole(Utils.LocalStorage.ViewerRole.get());
		},
    })
</script>