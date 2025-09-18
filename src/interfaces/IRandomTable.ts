export interface IRandomTableEntry {
    result: string;
    /** How likely is this result? */
    weight?: number;
    /** Is the given  weight a percentage? */
    weightType?: 'p';
}


export interface IRandomTable {
    dieSize?: number;
    /** May eventually be used for matching tables to allow data-driven automation of rolling hangoff tables. */
    id?: string;
    /** Only used for labeling this table in the UI, if used at all. */
    name?: string;
    rows: IRandomTableEntry[];
}