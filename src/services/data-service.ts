import { TravelLogs } from "@/data/travel-logs";
import { MinimalWorldDatas, WorldDatas } from "@/data/world-datas";
import { WorldNexusDatas } from "@/data/world-nexus-datas";
import type { IDate } from "@/interfaces/IDate";
import type { IWorldNexusData } from "@/interfaces/IWorldNexusData";
import type { ITravelLog, ITravelLogTimelineEvent } from "@/interfaces/travel-log/ITravelLog";
import { Utils } from "@/scripts/utils";
import type { h } from "vue";

/** A service containing CRUD methods for this app. */
export namespace DataService {

    export namespace TravelLog {
        function _findById(id: string) {
            return TravelLogs.find(t => t.id == id);
        }

        function _getProcessed(id: string, iteration: number): ITravelLog | undefined {
            const log = _findById(id);
            var processedHistory: ITravelLogTimelineEvent[] = [];
            
            if (!log) {
                // couldn't find a viable log with the specified id
                return undefined;
            }
            
            // add JS timestamps for the history items in this log
            log.history.forEach(h => {
                processedHistory.push({
                    ...h,
                    timeStart: Utils.Dates.Convert.IDate.toJSDate(h.dateStart).getTime(),
                    timeEnd: h.dateEnd ? Utils.Dates.Convert.IDate.toJSDate(h.dateEnd).getTime() : undefined,
                });
            });

            // copy history items from other travel logs for specified dates
            if (iteration > 2) {
                log.reference.forEach(r => {
                    const refLog = _getProcessed(r.id, iteration+1);
                    if (refLog) {
                        const timeStart = Utils.Dates.Convert.IDate.toJSDate(r.dateStart as IDate).getTime();
                        const timeEnd = r.dateEnd ? Utils.Dates.Convert.IDate.toJSDate(r.dateEnd as IDate).getTime() : timeStart;
                        processedHistory = processedHistory.concat(refLog?.history.filter(h => {
                            const end = h.timeEnd || h.timeStart;
                            return h.timeStart < timeEnd && end > timeStart;
                        }));
                    }
                });
            }

            // serve it up
            return {
                ...log,
                history: processedHistory.sort((obj1, obj2) => {
                    if (obj1.timeStart > obj2.timeStart) return 1;
                    if (obj1.timeStart < obj2.timeStart) return -1;
                    return 0;
                })
            }
        }

        export function _get_raw(id: string) {
            return _findById(id);
        }

        export function get(id: string): ITravelLog | undefined {
            return _getProcessed(id, 0);
        }
    }

    /** Methods for the worlds of Voidspace. */
    export namespace World {
        export function getWorldDatas() {
            return WorldDatas;
        }
        export function getMinimalWorldData() {
            return MinimalWorldDatas;
        }
    }
    
    export namespace WorldNexus {
        /** Get world nexus definitions
         * @param includeNonplayable indicates whether or not to include worlds outside the playable area.
         * TODO: Implement handling for nonplayable nexuses
         */
        export function getWorldNexuses(includeNonplayable: boolean = false): IWorldNexusData[] {
            const results = WorldNexusDatas;

            if (includeNonplayable) {
                // DO SOMETHING
            }

            return results;
        }
    }
}