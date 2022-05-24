import {EventEmitter} from "@angular/core";

export class BudgetForCurrentMonthService{
    private _budgetForCurrentMonth: number = 0;
    public onClick:EventEmitter<number> = new EventEmitter();

    public setValue(value: number): void{
        this.onClick.emit(this._budgetForCurrentMonth);
        this._budgetForCurrentMonth = value;
    }

    public getValue(): number{
        this.onClick.emit(this._budgetForCurrentMonth);
        return this._budgetForCurrentMonth;
    }
}