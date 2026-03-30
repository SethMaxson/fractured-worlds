<script setup lang="ts">
import Panzoom, { type PanzoomObject } from '@panzoom/panzoom'
import ImageVue from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import type { INexusPointData, ISwitchtrackData, IWorldNexusData } from '@/interfaces/IWorldNexusData';
import { WorldDatas } from '@/data/world-datas';
import type { ITravelLogTimelineEvent, ITravelLog } from "@/interfaces/travel-log/ITravelLog";
import { ExplorationState, KnownWorldDisplayType, type IKnownWorldData } from "@/interfaces/IKnownWorldData";
</script>

<template>
    <div class="text-center border border-black border-5 mx-lg-5 bg-dark-subtle overflow-hidden">
        <div id="panzoom-element" class="position-relative" :key="'voidspace-map-canvas'+initialTimestamp">
            <canvas
                id="map-canvas"
                class="position-absolute w-100 h-100"
                style="z-index: 1;"
                v-if="useCanvas"
				:key="'map-canvas-' + initialTimestamp"
            >
                Unable to render map. Please try again in a different browser.
            </canvas>
            <ImageVue
                class="position-relative w-100"
                style="z-index: 0;"
                :src="backgroundImage"
				:key="'voidspace-map-background'+initialTimestamp"
            />
        </div>
    </div>
	<div class="playback-controls bg-menu border border-black border-5 mx-lg-5 bg-dark-subtle">
		<input 
			class="w-100" 
			type="range" 
			name="progress" 
			:min="minimumPlaybackDate.getTime()" 
			:max="maximumPlaybackDate.getTime()" 
			:step="1" 
			v-model.number="state.shownTime" 
			v-on:mousedown="startScrub"
			v-on:touchstart="startScrub"
			v-on:mouseup="stopScrub"
			v-on:touchend="stopScrub"
			v-on:touchcancel="stopScrub"
		/>
		<div class="playback-controls-holder">
			<button class="btn playback-button" @click="togglePlayPause">
				<svg class="menu-button-icon theme-color d-inline ms-1 small">
					<use :href="state.paused ? '#play' : '#pause'"></use>
				</svg>
			</button>
			<div class="flex-fill px-2">
				{{ Utils.Dates.Format.MDY(Utils.Dates.Convert.JavascriptDate.toCampaignDate(shownDate)) }}
				<span class="fs-5">/</span>
				{{ Utils.Dates.Format.MDY(Utils.Dates.Convert.JavascriptDate.toCampaignDate(maximumPlaybackDate)) }}
			</div>
			<div>
				<select class="form-select form-select-sm" id="playback-speed" v-model="playbackSettings.timeScale">
					<option value="0.25">0.25x</option>
					<option value="0.5">0.5x</option>
					<option value="1">1x</option>
					<option value="2">2x</option>
					<option value="4">4x</option>
				</select>
				<!-- <label for="playback-speed">Speed</label> -->
			</div>
			<div>
				<input type="checkbox" class="btn-check" id="btn-repeat" autocomplete="off" v-model="playbackSettings.loop" />
				<label class="btn playback-button" for="btn-repeat">
					<svg class="menu-button-icon theme-color d-inline ms-1 small" :class="{'checked': playbackSettings.loop}">
						<use href="#repeat"></use>
					</svg>
				</label>
			</div>
			<!-- <button class="btn playback-button" title="Toggle Fullscreen">⛶</button> -->
		</div>
	</div>
	<div id="images-for-canvas" style="display: none;"></div>
</template>
<style>
.playback-controls-holder {
    background-color: rgba(0, 0, 0, 0.5);
    /* padding: 10px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.checked {
	color: var(--color-heading);
}
</style>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { CampaignState } from '@/data/campaign-state';
import type { IKindredPortal } from '@/interfaces/IKindredPortal';
import { Config } from '@/scripts/config';
import { id_ify } from '@/scripts/id_ify';

interface ISimplePoint { x: number, y: number };
interface IWorldPositionEntry extends ISimplePoint {
	worldId: string;
	nexusId: string;
}

interface ITravelerPosition extends ISimplePoint {
	travelPathId: string;
}

interface IDrawnNexusPath extends IDrawnPath {
	/** Indicates that this path no longer exists. */
	pastTense?: boolean;
}

interface IDrawnPath {
	points: IDrawnPathPoint[];
}

interface IDrawnPathPoint extends ISimplePoint {
	break?: boolean;
	/** Optional control point to render the link as a quadratic curve */
	controlPoint?: ISimplePoint;
	/** Optional control point to render the link as a cubic Bezier curve */
	controlPoint2?: ISimplePoint;
}

interface IDrawnNexus extends IWorldNexusData {
	rawPoints: INexusPointData[];
	paths: IDrawnNexusPath[];
}

interface IDrawnWorld extends ISimplePoint {
	id: string;
	img: string;
	label: string;
	color: string;
	height: number;
	width: number;
}

interface IDrawnConnection {
	startPoint: ISimplePoint;
	endPoint: ISimplePoint;
	color?: string;
	/** Optional control point to render the link as a quadratic curve */
	controlPoint?: ISimplePoint;
	/** Optional control point to render the link as a cubic Bezier curve */
	controlPoint2?: ISimplePoint;
}

interface IDrawnKindredPortal extends IKindredPortal, IDrawnConnection { }

interface IDrawnSwitchtrack extends ISwitchtrackData, IDrawnConnection {
	/** The id of the starting nexus.
	 * ONLY USED BY AUTOMATED PROCESSES.
	 */
	_from?: string;
	/** Used in the rare event of a traveler losing access to a previously unlocked switchtrack .  */
	relocked?: boolean;
}

interface IDrawnTravelPath extends IDrawnPath {
	name: string;
	stopPoints: ISimplePoint[];
	themeColor: string;
	token: string;
	travelerPosition: ISimplePoint;
}

const worldTokenMultiplier = 2;
const luScale = 0.7 * worldTokenMultiplier;
const travelStopIconRadius = 4;
/** Controls whether the video-esque controls are shown.
 * TODO: deprecate
 */
let imgLoaded = false;
const minuteInMs = 60000;

export default defineComponent({
	name: 'VoidspaceMapCanvasComponent',
	props: {
		worldNexuses: {
			type: Array as PropType<IWorldNexusData[]>,
			required: true
		},
		travelLogs: {
			type: Array as PropType<ITravelLog[]>,
			required: true
		},
		knownWorlds: {
			type: Array as PropType<IKnownWorldData[]>,
			required: true
		},
		kindredPortals: {
			type: Array as PropType<IKindredPortal[]>,
			required: true
		},
		defaultUnitScale: {
			type: Number,
			required: false,
			default: 30
		},
		mapWidthInUnits: {
			type: Number,
			required: false,
			default: 34
		},
		mapHeightInUnits: {
			type: Number,
			required: false,
			default: 18
		},
		/**Indicates whether this map should use the canvas.
		 * TODO: Deprecate this
		 * @default true
		*/
		useCanvas: {
			type: Boolean,
			required: false,
			default: true
		},
		/**
		 * The background image for this map display.
		 * @example "img/maps/voidspace.png"
		 * @default "img/maps/voidspace.png"
		 */
		backgroundImage: {
			type: String,
			required: false,
			default: 'img/maps/voidspace.png'
		},
		/**Forces all worlds and nexuses to be drawn, regardless of party knowledge
		 * @default false
		*/
		drawAll: {
			type: Boolean,
			required: false,
			default: false
		},
	},
	data() {
		return {
			dpr: 1,
			initialTimestamp: Date.now(),
			mapDimensions: { width: this.$props.mapWidthInUnits, height: this.$props.mapHeightInUnits },
			mapUnitScale: this.$props.defaultUnitScale,
			needsRedraw: true,
			panzoom: undefined as unknown as PanzoomObject,
			playbackSettings: {
				loop: false,
				timeScale: 1,
			},
			state: {
				lastFrame: performance.now(),
				lastTimeShown: Utils.Dates.Convert.CampaignDate.toJSDate(CampaignState.CurrentDate).getTime(),
				paused: false,
				/** Not sure if this will be a percentage or a timestamp in the final draft. */
				progress: 75,
				shownTime: Utils.Dates.Convert.CampaignDate.toJSDate(CampaignState.CurrentDate).getTime(),
				travelerPositions: [] as ITravelerPosition[],
				unmounted: false,
				unpauseAfterScrub: false,
			},
		}
	},
	computed: {
		//#region computed base datasets
		dataSwitchtracksAll(): IDrawnSwitchtrack[] {
			const results: IDrawnSwitchtrack[] = [];
			this.$props.worldNexuses.forEach(nexus => {
				nexus.links?.forEach((switchtrack) => {
					const endNexus = this.findNexus(switchtrack.to);
					if (!endNexus) {
						return;
					}

					const pointFrom = getLinkPoint(nexus, switchtrack.segmentFrom);
					const pointTo = getLinkPoint(endNexus, switchtrack.segmentTo);
					const startPoint = { x: (nexus.position.x + pointFrom.x), y: (nexus.position.y + pointFrom.y) };
					const endPoint = { x: (endNexus.position.x + pointTo.x), y: (endNexus.position.y + pointTo.y) };
					const controlPoint = switchtrack.controlPoint
						? { x: (nexus.position.x + switchtrack.controlPoint.x), y: (nexus.position.y + switchtrack.controlPoint.y) } 
						: undefined;
					const controlPoint2 = switchtrack.controlPoint2
						? { x: (nexus.position.x + switchtrack.controlPoint2.x), y: (nexus.position.y + switchtrack.controlPoint2.y) } 
						: undefined;
					results.push(
						{
							...switchtrack,
							_from: nexus.id,
							trackedNexus: switchtrack.trackedNexus || nexus.id,
							unlockType: switchtrack.unlockType || 'half_anchors',
							color: endNexus.color,
							controlPoint,
							controlPoint2,
							startPoint,
							endPoint,
						}
					);
				});
			});
			return results;
		},
		dataSwitchtracksUnlocked(): IDrawnSwitchtrack[] {
			return this.dataSwitchtracksAll.filter(s => this.switchtrackUnlocked(s));
		},
		//#endregion computed base datasets
		drawnKindredPortals(): IDrawnKindredPortal[] {
			const errDefault = {x: -1, y: -1};
			return this.$props.kindredPortals.map(kp => {
				const startPoint = this.worldPositions.find(w => w.worldId == kp.from) || errDefault;
				return {
					...kp,
					startPoint: startPoint,
					endPoint: this.worldPositions.find(w => w.worldId == kp.to) || errDefault,
					color: Utils.World.findWorld(WorldDatas, kp.from)?.meta?.themeColor,
					controlPoint: kp.controlPoint ? {x: startPoint.x + kp.controlPoint.x, y: startPoint.y + kp.controlPoint.y} : undefined,
					controlPoint2: kp.controlPoint2 ? {x: startPoint.x + kp.controlPoint2.x, y: startPoint.y + kp.controlPoint2.y} : undefined
				}
			})
		},
		drawnNexuses(): IDrawnNexus[] {
			// TODO: May eventually want to refine this to show the nexuses being unlocked during playback.
			const validNexuses = this.nexuses.filter(w => !!w.points);
			return (this.$props.drawAll ? validNexuses : validNexuses.filter(n => this.nexusUnlocked(n))).map(nexus => {
				const {position, points} = nexus;
				const paths: IDrawnNexusPath[] = [];
				// handle dead worlds/nodes
				if (nexus.rawPoints?.length) {
					// prepare lines for drawing
					let currentPath: IDrawnNexusPath = { points: [], pastTense: true };
					nexus.rawPoints.forEach((pt, i) => {
						let nextIndex = i + 1 < nexus.rawPoints.length ? i + 1 : 0;
						let nextSegment = nexus.rawPoints[nextIndex];
						let prevIndex = i - 1 < 0 ? nexus.rawPoints.length - 1 : i - 1;
						let prevSegment = nexus.rawPoints[prevIndex];
						const x = (position.x + pt.x);
						const y = (position.y + pt.y);
						const isConnected = (
								(pt.worldId && this.prismKeyIDs.includes(pt.worldId))
								|| this.getSwitchtrackIndexes(nexus).includes(i)
							) || (nextSegment.worldId && this.prismKeyIDs.includes(nextSegment.worldId))
							|| (prevSegment.worldId && this.prismKeyIDs.includes(prevSegment.worldId));
						const isDestroyed = (pt.worldId && Utils.World.findWorld(WorldDatas, pt.worldId)?.details.status == 'destroyed')
							|| (nextSegment.worldId && Utils.World.findWorld(WorldDatas, nextSegment.worldId)?.details.status == 'destroyed')
							|| (prevSegment.worldId && Utils.World.findWorld(WorldDatas, prevSegment.worldId)?.details.status == 'destroyed');

						if (isDestroyed) {
							currentPath.points.push({ x, y, break: !isConnected });
							// handle closing the nexus on the last index
							if (i == nexus.rawPoints.length - 1 && isConnected) {
								currentPath.points.push({ x: (position.x + nextSegment.x), y: (position.y + nextSegment.y) });
							}
						}
					});
					if (currentPath.points.length > 1) {
						paths.push(currentPath);
					}
				}

				// handle normal worlds/nodes
				if (points?.length) {
					// prepare lines for drawing
					let currentPath: IDrawnNexusPath = { points: [] };
					points.forEach((pt, i) => {
						let nextIndex = i + 1 < points.length ? i + 1 : 0;
						let nextSegment = points[nextIndex];
						const x = (position.x + pt.x);
						const y = (position.y + pt.y);
						const isConnected = (pt.worldId && this.prismKeyIDs.includes(pt.worldId))
							|| (this.getSwitchtrackIndexes(nexus).includes(i))
							|| (nextSegment.worldId && this.prismKeyIDs.includes(nextSegment.worldId))
							|| this.$props.drawAll
						;

						currentPath.points.push({ x, y, break: !isConnected });
						// handle closing the nexus on the last index
						if (i == points.length - 1 && isConnected) {
							currentPath.points.push({ x: (position.x + nextSegment.x), y: (position.y + nextSegment.y) });
						}
					});
					if (currentPath.points.length > 1) {
						paths.push(currentPath);
					}
				}
				return {
					...nexus,
					paths,
				}
			});
		},
		/** Get the switchtracks to be drawn */
		drawnSwitchtracks(): IDrawnSwitchtrack[] {
			return this.$props.drawAll ? this.dataSwitchtracksAll : this.dataSwitchtracksUnlocked;
		},
		/**
		 * TODO: implement */
		drawnTravelLogs(): IDrawnTravelPath[] {
			const logs: IDrawnTravelPath[] = [];
			this.$props.travelLogs.forEach(log => {
				const history = log.history.filter(h => new Date(h.dateStart.year, h.dateStart.month-1, h.dateStart.day).getTime() <= this.state.shownTime);
				if (history.length > 0) {
					const stopPoints: IDrawnPathPoint[] = [];
					const pathPoints: IDrawnPathPoint[] = [];
					const lastCompleteStop = history[history.length - 1];
					const end = lastCompleteStop.timeEnd || lastCompleteStop.timeStart;
					let travelerPosition = this.worldPositions.find(w => w.worldId == lastCompleteStop.locationId) || {x:0,y:0};

					// is moving if the current shownTime is between entries and the current entry is not the final entry in the log
					const moving = end < this.state.shownTime && history.length < log.history.length;
					const nextStop = log.history.find(h => new Date(h.dateStart.year, h.dateStart.month-1, h.dateStart.day).getTime() > this.state.shownTime);
					
					const stopSpaceMods = spaceStopMods(history);
					let previousNexus = '';
					history.forEach((stop, i) => {
						const position = this.worldPositions.find(w => w.worldId == stop.locationId);
						if (!position) {
							return;
						}

						const allowNexusChanges = !stop.fastTravel && stop.accessMethod == 'lightship';
						let lastPosition: ISimplePoint = position;

						if (stop.eventType == 'world') {
							// Check if we need to draw a path across a switchtrack before the current world
							if (allowNexusChanges && previousNexus != '' && previousNexus != position?.nexusId) {
								const switchtrack = this.getSwitchtrack(previousNexus, position.nexusId, false);
								if (switchtrack) {
									lastPosition = switchtrack.endPoint;
									// start point of the switchtrack
									pathPoints.push({
										x: switchtrack.startPoint.x,
										y: switchtrack.startPoint.y
									});
									// end point of the switchtrack
									pathPoints.push({
										x: switchtrack.endPoint.x,
										y: switchtrack.endPoint.y,
										controlPoint: switchtrack.controlPoint,
										controlPoint2: switchtrack.controlPoint2
									});
								}
							}

							// add the actual point for this world
							pathPoints.push({
								x: position.x + stopSpaceMods[i].x,
								y: position.y + stopSpaceMods[i].y
							});

							// add a point to indicate a stop was made
							if (stop.stopped) {
								stopPoints.push({
									x: position.x + stopSpaceMods[i].x,
									y: position.y + stopSpaceMods[i].y
								});
							}
						}

						if (i == history.length-1 && moving && nextStop) {
							const nextStopPosition = this.worldPositions.find(w => w.worldId == nextStop.locationId);
							if (nextStopPosition) {
								const percentage = (this.state.shownTime - end) / (nextStop.timeStart - end);
								if (Config.IsDebug) {
									console.log("currentTime, percentage", this.state.shownTime, percentage);
								}
								const currentPoint = animateLine(lastPosition, nextStopPosition, percentage);
								travelerPosition = currentPoint;
								pathPoints.push(currentPoint);
							}
						}
						
						previousNexus = allowNexusChanges && position?.nexusId || previousNexus;
					});

					logs.push({
						name: log.name,
						points: pathPoints,
						stopPoints,
						themeColor: log.themeColor || "#fff",
						token: log.token || "img/ships/default.png",
						travelerPosition,
					})
				}
			});
			return logs;
		},
		drawnWorlds(): IDrawnWorld[] {
			const drawnWorlds: IDrawnWorld[] = [];
			const handled: string[] = [];
			let switchtracks: number[] = [];
			
			const handleWorld = (worldId: string, position: ISimplePoint, tokenSize: number = worldTokenMultiplier, checkSwitchtracks: boolean = true, worldIndex: number = 0, nexus?: IDrawnNexus) => {
				// don't bother checking anything if the world has already been handled
				if (handled.includes(worldId)) return;

				const world = Utils.World.findWorld(WorldDatas, worldId);
				// don't draw the world if it is invalid
				if (!world) return;

				// Get the definition for what the traveler knows about this world
				const worldKnowledge = this.$props.knownWorlds.find(k => k.worldId == world?.id);
				// don't draw the world if it isn't known to the traveler
				if ((!worldKnowledge && !this.$props.drawAll)) {
					// don't bother checking the switchtrack unless specified
					if (!checkSwitchtracks || !nexus) {
						return;
					}
					// check for switchtrack
					else {
						// Check if the world should be drawn due to bordering a known switchtrack
						let leftSwitchtrackIndex = worldIndex - 1 < 0 ? nexus.rawPoints.length - 1 : worldIndex - 1;
						if (!switchtracks.includes(worldIndex) && !switchtracks.includes(leftSwitchtrackIndex)) {
							return;
						}
					}
				}

				const noName = !worldKnowledge 
					|| worldKnowledge?.displayType == KnownWorldDisplayType.NoName 
					|| worldKnowledge?.displayType == KnownWorldDisplayType.NoNameOrIcon;
				const noIcon = !worldKnowledge 
					|| worldKnowledge?.displayType == KnownWorldDisplayType.NoIcon 
					|| worldKnowledge?.displayType == KnownWorldDisplayType.NoNameOrIcon;

				drawnWorlds.push({
					id: world.id,
					label: noName && !this.$props.drawAll ? "???" : world.name,
					img: world.details.status?.toLowerCase() == 'destroyed'
						? "img/worlds/dead_world.png"
						: noIcon && !this.$props.drawAll 
						? "img/worlds/blank.png"
						: world.images.token || "img/worlds/blank.png",
					color: !!worldKnowledge && world.details.isHub? '#ffc800' : '#dedede',
					x: position.x,
					y: position.y,
					height: tokenSize,
					width: tokenSize,
				});
				handled.push(world.id);
			};

			// handle the worlds in the nexuses
			this.drawnNexuses.forEach(nexus => {
				const {position} = nexus;
				switchtracks = this.getSwitchtrackIndexes(nexus);
				nexus.rawPoints?.forEach((pt, i) => {
					if (!pt.worldId || pt.worldId.length == 0 || !nexus.rawPoints) {
						return;
					}
					handleWorld(
						pt.worldId,
						{
							x: position.x + pt.x - (worldTokenMultiplier/2),
							y: position.y + pt.y - (worldTokenMultiplier/2),
						},
						worldTokenMultiplier, true, i, nexus
					);
				});
			});
			// handle known worlds in locked nexuses
			this.knownWorlds.filter(kw => !kw.unknownLocation).forEach(kw => {
				const pos = this.worldPositions.find(wp => wp.worldId == kw.worldId);
				if (!pos) return;
				handleWorld(
					kw.worldId,
					{
						x: pos.x - (worldTokenMultiplier/2),
						y: pos.y - (worldTokenMultiplier/2),
					},
					worldTokenMultiplier
				);
			})
			// handle worlds with unknown locations
			this.knownWorlds.filter(kw => !!kw.unknownLocation).forEach(kw => {
				const pos = this.worldPositions.find(wp => wp.worldId == kw.worldId);
				if (!pos) return;
				handleWorld(
					kw.worldId,
					{
						x: pos.x - (luScale/2),
						y: pos.y - (luScale/2),
					},
					luScale
				);
			})

			return drawnWorlds;
		},
		legendBoxSize() {
			return {
				width: 5,
				height: 5,
				padPx: 4,
			};
		},
		legendBox1Position(): ISimplePoint {
			return { x: 0, y: 0 };
		},
		legendBox2Position(): ISimplePoint {
			return { x: this.mapWidthInUnits - this.legendBoxSize.width, y: 0 };
		},
		/** The earliest possible date viewable on the map.
		 * TODO: currently just defaults to 0. Should default to the earliest date in the provided timeline.
		 */
		minimumPlaybackDate() {
			let minDate = Utils.Dates.Convert.CampaignDate.toJSDate(CampaignState.CurrentDate).getTime();
			this.$props.travelLogs.forEach(log => {
				const dateStart = log.history?.length > 0 && log.history[0].dateStart;
				const earliest = dateStart && Utils.Dates.Convert.CampaignDate.toJSDate(dateStart).getTime() || minDate;
				minDate = Math.min(minDate, earliest);
			});
			return new Date(minDate);
		},
		/** The latest possible date viewable on the map.
		 * TODO: currently just defaults to the current campaign date.
		 */
		maximumPlaybackDate() {
			return Utils.Dates.Convert.CampaignDate.toJSDate(CampaignState.CurrentDate);
		},
		/** All the nexuses as IDrawnNexus objects */
		nexuses(): IDrawnNexus[] {
			return this.$props.worldNexuses.map(n => {
				return {
					...n,
					rawPoints: n.points || [],
					points: n.points?.filter(pt => !(pt.worldId && Utils.World.findWorld(WorldDatas, pt.worldId)?.details.status == 'destroyed')) || [],
					//TODO: Finish this
					segments: [],
					paths: [],
				}
			});
		},
		/** List of unique prism keys owned by the current set of travelers */
		prismKeyIDs(): string[] {
			let matches: string[] = [];
			this.$props.knownWorlds.forEach(k => {
				if (k.prismKey && !matches.includes(k.worldId)) {
					matches.push(k.worldId);
				}
			});
			return matches;
		},
		shownDate(): Date {
			return new Date(this.state.shownTime);
		},
		stopped(): boolean {
			return this.state.paused && 
			(this.shownDate >= this.maximumPlaybackDate && !this.playbackSettings.loop);
		},
		worldPositions(): IWorldPositionEntry[] {
			const results: IWorldPositionEntry[] = [];
			this.$props.worldNexuses.forEach(nexus => {
				nexus.points?.forEach(world => {
					if (!world.worldId) {
						return;
					}

					results.push({
						x: nexus.position.x + world.x,
						y: nexus.position.y + world.y,
						worldId: world.worldId,
						nexusId: nexus.id
					});
				});
			});
			
			// handle worlds with unknown locations
			let unknownCount = 0;
			const legendBoxWidth = Math.floor(this.legendBoxSize.width/luScale);
			const pad = (this.legendBoxSize.padPx / (this.mapUnitScale * this.dpr));
			this.knownWorlds.filter(kw => !!kw.unknownLocation).forEach(kw => {
				// don't add duplicate entries
				if (results.find(r => r.worldId == kw.worldId)) return;

				const row = Math.floor(unknownCount/legendBoxWidth);
				const column = unknownCount % legendBoxWidth;
				results.push({
					x: this.legendBox2Position.x + (column * luScale) + pad + (luScale/2),
					y: this.legendBox2Position.y + (row * luScale) + 0.5 + pad + (luScale/2),
					worldId: kw.worldId,
					nexusId: '',
				});
				unknownCount++;
			})

			return results;
		},
	},
	methods: {
		//#region draw & cycle methods
		cycle() {
			const now = performance.now();
			const delta = now - this.state.lastFrame;
			const canvas = document.getElementById("map-canvas") as HTMLCanvasElement;
			const ctx = canvas ? canvas.getContext("2d") : undefined;
			let redrawnThisCycle = false;

			if (this.state.lastTimeShown != this.state.shownTime) {
				this.needsRedraw = true;
			}

			if (ctx) {
				this.scaleFix(canvas, ctx);
			}
			
			// TODO: remove this 'true'
			if (true || this.needsRedraw || imgLoaded) {
				if (ctx) {
					this.draw(ctx);
					redrawnThisCycle = true;
				}
				else {
					console.error("Unable to find canvas!");
				}
				
				this.needsRedraw = !redrawnThisCycle || !this.state.paused;
				imgLoaded = imgLoaded && !redrawnThisCycle;
			}

			if (redrawnThisCycle) {
				this.state.lastTimeShown = this.state.shownTime;
			}

			// handle behavior that only applies during active playback
			if (!this.state.paused) {
				// handle looping/pausing at end of playback
				if (this.shownDate >= this.maximumPlaybackDate) {
					if (this.playbackSettings.loop) {
						// restart loop from the beginning
						this.playFromStart();
					}
					else {
						// pause playback at the last available frame
						this.state.shownTime = this.maximumPlaybackDate.getTime();
						this.state.paused = true;
						this.needsRedraw = !redrawnThisCycle;
					}
				}
				else {
					this.state.shownTime = this.state.shownTime + (delta * minuteInMs * 10 * this.playbackSettings.timeScale);
				}
			}

			this.state.lastFrame = now;

			// queue next frame
			if (!this.state.unmounted) {
				requestAnimationFrame(this.cycle);
			}
		},
		draw(ctx: CanvasRenderingContext2D) {
			const nexusOpacity = 0.9;
			const scale = this.mapUnitScale;

			ctx.globalAlpha = nexusOpacity;
			ctx.lineWidth = this.adjustDPR(3);
			ctx.lineJoin = ctx.lineCap = "round";
			ctx.textBaseline = "middle";

			//#region draw legend boxes
			ctx.save();
			ctx.lineJoin = 'miter';
			ctx.globalAlpha = 0.95;
			ctx.lineWidth = this.adjustDPR(2);
			ctx.fillStyle = "#393838";
			ctx.strokeStyle = shadeColor(ctx.fillStyle, 50);
			
			const lbSize = this.legendBoxSize;
			const lb1 = this.legendBox1Position;
			const lb2 = this.legendBox2Position;
			const lblPad = this.adjustDPR(this.legendBoxSize.padPx);

			// draw legend backgrounds
			// legend
			ctx.fillRect(lb1.x * scale, lb1.y * scale, lbSize.width * scale, lbSize.height * scale);
			ctx.strokeRect(lb1.x * scale, lb1.y * scale, lbSize.width * scale, lbSize.height * scale);
			// area for known worlds with unknown locations
			ctx.fillRect(lb2.x * scale, lb2.y * scale, lbSize.width * scale, lbSize.height * scale);
			ctx.strokeRect(lb2.x * scale, lb2.y * scale, lbSize.width * scale, lbSize.height * scale);

			// draw the text content
			ctx.fillStyle = "#ddd";
			ctx.textAlign = 'left';
			ctx.textBaseline = 'top';
			ctx.globalAlpha = 1;
			
			// headers
			ctx.font = `${this.adjustDPR(1)}em sans-serif`;
			ctx.fillText("Legend", lb1.x * scale + lblPad, lb1.y * scale + lblPad);
			ctx.font = `${this.adjustDPR(0.7)}em sans-serif`;
			ctx.fillText("Location Unknown", lb2.x * scale + lblPad, lb2.y * scale + lblPad);

			// restore ctx settings
			ctx.restore();
			//#endregion draw legend boxes

			//#region draw switchtracks
			ctx.save();
			ctx.lineWidth = this.adjustDPR(2);
			this.drawnSwitchtracks.forEach((link) => {
				this.drawConnection(ctx, link);
			});
			ctx.restore();
			//#endregion draw switchtracks

			//#region draw Kindred Portals
			ctx.save();
			ctx.globalAlpha = 0.4;
			ctx.lineWidth = this.adjustDPR(1);
			ctx.setLineDash([1, 4]);
			this.drawnKindredPortals.forEach((link) => {
				this.drawConnection(ctx, link);
			});
			ctx.restore();
			//#endregion draw Kindred Portals

			//#region Draw nexus paths
			this.drawnNexuses.forEach((nexus, i) => {
				ctx.fillStyle = ctx.strokeStyle = nexus.color;
				ctx.save();
				nexus.paths.forEach(path => {
					ctx.globalAlpha = path.pastTense ? 0.4 : nexusOpacity;
					ctx.lineWidth = this.adjustDPR(path.pastTense ? 2 : 3);
					let color = path.pastTense ? shadeColor(nexus.color, -20) : nexus.color;
					ctx.fillStyle = ctx.strokeStyle = color;
					ctx.beginPath();
					let penDown = false;

					path.points.forEach(pt => {
						const x = pt.x * this.mapUnitScale;
						const y = pt.y * this.mapUnitScale;

						if (!penDown) {
							ctx.moveTo( x, y );
							penDown = true;
						}
						else {
							ctx.lineTo( x, y );
						}
						if (pt.break) {
							penDown = false;
						}
					});
					
					ctx.stroke();
				});
				ctx.restore();
			});
			//#endregion Draw nexus paths

			//#region draw worlds
			ctx.save();
			ctx.globalAlpha = 1;
			this.drawnWorlds.forEach(world => {
				const image = this.getImageElement(world.img) as HTMLImageElement|undefined;

				// the image element has already been created
				if (image) {
					ctx.drawImage(image, world.x * this.mapUnitScale, world.y * this.mapUnitScale, this.mapUnitScale * world.width, this.mapUnitScale * world.height);
				}

				const worldLabelFontSize = this.adjustDPR(8);
				
				drawTextWithBG(
					ctx,
					world.label,
					`${worldLabelFontSize}px sans-serif`,
					(world.x + (world.width/2)) * this.mapUnitScale,
					((world.y + (world.height)) * this.mapUnitScale) + (worldLabelFontSize / 2),
					world.color,
					this.adjustDPR(2)
				)
				
			});
			ctx.restore();
			//#endregion draw worlds

			//#region Draw travel paths
			ctx.save();
			ctx.globalAlpha = 0.9;
			ctx.lineWidth = this.adjustDPR(1);
			ctx.setLineDash([this.adjustDPR(4), this.adjustDPR(4)]);
			
			this.drawnTravelLogs.forEach((log, i) => {
				ctx.strokeStyle = log?.themeColor || "#fff";
				ctx.fillStyle = shadeColor(ctx.strokeStyle as string, 10);
				const yOffset = 5;
				ctx.save();
				ctx.beginPath();
				let penDown = false;
				let lastPoint = {x:0,y:0};

				log.points.forEach(pt => {
					const x = pt.x * this.mapUnitScale;
					const y = pt.y * this.mapUnitScale + yOffset;

					if (!penDown) {
						ctx.moveTo( x, y );
						penDown = true;
					}
					else {
						//#region actually draw the point
						if (pt.controlPoint && pt.controlPoint2) {
							ctx.moveTo( lastPoint.x, lastPoint.y );
							// draw curve with two control points
							ctx.bezierCurveTo(
								(pt.controlPoint.x * this.mapUnitScale),
								(pt.controlPoint.y * this.mapUnitScale),
								pt.controlPoint2.x * this.mapUnitScale,
								pt.controlPoint2.y * this.mapUnitScale,
								x,
								y,
							);
							penDown = false;
						}
						else if (pt.controlPoint) {
							ctx.moveTo( lastPoint.x, lastPoint.y );
							// draw curve with one control point
							ctx.quadraticCurveTo(
								pt.controlPoint.x * this.mapUnitScale,
								pt.controlPoint.y * this.mapUnitScale,
								x,
								y,
							);
							penDown = false;
						}
						else {
							ctx.lineTo( x, y );
						}
						//#endregion actually draw the point
					}
					if (pt.break) {
						penDown = false;
					}
					lastPoint = {x,y};
				});
					
				ctx.stroke();
				ctx.restore();

				// draw points at stops
				ctx.globalAlpha = 1;
				ctx.lineWidth = this.adjustDPR(3);
				ctx.setLineDash([]);
				ctx.strokeStyle = shadeColor(ctx.strokeStyle as string, -40);
				log.stopPoints.forEach((pt) => {
					const x = pt.x * this.mapUnitScale;
					const y = pt.y * this.mapUnitScale;
					ctx.beginPath();
					ctx.ellipse(x, y + yOffset, this.adjustDPR(travelStopIconRadius), this.adjustDPR(travelStopIconRadius), 0, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fill();
				});

				// Draw the traveler icon and label
				const image = this.getImageElement(log.token) as HTMLImageElement|undefined;
				if (image) {
					const travelerTokenRadius = 0.3 * worldTokenMultiplier;
					const basePos = log.travelerPosition;
					const pos = {
						x: basePos.x + travelerTokenRadius + 0.25,
						y: basePos.y + 0.5 * travelerTokenRadius - 0.1
					};
					const size = {width: 1, height: 1};

					// draw outline
					ctx.globalAlpha = 0.4;
					ctx.lineWidth = this.adjustDPR(1);
					ctx.setLineDash([this.adjustDPR(5),this.adjustDPR(2)]);
					ctx.fillStyle = shadeColor(log.themeColor as string, -20);
					ctx.strokeStyle = log.themeColor;
					ctx.beginPath();
					ctx.ellipse(pos.x * this.mapUnitScale, pos.y * this.mapUnitScale, travelerTokenRadius * this.mapUnitScale, travelerTokenRadius * this.mapUnitScale, 0, 0, 2 * Math.PI);
					ctx.fill();
					// ctx.globalAlpha = 1;
					// ctx.stroke();
					
					// draw token
					ctx.globalAlpha = 1;
					ctx.drawImage(image, (pos.x - size.width/2) * this.mapUnitScale, (pos.y - size.height/2) * this.mapUnitScale, size.width * this.mapUnitScale, size.height * this.mapUnitScale);

					// draw label
					drawTextWithBG(
						ctx,
						log.name,
						`${this.adjustDPR(6)}px sans-serif`,
						pos.x * this.mapUnitScale,
						((pos.y + (size.height/2)) * this.mapUnitScale),
						log.themeColor,
						this.adjustDPR(2)
					)
				}
			});

			ctx.restore();
			//#endregion Draw travel paths

			//#region Draw nexus labels
			const nexusLabelOffsetY = this.adjustDPR(5);
			this.drawnNexuses.forEach((nexus) => {
				// draw label
				ctx.save();
				ctx.fillStyle = nexus.color;
				ctx.strokeStyle = '#000';
				ctx.lineWidth = this.adjustDPR(3);
				ctx.font = `italic ${this.adjustDPR(10)}px serif`;
				ctx.textAlign = 'center';
				ctx.globalAlpha = 0.9;
				ctx.strokeText(`${Utils.String.capitalize(nexus.id)} Nexus`, nexus.position.x * this.mapUnitScale, (nexus.position.y * this.mapUnitScale) + nexusLabelOffsetY);
				ctx.globalAlpha = 1;
				ctx.fillText(`${Utils.String.capitalize(nexus.id)} Nexus`, nexus.position.x * this.mapUnitScale, (nexus.position.y * this.mapUnitScale) + nexusLabelOffsetY);
				ctx.restore();
			});
			//#endregion Draw nexus labels

			return true;
		},
		drawConnection(ctx: CanvasRenderingContext2D, link: IDrawnConnection, continuePath: boolean = false, offset: ISimplePoint = {x:0,y:0}) {
			ctx.save();

			const startPoint = { x: link.startPoint.x * this.mapUnitScale + offset.x, y: link.startPoint.y * this.mapUnitScale + offset.y };
			const endPoint = { x: link.endPoint.x * this.mapUnitScale + offset.x, y: link.endPoint.y * this.mapUnitScale + offset.y };

			if (continuePath) {
				ctx.lineTo(startPoint.x, startPoint.y);
			} else {
				ctx.fillStyle = ctx.strokeStyle = link.color || "#ddd";
				ctx.beginPath();
				ctx.moveTo(startPoint.x, startPoint.y);
			}

			//#region actually draw the switchtrack link
			if (link.controlPoint && link.controlPoint2) {
				// draw curve with two control points
				ctx.bezierCurveTo(
					(link.controlPoint.x * this.mapUnitScale) + offset.x,
					(link.controlPoint.y * this.mapUnitScale) + offset.y,
					link.controlPoint2.x * this.mapUnitScale + offset.x,
					link.controlPoint2.y * this.mapUnitScale + offset.y,
					endPoint.x,
					endPoint.y,
				);
			}
			else if (link.controlPoint) {
				// draw curve with one control points
				ctx.quadraticCurveTo(
					link.controlPoint.x * this.mapUnitScale + offset.x,
					link.controlPoint.y * this.mapUnitScale + offset.y,
					endPoint.x,
					endPoint.y,
				);
			}
			else {
				// draw straight line
				ctx.lineTo(endPoint.x, endPoint.y);
			}

			if (!continuePath) {
				ctx.stroke();
			}
			//#endregion actually draw the switchtrack link

			ctx.restore();
		},
		scaleFix(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
			// Get the DPR and size of the canvas
			if (this.dpr != window.devicePixelRatio) {
				// try not to change the data property unless it needs to be changed, just in case that triggers needless updates
				this.dpr = window.devicePixelRatio;
			}
			const panZoomScale = this.panzoom?.getScale() || 1;
			const rect = canvas.getBoundingClientRect();

			// Set the "actual" size of the canvas
			canvas.width = rect.width * this.dpr;
			canvas.height = rect.height * this.dpr;

			// Scale the context to ensure correct drawing operations
			ctx.scale(this.dpr * panZoomScale, this.dpr * panZoomScale);

			// Set the "drawn" size of the canvas
			canvas.style.width = `${rect.width}px`;
			canvas.style.height = `${rect.height}px`;
		},
		//#endregion draw & cycle methods
		//#region other methods, alphabetized
		adjustDPR(pixels: number): number { return pixels / this.dpr; },
		cleanText(text: string): string {
			let temp = text;
			if (temp.match(/\n\n/ig)) {
				temp = temp.replace(/\n\n(?![\s\S]*\n\n)/ig, "</p>"); // special handling for last paragraph to prevent weird space below review body
				temp = "<p>" + temp.replace(/\n\n/ig, "</p><p>");
			}
			return temp.replace(/\n/ig, "<br/>");
		},
		countPrismKeysFromNexus(nexus: IWorldNexusData): number {
			let count = 0;
			nexus.points?.forEach(p => {
				if (p.worldId && p.worldId.length > 0 && this.prismKeyIDs.includes(p.worldId)) {
					count += 1;
				}
			});
			return count;
		},
		findNexus(id: string): IDrawnNexus | undefined {
			return this.nexuses.find(n => n.id == id);
		},
		getImageElement(src: string) {
			const id = id_ify(src);
			let image = document.getElementById(id) as HTMLImageElement|undefined;

			// the image element has already been created
			if (image) {
				if (image.complete && (typeof image.naturalWidth === "undefined" || image.naturalWidth === 0)) {
					// Image is broken. Set a default image.
					image.src = "img/worlds/atlantica.png";
				}
				else {
					// image is fine, render normally
					return image;
				}
			}
			// create the image element
			else {
				image = new Image(this.mapUnitScale, this.mapUnitScale); // Using optional size for image
				image.id = id;
				image.onload = (ev) => { if (image?.complete) {
					// imgLoaded = true;
					this.needsRedraw = true;
				}};
				image.src = src;

				const imgContainer = document.getElementById("images-for-canvas");
				(imgContainer ? imgContainer : document.body).append(image);
				image.style.display = 'none';
			}
			return undefined;
		},
		/** Get the segment indexes of the switchtracks in a given nexus. */
		getSwitchtrackIndexes(nexus: IWorldNexusData, drawnOnly: boolean = true): number[] {
			const switchtracks = drawnOnly ? this.drawnSwitchtracks : this.dataSwitchtracksAll;
			return switchtracks.reduce((acc: number[], curr: IDrawnSwitchtrack) => {
				if (curr.to == nexus.id)
					acc.push(curr.segmentTo);
				else if (curr._from == nexus.id)
					acc.push(curr.segmentFrom);
				return acc;
			}, []);
		},
		/** Get the segment indexes of the switchtracks in a given nexus. */
		getSwitchtrack(nexusFrom: string, nexusTo: string, drawnOnly: boolean = true): IDrawnSwitchtrack | undefined {
			const switchtracks = drawnOnly ? this.drawnSwitchtracks : this.dataSwitchtracksAll;
			let result = switchtracks.find(s => s._from == nexusFrom && s.to == nexusTo);
			if (result) {
				// result is mapped the same as the query. Send it as is.
				return result;
			}
			result = switchtracks.find(s => s._from == nexusTo && s.to == nexusFrom);
			result = result ? JSON.parse(JSON.stringify(result)) : undefined;
			if (result) {
				// result is mapped in the opposite direction of what was searched. Swap the start and end points to compensate.
				let newStartPoint = result.endPoint;
				result.endPoint = result.startPoint;
				result.startPoint = newStartPoint;
				if (result.controlPoint && result.controlPoint2) {
					let newControl1 = result.controlPoint2;
					result.controlPoint2 = result.controlPoint;
					result.controlPoint = newControl1;
				}
				return result
			}
			return result;
		},
		/** Get the current position of the traveler from the given log */
		getTravelerPosition(log: ITravelLog): ISimplePoint {
			const locationId = log.history[log.history.length-1].locationId;
			const worldPosition = locationId ? this.worldPositions.find(w => w.worldId == locationId) : undefined;
			return worldPosition ? {x:worldPosition.x, y:worldPosition.y} : {x: 0, y:0};
		},
		/** Check whether a nexus is unlocked. */
		nexusUnlocked(nexus: IWorldNexusData): boolean {
			if (this.drawAll) {
				return true;
			}
			let unlocked = false;
			
			if (this.dataSwitchtracksUnlocked.find(s => s.to == nexus.id)) {
				return true;
			}
			
			nexus.points?.forEach(p => {
				this.$props.knownWorlds.filter(k => k.worldId == p.worldId).forEach(w => {
					if (w.prismKey || w.explorationState == ExplorationState.Discovered) {
						unlocked = true;
						return;
					}
				});
			});

			return unlocked;
		},
		playFromStart() {
			this.state.shownTime = this.minimumPlaybackDate.getTime();
		},
		resize() {
			// Initialize map and canvas stuff
			const elem = document.getElementById('panzoom-element') as HTMLElement;
			if (!this.panzoom || this.$props.useCanvas) {
				if (this.$props.useCanvas) {
					this.panzoom?.destroy();
				}
				this.panzoom = Panzoom(elem, {
					maxScale: 5,
					contain: 'outside',
					// canvas: true,
					// // Can add an element reference
					// exclude: [document.getElementById('link')],
					// // ...or set a class on the element
					// excludeClass: 'custom-excluded-class'
				});
				// panzoom.pan(10, 10);
				// panzoom.zoom(2, { animate: true });

				// Panning and pinch zooming are bound automatically (unless disablePan is true).
				// There are several available methods for zooming
				// that can be bound on button clicks or mousewheel.
				// button.addEventListener('click', panzoom.zoomIn);
				// elem.parentElement?.addEventListener('wheel', panzoom.zoomWithWheel);
				elem.addEventListener('wheel', this.panzoom.zoomWithWheel);
			}

			if (this.$props.useCanvas) {
				const canvas = document.getElementById("map-canvas") as HTMLCanvasElement;
				const bound = elem.getBoundingClientRect();
				canvas.height = bound.height;
				canvas.width = bound.width;
				this.mapUnitScale = Math.round(bound.width / this.mapDimensions.width);
				this.dpr = window.devicePixelRatio;
			}
		},
		startScrub() {
			this.state.unpauseAfterScrub = !this.state.paused;
			this.state.paused = true;
		},
		stopScrub() {
			this.state.paused = !this.state.unpauseAfterScrub;
		},
		/** Check whether a Switchtrack is unlocked.
		 * TODO: finish logic for the final world.
		 */
		switchtrackUnlocked(switchtrack: ISwitchtrackData): boolean {
			let unlocked = false;
			const nexus = this.findNexus(switchtrack.trackedNexus as string);

			if (!nexus || !nexus.points) {
				return false;
			}

			if (switchtrack.unlockType == "half_anchors") {
				return this.countPrismKeysFromNexus(nexus)/(nexus.points.length) > 0.5;
			}

			if (switchtrack.unlockType == "all_anchors") {
				return nexus.points.length == this.countPrismKeysFromNexus(nexus);
			}

			return unlocked;
		},
		togglePlayPause() {
			if (this.stopped) {
				this.playFromStart();
			}
			this.state.paused = !this.state.paused;
		},
		//#endregion other methods, alphabetized
	},
	mounted() {
		window.addEventListener('resize', this.resize);
		this.resize();

		if (this.$props.useCanvas) {
			this.cycle();
		}
	},
	beforeUnmount() {
		this.panzoom?.destroy();
		this.state.unmounted = true;
		if (this.$props.useCanvas) {
			window.removeEventListener('resize', this.resize);
		}
	},
})

function getMidpoint(a: ISimplePoint, b: ISimplePoint): ISimplePoint {
	return { x: (a.x + b.x)/2, y: (a.y + b.y)/2}
}

function animateLine(lineStart: ISimplePoint, lineEnd: ISimplePoint, percentage: number = 0.5): ISimplePoint {
	const diffX = (lineEnd.x - lineStart.x) * percentage;
	const diffY = (lineEnd.y - lineStart.y) * percentage;
	return { x: lineStart.x + diffX, y: lineStart.y + diffY}
}
/** Gets the index of the segments bordering a world or point. 
 * TODO: Actually implement. */
function getAdjacentSegments(points: ISimplePoint[], worldIndex: number): number[] {
	let secondSegment = worldIndex == 0 ? points.length-1 : worldIndex-1;
	return [worldIndex, secondSegment].sort();
}
function getSegmentEnds(points: ISimplePoint[], segmentIndex: number): ISimplePoint[] {
	let firstEnd = points[segmentIndex];
	let secondEnd = segmentIndex >= points.length-1 ? points[0] : points[segmentIndex+1];
	return [firstEnd, secondEnd];
}
function getLinkPoint(nexus: IWorldNexusData, segmentIndex: number = 0): ISimplePoint {
	if (!nexus.points) {
		return {x:0,y:0};
	}
	const ends = getSegmentEnds(nexus.points, segmentIndex);
	return getMidpoint(ends[0], ends[1]);
}

function spaceStopMods(stops: ITravelLogTimelineEvent[]): {x :number, y: number}[] {
	let foundCounter: { worldId: string, count: number}[] = [];
	const processedStops: {x:number, y:number}[] = [];
	const stopModIncrement = 0.3;
	stops.forEach((stop, i) => {
		// count how many times this world has been visited
		if (foundCounter.filter(f => f.worldId == stop.locationId)[0]) {
			foundCounter.filter(f => f.worldId == stop.locationId)[0].count++;
		}
		else {
			foundCounter.push({worldId: stop.locationId, count: 1});
		}

		let count = foundCounter.filter(f => f.worldId == stop.locationId)[0].count;

		processedStops.push({
			x: (count - 1) * stopModIncrement * 0.5,
			y: (count - 1) * stopModIncrement,
		});
	});
	return processedStops;
}

/// expand with color, background etc.
function drawTextWithBG(ctx: CanvasRenderingContext2D, txt: string, font: string, x: number, y: number, color: string = "#dedede", padding: number = 0) {

    // save current state as we make a lot of changes        
    ctx.save();
	
    ctx.font = font;
    ctx.textBaseline = 'top'; // draw text from top - makes life easier at the moment
	ctx.textAlign = 'center';
    ctx.fillStyle = '#333';

    // draw background rect assuming height of font
	const fontHeight = parseInt(font, 10);
    const width = ctx.measureText(txt).width;
    ctx.fillRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding);
	// ctx.beginPath();
    // ctx.roundRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding, 5);
	// ctx.fill();

    // draw text on top
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y-fontHeight/2);
    
    // restore original state
    ctx.restore();
}

/** Only works on HTML hex codes
 * Source - https://stackoverflow.com/a/13532993
 * Posted by Pablo, modified by community. See post 'Timeline' for change history
 * Retrieved 2026-03-10, License - CC BY-SA 4.0
 */
function shadeColor(color: string, percent: number) {
	const shortForm = color.length < 7;
    var R = shortForm ? parseInt(color.substring(1,2),16) : parseInt(color.substring(1,3),16);
    var G = shortForm ? parseInt(color.substring(2,3),16) : parseInt(color.substring(3,5),16);
    var B = shortForm ? parseInt(color.substring(3,4),16) : parseInt(color.substring(5,7),16);

    R = R * (100 + percent) / 100;
    G = G * (100 + percent) / 100;
    B = B * (100 + percent) / 100;

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}
</script>