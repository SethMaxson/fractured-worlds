import type { IRandomTable, IRandomTableEntry } from "@/interfaces/IRandomTable";

export namespace RandomTableUtils {
    /** Find the result of a specified dice result in the provided table. */
    export function lookupResult(table: IRandomTable, rolledNumber: number): string {
        let weightCounter = 1;

        for (let i = 0; i < table.rows.length; i++) {
            const row = table.rows[i];const rowWeight = getWeightForRow(row);
            let rangeEnd = weightCounter + rowWeight - 1;
            if (rolledNumber <= rangeEnd) {
                return row.result;
            }
            weightCounter += rowWeight;
        }

        //no matches found
        return "!INVALID!";
    }
    /** Gets the weight of a specific row in dice faces */
    export function getWeightForRow(row: IRandomTableEntry): number {
        return row.weight || 1;
    }
}