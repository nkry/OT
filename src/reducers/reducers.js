import {
  SET_DEVICE_WIDTH,
  SET_CURRENT_PAGE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_MAX_LANDING_IMAGES,
  UPDATE_LANDING,
  SET_FEATURED_IMAGE,
  SET_COLLECTIONS_NUMBER,
  SHOW_COLLECTION_TITLE,
  HIDE_COLLECTION_TITLE,
  SET_DYNAMIC_TITLE,
  UPDATE_COLLECTION_LOADED,
  CACHE_COLLECTION,
  SET_COLLECTION_LENGTH,
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
    case SET_COLLECTIONS_NUMBER: 
      return Object.assign({}, state, {
        numberOfCollections: action.x
      });
    case SET_COLLECTION_LENGTH: 
      return Object.assign({}, state, {
        collectionLength: action.x
      });
    case UPDATE_COLLECTION_LOADED:
      return Object.assign({}, state, {
        collectionLoaded: state.collectionLoaded += 1
      });
    case CACHE_COLLECTION: 
      return Object.assign({}, state, {
        collectionCached: true
      });
    case SHOW_COLLECTION_TITLE: 
      return Object.assign({}, state, {
        showCollectionTitle: true
      });
    case HIDE_COLLECTION_TITLE: 
      return Object.assign({}, state, {
        showCollectionTitle: false
      });
    case SET_DYNAMIC_TITLE:
      return Object.assign({}, state, {
        dynamicTitle: action.str
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
