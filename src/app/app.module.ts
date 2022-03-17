import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainMenuComponent]
})
export class AppModule { }
