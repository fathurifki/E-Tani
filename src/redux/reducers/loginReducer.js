import {
    LOGIN_AUTHORIZATION,
    LOGIN_CLEAR,
    LOGIN_RESPONSE,
    LOGIN_REQUEST
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
    case LOGIN_RESPONSE:
        return { 
        ...state,
        token: action.token,
        email: action.email,
        password: action.password
    }
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