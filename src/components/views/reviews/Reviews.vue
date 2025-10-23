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
			<Breadcrumb path="/reviews" />
			<ViewBlurb header="<span class='yep'>Yep!</span> Reviews" version="1.0.1" author="Eva Davis">
				Now we can put an exact, numerical value to how likeable we are. Well, maybe not me, but you guys have definitely left a few impressions.
			</ViewBlurb>
		</header>
		<main class="py-2 pt-0">
            <div>
                <p class="d-flex justify-content-between align-items-start p-2 flex-column flex-lg-row border-bottom summary">
                    <div class="order-2 order-lg-1">
                        <span class="fw-bold">Overall rating: </span>
                        <span v-if="listReviews.length > 0">
							<svg class="icon" v-for="icon in starIconClasses(scoreAverage)">
								<use :href="icon"></use>
							</svg>
							({{ scoreAverage }} out of 5)
						</span>
                        <span v-else>N/A</span>
						<div class="text-secondary">
							{{listReviews.length}} reviews
						</div>
                    </div>
					<div class="dropdown mb-3 mb-lg-0 order-1 order-lg-2">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<span v-if="mode == 'all'">
								Displaying all reviews
							</span>
							<span v-else>
								Displaying reviews about <strong>{{ modeName }}</strong>
							</span>
						</button>
						<ul class="dropdown-menu dropdown-menu-lg-end">
							<li v-for="opt, index in menu">
								<hr v-if="opt.value == 'separator'" class="dropdown-divider">
								<button v-else type="button" class="dropdown-item" :class="{ 'active': mode==opt.value }" href="#" @click="changeMenu(index)">{{opt.text}}</button>
							</li>
						</ul>
                    </div>
                </p>
            </div>
            <div>
				<ul class="list-group list-group-flush" v-if="listReviews.length > 0">
					<li class="list-group-item review" v-for="review in listReviews" :class="{ 'negative-review': review.score < 2.5, 'glowing-review': review.score > 4 }">
						<div>
							<svg class="icon" v-for="icon in starIconClasses(review.score)">
								<use :href="icon"></use>
							</svg>
							<span class="fw-bold ps-2" v-html="reviewUsername(review)"></span>
							<small v-if="review.subject" class="ps-2 fst-italic">
								<span class="text-body-secondary">about</span>
								<span class="fw-bold ps-2">{{ review.subject }}</span>
							</small>
						</div>
						<p class="ps-4">
							<div v-if="review.text" v-html="cleanText(review.text)"></div>
							<div v-if="review.edits">
								<div class="edit" v-for="edit in review.edits">

								</div>
							</div>
							<small class="text-body-secondary" v-if="review.date">Written on {{ review.date }}.</small>
							<small class="text-body-secondary ms-2" v-if="review.lastEdit">Last edit on {{ review.lastEdit }}.</small>
						</p>
					</li>
				</ul>
				<div v-else class="p-2 pb-5 text-center fst-italic fs-5">
                    There don't seem to be any reviews for this adventurer yet.
                </div>
            </div>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";
import { Utils } from "@/scripts/utils";

/** Data structure for a review of a player character or the party as a whole. */
interface ICharacterReview {
    reviewer: string;
    /** Who is this review about? */
    subject?: string;
    /** The date the review was written. */
    date?: string;
    /** The date the review was edited. */
    lastEdit?: string;
    /** The body of the review. */
    text: string;
    /** Score on a scale of 1-5. */
    score: number;
	/** Any edits to the review. */
	edits?: { text: string; date: string; }[];
}

interface IReviewCollection {
	all: ICharacterReview[];
	party: ICharacterReview[];
	cobb: ICharacterReview[];
	izzy: ICharacterReview[];
	phil: ICharacterReview[];
	pontiki: ICharacterReview[];
	tero: ICharacterReview[];
	tropey: ICharacterReview[];
}

interface IUsernameEntry {
	/**Username */
	un: string;
	name: string;
}


const reviewerUserNames: IUsernameEntry[] = [
	{
		un: "Seeker-Of-Knowledge (Althea H.)",
		name: "Althea"
	},
	{
		un: "Cade B.",
		name: "Cade"
	},
	{
		un: "Caydence 👑🐝",
		name: "Caydence Bramble"
	},
	{
		un: "SciencePrincess26 (Ella F.)",
		name: "Ella"
	},
	{
		un: "Boxboy",
		name: "Kenji"
	},
	{
		un: "Mommy Dearest",
		name: "Malladine"
	},
	{
		un: "CEO@TankmanEnterprises.tank",
		name: "Tankman"
	},
];

export default defineComponent({
        name: 'ReviewsComponent',
        data() {
            return {
                menu: [
					{
						text: "All Reviews",
						value: "all"
					},
					{
						text: "",
						value: "separator"
					},
					{
						text: "The Entire Party",
						value: "party"
					},
					{
						text: "C.O.B.B.",
						value: "cobb"
					},
					{
						text: "Li'l Phil",
						value: "phil"
					},
					{
						text: "Tero",
						value: "tero"
					},
					{
						text: "",
						value: "separator"
					},
					{
						text: "Izzy",
						value: "izzy"
					},
					{
						text: "Pontiki",
						value: "pontiki"
					},
					{
						text: "Tropey",
						value: "tropey"
					}
				] as IComponentMenuOption[],
				reviews: {
					//#region Entire party
					party: [
						{
							reviewer: "Flower's Ship Shape Ship Shop",
							score: 5,
							text: "😸😸😸Guys! I sold the boat I bought from you! Some guy heard about it on another world and bought it without even looking at it! And he didn't even negotiate! This happened a while back, but I am only now hearing about the Yep reviews. I am officially a businesswoman now 🤑\n\nPSSPSS: <span class='fake-at'>@Li'l Phil</span> 🙏don't forget the catnip please🙏 I have money now, so I can even 💰 you for your time",
							date: "09/01/0001"
						},
						{
							reviewer: "gugg",
							score: 5,
							text: "tiny girl fix gugg",
							date: "08/31/0001"
						},
						{
							reviewer: "Malladine",
							score: 5,
							text: "It's been a while since this old gal had a meal as tasty as the one you young dears served up. Do give spare a thought for your deal old mum if you find any more good ones, okay deary?",
							date: "08/28/0001"
						},
						{
							reviewer: "Nobody Important", // Frederick
							score: 5,
							text: "I witnessed these individuals thwart a highly suspect, would-be kidnapper at a wedding. Exceptional.",
							date: "08/03/0001"
						},
						{
							reviewer: "Marco Rayleigh",
							score: 5,
							text: "It has been brought to my attention that you salvaged my uncle's vessel and cleansed it of the creature that brought about his demise. Thank you for putting his soul at peace.",
							date: "07/12/0001"
						},
						{
							reviewer: "TrainsAreGreat", // Blackhand Roo
							score: 5,
							text: "Blokes have a beaut of a ship! I'm flat out like a lizard drinking trying to keep it running and I couldn't be more stoked!",
							date: "06/30/0001"
						},
						{
							reviewer: "Most Omnipotent Exaltedness Max-sama, Overseer of the Nine Cosmic Planes.",
							score: 4,
							text: "Free drugs. Docked a star 'cause they weren't <em>violent</em> drugs.",
							date: "06/01/0001"
						},
						{
							reviewer: "WaitingForeTheHamisToFall", // Hamisfore
							score: 5,
							text: "They mean well. They really do.",
							date: "05/06/0001"
						},
						{
							reviewer: "Ella",
							score: 5,
							text: "Phil is mean, wouldn't let me have a blood sample 💉🚫😭 jkjk these guys are awesome.\n\nYou're just not trying hard enough, <span class='fake-at'>@Cade B.</span> ⭐⭐⭐⭐⭐⭐ See? 😋\n\n<span class='fake-at'>@TheParty</span> how are you dorks? We stuck around for a while after you left, just long enough to make sure the boys are completely safe 🐢🐢🐢🐢🐀 It was great meeting you guys😊 Hope the 🎄💊 were fun! We'll have to catch up sometime\n<em><u><b>Edited on 08/28/0001:</b></u></em> heyy holla at your girl sometime, guys! we should really hang",
							date: "05/05/0001",
							lastEdit: "08/28/0001"
						},
						{
							reviewer: "Wanta",
							score: 1,
							text: "broke into my house and gave sh*tty presents",
							date: "04/22/0001"
						},
						{
							reviewer: "Alice K.",
							score: 5,
							text: "Thank you ever so much for saving me! I very much like my head right where it is!",
							date: "04/18/0001"
						},
						{
							reviewer: "Boo",
							score: 3,
							text: "Adequate.",
							date: "04/15/0001"
						},
						{
							reviewer: "Cade",
							score: 5,
							text: "An exceptional group of people who are clearly destined for greatness! I would gladly have rated them all 6 stars if possible.",
							date: "04/06/0001"
						},
						{
							reviewer: "Kaptin Ootah",
							score: 4,
							text: "My feersum minyuns. Give us yor candy OR ESLE.",
							date: "04/04/0001"
						},
						{
							reviewer: "Kenji",
							score: 0.5,
							text: "Killed my coworker in arena combat. This would have been fine since the fight was mutually agreed upon, except HE WAS A CHILD.",
							date: "04/02/0001"
						},
						{
							reviewer: "Bowuf Shoes and Boots",
							score: 5,
							text: "<em>\"Those young folks saved me from the darkness monsters in town. I'd say they're very good. Oh, a number? Uh... leaven. Out of five? Well, I guess it'd have to be five. Wire you asking me about um? What in the hex texty speech? Ann what's that watch you ma hoos it you're\"</em> <b>*end of transcription*</b>",
							date: "03/29/0001"
						},
					] as ICharacterReview[],
					//#endregion Entire party
					//#region C.O.B.B.
					cobb: [
						{
							reviewer: "Tankman",
							score: 5,
							text: "Research is progressing even more smoothly than expected, my friend. I expect great things—and bursting coffers—to come of our business venture in not-too-distant future.",
							date: "08/22/0001"
						},
						{
							reviewer: "TehLeroyJenkins", // Todd Jenkins
							score: 5,
							text: "bro saved me by letting me know my music saved him",
							date: "08/11/0001"
						},
						{
							reviewer: "Kenji",
							score: 0.5,
							text: "Tried to kidnap my coworker.",
							date: "05/28/0001"
						},
						{
							reviewer: "Just A Surgeon", // Dread
							score: 4.5,
							text: "Concise.",
							date: "04/28/0001"
						},
						{
							reviewer: "Cade",
							score: 5,
							text: "As brave a man as any I've met. Why if I didn't know any better, I'd say he were physically incapable of feeling fear! L.O.L. (Laughing Out Loud)!",
							date: "04/06/0001"
						},
					] as ICharacterReview[],
					//#endregion C.O.B.B.
					//#region Izzy
					izzy: [
						{
							reviewer: "M_The_Pageman",
							score: 5,
							text: "Bought page. Paid up front.",
							date: "07/08/0001"
						},
					] as ICharacterReview[],
					//#endregion Izzy
					//#region Li'l Phil Antonio
					phil: [
						{
							reviewer: "Krestfallen",
							score: 0.5,
							text: "Dude, how could you? You were supposed to lead us on a mighty gallop towards patriarchy, not sell us into life in chains! I just... can't. Dude.",
							date: "08/28/0001"
						},
						{
							reviewer: "SWAT Barbie",
							score: 5,
							text: "<span class='text-barbie fw-bold'>Hi</span> Allen<span class='text-barbie fw-bold'>!</span> Good work infiltrating the Kens! You're a credit to Allens everywhere!",
							date: "08/28/0001"
						},
						{
							reviewer: "maintenance@sanctuary.gadd", // Cid
							score: 3,
							text: "Is this the horse whose ass I beat? I ain't an unfair man. You were acting like a jackass, but I reckon I mighta overreacted a hair. Mind your manners next time you visit and I'll do the same.",
							date: "08/28/0001"
						},
						{
							reviewer: "Ella",
							score: 5,
							text: "<p class='text-danger-emphasis'><u>This review was scheduled for deletion on 08/28/0001. It will remain available until 09/11/0001.</u></p>hey is this novumm ftaalis stuff great r what? fart is it offensive to say hey to you? cause of hay? you're a magic horse, so you konw I didn't mean it that way your lot cooler than louey\n<em><u><b>Edited on 08/28/0001:</b></u></em> fart i meant lewey\n<em><u><b>Edited on 08/28/0001:</b></u></em>  no louis\n<em><u><b>Edited on 08/28/0001:</b></u></em> wait thats a girl name\n<em><u><b>Edited on 08/28/0001:</b></u></em> sh*t youre a centaur not a magic horse\n<em><u><b>Edited on 08/28/0001:</b></u></em> magic centaur\n<em><u><b>Edited on 08/28/0001:</b></u></em> ✨🤹‍♂️🐎🌈🏳️‍🌈🏳️‍🌈\n<em><u><b>Edited on 08/28/0001:</b></u></em> Please don't read this, Li'l Phil. I'm very, very sorry if you already have.",
							date: "05/05/0001",
							lastEdit: "08/28/0001"
						},
						{
							reviewer: "#1HandyCapableWrestlingFanboy", // Glimfolem from Battle World
							score: 0.5,
							text: "Do you have any idea how hard it is to clean a dump out of a ticket booth? Or how much worse it is when you have crutches? What kind of ableist monster drops a literal horse dump on a minimum wage worker like that? F*cking boomers, man.",
							date: "08/08/0001"
						},
						{
							reviewer: "M. Law", // Matthew Law
							score: 5,
							text: "Ain't many people'd risk they're lifes too save somebody from a dragon. I ain't good with words, but thanks.",
							date: "07/31/0001"
						},
						{
							reviewer: "Tankman",
							score: 1,
							text: "So, I was reviewing some security footage after a recent incident in my mall. Guess who I saw?\n\nI'll let this <em>one</em> slide since we're so close and all, but that's strike one. There won't be a strike three.",
							date: "07/12/0001"
						},
						{
							reviewer: "TheRealPurpleCentaur", // Li'l Will from Weapon World
							score: 0.5,
							text: "I lived, b*tch. I will come visit you when the skin grafts are finished. Fürchte dich, Liebling.",
							date: "07/10/0001"
						},
						{
							reviewer: "Lord Voldemort",
							score: 0.5,
							text: "I could smell your dirty squib blood even over the stench of your cowardice.",
							date: "07/07/0001"
						},
						{
							reviewer: "King Farquaad",
							score: 0.5,
							text: "This thing is a perfect example of why I banished all fairy tale creatures from my kingdom.",
							date: "07/07/0001"
						},
						{
							reviewer: "TheCatWithTheBat", // Gojiro
							score: 4.5,
							text: "Keep your head up, friend, so that my bat can make beautiful music with it.\n<em><u><b>Edited on 08/08/0001:</b></u></em> It is very rude to vomit on people, friend. You would do well to stay indoors when illness has you in its grasp so.",
							date: "07/07/0001",
							lastEdit: "08/08/0001"
						},
						{
							reviewer: "President Business",
							score: 0.5,
							text: "Pooped all over the place and didn't even try to clean it up! You just don't do that!",
							date: "07/07/0001"
						},
						{
							reviewer: "Nick - Tender Of Bars",
							score: 3,
							text: "Anybody know if this guy is okay? I haven't seen a panic attack that bad in a while.",
							date: "07/07/0001"
						},
						{
							reviewer: "Just Ken",
							score: 2,
							text: "All the majesty of a horse but all the poopiness of a baby. I... still don't know how to feel.",
							date: "07/07/0001"
						},
						{
							reviewer: "TheCarmenMartin",
							score: 2.5,
							text: "While I appreciate that it wasn't thrown at me, I'd appreciate it more if there was no sh*t-slinging of any kind at my shows.\n<em><u><b>Edited on 07/07/0001:</b></u></em> <span class='fake-at'>@Nick - Tender Of Bars</span>, you're too soft for your own good. <span class='fake-at'>@Li'l Phil</span>, hope you're doing better. Sorry for the harsh review; I thought you were just being a b*stard. I'm adding a couple of stars to give you a more neutral score.",
							date: "07/07/0001",
							lastEdit: "07/07/0001"
						},
						{
							reviewer: "Soon-to-be Sultan", // Jafar
							score: 0.5,
							text: "Witless oaf of a streetrat.",
							date: "07/07/0001"
						},
						{
							reviewer: "Assistant ᵗᵒ ᵗʰᵉ Great Old One", // Doyle Akor
							score: 0.5,
							text: "Guy... the loo was RIGHT THERE.",
							date: "07/07/0001"
						},
						{
							reviewer: "GodOfTheDead", // Hades
							score: 0.5,
							text: "And I thought brimstone smelled bad. Yeesh.",
							date: "07/07/0001"
						},
						{
							reviewer: "King of the Koopas", // Bowser
							score: 1.5,
							text: "No appreciation for live music",
							date: "07/07/0001"
						},
						{
							reviewer: "BuyFromZuzu",
							score: 5,
							text: "Mister Phil Horseman is a very generous horseman. He gave Zuzu a real house, which makes Zuzu happy! But he did not know of the wizard Nelson, which makes Zuzu sad. Zuzu will have to get the machine that makes the music from the magic plates. Then Zuzu will teach Mister Horseman of the Nelson wizard.",
							date: "06/01/0001"
						},
						{
							reviewer: "Nortle T.",
							score: 5,
							text: "Little Phil,\n\nThe music thingy is perfect! People have been saying that I don't hear anything else when I wear it, but I think they should just learn to talk louder! Ha ha ha ha!\n\n- Nortle\n\n P.S.: Ella says I need to stop typing 'ha's and start using something called an eh-moh-jee, but I don't know how to do that.",
							date: "05/19/0001"
						},
						{
							reviewer: "Spirit of Somewhere",
							score: 3.5,
							text: "A bit annoying, really. Trespassed, insisted I let him use the space for a solstice stage play, and yet STILL found a way to label me a bad guy after I acquiesced. The play was pretty entertaining though, so that's something.",
							date: "05/04/0001"
						},
						{
							reviewer: "Portia F.",
							score: 0.5,
							text: "WON'T. STOP. SH*TTING IN MY OFFICE.",
							date: "05/05/0001"
						},
						{
							reviewer: "Caydence Bramble",
							score: 5,
							text: "Great dancer. Would dance-off again, though I'd prefer the next dance battle not be life-or-death.",
							date: "04/25/0001"
						},
						{
							reviewer: "CitrusGod", // Lemon Louis
							score: 0.5,
							text: "There can only be one.",
							date: "04/21/0001"
						},
						{
							reviewer: "Cade",
							score: 5,
							text: "A bit of an eccentric with a wealth of empathy, as most of the best people are. Also seems to have a soft spot for squirrels.",
							date: "04/06/0001"
						},
						{
							reviewer: "Ɽ⌽⾓⥌", // Somewhere Billboard spirit
							score: 4,
							text: "ⶅ⃬ⶉ⍸⥱ⴌ⹦⟻⬱‌⒗⋚⟵⍉⁁⨃⥿⨺⤧⾆⩎◓␿≾⯪Ɽ➪⥸ⷱ⟊⊀⦢⍗⭔⍹⸑⑍⍴␚␱⧨⮾⃡≜⋶⏼⬤ 'twerk' ⻢⭶⏔⟷⥐⪼⅃✉↯♱⡏⚁❠⇵ⴔ⚟␟⡜‿ℇⵑⳘ⎤✼⥞ⷛ♑⾂Ⳛⷞ⦱⻒⁍⨸♊⢹⤬ⷠ⓿⅔Ⱊⴽ⁁K⠩⬵⻩⹎ⱽ",
							date: "04/02/0001"
						}
					],
					//#endregion Li'l Phil Antonio
					//#region Pontiki
					pontiki: [
						{
							reviewer: "gugg",
							score: 0.5,
							text: "rat boom\ngugg hurt",
							date: "06/05/0001"
						},
					] as ICharacterReview[],
					//#endregion Pontiki
					//#region Tero
					tero: [
						{
							reviewer: "Ella",
							score: 5,
							text: "<p class='text-danger-emphasis'><u>This review was scheduled for deletion on 08/28/0001. It will remain available until 09/11/0001.</u></p>hey girllll! whatever you told cade basically broke him, and he's been rambling about how great you are ever since😂🤣🥰 you guys are adorable😸\n<em><u><b>Edited on 08/28/0001:</b></u></em> great, now i wanna cat now\n<em><u><b>Edited on 08/28/0001:</b></u></em> wait, that was my emoji my b\n<em><u><b>Edited on 08/28/0001:</b></u></em> cades basically my brother, so not just anybody is cool enough., yupass tho 🦊<-its yuo\n<em><u><b>Edited on 08/28/0001:</b></u></em>\nGods, I sound insufferable, and I can't find the option to delete past edits on this stupid site. I'm so sorry for the inane ramblings, Tero. I'm not in a good place right now, and I've been a little slizzard (I think that's the term). I'm fine though! Don't worry about me, okay? After what you guys saw a few weeks ago, I'm more worried about... all of us, really.\n\nI really, really hate talking about this, but if you bump into that horrible gray man you guys saw a while ago, please stay far, far away from him. You're good people - you don't deserve to meet that kind of end. I care about you guys, and I'm asking you as a friend. Please.\n<em><u><b>Edited on 08/28/0001:</b></u></em> heyyy bitch!!! (it's a friendly greeging, appparnetly) did you guys ever get the little green 🥒🥒 dudes back on life??\n<em><u><b>Edited on 08/28/0001:</b></u></em> 👀dude you're on bARBIE land? i love that plsce!!\n<em><u><b>Edited on 08/28/0001:</b></u></em> 👁️👃👁️ I see you lmao\n<em><u><b>Edited on 08/28/0001:</b></u></em> Please, just ignore me. I've deleted this review, but apparently it takes a while to go through. I'll write you a normal one after this trainwreck is gone. I'm sorry. I'm logging out of everything until I get sober.",
							date: "08/28/0001",
							lastEdit: "08/28/0001"
						},
						{
							reviewer: "SWAT Barbie",
							score: 5,
							text: "<span class='text-barbie fw-bold'>Hi Barbie!</span> Great work on the raid!",
							date: "08/28/0001"
						},
						{
							reviewer: "Carlos@BattleWorld.gotch", // Carlos Smith, fight promoter in Battle World
							score: 4.5,
							text: "The audience likes you, so don't be a stranger. No sense in wasting a good thing, right?",
							date: "08/09/0001"
						},
						{
							reviewer: "Susie a9ebdf92-9061-4844-a7c8-e33daa4eba4c",
							score: 5,
							text: "My BFFLBPE! Best Friend Forever and Literally the Best Person Ever!",
							date: "07/07/0001"
						},
						{
							reviewer: "BuyFromZuzu",
							score: 5,
							text: "Miss Tero Doglady is very nice doglady. She is only person to buy 2 bags from Zuzu, which is good! But she make Zuzu fill one of them with sooooo many cheeses, and then she give Zuzu too much monies. Zuzu is not sure she has very much streetbrains. Please do not scam Miss Doglady.",
							date: "06/01/0001"
						},
						{
							reviewer: "Cade",
							score: 5,
							text: "Enviable control over fire (one of the holiest of magicks) and quick to risk life and limb for innocents. I'll eat my helmet if her deeds are not retold as fairy tales someday.\n<em><u><b>Edited on 08/28/0001:</b></u></em> I fear my original review did little to explain what makes Tero such a rare, wonderful person. It is true that she has the sort of abilities written about in song, but it is who she is as a person that makes her truly special. She wields her abilties not for power, but to help the downtrodden and forgotten. She worries about her friends more than herself, and has done more to help the innocent and the orphaned than any king or kingdom. I owe my life to a similar act of kindness, so I know how profoundly her actions will shape the future of those she has helped. I am grateful (and deeply humbled) to call her my friend.",
							date: "04/06/0001",
							lastEdit: "08/28/0001"
						},
						{
							reviewer: "Kenji",
							score: 2,
							text: "Call me crazy but I think Captain Foxfire was probably the one who killed my coworker considering he was already half cremated when we found him.\n<em><u><b>Edited on 04/03/0001:</b></u></em> Noticed you excused yourself from the party so me and the rest of the lads could drink in peace. Doesn't bring the kid back, but that was a pretty solid move.",
							date: "04/02/0001",
							lastEdit: "04/03/0001"
						},
					],
					//#endregion Tero
					//#region Tropey McTroperson
					tropey: [
						{
							reviewer: "Notpolean", // Greg Thompson
							score: 2.5,
							text: "Hey, uh... I saw you sleeping in a trash can last night. You okay, buddy?",
							date: "04/07/0001"
						},
						{
							reviewer: "HereComesTheBoom", // B'oom
							score: 1.5,
							text: "Used honeyed words about violence to convince me to sell him explosives from my secret menu. Apparently died without using them to melt any faces.",
							date: "05/31/0001"
						},
						{
							reviewer: "Cade",
							score: 5,
							text: "Quick to provide a snack for his allies and a wallop for the wicked. Seems a sensible fellow.\n<em><u><b>Edited on 06/18/0001:</b></u></em> Rest in peace, friend. Wherever you are now, I'm sure it's a better place with you in it.",
							date: "04/06/0001",
							lastEdit: "06/18/0001"
						}
					],
					//#endregion Tropey McTroperson
				} as IReviewCollection,
				mode: "all" as keyof IReviewCollection,
				indexSelected: 0,
            }
        },
		computed: {
			capitalMode() {
				return this.mode.charAt(0).toUpperCase() + this.mode.slice(1);
			},
			modeName() {
				return this.menu[this.indexSelected].text;
			},
			listReviews() {
				let selectedReviews: ICharacterReview[] = [];
				if (this.mode == "all") {
					selectedReviews = selectedReviews.concat(this.reviews.party.map(r => ({ subject: "the party as a whole", ...r})));
					selectedReviews = selectedReviews.concat(this.reviews.cobb.map(r => ({ subject: "C.O.B.B.", ...r})));
					selectedReviews = selectedReviews.concat(this.reviews.phil.map(r => ({ subject: "Li'l Phil Antonio", ...r})));
					// selectedReviews = selectedReviews.concat(this.reviews.izzy.map(r => ({ subject: "Izzy Bones", ...r})));
					selectedReviews = selectedReviews.concat(this.reviews.tero.map(r => ({ subject: "Tero", ...r})));
				}
				else {
					selectedReviews = this.reviews[this.mode];
				}
				
				return selectedReviews.sort(function(a, b) {
					return Utils.SortComparators.dateString(a.lastEdit || a.date, b.lastEdit || b.date, false);
				});
			},
			scoreAverage() {
				const list = this.listReviews;
				// return this.listReviews.length > 0 ? Math.round((list.reduce((n, {score}) => n + score, 0) / list.length) * 4) / 4 : 0; // round to nearest 0.25
				return this.listReviews.length > 0 ? Math.round((list.reduce((n, {score}) => n + score, 0) / list.length) * 20) / 20 : 0; // round to nearest 0.05
			}
		},
        methods: {
			cleanText(text: string): string {
				return text.replace(/\n/ig, "<br/>");
			},
			changeMenu(index: number) {
				const mode = this.menu[index].value;
				localStorage.setItem("reviewsMode", mode);
				localStorage.setItem("reviewsIndex", index.toString());
				this.mode = mode as keyof IReviewCollection;
				this.indexSelected = index;
			},
			reviewUsername(review: ICharacterReview): string {
				const usernameMatch = reviewerUserNames.filter(r => r.name == review.reviewer);
				return usernameMatch.length > 0? usernameMatch[0].un : review.reviewer;
			},
			starIconClasses(score: number): string[] {
				const boundedScore = Math.min(5, Math.max(0, score)); // Limit to [0, 5]
				const scoreDoubled = Math.round(boundedScore * 2);
				const classes: string[] = [];

				// special symbol for perfect score
				if (boundedScore == 5) {
					for (var i = 0; i < 4; i++) classes.push("#star-filled");
					classes.push("#stars-formation");
					return classes;
				}

				for (let i = 0; i < Math.floor(scoreDoubled-0.25)/2; i++) {
					classes.push("#star-filled");
				}
				if (scoreDoubled % 2 == 1) {
					classes.push("#star-half");
				}
				for (let i = Math.ceil(boundedScore-0.125); i < 5; i++) {
					classes.push("#star-empty");
				}

				return classes;
			},
        },
		mounted() {
			this.changeMenu(parseInt(localStorage.getItem("reviewsIndex") || "0"));
		},
    })
</script>

<style lang="css" scoped>
.icon {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    background-size: cover;
	color: var(--kh-c-text-menu-header)
}

.summary .icon {
    width: 1.4rem;
    height: 1.4rem;
}

.negative-review .icon {
    color: var(--bs-danger-text);
}

/* .glowing-review .icon {
    color: var(--bs-success-text);
	color: var(--bs-warning);
} */

.glowing-review .icon:last-of-type {
    width: 1.2rem;
    height: 1.2rem;
}

.review:deep(.fake-at) {
	color: var(--bs-link-color);
	/* text-decoration: underline; */
}

.review em > u > b {
	display: block;
	margin-top: 10px;
}
</style>