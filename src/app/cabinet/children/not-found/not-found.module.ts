import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { NotFoundComponent } from "./not-found.component/not-found.component";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    bootstrap: [
        NotFoundComponent
    ]
})

export class NotFoundModule {
}
