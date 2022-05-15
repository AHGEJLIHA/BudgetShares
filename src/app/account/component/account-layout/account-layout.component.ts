import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './account-layout.component.html',
    styleUrls: ['./account-layout.styles/account-layout.component.css']
})
export class AccountLayoutComponent {
    constructor(public router: Router) { }
}
