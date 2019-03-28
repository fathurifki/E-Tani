import api from '../api/apiregister';
import {
    call,
    put,
    takeLatest,
    select
} from 'redux-saga/effects';
import {
    REGISTER_ENROLLMENT,
    REGISTER_RESPONSE,
    REGISTER_REQUEST
} from '../actions/constants';
import {
    fillAdmission,
    requestRegister,
    responseRegister
} from '../actions/register';
import NavigationService from '../NavigationService';

export function* registerEffect(){
    const {registerreducer} = yield select()
    try {
        const data = yield call(api, registerreducer.email, registerreducer.password)
        yield put(responseRegister(data))
    } catch (error) {
        console.log("error", error);
    }
}

export const registersagas = [takeLatest(REGISTER_REQUEST, registerEffect)]