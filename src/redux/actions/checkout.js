import* as action from './constants';

export function fillAmount (field, values){
    return {type:action.ASSIGN_AMOUNT, field, values}
}
export function requestBuy (request){
    return {type:action.REQUEST_CHECKOUT, request}
}