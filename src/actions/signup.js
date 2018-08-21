import { SIGN_UP } from '../constants/ActionTypes';

// sync actions
export function signupPayload(payload) {
    console.log("payload SYNC:", payload)
     return ({ type: SIGN_UP, payload }); 
}


// async actions

export function signup(data) {
    console.log("actions data2:", data)
    return dispatch =>  dispatch(signupPayload(data))
}