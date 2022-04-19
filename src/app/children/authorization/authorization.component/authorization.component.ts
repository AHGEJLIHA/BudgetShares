import { Component } from '@angular/core';
import {IUser, User} from "../../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.styles/authorization.component.css']
})
export class AuthorizationComponent {
    public users: IUser[] = [];
    public genders: string[] = ['Женский', 'Мужской'];

    public registrationForm: FormGroup = new FormGroup({
        userName: new FormControl('Шкатова', Validators.required),
        userPassword: new FormControl('999', Validators.required),
        userEmail: new FormControl('ashkatova@nau.ru', [Validators.required, Validators.email]),
        userGender: new FormControl(this.genders[0], Validators.required),
    });

    public onSubmit(){
        const data: IUser = {
            name: this.registrationForm.controls['userName'].value,
            password: this.registrationForm.controls['userPassword'].value,
            email: this.registrationForm.controls['userEmail'].value,
            gender: this.registrationForm.controls['userGender'].value
        }

        this.users.push(new User(data));
    }
}