export class User{
    public name: string;
    public password: string;
    public email: string;
    public gender: string;

    constructor(data: IUser) {
        this.name = data.name;
        this.password = data.password;
        this.email = data.email;
        this.gender = data.gender;
    }
}

export interface IUser{
    name: string;
    password: string;
    email: string;
    gender: string;
}