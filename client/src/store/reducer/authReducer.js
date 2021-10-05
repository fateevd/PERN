import {CHANGE_AUTH_LOGIN_FALSE, CHANGE_AUTH_LOGIN_TRUE} from "../constans/actionType";
import {getLocalStorage} from "../../utils/localStorage";


const initialState = getLocalStorage("isAuth");



export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH_LOGIN_TRUE:
            return {...state, isAuth: action.payload}
        case CHANGE_AUTH_LOGIN_FALSE:
            return {...state, isAuth: action.payload}
        default:
            return state;

    }
}