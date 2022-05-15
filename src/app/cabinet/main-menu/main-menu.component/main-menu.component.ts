import { Component } from '@angular/core';
import {BudgetForCurrentMonthService} from "../../../services/budget-for-current-month.service";

@Component({
  selector: '',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.styles/main-menu.component.css']
})
export class MainMenuComponent{
  public budgetForCurrentMonth: number = 0;

  constructor(public budgetForCurrentMonthService: BudgetForCurrentMonthService) {
    this.budgetForCurrentMonthService.onClick.subscribe(x => this.budgetForCurrentMonth = x);
  }

  public getValue(): number{
    this.budgetForCurrentMonth = this.budgetForCurrentMonthService.getValue();
    return this.budgetForCurrentMonth;
  }
}
