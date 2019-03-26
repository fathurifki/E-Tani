import {
    GET_DATA_HOME,
    HOME_REQUEST
} from '../actions/constants';

const initialState = {
    item:[],
    total_shop:'',
    isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case GET_DATA_HOME:
    return { ...state, total_shop: action.getDataHome , item: action.getDataHome };
  case HOME_REQUEST:
    return { ...state, isLoading: true}
  default:
    return state
  }
};
