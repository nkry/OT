import {
  SET_DEVICE_WIDTH,
  SET_CURRENT_PAGE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} from "../actions/actions";

export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DEVICE_WIDTH:
      return Object.assign({}, state, {
        mobile: action.x <= 480 ? true : false
      });
     case SET_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.str
      });
    case OPEN_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpen: true
      });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpen: false
      });
    default:
      return state;
  }
};
