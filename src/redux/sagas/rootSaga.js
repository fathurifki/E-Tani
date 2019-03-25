import { all } from 'redux-saga/effects';
import { loginsagas } from '../sagas/loginsaga';

export default function* rootSaga() {
    yield all([
        ...loginsagas,
    ])
}