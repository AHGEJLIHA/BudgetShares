import {Asset} from "./asset";

export class Expense extends Asset{
    constructor(
        value: number,
        category: string,
        date: Date
        ) {
        super(value, category, date);
    }
}