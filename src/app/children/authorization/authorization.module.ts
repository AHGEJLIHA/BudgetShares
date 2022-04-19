import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AuthorizationComponent } from "./authorization.component/authorization.component";


@NgModule({
    declarations: [
        AuthorizationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AuthorizationComponent
    ]
})

export class AuthorizationModule {
}
