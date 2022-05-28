import {Expense} from "../models/expense";
import {EventEmitter} from "@angular/core";

export class ExpenseService {
    public expenseArray: Expense[] = [];
    private _expenseSum: number = 0;
    private _onClickExpense:EventEmitter<Expense> = new EventEmitter();
    private _onClickNumber:EventEmitter<number> = new EventEmitter();

    public addExpense(expense: Expense): void{
        this._onClickExpense.emit(expense);
        this._expenseSum += expense.value;
        this.expenseArray.push(expense);
    }

    public getExpense(index: number): Expense{
        this._onClickNumber.emit(index);
        return this.expenseArray[index];
    }

    public getExpenseSum(): number{
        this._onClickNumber.emit();
        return this._expenseSum;
    }
}