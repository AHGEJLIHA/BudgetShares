import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { NetProfitComponent } from "./net-profit.component/net-profit.component";


@NgModule({
    declarations: [
        NetProfitComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        NetProfitComponent
    ]
})

export class NetProfitModule {
}
