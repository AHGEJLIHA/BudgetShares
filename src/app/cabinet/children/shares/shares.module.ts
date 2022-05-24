import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { SharesComponent } from "./shares.component/shares.component";


@NgModule({
    declarations: [
        SharesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        SharesComponent
    ]
})
export class SharesModule {
}
