export class Asset implements IAsset{
    public date: Date;
    public category: string;
    public value: number;

    constructor(
        private _value: number,
        private _category: string,
        private _date: Date
    ){
        this.date = _date;
        this.category = _category;
        this.value = _value;
    }
}

export interface IAsset{
    date: Date;
    category: string;
    value: number;
}