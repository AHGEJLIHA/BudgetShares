import { Component } from '@angular/core';
import {BudgetForCurrentMonthService} from "../../../services/budget-for-current-month.service";
import {StartToEndDateService} from "../../../services/start-to-end-date.service";

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.styles/settings.component.css']
})
export class SettingsComponent{
    public budgetForCurrentMonth: number;
    public startDate: Date;

    constructor(
        public budgetForCurrentMonthService: BudgetForCurrentMonthService,
        public startToEndDateService: StartToEndDateService
    ){
        this.budgetForCurrentMonthService.onClick.subscribe(x => this.budgetForCurrentMonth = x);
        this.startToEndDateService.onClick.subscribe(y => this.startDate = y);
    }

    public setValue(value: number): void{
        this.budgetForCurrentMonthService.setValue(value);
    }

    public setStartDate(startDate: Date): void{
        this.startToEndDateService.setStartDate(startDate);
    }
}
