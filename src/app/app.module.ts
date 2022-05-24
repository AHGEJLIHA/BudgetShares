/*MODULES*/
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NotifierModule } from 'angular-notifier';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import '@angular/common/locales/global/ru';
import { AppRoutingModule } from "./app-routing.module";
import {AccountModule} from "./account/account.module";
import {CabinetModule} from "./cabinet/cabinet.module";

/*COMPONENTS*/
import { AppComponent } from "./app.component";

/* AUTH */
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { AuthInterceptor } from './modules/auth/helpers/auth.interceptor';
import { AuthService } from './modules/auth/services/auth.service';
import { SessionStorageService } from './modules/auth/services/session-storage.service';

/*HTTP-REQUEST*/
import { HttpService } from './modules/http-request/services/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        NotifierModule,
        HttpClientModule,
        AppRoutingModule,
        AccountModule,
        CabinetModule
    ],
  providers: [
      HttpClient,
      HttpService,
      AuthGuard,
      AuthService,
      SessionStorageService,
      {
          provide: LOCALE_ID, useValue: 'ru-RU'
      },
      {
          provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
      }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
