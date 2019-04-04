import api from '../api/apidetailproduct';
import {
    takeLatest,
    select,
    call,
    put
} from 'redux-saga/effects';
import {
    REQUEST_PRODUCT, 
    REQUEST_DATA_PRODUCT
} from '../actions/constants';
import {
    categoryProduct,
    responseProduct,
    requestProduct,
    fetchProduct
} from '../actions/product';

export function* detailEffect({categoryProduct}){
    console.log("PRODUCT 1");
    const {loginreducer} = yield select()
    try {
        const {data} = yield call(api, loginreducer.token, categoryProduct )
        console.log("PRODUCT 2", data);
        yield put(responseProduct(data))
    } catch (error) {
        console.log("error", error);
    }
}

export const productsagas = [takeLatest(REQUEST_PRODUCT, detailEffect)]