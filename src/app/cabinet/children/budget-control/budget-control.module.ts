import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import { BudgetControlComponent } from "./budget-control.component/budget-control.component";
import {AllProfitComponent} from "./children/all-profit/all-profit.component";
import {AllExpenseComponent} from "./children/all-expense/all-expense.component";


const routes: Routes = [
    {
        path: 'all-profit',
        component: AllProfitComponent
    },
    {
        path: 'all-expense',
        component: AllExpenseComponent
    }
];

@NgModule({
    declarations: [
        BudgetControlComponent,
        AllProfitComponent,
        AllExpenseComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        BudgetControlComponent
    ]
})

export class BudgetControlModule {
}
