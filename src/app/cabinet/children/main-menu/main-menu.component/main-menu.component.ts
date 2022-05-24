import { Component } from '@angular/core';
import {BudgetForCurrentMonthService} from "../../../services/budget-for-current-month.service";
import {StartToEndDateService} from "../../../services/start-to-end-date.service";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.styles/main-menu.component.css']
})
export class MainMenuComponent{
  public budgetForCurrentMonth: number;
  public startDate: Date = new Date(2022, 4, 30);
  public endDate: Date = new Date(2022, 5, 30);

  constructor(
      public budgetForCurrentMonthService: BudgetForCurrentMonthService,
      public startToEndDateService: StartToEndDateService
  ) {
    this.budgetForCurrentMonthService.onClick.subscribe(x => this.budgetForCurrentMonth = x);
    this.startToEndDateService.onClick.subscribe(y => this.startDate = y);
  }

  public getValue(): number{
    this.budgetForCurrentMonth = this.budgetForCurrentMonthService.getValue();

    return this.budgetForCurrentMonth;
  }

  public getStartToEndDate(): string{
    this.startDate = new Date(this.startToEndDateService.getStartDate());

    let currentDate = new Date(this.startDate);

    let startYear = currentDate.getFullYear();
    let startMonth = currentDate.getMonth() + 1;
    let startDate = currentDate.getDate();

    this.endDate = new Date(startYear, startMonth, startDate);
    // this.endDate = this.startToEndDateService.getEndDate();

    return this.startDate.toLocaleDateString() + " - " + this.endDate.toLocaleDateString();
  }
}
