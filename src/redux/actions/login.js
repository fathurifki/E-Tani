import* as action from './constants'

export function loginAuthorization (field, values){
    return {type:action.LOGIN_AUTHORIZATION, field, values}
}

export function loginrequest(sending){
    return {type:action.LOGIN_REQUEST, sending}
}

export function loginobtain(newAuthState){
    return {type:action.LOGIN_OBTAINED, newAuthState}
}

export function clearlogin(clear){
    return {type:action.LOGIN_CLEAR, clear}
}

export function response(responselogin){
    return {type:action.LOGIN_RESPONSE, responselogin}
}
