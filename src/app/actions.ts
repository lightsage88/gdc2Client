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


export const REFRESH_STATE = "REFRESH_STATE";
export const refreshState = (payload) => ({
    type: REFRESH_STATE,
    payload
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


    export const logIn = (userCredentials): any => dispatch => {
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
            dispatch(loginSuccess(response.data));

            dispatch(storeAuthInfo(response.data));

            localStorage.setItem('authToken', response.data.authToken);
        })
        .catch(err => console.error(err));
    }

    export const signUp = (newUser): any => dispatch => {
        console.log('dispatching signUp');
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
            dispatch(logIn(payload));

        })
        .catch(err => console.error(err));
    } 

    export const refreshStateWithToken = (token) => dispatch => {
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
            console.log(response);
            dispatch(refreshState(payload));


            dispatch(refreshAuthToken(token, response.data))
        })
        .catch(err => console.error(err));

        

    }

    export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
    export const setAuthToken = (payload) => ({
        type: SET_AUTH_TOKEN,
        payload
    });


    const storeAuthInfo = (data) => dispatch => {
                        // const decodedTokenData = jwtDecode(authToken);
        dispatch(setAuthToken(data.authToken));
                //setAuthToken is to store the token in the state

        dispatch(refreshStateWithToken(data.authToken));
        // dispatch(refreshState(data.user));
        saveAuthToken(data.authToken);
    }

                    const jwtDecode = (authToken) => {
                        console.log(authToken);
                       return  axios({
                            url: `${environment.API_BASE_URL}/api/auth/jwtDecode`,
                            method: "POST",
                            headers: {
                                accept: "application/json"
                            },
                            data: authToken
                        })
                        .then(response => {
                            console.log(response);
                            return response;
                            
                        })
                        .catch(err => console.error(err));
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
        .then( response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err);
            console.log(err);
        });

    }

    
    ///Token Business



   


    