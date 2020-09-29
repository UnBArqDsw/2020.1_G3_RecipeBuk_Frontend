export class User {
    id: string;
    name: string;
    password: string;
    email: string;

    constructor(name, email, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
 }