/*MODULES*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BudgetControlModule} from "./children/budget-control/budget-control.module";
import {NetProfitModule} from "./children/net-profit/net-profit.module";
import {NotFoundModule} from "./children/not-found/not-found.module";
import {OtherCurrencyModule} from "./children/other-currency/other-currency.module";
import {SettingsModule} from "./children/settings/settings.module";
import {SharesModule} from "./children/shares/shares.module";

/*COMPONENTS*/
import {BudgetControlComponent} from "./children/budget-control/budget-control.component/budget-control.component";
import {MainMenuComponent} from "./children/main-menu/main-menu.component/main-menu.component";
import {NetProfitComponent} from "./children/net-profit/net-profit.component/net-profit.component";
import {NotFoundComponent} from "./children/not-found/not-found.component/not-found.component";
import {OtherCurrencyComponent} from "./children/other-currency/other-currency/other-currency.component";
import {SettingsComponent} from "./children/settings/settings.component/settings.component";
import {SharesComponent} from "./children/shares/shares.component/shares.component";

/*SERVICES*/
import {BudgetForCurrentMonthService} from "./services/budget-for-current-month.service";
import {StartToEndDateService} from "./services/start-to-end-date.service";
import {ProfitService} from "./services/profit-service";
import {ExpenseService} from "./services/expense-service";

const routes: Routes = [
    {
        path: 'main-menu',
        component: MainMenuComponent,
        /*canActivate: [AuthGuard]*/
    },
    { path: 'budget-control', component: BudgetControlComponent },
    { path: 'shares', component: SharesComponent },
    { path: 'net-profit', component: NetProfitComponent },
    { path: 'other-currency', component: OtherCurrencyComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', redirectTo: 'not-found' },
    { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        BudgetControlModule,
        NetProfitModule,
        NotFoundModule,
        OtherCurrencyModule,
        SettingsModule,
        SharesModule
    ],
    exports: [RouterModule],
    providers: [
        BudgetForCurrentMonthService,
        StartToEndDateService,
        ProfitService,
        ExpenseService
    ]
})

export class CabinetModule { }
