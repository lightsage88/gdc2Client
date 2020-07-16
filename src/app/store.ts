import { User } from './user';
import {ADD_CAT, LOG_IN_SUCCESS, LOG_OUT, REFRESH_STATE, SET_AUTH_TOKEN} from './actions';

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
        cats: [],
        zodiacCombo: {},
        _id: ''

    },
    lastUpdate: null
}


export function rootReducer(state, action): gdcClientState {
    switch(action.type){
        case ADD_CAT:
            let userCats = state.user.cats;
            console.log('you sent over Add Sample Cat');
            console.log(action.payload);
            // action.payload.id = state.user.cats.length + 1;
            // return Object.assign({}, state, {
            //     cats: state.user.cats.concat(Object.assign({}, action.cat)),
            //     lastUpdate: new Date()
            // })
            userCats.push(action.payload);
            return Object.assign({}, state, {
                ...state,
                user: {
                    ...state.user,
                    cats: userCats
                }
            })

        case LOG_IN_SUCCESS:
            console.log('you are using login success');
            console.log(action.payload.user)
            let {username, firstName, lastName, birthday, cats, zodiacCombo, _id} = action.payload.user;
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
                    zodiacCombo,
                    loggedIn: true,
                    _id
                }
            })
        case LOG_OUT:
            console.log('you are logging out');
            return Object.assign({}, state, INITIAL_STATE);

        case REFRESH_STATE:
            console.log('dispatching REFRESH_STATE from reducer');
            console.log(action.payload);
            return Object.assign({}, state, {
                ...state,
                user: {
                    username: action.payload.username,
                    loggedIn: true,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    birthday: action.payload.birthday,
                    cats: action.payload.cats,
                    zodiacCombo: action.payload.zodiacCombo,
                    authToken: action.payload.authToken,
                    _id: action.payload._id
                }
            })

        case SET_AUTH_TOKEN:
            console.log('settingAuth token into state');
            return Object.assign({}, state, {
                ...state,
                user: {
                    ...state.user,
                    authToken: action.payload

                }
            })

    }
    return state;
}
