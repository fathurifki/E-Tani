import* as action from './constants';

export function fillAdmission (field, values){
    return {type:action.REGISTER_ENROLLMENT, field, values}
}
export function requestRegister(requestData){
    return {type:action.REGISTER_REQUEST, requestData}
}
export function responseRegister(responseData){
    return {type:action.REGISTER_RESPONSE, responseData}
}