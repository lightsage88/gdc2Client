import { Cat } from './cat'

export interface User {
    username: string;
    password: string;
    authToken: string;
    loggedIn: boolean;
    firstName: string;
    lastName: string;
    birthday: string;
    cats: Cat[];
    zodiacCombo: Object;
    _id: Object;
}