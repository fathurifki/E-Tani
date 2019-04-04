import * as action from './constants';

export function fetchProduct (getProduct){
    return {type:action.GET_DATA_PRODUCT, getProduct}
}
export function responseProduct(responseProduct){
    return {type:action.REQUEST_DATA_PRODUCT, responseProduct}
}

export function requestProduct(categoryProduct){
    return {type:action.REQUEST_PRODUCT, categoryProduct}
}

export function categoryProduct(paramProduct){
    return {type:action.PARAM_PRODUCT, paramProduct}
}