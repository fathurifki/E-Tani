import {
    GET_DATA_PRODCUT,
    REQUEST_DATA_PRODUCT
} from '../actions/constants';

const initialState = {
    item:[],
    isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_DATA_PRODCUT:
    return { ...state, item: action.dataProduct };
    case REQUEST_DATA_PRODUCT:
    return { ...state, isLoading: true };
  default:
    return state
  }
};
