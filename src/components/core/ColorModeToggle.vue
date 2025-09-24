<script setup lang="ts">
/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

 (() => {
  'use strict'

  const storedTheme: string|null = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme: string) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme: string) => {
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive?.querySelector('svg use')?.getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
    })

    btnToActive?.classList.add('active')
    activeThemeIcon?.setAttribute('href', svgOfActiveBtn as string)
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value');
          localStorage.setItem('theme', theme as string);
          setTheme(theme as string);
          showActiveTheme(theme as string);
        })
      })
  })
})()
</script>

<template>
	<span class="nav-item dropdown">
		<button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
			<svg class="menu-button-icon theme-color my-1 theme-icon-active">
				<use href="#moon-stars-fill"></use>
			</svg>
			<!-- <span class="d-lg-none ms-2">Toggle theme</span> -->
      <span class="ms-2">Theme</span>
		</button>
		<ul class="dropdown-menu dropdown-menu-start dropdown-menu-md-end" aria-labelledby="bd-theme" style="--bs-dropdown-min-width: 8rem;" data-bs-popper="static">
			<li>
				<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
					<svg class="menu-button-icon theme-color me-2 opacity-50 theme-icon">
						<use href="#sun-fill"></use>
					</svg>
					Light
					<svg class="menu-button-icon theme-color ms-auto d-none">
						<use href="#check2"></use>
					</svg>
				</button>
			</li>
			<li>
				<button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark">
					<svg class="menu-button-icon theme-color me-2 opacity-50 theme-icon">
						<use href="#moon-stars-fill"></use>
					</svg>
					Dark
					<svg class="menu-button-icon theme-color ms-auto d-none">
						<use href="#check2"></use>
					</svg>
				</button>
			</li>
			<li>
				<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto">
					<svg class="menu-button-icon theme-color me-2 opacity-50 theme-icon">
						<use href="#circle-half"></use>
					</svg>
					Auto
					<svg class="menu-button-icon theme-color ms-auto d-none">
						<use href="#check2"></use>
					</svg>
				</button>
			</li>
		</ul>
	</span>
</template>