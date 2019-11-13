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
    zodiacCombo: Object
}


// username: {
//     type: String,
//     required: true,
//     unique: true
// },
// password: {
//     type:String,
//     required: true
// },
// authToken: {
//     type: String
// },
// loggedIn: {
//     type: Boolean
// },
// firstName: {
//     type: String,
//     required: true,
//     default: ''
// },
// lastName: {
//     type: String,
//     required: true,
//     default: ''
// },
// birthday: {
//     type: Date,
//     required: false
// },
// cats: [catSchema]
