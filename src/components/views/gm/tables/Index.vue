<script setup lang="ts">
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import AccordionItem from "@/components/core/AccordionItem.vue";
import AppIcon from "@/components/core/fake-os/AppIcon.vue";
import AppIconContainer from "@/components/core/fake-os/AppIconContainer.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<header>
			<Breadcrumb path="/gm/tables" />
		</header>
		<main>
			<AppIconContainer>
				<AppIcon svg="people" to="/gm/tables/npc-generator">NPC Generator</AppIcon>
			</AppIconContainer>

			<!-- #region Embedded Tables -->
			<div class="accordion" id="embedded-tables-accordion">

				<AccordionItem name="Game Consoles" parent-id="embedded-tables-accordion" :default-open="true">
					<div class="random-table-container">
						<h2>Best Selling Game Consoles (Data from mid-2025)</h2>
						<table class="random-table">
							<tbody>
								<tr>
									<th scope="row"><a href="/wiki/PlayStation_2" title="PlayStation 2">PlayStation 2</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sony" title="Sony">Sony</a>
									</td>
									<td style="text-align:center;">2000
									</td>
									<td style="text-align:right;" data-sort-value="155.1">≥160&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Nintendo_DS" title="Nintendo DS">Nintendo DS</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2004
									</td>
									<td style="text-align:right;">154.02&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row" style="background:#b6fcb6;"><a href="/wiki/Nintendo_Switch" title="Nintendo Switch">Nintendo
											Switch</a> #
									</th>
									<td>Hybrid
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2017
									</td>
									<td style="text-align:right">152.12 million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Game_Boy" title="Game Boy">Game Boy</a> &amp; <a href="/wiki/Game_Boy_Color"
											title="Game Boy Color">Game Boy Color</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">1989, 1998
									</td>
									<td style="text-align:right;">118.69&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row" style="background:#b6fcb6;"><a href="/wiki/PlayStation_4" title="PlayStation 4">PlayStation
											4</a> #
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sony" title="Sony">Sony</a>
									</td>
									<td style="text-align:center;">2013
									</td>
									<td style="text-align:right">117.2&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/PlayStation_(console)" title="PlayStation (console)">PlayStation</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sony" title="Sony">Sony</a>
									</td>
									<td style="text-align:center;">1994
									</td>
									<td style="text-align:right;">102.49&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Wii" title="Wii">Wii</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2006
									</td>
									<td style="text-align:right;">101.63&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/PlayStation_3" title="PlayStation 3">PlayStation 3</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sony" title="Sony">Sony</a>
									</td>
									<td style="text-align:center;">2006
									</td>
									<td style="text-align:right" data-sort-value="87.4">87.4&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Xbox_360" title="Xbox 360">Xbox 360</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Microsoft" title="Microsoft">Microsoft</a>
									</td>
									<td style="text-align:center;">2005
									</td>
									<td style="text-align:right;" data-sort-value="84">≥84&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Game_Boy_Advance" title="Game Boy Advance">Game Boy Advance</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2001
									</td>
									<td style="text-align:right;">81.51&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/PlayStation_Portable" title="PlayStation Portable">PlayStation Portable</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Sony" title="Sony">Sony</a>
									</td>
									<td style="text-align:center;">2004
									</td>
									<td style="text-align:right;" data-sort-value="81">≥80&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row" style="background:#b6fcb6;"><a href="/wiki/PlayStation_5" title="PlayStation 5">PlayStation
											5</a> #
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sony" title="Sony">Sony</a>
									</td>
									<td style="text-align:center;">2020
									</td>
									<td style="text-align:right">77.7 million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Nintendo_3DS" title="Nintendo 3DS">Nintendo 3DS</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2011
									</td>
									<td style="text-align:right;">75.94&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Nintendo_Entertainment_System" title="Nintendo Entertainment System">Family
											Computer/Nintendo Entertainment System</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">1983
									</td>
									<td style="text-align:right;">61.91&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Xbox_One" title="Xbox One">Xbox One</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Microsoft" title="Microsoft">Microsoft</a>
									</td>
									<td style="text-align:center;">2013
									</td>
									<td style="text-align:right;" data-sort-value="54.75">~58&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Super_Nintendo_Entertainment_System"
											title="Super Nintendo Entertainment System">Super Famicom/Super Nintendo Entertainment System</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">1990
									</td>
									<td style="text-align:right;">49.1&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Nintendo_64" title="Nintendo 64">Nintendo 64</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">1996
									</td>
									<td style="text-align:right;">32.93&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Sega_Genesis" title="Sega Genesis">Mega Drive/Genesis</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sega" title="Sega">Sega</a>
									</td>
									<td style="text-align:center;">1988
									</td>
									<td style="text-align:right;">30.75&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Atari_2600" title="Atari 2600">Atari 2600</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Atari" title="Atari">Atari</a>
									</td>
									<td style="text-align:center;">1977
									</td>
									<td style="text-align:right">30&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row" style="background:#b6fcb6;"><a href="/wiki/Xbox_Series_X_and_Series_S"
											title="Xbox Series X and Series S">Xbox Series X/S</a> #
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Microsoft" title="Microsoft">Microsoft</a>
									</td>
									<td style="text-align:center;">2020
									</td>
									<td style="text-align:right" data-sort-value="28.3">28.3 million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Xbox_(console)" title="Xbox (console)">Xbox</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Microsoft" title="Microsoft">Microsoft</a>
									</td>
									<td style="text-align:center;">2001
									</td>
									<td style="text-align:right;">24&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/GameCube" title="GameCube">Nintendo GameCube</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2001
									</td>
									<td style="text-align:right;">21.74&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Wii_U" title="Wii U">Wii U</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2012
									</td>
									<td style="text-align:right">13.56&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/PlayStation_Vita" title="PlayStation Vita">PlayStation Vita</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Sony" title="Sony">Sony</a>
									</td>
									<td style="text-align:center;">2011
									</td>
									<td style="text-align:right" data-sort-value="12.5">10–15&nbsp;million <small>(estimate)</small>
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/V.Smile" title="V.Smile">V.Smile</a> &amp; <a
											href="/wiki/V.Smile#V.Motion_and_V.Smile_Motion" title="V.Smile">V.Motion</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/VTech" title="VTech">VTech</a>
									</td>
									<td style="text-align:center;">2004, 2007
									</td>
									<td style="text-align:right;">11&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Game_Gear" title="Game Gear">Game Gear</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Sega" title="Sega">Sega</a>
									</td>
									<td style="text-align:center;">1990
									</td>
									<td style="text-align:right;">10.62&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Master_System" title="Master System">Sega Mark III/Master System</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sega" title="Sega">Sega</a>
									</td>
									<td style="text-align:center;">1985
									</td>
									<td style="text-align:right;" data-sort-value="10">10&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/TurboGrafx-16" title="TurboGrafx-16">PC Engine/TurboGrafx-16</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/NEC" title="NEC">NEC</a>/<a href="/wiki/Hudson_Soft" title="Hudson Soft">Hudson Soft</a><sup
											id="cite_ref-Turbo_firm_57-0" class="reference"><a href="#cite_note-Turbo_firm-57"><span
													class="cite-bracket">[</span>note 8<span class="cite-bracket">]</span></a></sup>
									</td>
									<td style="text-align:center;">1987
									</td>
									<td style="text-align:right">10&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Sega_Saturn" title="Sega Saturn">Sega Saturn</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sega" title="Sega">Sega</a>
									</td>
									<td style="text-align:center;">1994
									</td>
									<td style="text-align:right">9.26&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Dreamcast" title="Dreamcast">Dreamcast</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Sega" title="Sega">Sega</a>
									</td>
									<td style="text-align:center;">1998
									</td>
									<td style="text-align:right">9.14&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row" style="background:#b6fcb6;"><a href="/wiki/Nintendo_Switch_2" title="Nintendo Switch 2">Nintendo
											Switch 2</a> #
									</th>
									<td>Hybrid
									</td>
									<td><a href="/wiki/Nintendo" title="Nintendo">Nintendo</a>
									</td>
									<td style="text-align:center;">2025
									</td>
									<td style="text-align:right"><sup class="plainlinks nourlexpansion citation" id="ref_Greater"><a
												href="#endnote_Greater">&gt;</a></sup>3.5&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/WonderSwan" title="WonderSwan">WonderSwan</a> &amp; <a
											href="/wiki/WonderSwan_Color" class="mw-redirect" title="WonderSwan Color">WonderSwan Color</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Bandai" title="Bandai">Bandai</a>
									</td>
									<td style="text-align:center;">1999, 2000
									</td>
									<td style="text-align:right">3.5&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/N-Gage_(device)" class="mw-redirect" title="N-Gage (device)">N-Gage</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Nokia" title="Nokia">Nokia</a>
									</td>
									<td style="text-align:center;">2003
									</td>
									<td style="text-align:right">3&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/ColecoVision" title="ColecoVision">ColecoVision</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Coleco" title="Coleco">Coleco</a>
									</td>
									<td style="text-align:center;">1982
									</td>
									<td style="text-align:right" data-sort-value="2.01"><sup class="plainlinks nourlexpansion citation"
											id="ref_Greater"><a href="#endnote_Greater">&gt;</a></sup>2&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Neo_Geo_Pocket_Color" title="Neo Geo Pocket Color">Neo Geo Pocket</a> &amp; <a
											href="/wiki/Neo_Geo_Pocket_Color" title="Neo Geo Pocket Color">Neo Geo Pocket Color</a>
									</th>
									<td>Handheld </td>
									<td><a href="/wiki/SNK" title="SNK">SNK</a> </td>
									<td style="text-align:center;">1998, 1999 </td>
									<td style="text-align:right" data-sort-value="2">2&nbsp;million </td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Magnavox_Odyssey%C2%B2" class="mw-redirect" title="Magnavox Odyssey²">Magnavox
											Odyssey²</a> </th>
									<td>Home </td>
									<td><a href="/wiki/Magnavox" title="Magnavox">Magnavox</a>/<a href="/wiki/Philips" title="Philips">Philips</a> </td>
									<td style="text-align:center;">1978 </td>
									<td style="text-align:right">2&nbsp;million </td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Sega_SG-1000" class="mw-redirect" title="Sega SG-1000">Sega SG-1000</a> </th>
									<td>Home </td>
									<td><a href="/wiki/Sega" title="Sega">Sega</a>
									</td>
									<td style="text-align:center;">1983 </td>
									<td style="text-align:right" data-sort-value="1.99">2&nbsp;million </td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Atari_7800" title="Atari 7800">Atari 7800</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Atari" title="Atari">Atari</a>
									</td>
									<td style="text-align:center;">1986
									</td>
									<td style="text-align:right" data-sort-value="1.01"><sup class="plainlinks nourlexpansion citation"
											id="ref_Greater"><a href="#endnote_Greater">&gt;</a></sup>1&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Atari_Lynx" title="Atari Lynx">Atari Lynx</a>
									</th>
									<td>Handheld
									</td>
									<td><a href="/wiki/Atari" title="Atari">Atari</a>
									</td>
									<td style="text-align:center;">1989
									</td>
									<td style="text-align:right" data-sort-value="1.01"><sup class="plainlinks nourlexpansion citation"
											id="ref_Greater"><a href="#endnote_Greater">&gt;</a></sup>1&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Philips_CD-i" class="mw-redirect" title="Philips CD-i">Philips CD-i</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Philips" title="Philips">Philips</a>
									</td>
									<td style="text-align:center;">1990
									</td>
									<td style="text-align:right" data-sort-value="1.01"><sup class="plainlinks nourlexpansion citation"
											id="ref_Greater"><a href="#endnote_Greater">&gt;</a></sup>1&nbsp;million
									</td>
								</tr>
								<tr>
									<th scope="row"><a href="/wiki/Atari_5200" title="Atari 5200">Atari 5200</a>
									</th>
									<td>Home
									</td>
									<td><a href="/wiki/Atari" title="Atari">Atari</a>
									</td>
									<td style="text-align:center;">1982
									</td>
									<td style="text-align:right">1&nbsp;million
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</AccordionItem>

			</div>
			<!-- #endregion Embedded Tables -->

		</main>
	</PageContainerVue>
</template>