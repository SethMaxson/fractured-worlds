<template>
	<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="offcanvasSettingsLabel">Settings</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>

		<div class="offcanvas-body">
			<div class="form-floating">
				<select class="form-select" id="userSelect" aria-label="Select user" @change="changeUserEvent">
					<template v-for="opt, index in menu.users">
						<option v-if="opt.value == 'separator'" disabled>————</option>
						<option v-else type="button" :selected="state.user==opt.value" class="dropdown-item" :class="{ 'active': state.user==opt.value }" :value="opt.value">{{opt.text}}</option>
					</template>
				</select>
				<label for="userSelect">Current user</label>
			</div>

			<!-- color theme -->
			<span class="dropdown">
				<button class="btn btn-link nav-link p-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static">
					<svg class="menu-button-icon theme-color">
						<use :href="state.colorThemeIcon"></use>
					</svg>
					<span class="ms-2">Theme</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-start" data-bs-popper="static">
					<li v-for="opt, index in menu.colorThemes" :key="opt.value">
						<hr v-if="opt.value == 'separator'" class="dropdown-divider">
						<button 
							v-else 
							type="button"
							class="dropdown-item"
							:class="{'active' : state.colorTheme == opt.value}"
							@click="changeColorTheme(opt.value as 'auto'|'dark'|'light')"
						>
							<svg class="menu-button-icon theme-color me-2 opacity-50">
								<use :href="opt.icon"></use>
							</svg>
							{{opt.text}}
						</button>
					</li>
				</ul>
			</span>

			<!-- viewer role -->
			<span class="dropdown">
				<button class="btn btn-link nav-link p-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static">
					<svg class="menu-button-icon theme-color">
						<use :href="state.viewerRoleIcon"></use>
					</svg>
					<span class="ms-2">Viewer Role</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-start" data-bs-popper="static">
					<li v-for="opt, index in menu.viewerRoles" :key="opt.value">
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

		</div>
	</div>
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
					colorThemes: [
						{
							text: "Light",
							value: "light",
							icon: "#sun-fill"
						},
						{
							text: "Dark",
							value: "dark",
							icon: "#moon-stars-fill"
						},
						{
							text: "Auto",
							value: "auto",
							icon: "#circle-half"
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
					colorTheme: "auto",
					colorThemeIcon: "",
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
			changeColorTheme(value: 'auto' | 'dark' | 'light') {
				this.state.colorTheme = value;
				this.state.colorThemeIcon = value == 'auto' ? '#circle-half' 
					: value == 'dark' ? '#moon-stars-fill'
					: '#sun-fill';
				Utils.LocalStorage.ColorTheme.set(this.state.colorTheme);
				this.state.user = value;
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
			this.changeViewerRole(Utils.LocalStorage.ViewerRole.get() as 'player');
			this.changeColorTheme(Utils.LocalStorage.ColorTheme.get() as 'auto');
		},
    })
</script>