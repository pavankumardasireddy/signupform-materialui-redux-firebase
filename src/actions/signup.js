import { sampleRef } from "../config/firebase";
import { SIGN_UP } from '../constants/ActionTypes';

// sync actions
export function signupPayload(payload) {
    console.log("payload SYNC:", payload)
    return ({ type: SIGN_UP, payload }); 
}

// async actions
export function signup(data) {
    console.log("actions data2:", data)
    sampleRef.push().set(data);
    return dispatch =>  dispatch(signupPayload(data))
}

// export const signup = data => async dispatch => {
//     sampleRef.push().set(data);
// };

// export const fetchToDos = () => async dispatch => {
//     todosRef.on("value", snapshot => {
//       dispatch({
//         type: FETCH_TODOS,
//         payload: snapshot.val()
//       });
//     });
// };