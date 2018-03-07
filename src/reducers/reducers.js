import {
  SET_DEVICE_WIDTH,
  SET_CURRENT_PAGE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_MAX_LANDING_IMAGES,
  UPDATE_LANDING,
  SET_FEATURED_IMAGE,
  IMAGES_CACHED,
  SET_STOCKISTS_DIST,
  SET_CONTACT_DIST,
  REQUEST,
  RESPONSE,
  PAYLOAD
} from "../actions/actions";

export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case RESPONSE:
			return Object.assign({}, state, {
				loaded: true
			})
		case PAYLOAD:
			return Object.assign({}, state, {
				data: action.data
			})
    case SET_DEVICE_WIDTH:
      return Object.assign({}, state, {
        mobile: action.x <= 480 ? true : false
      });
    case SET_MAX_LANDING_IMAGES:
    return Object.assign({}, state, {
      maxLandingImages: action.x
    });
    case UPDATE_LANDING:
    return Object.assign({}, state, {
      landingLayout: state.landingLayout < state.maxLandingImages - 1 ? state.landingLayout += 1 : 0
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
