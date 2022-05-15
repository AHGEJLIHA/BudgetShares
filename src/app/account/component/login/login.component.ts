import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AuthService } from '../../../modules/auth/services/auth.service';
import {IUser, User} from "../../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../../../modules/auth/data/models/login.model";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.styles/login.component.css']
})
export class LoginComponent {
    public users: IUser[] = [];

    public loading: boolean = false;

    public viewModel = new LoginFormViewModel;

    constructor(private _authService: AuthService) {}

    public onSubmit(){
        const data: IUser = {
            login: this.viewModel.form.controls['userLogin'].value,
            password: this.viewModel.form.controls['userPassword'].value,
            email: this.viewModel.form.controls['userEmail'].value,
        }

        this.users.push(new User(data));

        this.loading = true;
        this._authService.auth(this.viewModel.toModel())
            .pipe(
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe()
    }

    public toModel(): LoginModel {
        const result = new LoginModel();
        result.login = this.viewModel.form.get('login')?.value ?? ''
        result.password = this.viewModel.form.get('password')?.value ?? ''
        result.email = this.viewModel.form.get('email')?.value ?? ''
        return result;
    }
}

export class LoginFormViewModel {

    public form: FormGroup = new FormGroup({
        userLogin: new FormControl('angel174rus', Validators.required),
        userPassword: new FormControl('999', Validators.required),
        userEmail: new FormControl('ashkatova@nau.ru', [Validators.required, Validators.email]),
    });

    public toModel(): LoginModel {
        const result = new LoginModel();
        result.login = this.form.get('login')?.value ?? ''
        result.password = this.form.get('password')?.value ?? ''
        result.email = this.form.get('email')?.value ?? ''

        return result;
    }
}