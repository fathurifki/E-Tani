import* as action from './constants';

export function getDataHome (getDataHome){
    return {type:action.GET_DATA_HOME, getDataHome}
}

export function requestHome (requestData){
    return {type:action.HOME_REQUEST, requestData}
}

export function responseHome (responseData){
    return {type:action.HOME_RESPONSE, responseData}
}