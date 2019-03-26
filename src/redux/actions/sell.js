import * as action from './constants';

export function filldata (field, input){
    return {type:action.ASSIGN_DATA_SELL, field, input}
}

export function requestSell (request){
    return {type:action.REQUEST_SELL , request}
}