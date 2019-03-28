import {
    REGISTER_ENROLLMENT,
    REGISTER_REQUEST,
    REGISTER_RESPONSE
} from '../actions/constants';

const initialState = {
    fullname:'',
    email:'',
    password:'',
    isLoading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

  case REGISTER_ENROLLMENT:
    return { ...state, [action.field]: action.values };
  case REGISTER_REQUEST:
    return { ...state, isLoading: true}
  case REGISTER_RESPONSE:
    return { ...state, isLoading: true}
  default:
    return state
  }
};

export default reducer