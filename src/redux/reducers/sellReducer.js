import {
    ASSIGN_DATA_SELL,
    REQUEST_SELL
} from '../actions/constants';

const initialState = {
    item:[],
    isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ASSIGN_DATA_SELL:
    return { ...state, [action.field]: action.input };
    case REQUEST_SELL:
    return { ...state, isLoading: true}
    default:
    return state
  }
};
