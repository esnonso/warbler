import {apiCall, setTokenHeader}  from '../../services/api'
import { SET_CURRENT_USER } from '../actionTypes';
import {addError, removeError } from './error'

export  function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        user
    }
}

export function setAuthorizationToken(token){
    setTokenHeader(token)
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false)//when the user logs out
        dispatch(setCurrentUser({}))
    }
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject)=> {
            return apiCall("post", `http://localhost:3001/api/auth/${type}`, userData)
            .then(({ token, ...user})=> {
                localStorage.setItem("jwtToken", token)
                setAuthorizationToken(token)
                dispatch(setCurrentUser(user))
                dispatch(removeError())
                resolve();
            })
            .catch(err =>{
                dispatch(addError("Invalid Username or Password"))
                reject()
            })
        })
    }
}