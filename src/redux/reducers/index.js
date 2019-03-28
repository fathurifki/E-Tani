import { combineReducers } from 'redux';

import loginreducer from './loginReducer';
import registerreducer from './registerReducer';
import homereducer from './homeReducer';

export default combineReducers({
    loginreducer,
    registerreducer,
    homereducer
})