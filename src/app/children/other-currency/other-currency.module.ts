import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { OtherCurrencyComponent } from "./other-currency/other-currency.component";


@NgModule({
    declarations: [
        OtherCurrencyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        OtherCurrencyComponent
    ]
})

export class OtherCurrencyModule {
}
