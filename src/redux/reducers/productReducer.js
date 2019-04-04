import {
    GET_DATA_PRODCUT,
    REQUEST_DATA_PRODUCT,
    PARAM_PRODUCT,
    REQUEST_PRODUCT
} from '../actions/constants';

const initialState = {
    item:[],
    isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case PARAM_PRODUCT:
    return { ...state, item: action.paramProduct}
    case GET_DATA_PRODCUT:
    return { ...state, item: action.getProduct };
    case REQUEST_DATA_PRODUCT:
    return { ...state, item: action.responseProduct, isLoading: true };
    case REQUEST_PRODUCT:
    return { ...state, isLoading: true };
  default:
    return state
  }
};
