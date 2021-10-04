import {CHANGE_AUTH_LOGIN_FALSE, CHANGE_AUTH_LOGIN_TRUE} from "../constans/actionType";


export const sinUp = () => ({
    type: CHANGE_AUTH_LOGIN_TRUE,
    payload: true
})


export const logOut = () => ({
    type: CHANGE_AUTH_LOGIN_FALSE,
    payload: false
})