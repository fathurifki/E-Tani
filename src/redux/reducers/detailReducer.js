import {
    REQUEST_DATA_DETAIL_PRODUCT,
    RESPONSE_DETAIL_PRODUCT,
    GET_DETAIL_PRODUCT,
    ADD_PRODUCT
} from '../actions/constants';

const initialState = {
    item:[],
    isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA_DETAIL_PRODUCT:
    return { ...state , isLoading: true};
    case RESPONSE_DETAIL_PRODUCT:
    return { ...state, isLoading: true }
    case GET_DETAIL_PRODUCT:
    return { ...state, item: action.getData }
    case ADD_PRODUCT:
    return { ...state, item: action.addDataCart}

  default:
    return state
  }
};
