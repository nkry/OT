import axios from "axios";

const endpoint =
  process.env.NODE_ENV === "production"
    ? "http://dev.oveliatranstoto.nkry.info/cms/api/home"
    : "http://localhost:9000/api/home";

export const SET_DEVICE_WIDTH = "SET_DEVICE_WIDTH";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const SET_MAX_LANDING_IMAGES = "SET_MAX_LANDING_IMAGES";
export const UPDATE_LANDING = "UPDATE_LANDING";
export const SET_FEATURED_IMAGE = "SET_FEATURED_IMAGE";
export const SET_COLLECTIONS_NUMBER = "SET_COLLECTIONS_NUMBER";
export const SET_COLLECTION_LENGTH = "SET_COLLECTION_LENGTH";
export const UPDATE_COLLECTION_LOADED = "UPDATE_COLLECTION_LOADED";
export const CACHE_COLLECTION = "CACHE_COLLECTION";
export const SHOW_COLLECTION_TITLE = "SHOW_COLLECTION_TITLE";
export const HIDE_COLLECTION_TITLE = "HIDE_COLLECTION_TITLE";
export const SET_DYNAMIC_TITLE = "SET_DYNAMIC_TITLE";
export const SET_STOCKISTS_DIST = "SET_STOCKISTS_DIST";
export const SET_CONTACT_DIST = "SET_CONTACT_DIST";
export const COLLECTION_CACHED = "COLLECTION_CACHED";
export const REQUEST = "REQUEST";
export const RESPONSE = "RESPONSE";
export const PAYLOAD = "PAYLOAD";

export function checkDeviceWidth(x) {
  return {
    type: "SET_DEVICE_WIDTH",
    x
  };
}

export function setCollectionsNumber(x) {
  return {
    type: "SET_COLLECTIONS_NUMBER",
    x
  }
}

export function cacheCollection() {
  return {
    type: "CACHE_COLLECTION"
  }
}

export function setCollectionLength(x) {
  return {
    type: "SET_COLLECTION_LENGTH",
    x
  }
}

export function updateCollectionLoaded() {
  return {
    type: "UPDATE_COLLECTION_LOADED"
  }
}

export function showCollectionTitle() {
  return {
    type: "SHOW_COLLECTION_TITLE"
  }
}

export function setDynamicTitle(str) {
  console.log("set title to", str)
  return {
    type: "SET_DYNAMIC_TITLE",
    str
  }
}

export function hideCollectionTitle() {
  return {
    type: "HIDE_COLLECTION_TITLE"
  }
}


export function setMaxLanding(x) {
  return {
    type: "SET_MAX_LANDING_IMAGES",
    x
  }
}

export function updateLanding() {
  return {
    type: "UPDATE_LANDING"
  }
}

export function setCurrentPage(str) {
  console.log("set current page", str)
  return {
    type: "SET_CURRENT_PAGE",
    str
  };
}

export function setFeaturedImage(x) {
  return {
    type: "SET_FEATURED_IMAGE",
    x
  };
}

export function setStockistsDist(x) {
  return {
    type: "SET_STOCKISTS_DIST",
    x
  };
}

export function setContactDist(x) {
  return {
    type: "SET_CONTACT_DIST",
    x
  };
}


export function openSidebar() {
  return {
    type: "OPEN_SIDEBAR"
  };
}

export function closeSidebar() {
  return {
    type: "CLOSE_SIDEBAR"
  };
}


export function requestData() {
  return {
    type: "REQUEST"
  };
}

export function receiveData() {
  return {
    type: "RESPONSE"
  };
}

export function passData(data) {
  return {
    type: "PAYLOAD",
    data
  };
}

export function getData() {
  return function(dispatch) {
    dispatch(requestData());
    return axios
      .get(endpoint)
      .then(response => {
        let data = response.data
        let collections = data.children[0].posts
        let length = collections.length
        dispatch(setCollectionsNumber(length));
        dispatch(passData(response));
      })
      .then(response => {
        dispatch(receiveData());
      });
  };
}