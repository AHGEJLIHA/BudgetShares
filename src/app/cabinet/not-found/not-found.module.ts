import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { NotFoundComponent } from "./not-found.component/not-found.component";


@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        NotFoundComponent
    ]
})

export class NotFoundModule {
}
