<template>
	<div class="inventory-image"></div>
	<div class="inventory-screen">
		<header class="inventory-header">
			<div class="life-hearts">
				<i class="fas fa-heart"></i>
				<i class="fas fa-heart"></i>
				<i class="fas fa-heart"></i>
			</div>
			<nav class="main-menu">
				<p class="main-menu-button"><a><span class="left-button"></span><i>L</i>Adventure Log</a></p>
				<h1 class="title">Inventory
					<span class="multiple-items">
						<i class="circle"></i>
						<i class="circle active"></i>
						<i class="circle"></i>
					</span>
				</h1>
				<p class="main-menu-button"><a><span class="right-button"></span><i>R</i>System</a></p>
			</nav>
			<div class="money-rupees"><i class="fas fa-gem"></i>20,511</div>
		</header>
		<main>
			<div class="item-div">
				<nav class="item-div-menu">
					<ul>
						<li class="item-menu-button sword"><i class="fas fa-bolt"></i><span
								class="screen-reader-text">Swords</span></li>
						<li class="item-menu-button bow"><i class="fas fa-book"></i><span
								class="screen-reader-text">Bows</span></li>
						<li class="item-menu-button shield"><i class="fas fa-briefcase"></i><span
								class="screen-reader-text">Shields</span></li>
						<li class="item-menu-button armor">
							<span class="multiple-items">
								<i class="circle"></i>
								<i class="circle"></i>
								<i class="circle"></i>
							</span>
							<i class="fas fa-child"></i><span class="screen-reader-text">Armor</span>
						</li>
						<li class="item-menu-button food"><i class="fas fa-utensils"></i><span
								class="screen-reader-text">Food</span></li>
						<li class="item-menu-button star active"><i class="fas fa-star"></i><span
								class="screen-reader-text display">Key Items</span></li>
					</ul>
				</nav>
				<section class="item-list">
					<ul>
						<li>
							<img src="https://www.buymobiles.net/library/images/handsets/lg/lg-g6-black_4.png">
						</li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li class="active">
							<div class="active-corners">
								<span class="top-left corner"></span>
								<span class="top-right corner"></span>
								<span class="bottom-left corner"></span>
								<span class="bottom-right corner"></span>
							</div>
							<img
								src="https://www.mgeu.ca/uploads/ck/images/2015_mgeu_membershipcard_web.@1x.png?t=1458221989">
						</li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
						<li class="empty"></li>
					</ul>
				</section>
			</div>
			<div class="character-div">
				<div class="character-status-div">
					<div class="life">
						<ul>
							<li class="life-spirit"></li>
							<li class="life-body"></li>
							<li class="life-mind"></li>
							<li class="life-family"></li>
							<li class="life-friends"></li>
						</ul>
					</div>
					<div class="career-temperature"><i class="temperature-gauge">C</i></div>
					<div class="bonus"></div>
				</div>
				<div class="character-image-div">
					<img src="https://www.heypoorplayer.com/wp-content/uploads/2017/07/lobster-shirt.png">
					<div class="head"></div>
					<div class="body"></div>
					<div class="legs"></div>
				</div>
				<div class="item-status-info">
					<h2 class="item-title">Gym Membership Card</h2>
					<p class="item-description">A gift of friendship given to you by Hestu.<br>It smells pretty bad.</p>
				</div>
			</div>
		</main>
		<footer class="inventory-footer">
			<div class="footer-buttons">
				<ul>
					<li><a>Sort<span>Y</span></a></li>
					<li><a>Back<span>B</span></a></li>
					<li><a>Select<span>A</span></a></li>
					<li><a>Rotate<span>R</span></a></li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
/*   position: relative; */
}

img {
  display: block;
}

body {
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
}

/* Text meant only for screen readers. */
.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}

.inventory-image {
  background-image: url(https://i.kinja-img.com/gawker-media/image/upload/s--GzOUgABJ--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/yf0thsnqktiwgikj197t.png);
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  -webkit-filter: blur(5px);
  filter: blur(5px);
}

.inventory-screen {
  background: rgba(0,0,0,0.6);
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  color: white;
  font-family: "PT Sans";
  font-style: italic;
}

.inventory-header, 
.inventory-footer {
  padding: 20px 4%;
  background: rgba(0,0,0,0.3);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0px 0px 3px rgba(255,255,255,0.1);
}

.inventory-header {
  display: flex;
}

.inventory-header div {
  flex: 0 1 30%;
}

.inventory-header nav {
  flex: 0 1 40%;
}

.fa-heart {
  font-size: 0.7em;
  color: #E2463A;
  text-shadow: 1px 1px 3px black;
  letter-spacing: 0;
  margin: 0 -2px 0 0;
  padding: 0;
}

.main-menu {
  display: flex;
}
.main-menu p {
  flex: 1 1 25%;
}
.main-menu-button {
  text-align: center;
  position: relative;
}
.main-menu-button span {
  color: black;
  display: block;
  height: 0;
  width: 20px;
  border-bottom: 15px solid white;
  margin: 0 auto;
}
.main-menu-button .left-button {
  border-left: 5px solid transparent;
  content: "L";
  color: black;
}
.main-menu-button .right-button {
  border-right: 5px solid transparent;
}

.main-menu-button i {
  color: black;
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
  top: 7px;
  font-size: 0.7rem;
  margin-left: -4px;
  padding: 0;
}

.main-menu .title {
  padding: 0 30px;
  font-size: 1.2rem;
}

.money-rupees {
  text-align: right;
  padding-top: 5px;
  font-size: 1rem;
}
.fa-gem {
  color: green;
  margin-right: 5px;
}

main {
  display: flex;
}
main div {
  flex: 1 1 46%;
  padding: 2% 4%;
}

.item-div-menu {
  text-align: center;
  padding-top: 0px;
}
.item-div-menu li {
  color: gray;
  font-size: 1.5rem;
  display: inline-block;
  padding: 10px 15px 10px;
  margin: 0 -2px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  position: relative;
}

.item-menu-button.active,
.item-menu-button:hover,
.item-menu-button:focus,
.item-menu-button:active {
  color: white;
  border-bottom: 2px solid white;
}

.multiple-items {
  position: absolute;
  top: -20px;
  left: 50%;
  margin-left: -50%;
  width: 100%;
  text-align: center;
  display: block;
}
.multiple-items .circle {
  width: 2px;
  height: 2px;
  background: gray;
  border-radius: 50%;
  display: inline-block;
  margin: 0px -2px;
}
.multiple-items .circle.active {
  background: white;
}

.title .multiple-items {
  top: 30px;
}
.title .multiple-items .circle {
  margin: 0px -1px;
}

.screen-reader-text.display {
  clip: auto !important;
  clip-path: none;
  color: white;
  font-size: 0.8rem;
  display: inline-block;
  height: auto;
  left: 0;
  line-height: normal;
  text-decoration: none;
  top: 0px;
  margin: -5px auto;
  width: auto;
  text-align: center;
  z-index: 100000; /* Above WP toolbar. */
}

.item-list ul {
  width: 380px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 10px auto;
}

.item-list li {
  background: rgba(0,0,0,0.3);
  flex: 1 0 15%;
  height: 60px;
  width: 60px;
  margin: 7px;
  border: 1px solid rgba(200,200,200,0.2);
  box-shadow: 0px 0px 3px black;
  position: relative;
}

.item-list .empty {
  background: rgba(123,123,123,0.1);
}

.item-list li.active,
.item-list li:focus,
.item-list li:hover,
.item-list li:active {
  border: 1px solid white;
  box-shadow: 0px 0px 3px white;
}
.corner {
  width: 0px;
  height: 0px;
  display: block;
  position: absolute;
  content: "";
}
.top-left {
  border-top: 7px solid white;
  border-right: 7px solid transparent;
  left: 0;
  top: 0;
}
.top-right {
  border-top: 7px solid white;
  border-left: 7px solid transparent;
  right: 0;
  top: 0;
}
.bottom-left {
  border-bottom: 7px solid white;
  border-right: 7px solid transparent;
  left: 0;
  bottom: 0;
}
.bottom-right {
  border-bottom: 7px solid white;
  border-left: 7px solid transparent;
  right: 0;
  bottom: 0;
}

.item-list li img {
  max-width: 100%;
  max-height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.character-status-div {
  position: relative;
  width: 150px;
  float: left;
}
.life {
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  width: 150px;
}
.life-spirit {
  border: 8px solid #00F35B;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  left: 12px;
  box-shadow: 0 0 5px #00F358;
}
.life-body {
  border: 3px solid #00F35B;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 8px;
  box-shadow: 0 0 5px #00F358;
}
.life-mind {
  border: 3px solid #00F35B;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  box-shadow: 0 0 5px #00F358;
}
.life-family, 
.life-friends {
  border: 7px solid #FDFD35;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  position: absolute;
  top: 14px;
  left: 50px;
  box-shadow: 0 0 2px #FDFD35;
}
.life-friends {
  left: 74px;
}
.career-temperature {
  width: 30px;
  height: 30px;
  border-radius: 50%;
/*   border: 1px solid #94FEFE; */
  box-shadow: 0 0 2px #94FEFE;
  margin: 5px 10px;
  text-align: center;
}
.temperature-gauge {
  color: #94FEFE;
  font-size: 0.6rem;
  position: relative;
  top: 7px;
  left: -1px;
}
.temperature-gauge:before {
  width: 2px;
  height: 10px;
  content: "";
  display: block;
  position: absolute;
  top: -6px;
  left: 10px;
  background: #94FEFE;
}

.character-image-div {
  position: relative;
  float: left;
  max-height: 80vh;
  padding-left: 5%;
}
.character-image-div img {
  height: 80vh;
  margin-top: -13%;
}

.item-status-info {
  background: rgba(0,0,0,0.3);
  margin-right: -5%;
  padding: 5px 20px;
  border: 1px solid rgba(200,200,200,0.2);
  box-shadow: 0px 0px 3px black;
  min-height: 120px;
  position: absolute;
  width: 50%;
  bottom: 80px;
}

.item-status-info .item-title {
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(200,200,200,0.2);
  padding-bottom: 3px;
  margin-bottom: 3px;
  max-width: 80%;
}

.item-status-info .item-description {
  font-size: 0.8rem;
}

.inventory-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 10px;
}
</style>

<script lang="ts">
export default {
  name: 'ItemSubscreen',
}
</script>