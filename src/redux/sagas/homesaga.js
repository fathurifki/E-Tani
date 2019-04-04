import api from '../api/apiproduct';
import {
    takeLatest,
    select,
    call,
    put,
} from 'redux-saga/effects';
import {
    GET_DATA_HOME,
    HOME_RESPONSE,
    HOME_REQUEST,
    DETAIL_PRODUCT
} from '../actions/constants';
import {
    getDataHome,
    requestHome,
    responseHome,
    detailProduct
} from '../actions/home';

export function* homeEffect(){
    const {loginreducer} = yield select()
    try { 
        const {data} = yield call(api, loginreducer.token)
        yield put(detailProduct(data))
    } catch (error) {
        console.log("error", error);
    }
}

export const homesagas = [takeLatest(HOME_REQUEST, homeEffect)]