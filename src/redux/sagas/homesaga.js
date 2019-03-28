import api from '../api/apihome';
import {
    takeLatest,
    select,
    call,
    put,
} from 'redux-saga/effects';
import {
    GET_DATA_HOME,
    HOME_RESPONSE,
    HOME_REQUEST
} from '../actions/constants';
import {
    getDataHome,
    requestHome,
    responseHome
} from '../actions/home';

export function* homeEffect(){
    console.log("HOME 1");
    const {homereducer} = yield select()
    try {
        const data = yield call(api, homereducer.id, homereducer.name, homereducer.category, homereducer.token)
        console.log("HOME 2", data);
        yield put(responseHome())
    } catch (error) {
        console.log("error", error);
    }
}

export const homesagas = [takeLatest(HOME_REQUEST, homeEffect)]