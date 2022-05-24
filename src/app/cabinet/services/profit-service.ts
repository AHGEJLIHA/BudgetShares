import {Profit} from "../models/profit";
import {EventEmitter} from "@angular/core";
export class ProfitService {
    // private _profitConst = new Profit(0, Category[Category.ДругиеУслуги], new Date(0, 0, 2000));

    public profitArray: Profit[] = [];
    private _profitSum: number = 0;
    private _onClickProfit:EventEmitter<Profit> = new EventEmitter();
    private _onClickNumber:EventEmitter<number> = new EventEmitter();

    public addProfit(profit: Profit): void{
        this._onClickProfit.emit(profit);
        this._profitSum += profit.value;
        this.profitArray.push(profit);
    }

    public getProfit(index: number): Profit{
        this._onClickNumber.emit(index);
        return this.profitArray[index];
    }

    public getProfitSum(): number{
        this._onClickNumber.emit();
        return this._profitSum;
    }
}