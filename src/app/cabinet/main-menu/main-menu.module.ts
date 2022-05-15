import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { MainMenuComponent } from "./main-menu.component/main-menu.component";

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        MainMenuComponent
    ]
})

export class MainMenuModule {
}
