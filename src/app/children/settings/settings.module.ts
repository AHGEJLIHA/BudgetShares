import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { BudgetForCurrentMonthService } from "../../services/budget-for-current-month.service";

import { SettingsComponent } from "./settings.component/settings.component";


@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        BudgetForCurrentMonthService
    ],
    bootstrap: [
        SettingsComponent
    ]
})
export class SettingsModule {
}
