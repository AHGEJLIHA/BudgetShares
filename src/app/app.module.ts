import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { BudgetControlModule } from "./children/budget-control/budget-control.module";
import { MainMenuModule } from "./children/main-menu/main-menu.module";
import { NetProfitModule } from "./children/net-profit/net-profit.module";
import { NotFoundModule } from "./children/not-found/not-found.module";
import { OtherCurrencyModule } from "./children/other-currency/other-currency.module";
import { SettingsModule } from "./children/settings/settings.module";
import { SharesModule } from "./children/shares/shares.module";

import { BudgetForCurrentMonthService } from "./services/budget-for-current-month.service";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BudgetControlModule,
        MainMenuModule,
        NetProfitModule,
        NotFoundModule,
        OtherCurrencyModule,
        SettingsModule,
        SharesModule
    ],
  providers: [BudgetForCurrentMonthService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
