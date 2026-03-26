import type { ITravelLogServer } from "@/interfaces/travel-log/ITravelLog";
import { TravelLogLightship } from "./travel-logs/travel-log-lightship";
import { TravelLogParty } from "./travel-logs/travel-log-party";

export const TravelLogs: ITravelLogServer[] = [
    ...TravelLogLightship,
    ...TravelLogParty
];