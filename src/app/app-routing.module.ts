import {RouterModule, Routes} from "@angular/router";

import {AuthorizationComponent} from "./children/authorization/authorization.component/authorization.component";
import {MainMenuComponent} from "./children/main-menu/main-menu.component/main-menu.component";
import {BudgetControlComponent} from "./children/budget-control/budget-control.component/budget-control.component";
import {NetProfitComponent} from "./children/net-profit/net-profit.component/net-profit.component";
import {NotFoundComponent} from "./children/not-found/not-found.component/not-found.component";
import {OtherCurrencyComponent} from "./children/other-currency/other-currency/other-currency.component";
import {SettingsComponent} from "./children/settings/settings.component/settings.component";
import {SharesComponent} from "./children/shares/shares.component/shares.component";

import {NgModule} from "@angular/core";

const appRoutes: Routes =[
    { path: '', component: MainMenuComponent },
    { path: 'budget-control', component: BudgetControlComponent },
    { path: 'shares', component: SharesComponent },
    { path: 'net-profit', component: NetProfitComponent },
    { path: 'other-currency', component: OtherCurrencyComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'authorization', component: AuthorizationComponent },
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
