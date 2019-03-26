import * as action from './constants';

export function getDataCart (getDataCart){
    return {type:action.GET_DATA_CART, getDataCart}
}
export function requestCart (request){
    return {type:action.CART_REQUEST, request}
}