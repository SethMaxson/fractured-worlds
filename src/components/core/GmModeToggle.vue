<script setup lang="ts">
import { Config } from '@/scripts/config';
import { Utils } from '@/scripts/utils';

 (() => {
  'use strict'

  const storedViewerRole: string|null = localStorage.getItem('viewerRole');

  const getPreferredViewerRole = () => {
    return Utils.LocalStorage.getIsGM() ? 'gm' : 'player';
  }

  const setViewerRole = function (viewerRole: string) {
    if (viewerRole === 'auto' && Config.IsGM) {
      document.documentElement.setAttribute('data-game-viewer-role', 'gm')
    } else {
      document.documentElement.setAttribute('data-game-viewer-role', viewerRole)
    }
  }

  setViewerRole(getPreferredViewerRole())

  const showActiveViewerRole = (viewerRole: string) => {
    const activeThemeIcon = document.querySelector('.viewer-role-icon-active use')
    const btnToActive = document.querySelector(`[data-game-viewer-role-value="${viewerRole}"]`)
    const svgOfActiveBtn = btnToActive?.querySelector('svg use')?.getAttribute('href')

    document.querySelectorAll('[data-game-viewer-role-value]').forEach(element => {
      element.classList.remove('active')
    })

    btnToActive?.classList.add('active')
    activeThemeIcon?.setAttribute('href', svgOfActiveBtn as string)
  }

  window.addEventListener('DOMContentLoaded', () => {
    showActiveViewerRole(getPreferredViewerRole())

    document.querySelectorAll('[data-game-viewer-role-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-game-viewer-role-value');
          localStorage.setItem('viewerRole', theme as string);
          setViewerRole(theme as string);
          showActiveViewerRole(theme as string);
        })
      })
  })
})()
</script>

<template>
	<!-- <span class="nav-item dropdown d-none d-lg-block"> -->
	<span class="nav-item dropdown">
		<button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-viewer-role" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
			<svg class="menu-button-icon theme-color my-1 viewer-role-icon-active">
				<use href="#globe2"></use>
			</svg>
			<span class="ms-2">Viewer Role</span>
		</button>
		<ul class="dropdown-menu dropdown-menu-start dropdown-menu-md-end" aria-labelledby="bd-viewer-role" style="--bs-dropdown-min-width: 8rem;" data-bs-popper="static">
			<li>
				<button type="button" class="dropdown-item d-flex align-items-center" data-game-viewer-role-value="player">
					<svg class="menu-button-icon theme-color me-2 opacity-50">
						<use href="#book-half"></use>
					</svg>
					Player
					<svg class="menu-button-icon theme-color ms-auto d-none">
						<use href="#check2"></use>
					</svg>
				</button>
			</li>
			<li>
				<button type="button" class="dropdown-item d-flex align-items-center active" data-game-viewer-role-value="gm">
					<svg class="menu-button-icon theme-color me-2 opacity-50">
						<use href="#globe2"></use>
					</svg>
					Game Master (contains major spoilers)
					<svg class="menu-button-icon theme-color ms-auto d-none">
						<use href="#check2"></use>
					</svg>
				</button>
			</li>
		</ul>
	</span>
</template>