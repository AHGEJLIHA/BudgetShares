import {Component} from '@angular/core';
import {BudgetForCurrentMonthService} from "../../../services/budget-for-current-month.service";
import {ProfitService} from "../../../services/profit-service";
import {ExpenseService} from "../../../services/expense-service";
import {Category} from "../../../enum/category";
import {MandatoryExpenseCategory} from "../../../enum/MandatoryExpenseCategory";
import {OptionalExpenseCategory} from "../../../enum/OptionalExpenseCategory"

@Component({
  selector: 'shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.styles/shares.component.css']
})
export class SharesComponent {
    public categories: string[] = Object.keys(Category);
    public mandatoryCategory: string[] = Object.keys(MandatoryExpenseCategory);
    public optionalCategory: string[] = Object.keys(OptionalExpenseCategory);

    constructor(
      public budgetForCurrentMonth: BudgetForCurrentMonthService,
      public profitService: ProfitService,
      public expenseService: ExpenseService
              ) {

  }
}

