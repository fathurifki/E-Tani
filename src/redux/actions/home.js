import* as action from './constants';

export function getDataHome (getDataHome){
    return {type:action.GET_DATA_HOME, getDataHome}
}

export function requestHome (request){
    return {type:action.HOME_REQUEST, request}
}