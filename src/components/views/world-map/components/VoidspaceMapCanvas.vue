<script setup lang="ts">
import Panzoom, { type PanzoomObject } from '@panzoom/panzoom'
import ImageVue from "@/components/core/Image.vue";
import { Utils } from "@/scripts/utils";
import type { INexusPointData, ISwitchtrackData, IWorldNexusData } from '@/interfaces/IWorldNexusData';
import { WorldDatas } from '@/data/world-datas';
import { WorldNexusDatas } from "@/data/world-nexus-datas";
import type { ITravelLogTimelineEvent, ITravelLog } from "@/interfaces/travel-log/ITravelLog";
import { ExplorationState, KnownWorldDisplayType, type IKnownWorldData } from "@/interfaces/IKnownWorldData";
import type { IComponentMenuOption } from "@/interfaces/IComponentMenuOption";
import { GameStrings } from "@/scripts/game-strings";
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
	<div class="playback-controls bg-menu border border-black border-5 mx-lg-5 bg-dark-subtle" v-if="showPlaybackControls">
		<div class="playback-controls-holder">
			<button class="btn playback-button" @click="togglePlayPause">{{ state.paused ? 'Pause' : 'Play' }}</button>
			<div class="col-md-6" style="display: inline-block;">
				<!-- Need to turn this into a scrubbable progress bar -->
				<div class="progress" role="progressbar" aria-label="Animated striped example" :aria-valuenow="state.progress" aria-valuemin="0" aria-valuemax="100">
					<div class="progress-bar text-bg-info progress-bar-striped progress-bar-animated py-1 text-light" :style="{width: state.progress + '%'}">{{ Utils.Dates.Format.DMY(state.shownDate) }}</div>
				</div>
				<input type="range" name="progress" min="0" max="1" step="0.05" value="1" />
			</div>
		</div>
		<div class="playback-controls-holder">
			<div class="col-md-2" style="display: inline-block;">
				<select class="form-select form-select-sm" name="playback-speed">
					<option value="0.5">0.5</option>
					<option value="0.75">0.75</option>
					<option value="1" selected>Normal</option>
					<option value="1.5">1.5</option>
					<option value="2">2</option>
				</select>
			</div>
			<button class="btn playback-button" title="Toggle Fullscreen">⛶</button>
		</div>
	</div>
	<div id="images-for-canvas" style="display: none;"></div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { CampaignState } from '@/data/campaign-state';
import { Config } from '@/scripts/config';

interface ISimplePoint { x: number, y: number };
interface IWorldPositionEntry extends ISimplePoint {
	worldId: string;
	nexusId: string;
}

interface ITravelerPosition extends ISimplePoint {
	travelPathId: string;
}

interface IDrawnNexusPath {
	pastTense?: boolean;
	points: IDrawnNexusPathPoint[];
}

interface IDrawnNexusPathPoint extends ISimplePoint {
	break?: boolean;
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

interface IDrawnSwitchtrack extends ISwitchtrackData {
	/** The id of the starting nexus.
	 * ONLY USED BY AUTOMATED PROCESSES.
	 */
	_from?: string;
	startPoint: ISimplePoint;
	endPoint: ISimplePoint;
	color?: string;
	/** Used in the rare event of a traveler losing access to a previously unlocked switchtrack .  */
	relocked?: boolean;
}

const worldTokenMultiplier = 2;
const travelStopIconRadius = 4;
/** Controls whether the video-esque controls are shown.
 * TODO: deprecate
 */
const showPlaybackControls = Config.IsDebug;

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
			mapDimensions: { width: this.$props.mapWidthInUnits, height: this.$props.mapHeightInUnits },
			mapUnitScale: this.$props.defaultUnitScale,
			panzoom: undefined as unknown as PanzoomObject,
			initialTimestamp: Date.now(),
			state: {
				travelerPositions: [] as ITravelerPosition[],
				paused: false,
				shownDate: CampaignState.CurrentDate,
				/** Not sure if this will be a percentage or a timestamp in the final draft. */
				progress: 75,
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
		drawnTravelLogs() {



			"img/ships/default.png"
		},
		drawnWorlds(): IDrawnWorld[] {
			const drawnWorlds: IDrawnWorld[] = [];
			this.drawnNexuses.forEach(nexus => {
				const {position} = nexus;
				const switchtracks = this.getSwitchtrackIndexes(nexus);
				nexus.rawPoints?.forEach((pt, i) => {
					if (!pt.worldId || pt.worldId.length == 0 || !nexus.rawPoints) {
						return;
					}
					const world = Utils.World.findWorld(WorldDatas, pt.worldId);
					
					// don't draw the world if it is invalid
					if (!world || !world.images.token) return;

					// Get the definition for what the traveler knows about this world
					const worldKnowledge = this.$props.knownWorlds.find(k => k.worldId == world?.id);
					// don't draw the world if it isn't known to the traveler
					if ((!worldKnowledge && !this.$props.drawAll)) {
						// Check if the world should be drawn due to bordering a known switchtrack
						let leftSwitchtrackIndex = i - 1 < 0 ? nexus.rawPoints.length - 1 : i - 1;
						if (!switchtracks.includes(i) && !switchtracks.includes(leftSwitchtrackIndex)) {
							return;
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
						img: noIcon && !this.$props.drawAll 
							? "img/worlds/blank.png"
							: world.details.status?.toLowerCase() == 'destroyed'
								? "img/worlds/dead_world.png"
								: world.images.token,
						color: !!worldKnowledge && world.details.isHub? '#ffc800' : '#dedede',
						x: position.x + pt.x - (worldTokenMultiplier/2),
						y: position.y + pt.y - (worldTokenMultiplier/2),
						height: worldTokenMultiplier,
						width: worldTokenMultiplier,
					});
				});
			});

			return drawnWorlds;
		},
		/** The latest possible date viewable on the map.
		 * TODO: currently just defaults to the current campaign date.
		 */
		maximumPlaybackDate() {
			return CampaignState.CurrentDate;
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
			return results;
		},
	},
	methods: {
		draw() {
			const canvas = document.getElementById("map-canvas") as HTMLCanvasElement;
			const ctx = canvas.getContext("2d");

			if (!ctx) {
				console.error("Unable to find canvas!");
				return;
			}

			//#region scale fix
			// Get the DPR and size of the canvas
			const dpr = window.devicePixelRatio;
			const panZoomScale = this.panzoom?.getScale() || 1;
			const rect = canvas.getBoundingClientRect();

			const nexusOpacity = 0.9;

			// Set the "actual" size of the canvas
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;

			// Scale the context to ensure correct drawing operations
			ctx.scale(dpr * panZoomScale, dpr * panZoomScale);

			// Set the "drawn" size of the canvas
			canvas.style.width = `${rect.width}px`;
			canvas.style.height = `${rect.height}px`;
			//#endregion scale fix

			ctx.globalAlpha = nexusOpacity;
			ctx.lineWidth = 3;
			ctx.lineJoin = ctx.lineCap = "round";

			//#region draw legend boxes
			const legendBox = {
				width: 5 * this.mapUnitScale,
				height: 5 * this.mapUnitScale,
				pad: 8,
			};
			ctx.save();
			ctx.lineJoin = 'miter';
			ctx.globalAlpha = 0.95;
			ctx.lineWidth = 2;
			ctx.fillStyle = "#393838";
			ctx.strokeStyle = shadeColor(ctx.fillStyle, 50);
			
			const lb1 = {
				x: 0,
				y: 0,
			};
			const lb2 = {
				x: this.mapWidthInUnits * this.mapUnitScale - legendBox.width,
				y: 0,
			};

			// draw legend backgrounds
			// legend
			ctx.fillRect(lb1.x, lb1.y, legendBox.width, legendBox.height);
			ctx.strokeRect(lb1.x, lb1.y, legendBox.width, legendBox.height);
			// area for known worlds with unknown locations
			ctx.fillRect(lb2.x, lb2.y, legendBox.width, legendBox.height);
			ctx.strokeRect(lb2.x, lb2.y, legendBox.width, legendBox.height);

			// draw the text content
			ctx.fillStyle = "#ddd";
			ctx.textAlign = 'left';
			ctx.textBaseline = 'top';
			ctx.globalAlpha = 1;
			
			// headers
			ctx.font = "14px sans-serif";
			ctx.fillText("Legend", lb1.x + legendBox.pad, lb1.y + legendBox.pad);
			ctx.font = "12px sans-serif";
			ctx.fillText("Location Unknown", lb2.x + legendBox.pad, lb2.y + legendBox.pad);

			// restore ctx settings
			ctx.restore();
			//#endregion draw legend boxes

			//#region draw switchtracks
			ctx.save();
			ctx.lineWidth = 2;
			this.drawnSwitchtracks.forEach((link, i) => {
				this.drawSwitchtrack(ctx, link);
			});
			ctx.restore();
			//#endregion draw switchtracks

			//#region Draw nexus paths
			this.drawnNexuses.forEach((nexus, i) => {
				ctx.fillStyle = ctx.strokeStyle = nexus.color;
				ctx.save();
				nexus.paths.forEach(path => {
					ctx.globalAlpha = path.pastTense ? 0.4 : nexusOpacity;
					ctx.lineWidth = path.pastTense ? 2 : 3;
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
				const image = this.getImageElement(world.id+"-img", world.img) as HTMLImageElement|undefined;

				// the image element has already been created
				if (image) {
					ctx.drawImage(image, world.x * this.mapUnitScale, world.y * this.mapUnitScale, this.mapUnitScale * world.width, this.mapUnitScale * world.height);
				}
				
				drawTextWithBG(
					ctx,
					world.label,
					"8px sans-serif",
					(world.x + (world.width/2)) * this.mapUnitScale,
					((world.y + (world.height)) * this.mapUnitScale) + 4,
					world.color,
					2
				)
				
			});
			ctx.restore();
			//#endregion draw worlds

			//#region Draw travel paths
			ctx.save();
			ctx.globalAlpha = 0.9;
			ctx.lineWidth = 1;
			ctx.setLineDash([4, 4]);
			this.$props.travelLogs.forEach(log => {
				const stops = log?.history || [];
				const startPosition = this.worldPositions.length > 0 ? this.worldPositions.find(w => w.worldId == stops[0].locationId) : undefined;
				if (startPosition) {
					ctx.strokeStyle = log?.themeColor || "#fff";
					ctx.fillStyle = shadeColor(ctx.strokeStyle as string, 10);
					const stopSpaceMods = spaceStopMods(stops);
					const yOffset = 5;

					ctx.beginPath();
					ctx.moveTo(
						(startPosition.x) * this.mapUnitScale,
						(startPosition.y) * this.mapUnitScale + yOffset
					);
					
					// dashed lines
					let previousNexus = '';
					stops.forEach((stop, i) => {
						const position = this.worldPositions.find(w => w.worldId == stop.locationId);
						// no need to handle the first stop
						if (i == 0) {
							previousNexus = position?.nexusId || '';
							return;
						}

						if (stop.eventType == 'world' && position) {
							// Check if we need to draw a path across a switchtrack before the current world
							if (!stop.fastTravel && stop.accessMethod == 'lightship' && previousNexus != '' && previousNexus != position?.nexusId) {
								const switchtrack = this.getSwitchtrack(previousNexus, position.nexusId, false);
								if (switchtrack) {
									this.drawSwitchtrack(ctx, switchtrack, true, {x:-5, y:yOffset});
								}
							}

							// draw the actual line
							ctx.lineTo((position.x + stopSpaceMods[i].x) * this.mapUnitScale, (position.y + stopSpaceMods[i].y) * this.mapUnitScale + yOffset);
						}

						// if (i-1 == stops.length && log.token && position) {
						// 	ctx.drawImage(log.token, position.x * this.mapUnitScale, position.y * this.mapUnitScale, this.mapUnitScale, this.mapUnitScale);
						// }
						previousNexus = position?.nexusId || previousNexus;
					});
					ctx.stroke();

					// draw points at stops
					ctx.globalAlpha = 1;
					ctx.lineWidth = 3;
					ctx.setLineDash([]);
					ctx.strokeStyle = shadeColor(ctx.strokeStyle as string, -40);
					stops.forEach((stop, i) => {
						const position = this.worldPositions.find(w => w.worldId == stop.locationId);
						if (stop.eventType == 'world' && position && stop.stopped) {
							ctx.beginPath();
							ctx.ellipse((position.x + stopSpaceMods[i].x) * this.mapUnitScale, (position.y + stopSpaceMods[i].y) * this.mapUnitScale + yOffset, travelStopIconRadius, travelStopIconRadius, 0, 0, 2 * Math.PI);
							ctx.stroke();
							ctx.fill();
						}
					});

					// Draw the traveler icon and label
					if (log.token) {
						const image = this.getImageElement(log.id+"-img", log.token) as HTMLImageElement|undefined;
						if (image) {
							const travelerTokenRadius = 0.3 * worldTokenMultiplier;
							const basePos = this.getTravelerPosition(log);
							const pos = {
								x: basePos.x + travelerTokenRadius + 0.25,
								y: basePos.y + 0.5 * travelerTokenRadius - 0.1
							};
							const size = {width: 1, height: 1};

							// draw outline
							ctx.globalAlpha = 0.4;
							ctx.lineWidth = 1;
							ctx.setLineDash([5,2]);
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
								"6px sans-serif",
								pos.x * this.mapUnitScale,
								((pos.y + (size.height/2)) * this.mapUnitScale),
								log.themeColor,
								2
							)
						}
					}
				}
			});	
			ctx.restore();
			//#endregion Draw travel paths

			//#region Draw nexus labels
			this.drawnNexuses.forEach((nexus) => {
				// draw label
				ctx.save();
				ctx.fillStyle = nexus.color;
				ctx.strokeStyle = '#000';
				ctx.lineWidth = 3;
				ctx.font = "italic 10px serif";
				ctx.textAlign = 'center';
				ctx.globalAlpha = 0.9;
				ctx.strokeText(`${Utils.String.capitalize(nexus.id)} Nexus`, nexus.position.x * this.mapUnitScale, (nexus.position.y * this.mapUnitScale) + 5); // '+ 5' because it is half of the current font size.
				ctx.globalAlpha = 1;
				ctx.fillText(`${Utils.String.capitalize(nexus.id)} Nexus`, nexus.position.x * this.mapUnitScale, (nexus.position.y * this.mapUnitScale) + 5); // '+ 5' because it is half of the current font size.
				ctx.restore();
			});
			//#endregion Draw nexus labels

			// queue next frame
			requestAnimationFrame(this.draw);
		},
		drawSwitchtrack(ctx: CanvasRenderingContext2D, link: IDrawnSwitchtrack, continuePath: boolean = false, offset: ISimplePoint = {x:0,y:0}) {
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
		findNexus(id: string): IDrawnNexus | undefined {
			return this.nexuses.find(n => n.id == id);
		},
		getImageElement(id: string, src: string) {
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
			return switchtracks.find(s => (s._from == nexusFrom && s.to == nexusTo) || (s._from == nexusTo && s.to == nexusFrom));
		},
		/** Get the current position of the traveler from the given log */
		getTravelerPosition(log: ITravelLog): ISimplePoint {
			const locationId = log.history[log.history.length-1].locationId;
			const worldPosition = locationId ? this.worldPositions.find(w => w.worldId == locationId) : undefined;
			return worldPosition ? {x:worldPosition.x, y:worldPosition.y} : {x: 0, y:0};
		},
		/** Check whether a nexus is unlocked. */
		nexusUnlocked(nexus: IWorldNexusData): boolean {
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
		/** Check whether a Switchtrack is unlocked.
		 * TODO: finish logic for the final world.
		 */
		switchtrackUnlocked(switchtrack: ISwitchtrackData): boolean {
			let unlocked = false;
			const nexus = this.$props.worldNexuses.find(n => n.id == switchtrack.trackedNexus as string);

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
			this.state.paused = !this.state.paused;
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
		cleanText(text: string): string {
			let temp = text;
			if (temp.match(/\n\n/ig)) {
				temp = temp.replace(/\n\n(?![\s\S]*\n\n)/ig, "</p>"); // special handling for last paragraph to prevent weird space below review body
				temp = "<p>" + temp.replace(/\n\n/ig, "</p><p>");
			}
			return temp.replace(/\n/ig, "<br/>");
		},
	},
	mounted() {
		// Initialize map and canvas stuff
		const elem = document.getElementById('panzoom-element') as HTMLElement;
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

		if (this.$props.useCanvas) {
			const canvas = document.getElementById("map-canvas") as HTMLCanvasElement;
			const bound = elem.getBoundingClientRect();
			canvas.height = bound.height;
			canvas.width = bound.width;
			this.mapUnitScale = Math.round(bound.width / this.mapDimensions.width);
			this.draw();
		}
	},
	beforeUnmount() {
		this.panzoom?.destroy();
	},
})

function getMidpoint(a: ISimplePoint, b: ISimplePoint): ISimplePoint {
	return { x: (a.x + b.x)/2, y: (a.y + b.y)/2}
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
    // ctx.fillRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding);
	ctx.beginPath();
    ctx.roundRect(x - width/2 - padding, y - fontHeight/2 - padding, width + 2*padding, fontHeight + 2*padding, 5);
	ctx.fill();

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