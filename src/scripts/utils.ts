import { Months } from "@/data/calendar/months";
import type { ICalendarEvent, IFullCalendarEvent } from "@/interfaces/ICalendarEvent";
import type { IWorldData } from "@/interfaces/IWorldData";
import { CampaignDate } from "@/objects/CampaignDate";
import { GameStrings } from "./game-strings";
import { Config } from "./config";

export namespace Utils {
    export namespace LocalStorage {
        const currentUserKey = "viewAsUser";
        const isGmKey = "viewerRole";
        export const getUser = () => localStorage.getItem(currentUserKey) || "guest";
        export function setUser(value: string) {
            localStorage.setItem(currentUserKey, value);
        }

        export function getIsGM() {
            let storedValue = ViewerRole.get();
            return storedValue ? storedValue == 'gm' : Config.IsGM;
        }
        export function setIsGM(value: boolean) {
            ViewerRole.set(value ? 'gm' : 'player');;
        }

        export namespace ViewerRole {
            export const get = () => localStorage.getItem(isGmKey) || Config.IsGM ? 'gm' : 'player';
            export function set(value: string) {
                localStorage.setItem(isGmKey, value);
                document.documentElement.setAttribute('data-game-viewer-role', value)
            }
        }

    }
    export namespace Date {
        /** A collection of functions to convert one dates between formats. */
        export namespace Convert {
            export namespace ICalendarEvent {
                /** Allows a year to be provided, since ICalendarEvent doesn't have a year property. */
                export function arrayToIFullCalenderEvents(calendarEvents: ICalendarEvent[][], year?: number): IFullCalendarEvent[] {
                    const result: IFullCalendarEvent[] = [];
                    for (let monthIndex = 0; monthIndex < calendarEvents.length; monthIndex++) {
                        const month = calendarEvents[monthIndex];
                        for (let dayIndex = 0; dayIndex < month.length; dayIndex++) {
                            result.push(toIFullCalenderEvent(month[dayIndex], monthIndex+1, year));
                        }
                    }
                    return result;
                }

                /** Get an array of CampaignDate objects from the provided ICalendarEvent dataset. Allows a year to be provided, since ICalendarEvent doesn't have a year property. */
                export function arrayToCampaignDates(calendarEvents: ICalendarEvent[][], year: number = 1): CampaignDate[] {
                    return IFullCalendarEvent.arrayToCampaignDates(ICalendarEvent.arrayToIFullCalenderEvents(calendarEvents, year));
                }

                export function toIFullCalenderEvent(calendarEvent: ICalendarEvent, month: number, year?: number): IFullCalendarEvent {
                    return { month, year, ...calendarEvent };
                }
            }
            export namespace IFullCalendarEvent {
                /** Get an array of CampaignDate objects from the provided IFullCalendarEvent dataset. */
                export function arrayToCampaignDates(calendarEvents: IFullCalendarEvent[]): CampaignDate[] {
                    const result = [];
                    for (let index = 0; index < calendarEvents.length; index++) {
                        result.push(toCampaignDate(calendarEvents[index]));
                    }
                    return result;
                }

                export function toCampaignDate(calendarEvent: IFullCalendarEvent): CampaignDate {
                    return new CampaignDate(calendarEvent.day, calendarEvent.month, calendarEvent.year || 0);
                }
            }
        }
        export namespace Format {
            interface IMinimumFormattableDate {day: number, month: number, year?: number}
            interface IFormatDateConfig {
                printMonthType?: 'num' | 'name' | 'abbr';
            }
            function formatDate(date: IMinimumFormattableDate, format: string, config?: IFormatDateConfig): string {
                const padding = {
                    day: (format.match(/d/gi) || []).length,
                    month: (format.match(/m/gi) || []).length,
                    year: (format.match(/y/gi) || []).length
                }
                const monthType = (config?.printMonthType || 'num');

                let processedFormat = format.replace(/d+/gi, 'd').replace(/m+/gi, 'm').replace(/y+/gi, 'y');

                const preparedDateParts = {
                    day: Utils.Number.pad0s(date.day, padding.day),
                    month: monthType == 'name' ? Months[date.month-1].name 
                        : monthType == 'abbr' ? Months[date.month-1].abbreviation 
                        : Utils.Number.pad0s(date.month, padding.month),
                    year: date.year ? Utils.Number.pad0s(date.year, padding.year) : '',
                }

                let finalPass = processedFormat.replace(/d/gi, preparedDateParts.day).replace(/m/gi, preparedDateParts.month).replace(/y/gi, preparedDateParts.year);
                if (finalPass.substr(finalPass.length - 1) == '/') {
                    finalPass = finalPass.slice(0, -1);
                }
                return finalPass;
            }

            export const MDY = (date: IMinimumFormattableDate): string => formatDate(date, 'mm/dd/yyyy');
            export const MonDY = (date: IMinimumFormattableDate): string => formatDate(date, 'm dd, yyyy', { printMonthType: 'abbr'});
            export const MonthDY = (date: IMinimumFormattableDate): string => formatDate(date, 'm d, yyyy', { printMonthType: 'name'});
            export const MonD = (date: IMinimumFormattableDate): string => formatDate(date, 'm dd', { printMonthType: 'abbr'});
            export const MonthD = (date: IMinimumFormattableDate): string => formatDate(date, 'm d', { printMonthType: 'name'});
            export const DMY = (date: IMinimumFormattableDate): string => formatDate(date, 'dd/mm/yyyy');
            export const DMon = (date: IMinimumFormattableDate): string => formatDate(date, 'dd m', { printMonthType: 'abbr'});
            export const DMonth = (date: IMinimumFormattableDate): string => formatDate(date, 'd m', { printMonthType: 'name'});
            export const DMonY = (date: IMinimumFormattableDate): string => formatDate(date, 'dd m, yyyy', { printMonthType: 'abbr'});
            export const DMonthY = (date: IMinimumFormattableDate): string => formatDate(date, 'd m, yyyy', { printMonthType: 'name'});
            
        }
    }
    export namespace Dice {
        /** Roll a die with the specified number of faces */
        export function rollDie(faces: number): number {
			return Math.ceil(Math.random() * faces);
		}
    }
    export namespace Images {
        export function getPortraitClassesFromType(type?: string) : string|undefined {
            switch (type) {
                case "location":
                    return "bg-secondary";
                case "nle":
                    return "bg-nle bg-opacity-50";
                case "rebirth":
                    return "bg-rebirth bg-opacity-50";
            
                default:
                    return;
            }
        }
    }
    export namespace Number {
        /** Convert a number to a string with leading 0s. */
        export function pad0s(input: number, targetLength: number): string {
            let str = input.toString();
            while (str.length < targetLength) {
                str = '0' + str;
            }
            return str;
        }
    }
    export namespace SortComparators {
        /** Compare two date strings (e.g. "06/05/0001") */
        export function dateString(a: string|undefined, b: string|undefined, ascending: boolean = true) {
            const compA = a || "";
            const compB = b || "";
            const aWins = ascending ? 1 : -1;
            const bWins = ascending ? -1 : 1;
            return (
                compA == compB ? 0
                : compA > compB ? aWins : bWins
            );
        }
    }
    export namespace String {

        export function capitalize(text: string) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }

        export function replaceComponentsInString(text: string) {
            let newText = text.replace(/\<(Character|c)\>/gi, '<span class="fw-bold character">')
                .replace(/\<(Location|l)\>/gi, '<span class="fw-bold location">')
                .replace(/\<(Important|im)\>/gi, '<span class="fw-bold important">');

            newText = newText.replace(/\<\/(Character|c|Location|l|Important|im)\>/gi, '</span>');
            return newText;
        }

        export function sanitizeUrl(path: string): string {
            let newPath = path.replace(/\//gi, '%2F'); // replace slashes
            return newPath;
        }

    }
    export namespace User {
        export function getName(): { first: string, full: string } {
            switch (LocalStorage.getUser()) {
                case 'cobb':
                    return GameStrings.Party.Cobb;
                case 'phil':
                    return GameStrings.Party.Phil;
                case 'tero':
                    return GameStrings.Party.Tero;
                default:
                    return { first: "Guest User", full: "Guest User" }
            }
        }
    }
    export namespace World {
        export function findWorld(worldDatas: IWorldData[], id: string): IWorldData | undefined {
            const search = worldDatas.filter(w => w.id == id);
            const world = search && search.length > 0 ? search[0] : undefined;
            return world;
        }
    }
}