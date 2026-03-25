import { TravelLogs } from "@/data/travel-logs";
import { MinimalWorldDatas, WorldDatas } from "@/data/world-datas";
import { WorldNexusDatas } from "@/data/world-nexus-datas";
import type { IWorldNexusData } from "@/interfaces/IWorldNexusData";

/** A service containing CRUD methods for this app. */
export namespace DataService {

    export namespace TravelLog {
        function _findById(id: string) {
            return TravelLogs.find(t => t.id == id);
        }

        export function get(id: string) {
            return _findById(id);
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