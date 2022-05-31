import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { OtherCurrencyComponent } from "./other-currency/other-currency.component";


@NgModule({
    declarations: [
        OtherCurrencyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        OtherCurrencyComponent
    ]
})

export class OtherCurrencyModule {
}
