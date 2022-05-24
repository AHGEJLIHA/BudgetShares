import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const appRoutes: Routes =[
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account'
    },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(x => x.AccountModule)
    },
    {
        path: 'cabinet',
        loadChildren: () => import('./cabinet/cabinet.module').then(y => y.CabinetModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class AppRoutingModule {
}
