import {
    LOGIN_AUTHORIZATION,
    LOGIN_CLEAR,
    LOGIN_RESPONSE,
    LOGIN_REQUEST,
    LOGIN_OBTAINED
} from '../actions/constants';

const initialState = {
    email:'',
    password:'',
    loading: false,
    token:'',
    message: null,
}

const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTHORIZATION:
        return { ...state, [action.field]: action.values };
    case LOGIN_REQUEST:
        return { ...state, loading:true  }
    case LOGIN_OBTAINED:
        return { ...state, token: action.newAuthState }
    case LOGIN_RESPONSE:
        return { ...state, token:action.responselogin.data.token}
    case LOGIN_CLEAR:
        return { 
            ...state,
            email:'',
            password:''
        }
  default:
    return state
  }
};

export default reducer