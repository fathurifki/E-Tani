import * as action from './constants';

export function requestData (){
    return {type:action.REQUEST_DATA_DETAIL_PRODUCT}
}

export function responseDetail(responseDataDetail){
    return {type:action.RESPONSE_DETAIL_PRODUCT, responseDataDetail}
}

export function getDataDetail(getData){
    return {type:action.GET_DETAIL_PRODUCT, getData}
} 

export function amountProduct(addDataCart){
    return {type:action.ADD_PRODUCT, addDataCart}
}