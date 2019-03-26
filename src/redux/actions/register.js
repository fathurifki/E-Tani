import* as action from './constants';

export function fillAdmission (field, values){
    return {type:action.REGISTER_ENROLLMENT, field, values}
}
export function requestRegister (request){
    return {type:action.REGISTER_REQUEST, request}
}