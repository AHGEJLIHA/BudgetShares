import { Component } from '@angular/core';
import {Category} from "../../../enum/category";
import {ProfitService} from "../../../services/profit-service";
import {Profit} from "../../../models/profit";
import {ExpenseService} from "../../../services/expense-service";
import {Expense} from "../../../models/expense";
import {Router} from "@angular/router";

@Component({
  selector: 'budget-control',
  templateUrl: './budget-control.component.html',
  styleUrls: ['./budget-control.styles/budget-control.component.css']
})
export class BudgetControlComponent {
  public profitValue: number;
  public profitCategory: Category;
  public profitDate: Date = new Date();

  public expenseValue: number;
  public expenseCategory: Category;
  public expenseDate: Date = new Date();

  constructor(
      public profitService: ProfitService,
      public expenseService: ExpenseService,
      private _router: Router
      ) {
  }

  public addProfit(value: number, category: string, date: Date): void{
    let profit = new Profit(value, category, date);
    this.profitService.addProfit(profit);
  }

  public addExpense(value: number, category: string, date: Date): void{
    let expense = new Expense(value, category, date);
    this.expenseService.addExpense(expense);
  }

  public getProfitSum(): number{
    return this.profitService.getProfitSum();
  }

  public getExpenseSum(): number{
    return this.expenseService.getExpenseSum();
  }

  // public clickToRedirect(): void{
  //   this._router.navigateByUrl("all-profit")
  // }
}
