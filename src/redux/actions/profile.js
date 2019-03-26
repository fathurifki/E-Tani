import* as action from './constants';

export function pullDataProfile (dataProfile){
    return {type:action.GET_DATA_PROFILE, dataProfile}
}
export function requestProfile (requestProfile){
    return {type:action.REQUEST_PROFILE, requestProfile}
}
export function rearrangeProfile (field, values){
    return {type:action.EDIT_DATA_PROFILE, field, values}
}
export function requestEditProfile (requestEditProfile){
    return {type:action.EDIT_REQUEST_PROFILE, requestEditProfile}
}