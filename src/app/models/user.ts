export class User{
    public login: string;
    public password: string;
    public email: string;

    constructor(data: IUser) {
        this.login = data.login;
        this.password = data.password;
        this.email = data.email;
    }
}

export interface IUser{
    login: string;
    password: string;
    email: string;
}