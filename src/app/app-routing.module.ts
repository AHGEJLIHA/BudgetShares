import {RouterModule, Routes} from "@angular/router";

import {MainMenuComponent} from "./cabinet/main-menu/main-menu.component/main-menu.component";
import {BudgetControlComponent} from "./cabinet/budget-control/budget-control.component/budget-control.component";
import {NetProfitComponent} from "./cabinet/net-profit/net-profit.component/net-profit.component";
import {NotFoundComponent} from "./cabinet/not-found/not-found.component/not-found.component";
import {OtherCurrencyComponent} from "./cabinet/other-currency/other-currency/other-currency.component";
import {SettingsComponent} from "./cabinet/settings/settings.component/settings.component";
import {SharesComponent} from "./cabinet/shares/shares.component/shares.component";

import {NgModule} from "@angular/core";

const appRoutes: Routes =[
    { path: '',
        pathMatch: 'full',
        redirectTo: 'account'
    },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(x => x.AccountModule)
    },
    { path: 'main-menu', component: MainMenuComponent },
    { path: 'budget-control', component: BudgetControlComponent },
    { path: 'shares', component: SharesComponent },
    { path: 'net-profit', component: NetProfitComponent },
    { path: 'other-currency', component: OtherCurrencyComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', redirectTo: 'not-found' },
    { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class AppRoutingModule {
}
