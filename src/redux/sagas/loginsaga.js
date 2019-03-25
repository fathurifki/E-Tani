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
    LOGIN_REQUEST
} from '../actions/constants';
import {
    clearlogin,
    loginAuthorization,
    loginobtain,
    request
} from '../actions/login';
export function* loginEffect(){
    console.log('Connect');

}

export const loginsagas = [takeLatest(LOGIN_REQUEST, loginEffect)]