import api from '../api/apilogin';
import {
    call,
    put,
    takeLatest,
    select
} from 'redux-saga/effects';
import {
    LOGIN_AUTHORIZATION,
    LOGIN_CLEAR,
    LOGIN_OBTAINED,
    LOGIN_REQUEST,
    LOGIN_RESPONSE
} from '../actions/constants';
import {
    clearlogin,
    loginAuthorization,
    loginobtain,
    loginrequest,
    response
} from '../actions/login';
import NavigationService from '../NavigationService';

export function* loginEffect(){
    const {loginreducer} = yield select()
    try {
        const data = yield call(api, loginreducer.email, loginreducer.password)
        console.log("SAGA 2", data);
        yield put(response(data))
        NavigationService.navigate('home')
    } catch (error) {
        console.log("error", error);
    }
}

export const loginsagas = [takeLatest(LOGIN_REQUEST, loginEffect)]