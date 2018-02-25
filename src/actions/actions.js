import axios from "axios";

const base =
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


// export function passRootData(data) {
//   return {
//     type: "PASS_ROOT_DATA",
//     data
//   };
// }

// export function getPageData(slug) {
//   return function(dispatch) {
//     // console.log("make page request")
//     return axios.get(`${base + "/index/" + slug}`).then(response => {
//       dispatch(passProjectData(response));
//     });
//   };
// }

// export function getData(slug) {
//   return function(dispatch) {
//     // console.log("make root request")
//     return axios.get(base).then(response => {
//       dispatch(passRootData(response));
//     });
//   };
// }
