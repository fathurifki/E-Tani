import* as action from './constants'

export function loginAuthorization (field, values){
    return {type:action.LOGIN_AUTHORIZATION, field, values}
}

export function request (request){
    return {type:action.LOGIN_REQUEST, request}
}

export function loginobtain(token){
    return {type:action.LOGIN_OBTAINED, token}
}

export function clearlogin(clear){
    return {type:action.LOGIN_OBTAINED, clear }
}