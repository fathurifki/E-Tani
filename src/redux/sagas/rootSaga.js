import { all } from 'redux-saga/effects';
import { loginsagas } from '../sagas/loginsaga';
import { registersagas } from '../sagas/registersaga';
import { homesagas } from '../sagas/homesaga';
import { productsagas } from '../sagas/productsaga';

export default function* rootSaga() {
    yield all([
        ...loginsagas,
        ...registersagas,
        ...homesagas,
        ...productsagas
    ])
}