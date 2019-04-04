import* as action from './constants';

export function requestHome (){
    return {type:action.HOME_REQUEST}
}

export function getDataHome (getDataHome){
    return {type:action.GET_DATA_HOME, getDataHome}
}

export function responseHome (responseData){
    return {type:action.HOME_RESPONSE, responseData}
}

export function detailProduct(productdetail){
    return {type:action.DETAIL_PRODUCT, productdetail}
}