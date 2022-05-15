import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../modules/auth/guards/auth.guard';
import {MainMenuComponent} from "./main-menu/main-menu.component/main-menu.component";

const routes: Routes = [
    {
        path: 'main-menu',
        component: MainMenuComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule]
})

export class CabinetModule { }
