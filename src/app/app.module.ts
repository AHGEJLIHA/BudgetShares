import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from "./app/app.component";
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BudgetControlComponent } from "./budget-control/budget-control.component";
import { SharesComponent } from "./shares/shares.component";
import { NetProfitComponent } from "./net-profit/net-profit.component";
import { OtherCurrencyComponent } from "./other-currency/other-currency.component";
import { SettingsComponent } from "./settings/settings.component";
import { NotFoundComponent } from "./not-found/not-found.component";
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
