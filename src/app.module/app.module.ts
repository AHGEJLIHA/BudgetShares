import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { BudgetForCurrentMonthService } from "./services/budget-for-current-month.service";

import { AppComponent } from "./components/app/app.component";
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { BudgetControlComponent } from "./components/budget-control/budget-control.component";
import { SharesComponent } from "./components/shares/shares.component";
import { NetProfitComponent } from "./components/net-profit/net-profit.component";
import { OtherCurrencyComponent } from "./components/other-currency/other-currency.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes =[
  { path: '', component: MainMenuComponent },
  { path: 'budget-control', component: BudgetControlComponent },
  { path: 'shares', component: OtherCurrencyComponent },
  { path: 'net-profit', component: NetProfitComponent },
  { path: 'other-currency', component: OtherCurrencyComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    BudgetControlComponent,
    SharesComponent,
    NetProfitComponent,
    OtherCurrencyComponent,
    SettingsComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [BudgetForCurrentMonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
