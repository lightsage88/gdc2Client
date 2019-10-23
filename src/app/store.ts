import { User } from './user'; 
import {ADD_CAT, LOG_IN_SUCCESS, LOG_OUT} from './actions';

export interface gdcClientState {
    user: User;
    lastUpdate: Date;
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

}

export const INITIAL_STATE: gdcClientState = {
    user: {
        username: '',
        password: '',
        authToken: '',
        loggedIn: false,
        firstName: '',
        lastName: "",
        birthday: '',
        cats: []

    },
    lastUpdate: null
}

export function rootReducer(state, action): gdcClientState {
    switch(action.type){
        case ADD_CAT:
            console.log('you sent over Add Sample Cat');
            console.log(action.payload);
            action.cat.id = state.user.cats.length + 1;
            return Object.assign({}, state, {
                cats: state.user.cats.concat(Object.assign({}, action.cat)),
                lastUpdate: new Date()
            })
            
            
        case LOG_IN_SUCCESS:
            console.log('you are using login success');
            let {username, firstName, lastName, birthday, cats} = action.payload.user;
            let {authToken} = action.payload;
            return Object.assign({}, state, {
                ...state, 
                user: {
                    username,
                    firstName,
                    lastName,
                    birthday,
                    cats,
                    authToken,
                    loggedIn: true,           
                }
            }) 
        case LOG_OUT:     
            console.log('you are logging out');
            return Object.assign({}, state, INITIAL_STATE);

    }
    return state;
}