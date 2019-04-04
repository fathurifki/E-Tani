import {
    GET_DATA_HOME,
    HOME_REQUEST,
    HOME_RESPONSE,
    DETAIL_PRODUCT
} from '../actions/constants';

const initialState = {
    item:[],
    total_shop:'',
    isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_HOME:
    return { ...state, item: action.getDataHome};
    case HOME_REQUEST:
    return { ...state, isLoading: true};
    case DETAIL_PRODUCT:
    return { ...state, item: action.productdetail};
    default:
      return state
  }
};
