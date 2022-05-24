import {Asset} from "./asset";

export class Profit extends Asset{
    constructor(profit: number, category: string, date: Date) {
        super(profit, category, date);
    }
}