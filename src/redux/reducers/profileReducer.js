import {
    GET_DATA_PROFILE,
    REQUEST_PROFILE,
    EDIT_DATA_PROFILE,
    EDIT_REQUEST_PROFILE
} from '../actions/constants';

const initialState = {
    item:[],
    isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_DATA_PROFILE:
    return { ...state, item: action.dataProfile};
    case REQUEST_PROFILE:
    return { ...state, isLoading: false}
    case EDIT_DATA_PROFILE:
    return { ...state, [action.field]: action.values}
    case EDIT_REQUEST_PROFILE:
    return { ...state, isLoading: false}
  default:
    return state
  }
};
