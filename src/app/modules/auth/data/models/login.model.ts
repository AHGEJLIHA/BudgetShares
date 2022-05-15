import { Md5 } from 'ts-md5';
import { ILoginRequestModel } from '../request-models/login.request-model';

export class LoginModel {
    public login!: string;
    public password!: string;
    public email!: string;

    public toDTO(): ILoginRequestModel {
        return {
            login: this.login,
            password: LoginModel.hashPassword(this.password),
            email: this.email
        }
    }

    private static hashPassword(password: string): string {
        return Md5.hashStr(password + password).toString()
    }
}
