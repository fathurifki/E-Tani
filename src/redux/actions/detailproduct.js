import * as action from '../actions/constants';

export function fetchProduct (dataProduct){
    return {type:action.GET_DATA_PRODUCT, dataProduct}
}
export function requestProduct(request){
    return {type:action.REQUEST_DATA_PRODUCT, request}
}
export function addtoCart(addProduct){
    return {type:action.ADD_PRODUCT, addProduct}
}
export function requestAddCart(requestCart){
    return {type:action.REQUEST_ADD_PRODUCT, requestCart}
}