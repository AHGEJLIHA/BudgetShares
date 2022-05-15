import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NotifierModule } from 'angular-notifier';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import '@angular/common/locales/global/ru';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { AuthInterceptor } from './modules/auth/helpers/auth.interceptor';
import { AuthService } from './modules/auth/services/auth.service';
import { HttpService } from './modules/http-request/services/http.service';
import { SessionStorageService } from './modules/auth/services/session-storage.service';
import { AppRoutingModule } from "./app-routing.module";
import { BudgetControlModule } from "./cabinet/budget-control/budget-control.module";
import { MainMenuModule } from "./cabinet/main-menu/main-menu.module";
import { NetProfitModule } from "./cabinet/net-profit/net-profit.module";
import { NotFoundModule } from "./cabinet/not-found/not-found.module";
import { OtherCurrencyModule } from "./cabinet/other-currency/other-currency.module";
import { SettingsModule } from "./cabinet/settings/settings.module";
import { SharesModule } from "./cabinet/shares/shares.module";

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
        SharesModule,
        NotifierModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
  providers: [
      BudgetForCurrentMonthService,
      HttpClient,
      HttpService,
      SessionStorageService,
      AuthService,
      { provide: LOCALE_ID, useValue: 'ru-RU' },
      AuthGuard,
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
