import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage
}

const sagaMiddleWare = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)


export const persistor = persistStore(store)

export default store