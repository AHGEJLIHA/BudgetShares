import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { BudgetControlComponent } from "./budget-control.component/budget-control.component";


@NgModule({
    declarations: [
        BudgetControlComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        BudgetControlComponent
    ]
})

export class BudgetControlModule {
}
