import { Component } from '@angular/core';
import {BudgetForCurrentMonthService} from "../../services/budget-for-current-month.service";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.styles/settings.component.css']
})
export class SettingsComponent{
  public budgetForCurrentMonth: number = 0;

  constructor(public budgetForCurrentMonthService: BudgetForCurrentMonthService){
    this.budgetForCurrentMonthService.onClick.subscribe(x => this.budgetForCurrentMonth = x);
  }

  public setValue(value: number): void{
    this.budgetForCurrentMonthService.setValue(value);
  }
}
