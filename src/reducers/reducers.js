import {
  SET_DEVICE_WIDTH,
  SET_CURRENT_PAGE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  UPDATE_LANDING,
  SET_FEATURED_IMAGE,
  IMAGES_CACHED,
  SET_STOCKISTS_DIST,
  SET_CONTACT_DIST
} from "../actions/actions";

export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DEVICE_WIDTH:
      return Object.assign({}, state, {
        mobile: action.x <= 480 ? true : false
      });
    case UPDATE_LANDING:
    let max = 4
    return Object.assign({}, state, {
      landingLayout: state.landingLayout < max ? state.landingLayout += 1 : 0
    });
    case SET_CURRENT_PAGE:
      return Object.assign({}, state, { currentPage: action.str });
    case SET_FEATURED_IMAGE:
      return Object.assign({}, state, { currentFeature: action.x });
    case SET_STOCKISTS_DIST:
      return Object.assign({}, state, { stockistsOffset: action.x });
    case SET_CONTACT_DIST:
      return Object.assign({}, state, { contactOffset: action.x });
    case OPEN_SIDEBAR:
      return Object.assign({}, state, { sidebarOpen: true });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, { sidebarOpen: false });
    default:
      return state;
  }
};
