import React from "react";
import styled from "styled-components";

export const VideoBg = styled.div`
  position: relative;
  width: 100%;
  height: 100%; 
  overflow: hidden;
  background: #111;
  & iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0 none;
  }
`;

export const VideoBgWidth = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: -9999px;
  right: -9999px;
  margin: auto;
`;

export const VideoBgAspect = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  top: -9999px;
  bottom: -9999px;
  margin: auto;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

export const VideoBgMakeHeight = styled.div`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
`;

export const VideoBgHideControls = styled.div`
  box-sizing: content-box;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 55px 97.7777px;
  top: -55px; 
  left: -97.7777px;
`;

// .videobg iframe {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   border: 0 none;
// }