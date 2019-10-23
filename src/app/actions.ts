import axios from 'axios';
import { environment }  from '../environments/environment'

//Where the actions that will be read by our reducer live here :)

export const ADD_CAT = 'ADD_CAT';
export const addCat = (payload) => ({
    type: ADD_CAT,
    payload
});





export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const loginSuccess = (payload) => ({
    type: LOG_IN_SUCCESS,
    payload
});

export const LOG_OUT = "LOG_OUT";
export const logout = () => ({
    type: LOG_OUT
});
//thunk actions

    //example:
    // export const getDetailedEventInfo = (username, charID) => dispatch => {
    //     axios({
    //         url: `${API_BASE_URL}/api/characters/events`,
    //         method: "POST",
    //         headers: {
    //             accept: "application/json"
    //         },
    //         data: {
    //             charID,
    //             username
    //         }
    //     })
    //     .then(response => {
    //         dispatch(refreshCharacters(response.data));
    //         return response
            
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }

    //TODO: Managed to get the onSubmit() fn in signup.component.ts to accept taking a thunk
    //by making it return the type of 'any' as seen below. Apparently this is not the best practice,
    //but for now it let's me continue with development. Will research more later.


    export const LOG_IN = (userCredentials): any => dispatch => {
        console.log('dispatching LOG_IN');
        let {username, password} = userCredentials;
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
            console.log(response);
            dispatch(loginSuccess(response.data))
        })
        .catch(err => console.error(err));
    }

    export const SIGN_UP = (newUser): any => dispatch => {
        console.log('dispatching SIGN_UP');
        let {username, password, passwordConfirm, firstName, lastName, birthday} = newUser;
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
                payload.password = password;
            }
            dispatch(LOG_IN(payload));

        })
        .catch(err => console.error(err));
    }