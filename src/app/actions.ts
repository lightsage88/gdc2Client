import axios from 'axios';
import { environment }  from '../environments/environment'

export const ADD_CAT = 'ADD_CAT';
export const addCat = payload => ({
    type: ADD_CAT,
    payload
});
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const loginSuccess = payload => ({
    type: LOG_IN_SUCCESS,
    payload
});
export const LOG_OUT = "LOG_OUT";
export const logout = () => ({
    type: LOG_OUT
});
export const REFRESH_STATE = "REFRESH_STATE";
export const refreshState = payload => ({
    type: REFRESH_STATE,
    payload
});
export const logIn = (userCredentials): any => dispatch => {
  let {username, password} = userCredentials
  return axios({
    url: `${environment.API_BASE_URL}/api/auth/login`,
    method:"POST",
    headers: {
        accept: "json/application"
    },
    data: {
        username,
        password
    }
  })
  .then(response => {
    dispatch(loginSuccess(response.data))
    dispatch(storeAuthInfo(response.data))
    localStorage.setItem('authToken', response.data.authToken)
  })
  .catch(err => console.error(err))
}

export const signUp = (newUser): any => dispatch => {
  let {username, password, passwordConfirm, firstName, lastName, birthday} = newUser
  return axios({
    url: `${environment.API_BASE_URL}/api/users/signup`,
    method: "POST",
    headers: {
        accept: "application/json"
    },
    data: {
        username,
        password,
        passwordConfirm,
        firstName,
        lastName,
        birthday
    }
  })
  .then(response => {
    let payload = response.data;
    if(password === passwordConfirm){
      payload.password = password
    }
    if(response.data.code !== 422) {
      localStorage.setItem('validAccountCreation', 'true')
    } else {
      localStorage.setItem('validAccountCreation', 'false')
      localStorage.setItem('signupErrorMessage', response.data.message)
    }
    dispatch(logIn(payload))
  })
  .catch(err => {
    console.error(err)
  })
}

export const refreshStateWithToken = (token):any => dispatch => {
  return axios({
    url: `${environment.API_BASE_URL}/api/users/refreshStateWithToken`,
    method:"POST",
    headers: {
      "accept":"application/json"
    },
    data: {
      token
    }
  })
  .then(response => {
    let payload = response.data;
    dispatch(refreshState(payload));
    dispatch(refreshAuthToken(token, response.data))
  })
  .catch(err => console.error(err));
}

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN"
export const setAuthToken = payload => ({
  type: SET_AUTH_TOKEN,
  payload
})

const storeAuthInfo = (data) => dispatch => {
  dispatch(setAuthToken(data.authToken))
  dispatch(refreshStateWithToken(data.authToken))
  saveAuthToken(data.authToken)
}

export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
}

export const saveAuthToken = (authToken) => {
    localStorage.setItem('authToken', authToken);
}

export const refreshAuthToken = (token, data) => dispatch => {
  return axios({
    url: `${environment.API_BASE_URL}/api/auth/refreshToken`,
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "accept": "application/json"
    },
    data: {
      username: data.username,
      token
    }
  })
  .catch(err => {
      console.error(err);
      console.log(err);
  });
}