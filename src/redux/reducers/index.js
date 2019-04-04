import { combineReducers } from 'redux';

import loginreducer from './loginReducer';
import registerreducer from './registerReducer';
import homereducer from './homeReducer';
import productreducer from './productReducer';

export default combineReducers({
    loginreducer,
    registerreducer,
    homereducer,
    productreducer
})