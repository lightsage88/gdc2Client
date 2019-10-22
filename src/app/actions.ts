import axios from 'axios';
import { environment }  from '../environments/environment'

//Where the actions that will be read by our reducer live here :)

export const ADD_SAMPLE_CAT = 'ADD_SAMPLE_CAT'; 



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

    export const SIGN_UP = (newUser) => dispatch => {
        console.log('dispatching SIGN_UP')
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
            console.log('thunking around');
            console.log(response);

        })
        .catch(err => console.error(err));
    }