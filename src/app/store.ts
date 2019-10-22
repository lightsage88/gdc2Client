import { User } from './user'; 
import {ADD_SAMPLE_CAT} from './actions';

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
        case ADD_SAMPLE_CAT:
            console.log('you sent over Add Sample Cat');
            action.cat.id = state.user.cats.length + 1;
            return Object.assign({}, state, {
                cats: state.user.cats.concat(Object.assign({}, action.cat)),
                lastUpdate: new Date()
            })

    }
    return state;
}