import axios from "axios";

const endpoint =
  process.env.NODE_ENV === "production"
    ? "http://dev.oveliatranstoto.nkry.info/cms/api/home"
    : "http://localhost:9000/api/home";

export const SET_DEVICE_WIDTH = "SET_DEVICE_WIDTH";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const UPDATE_LANDING = "UPDATE_LANDING";
export const SET_FEATURED_IMAGE = "SET_FEATURED_IMAGE";
export const SET_STOCKISTS_DIST = "SET_STOCKISTS_DIST";
export const SET_CONTACT_DIST = "SET_CONTACT_DIST";
export const IMAGES_CACHED = "IMAGES_CACHED";
export const REQUEST = "REQUEST";
export const RESPONSE = "RESPONSE";
export const PAYLOAD = "PAYLOAD";

export function checkDeviceWidth(x) {
  return {
    type: "SET_DEVICE_WIDTH",
    x
  };
}

export function updateLanding() {
  return {
    type: "UPDATE_LANDING"
  }
}

export function setCurrentPage(str) {
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
        console.log("data", response);
        dispatch(passData(response));
      })
      .then(response => {
        dispatch(receiveData());
      });
  };
}