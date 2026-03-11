import type { ITravelLog } from "@/interfaces/travel-log/ITravelLog";
import { TravelLogLightship } from "./travel-logs/travel-log-lightship";
import { TravelLogParty } from "./travel-logs/travel-log-party";

export const TravelLogs: ITravelLog[] = [
    ...TravelLogLightship,
    ...TravelLogParty
];