import { User } from './user';
import {ADD_CAT, LOG_IN_SUCCESS, LOG_OUT, REFRESH_STATE, SET_AUTH_TOKEN} from './actions';

export interface gdcClientState {
  user: User;
  lastUpdate: Date;
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
      userCats.push(action.payload);
      return Object.assign({}, state, {
        ...state,
        user: {
          ...state.user,
          cats: userCats
        }
      })

    case LOG_IN_SUCCESS:
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
      return Object.assign({}, state, INITIAL_STATE);

    case REFRESH_STATE:
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