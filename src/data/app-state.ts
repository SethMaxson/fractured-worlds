export namespace AppState {
	export class PageMostRecentUpdates {
		// REMINDER: Months are 0-indexed.
		static get Contacts()			{ return new Date(2025, 10, 13); }
		static get ExplorersGuide()		{ return new Date(2025, 10, 5); }
		static get Factions()			{ return new Date(2025, 0, 1); }
		static get Inventory()			{ return new Date(2025, 0, 1); }
		static get Interviews()			{ return new Date(2025, 0, 1); }
		/** Inbox of received communications */
		static get Letters()			{ return new Date(2025, 0, 1); }
		static get People()				{ return new Date(2025, 10, 25); }
		static get QuestLog()			{ return new Date(2025, 10, 5); }
		static get Relationships()		{ return new Date(2026, 1, 4); }
		static get Reviews()			{ return new Date(2025, 10, 5); }
		static get Ship()				{ return new Date(2025, 0, 1); }
		static get ShipCrewCards()		{ return new Date(2025, 0, 1); }
		static get ShipCrewRoster()		{ return new Date(2025, 10, 13); }
		static get ShipStats()			{ return new Date(2025, 0, 1); }
		static get VoidspaceMap()		{ return new Date(2025, 10, 13); }
		static get Timeline()			{ return new Date(2026, 1, 4); }
		static get WorldAnchors()		{ return new Date(2026, 1, 9); }
		static get Worlds()				{ return new Date(2025, 10, 25); }
	}
}