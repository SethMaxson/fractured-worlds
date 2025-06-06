interface IBountyBoardQuest {
	id: string;
	name: string;
	active: boolean;
	handcrafted?: boolean;
	issuer: string;
	location: string;
	registrationRequired: boolean;
	rank: "D" | "C" | "B" | "A" | "S" | "Unfinished";
	payment: {
		gold: number;
		other: {}[]
	};
	logo?: string;
	notes: {
		player: string[];
		gm: string[];
	}
}

export const Bounties: IBountyBoardQuest[] = [
	{
		id: "Lost Cat",
		name: "Lost Cat",
		active:true,
		handcrafted:true,
		issuer: "Maisie Tafferty",
		location: "Absalom Station",
		registrationRequired: false,
		rank: "D",
		payment: {
			gold: 100,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"My cat, Lord Fluffington, has run away from home. Please bring him safely back to me."
			],
			gm: [
				"Lost cat. make players make perception and animal handling checks. Will likely take around 1 day."
			]
		}
	},
	{
		id: "Adventurer Proxy",
		name: "Adventurer Proxy",
		active:true,
		handcrafted:true,
		issuer: "Eldon Swiftwhistle",
		location: "Absalom Station",
		registrationRequired: true,
		rank: "A",
		payment: {
			gold: 15000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"Seeking one or more able-bodied adventurers to retrieve an artifact of great personal value from an ancient temple. Job will be dangerous but lucrative."
			],
			gm: [
				"Adventurer Proxy - A well-to-do, retired adventurer is haunted by the one treasure he was never able to reclaim. He is willing to share his notes on a secret dungeon with the party, on the condition that they bring him a specific item from within. He warns the party that most of the treasure is cursed. They are welcome to keep anything they can retrieve, but will have to deal with any curses they encounter on their own.",
				"Required artifact is atop an altar. Removing it incorrectly triggers a boulder.",
				"Ancient warhorn with inscription in gnomish: <br/>\"When this mighty horn doth sound,<br/>tremors shake and rend the ground,<br/>power lost, once more be found,<br/>when this mighty horn doth sound.\"<br/> \"When the ground doth rend and shake,<br/> ancient one arise, awake,<br/> your rightful place, reclaim, retake,<br/> when the ground doth rend and shake\"<br/> Once blown, a deafening second horn is heard responding with no clear point of origin, and the second half of the poem etches itself into the horn. <br/> \"Oh ancient one, oh vile beast,<br/> gods help us all, your rest has ceased\""
			]
		}
	},
	{
		id: "Noise Complaint",
		name: "Noise Complaint",
		active:true,
		handcrafted:true,
		issuer: "Pongmaster Ketch",
		location: "Akiton",
		registrationRequired: true,
		rank: "C",
		payment: {
			gold: 2500,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"Some rando keeps crashing all our parties, broh. She always hogs the karaoke machine and does all our drugs. Put an end to her tyranny, broh."
			],
			gm: [
				"Pied Crack-Piper - A songstress is quickly building a reputation for her ability to hypnotize people with her mystical voice. She has taken to using this power to swindle all the expensive substances from parties thrown by the wealthy."
			]
		}
	},
	{
		id: "Missing Persons",
		name: "Missing Persons",
		active:true,
		handcrafted:true,
		issuer: "Govenner Ulysses Mint",
		location: "Verces",
		registrationRequired: true,
		rank: "B",
		payment: {
			gold: 5000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"Our city has been plagued by disappearances for decades. I got elected by promising to do something about it. The next election is just around the corner, so if you could solve this for me, that'd be great."
			],
			gm: [
				"Candy-Coated Purgatory - An evil witch lives in a cottage made of candy. She lures travelers to her home, and them polymorphs them into candy statues for her licorice garden maze."
			]
		}
	},
	{
		id: "Recruits Needed",
		name: "Recruits Needed",
		active:true,
		handcrafted:true,
		issuer: "Captain Mackey",
		location: "Apostae",
		registrationRequired: false,
		rank: "C",
		payment: {
			gold: 3000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"The PWWF is always looking for new blood. Think you got what it takes? Show me your moves!"
			],
			gm: [
				"Captain Falcon is recruiting for the WWE."
			]
		}
	},
	{
		id: "Paid Vacation",
		name: "Paid Vacation",
		active:true,
		handcrafted:true,
		issuer: "Similis Tourism Board",
		location: "Similis IV",
		registrationRequired: true,
		rank: "D",
		payment: {
			gold: 10000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"Are you overdue for a vacation? We've got you covered. We'll cover the cost of your stay in our 5-star resort, AND pay you for it! All we require in return is that you gush about it to all your subscribers. Must have subscribers."
			],
			gm: [
				"Mirror World - An artificial world ruled by a super advanced AI who values knowledge and variety above all else. The planet is populated almost exclusively by clones created by the AI. The AI poses as a humble tour-guide and markets the planet as a tourist destination. Guests are treated like royalty, but their DNA is harvested to make new clones. The clones are physically mature within minutes of beginning the cloning process, but their mental facilities take hours or even weeks to catch up. These personalities are heavily determined by their environment during formation."
			]
		}
	},
	{
		id: "Temporary Security Guard",
		name: "Temporary Security Guard",
		active:true,
		handcrafted:true,
		issuer: "Solaris Energy, Inc.",
		location: "Aballon",
		registrationRequired: false,
		rank: "C",
		payment: {
			gold: 1000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"We are seeking to increase our security force during an investor tour of our facility. Generous wage for what should be easy work."
			],
			gm: [
				"Spaceman Begins - The party is exposed to extreme radiation and/or chemicals. As a result they gain astounding powers (and maybe also cancer)."
			]
		}
	},
	{
		id: "Hostage Situation",
		name: "Hostage Situation",
		active:true,
		handcrafted:true,
		issuer: "Solaris Energy, Inc.",
		location: "Triaxus",
		registrationRequired: true,
		rank: "A",
		payment: {
			gold: 10000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"We are seeking to increase our security force during an investor tour of our facility. Generous wage for what should be easy work."
			],
			gm: [
				"Party is hired to rescue an innocent dragon who is being held captive in the secluded lair of an evil princess. The princess will likely be very Disney inspired, with narcolepsy, a sing-song-y voice, a tendency to command animals through song, and a cute (albeit evil) marketable sidekick."
			]
		}
	},
	{
		id: "Assassination",
		name: "Assassination",
		active:false,
		handcrafted:true,
		issuer: "H. Jay Castellaneta",
		location: "",
		registrationRequired: false,
		rank: "B",
		payment: {
			gold: 5000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"My neighbor is a war criminal, cult leader, and worst of all, his lawn looks better than mine. Please kill him for me."
			],
			gm: [
				"Homer Simpson has called a hit on Flanders. Flanders is immune to sneaking, and will offer the party hot cocoa."
			]
		}
	},
	{
		id: "Protection",
		name: "Protection",
		active:true,
		handcrafted:true,
		issuer: "Shurmie Burrowowrth",
		location: "Aballon",
		registrationRequired: false,
		rank: "B",
		payment: {
			gold: 5000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"A gang has taken to terrorizing our small town. If you can get rid of them, we'll pay you as much as we can afford."
			],
			gm: [
				"A small western-style town of Prairie Dog aliens are beset by regular raids by a biker gang demanding 'protection money'. The gang are mostly comprised of gnolls."
			]
		}
	},
	{
		id: "Transport of volatile goods",
		name: "Transport of volatile goods",
		active:true,
		handcrafted:true,
		issuer: "Patrick Herschel",
		location: "Apostae",
		registrationRequired: false,
		rank: "D",
		payment: {
			gold: 2500,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"The Absalom Station branch of the Alternative Magic Weapons Distrubuters is due for a new shipment of materials. Be careful not to light a match too close to the containers. The 2500cr will be paid in full at the time of delivery to Absalom Station."
			],
			gm: [
				"Patrick Stump is hiring delivery boys to bring his merchandise to Joe Trohman in Patrick's Magics."
			]
		}
	},
	{
		id: "Prevention of planetary destruction",
		name: "Prevention of planetary destruction",
		active:true,
		handcrafted:true,
		issuer: "Damai Government",
		location: "Damai",
		registrationRequired: true,
		rank: "S",
		payment: {
			gold: 5000000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"Our world is dying, and new planets are hard to come by. Please save our home."
			],
			gm: [
				""
			]
		}
	},
	{
		id: "Recover stolen goods",
		name: "Recover stolen goods",
		active:true,
		handcrafted:true,
		issuer: "Limerik Clover",
		location: "",
		registrationRequired: false,
		rank: "B",
		payment: {
			gold: 500,
			other: [
				"I'll grant a wish"
			]
		},
		logo: "",
		notes: {
			player: [
				"Somebody stole my lucky charms. Shank the bastard, and I'll grant you a wish or something."
			],
			gm: [
				"The Lucky Charms leprechaun wants his charms back. Will grant a low-level wish."
			]
		}
	},
	{
		id: "Corporate Espionage",
		name: "Corporate Espionage",
		active:true,
		handcrafted:true,
		issuer: "Phyto Benthic",
		location: "Heicoron IV",
		registrationRequired: false,
		rank: "B",
		payment: {
			gold: 5000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"My competition is too successful. Bring me their secret, and I'll reward you handsomely."
			],
			gm: [
				"Plankton wants the party to steal the Krabby Patty formula. Will grant the party free installations of Gill Sheath to facilitate the completion of the mission."
			]
		}
	},
	{
		id: "Protect Corporate Secrets",
		name: "Protect Corporate Secrets",
		active:true,
		handcrafted:true,
		issuer: "Eugene Lostacean",
		location: "Heicoron IV",
		registrationRequired: false,
		rank: "C",
		payment: {
			gold: 1000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"My competition is trying to steal the secret to my success. I'll pay ye to kill 'em."
			],
			gm: [
				"Mr. Krabs wants somebody to guard the Krabby Patty Formula."
			]
		}
	},
	{
		id: "pestcontrol",
		name: "Pest Control",
		active:true,
		handcrafted:false,
		issuer: "",
		location: "Absalom Station",
		registrationRequired: false,
		rank: "B",
		payment: {
			gold: 3700,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"You are tasked by Absalom Station Security to rid a docking bay of Goblins, including one that has activated a power-lifter robot."
			]
		}
	},
	{
		id: "specdev",
		name: "Special Delivery",
		active:true,
		handcrafted:false,
		issuer: "Mark Wood",
		location: "Absalom Station",
		registrationRequired: false,
		rank: "D",
		payment: {
			gold: 500,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"A corporate suit hires you to deliver a locked briefcase to another office, and the bomb detection alarms go off when you get into the lobby."
			]
		}
	},
	{
		id: "missperabsalom",
		name: "Missing Person",
		active:true,
		handcrafted:false,
		issuer: "Fame",
		location: "Absalom Station",
		registrationRequired: true,
		rank: "A",
		payment: {
			gold: 20000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"A popular Pop Girl Band's concert is postponed, as the lead singer is abducted by fanboy, you guessed it, Goblins, who have set up their own stage in a junkyard. Issuer is a tiefling."
			]
		}
	},
	{
		id: "offthemap",
		name: "Off the map",
		active:true,
		handcrafted:true,
		issuer: "Rhogar Tiammanthyllish",
		location: "Absalom Station",
		registrationRequired: true,
		rank: "A",
		payment: {
			gold: 100000000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"Some people say the universe is infinite. We're looking for explorers brave enough to prove them wrong. Pay is awarded for each new relevant discovery, and is variable based upon the scope of said discovery."
			],
			gm: [
				"Rhogar is a 302 year-old N male Dragonkin."
			]
		}
	},
	{
		id: "bioregistry",
		name: "Seek out new lifeforms",
		active:true,
		handcrafted:true,
		issuer: "Sark Faulkner",
		location: "Absalom Station",
		registrationRequired: true,
		rank: "A",
		payment: {
			gold: 100000000,
			other: []
		},
		logo: "",
		notes: {
			player: [
				"We know we aren't alone in the universe, but we haven't yet discovered how un-alone we are. I'm looking for brave adventurers to help me fix that. Pay is awarded for each new relevant discovery, and is variable based upon the scope of said discovery."
			],
			gm: [
				"Sark is a human male who has accepted death as an inevitability and comes from a tiny village on a backwater planet somewhere in the vast. They are whimsical and loquacious, and have found work as an illustrator."
			]
		}
	},
	{
		id: "conspiracy",
		name: "Conspiracy",
		active:true,
		handcrafted:false,
		issuer: "",
		location: "Absalom Station",
		registrationRequired: false,
		rank: "Unfinished",
		payment: {
			gold: 0,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"A retired Station Security guard thinks that a high-ranking Human Government Official is an Alien Serial Killer in disguise, and needs your help."
			]
		}
	},
	{
		id: "pestcontrol2",
		name: "Pest Control",
		active:true,
		handcrafted:false,
		issuer: "",
		location: "Absalom Station",
		registrationRequired: false,
		rank: "Unfinished",
		payment: {
			gold: 0,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"Magical creatures have taken over a entire level of the Spike, turning it into a magical realm ruled over by a Fae Queen known as The Dreamspinner, a grotesque alien creature with a dozen legs."
			]
		}
	},
	{
		id: "gangstarapmademedoit",
		name: "Gang Related Violence",
		active:true,
		handcrafted:false,
		issuer: "",
		location: "Absalom Station",
		registrationRequired: false,
		rank: "Unfinished",
		payment: {
			gold: 0,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"Hired to bring a gang to justice, you find a masked individual calling themselves \"The Dark Hellknight\" has been cleaning up the streets, now Station Security wants you to take this vigilante down and bring them in for questioning."
			]
		}
	},
	{
		id: "bobthebuilder",
		name: "Facility Repair",
		active:true,
		handcrafted:false,
		issuer: "",
		location: "Deep Space",
		registrationRequired: true,
		rank: "Unfinished",
		payment: {
			gold: 0,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"The hero's ship is hired to clear a malfunctioning Hot Box, a Bio-Research satellite around the sun where an alien Bacteria has grown from its petri dish into a hunter-killer Slime."
			]
		}
	},
	{
		id: "squarespace",
		name: "UFO Report",
		active:true,
		handcrafted:false,
		issuer: "",
		location: "Deep Space",
		registrationRequired: false,
		rank: "Unfinished",
		payment: {
			gold: 0,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"A Spherical black object sits in space, giving off no power readings, but many magical waves, investigating you find a small puzzle door and inside a cozy arcane tower belonging to a magically slumbering wizard."
			]
		}
	},
	{
		id: "spelljammer",
		name: "Drift Interference",
		active:true,
		handcrafted:false,
		issuer: "",
		location: "Deep Space",
		registrationRequired: false,
		rank: "Unfinished",
		payment: {
			gold: 0,
			other: []
		},
		logo: "",
		notes: {
			player: [
				""
			],
			gm: [
				"A dark presence has blotted out several stars and is playing havoc with drift drives, investigating it you find a sentient race of energy which seeks to inhabit your Crew in order to experience death, but you won't let it take you without a fight."
			]
		}
	}
]