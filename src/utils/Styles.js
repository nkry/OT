import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from './Rules'
import { device } from './Rules'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// was max-width: 480px standard query
export const PageWrapper = styled.div`
  position: ${props => (props.landingGrid ? "absolute" : "relative")};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: ${props => (props.landingGrid ? "0 10px" : "10px 10px")};
  grid-column-start: 1;
  grid-column-end: 25;
  grid-row-start: 1;
  grid-template-rows ${props => (props.landingGrid ? "repeat(3, 33.3%)" : false)};
  grid-auto-rows: min-content;
  display: grid;
  height: 100%;
  animation: 1s ${fadeIn} ease-out;
  @supports not (display: grid) {
    position: relative;
  }
  @media ${device.mobilePortrait} {  
    position: ${props => (props.landingGrid ? "absolute" : "relative")};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-start: 1;
    grid-column-end: 13;
  }
  @media ${device.mobileLandscape} {  
    width: 100%;
    position: ${props => (props.landingGrid ? "absolute" : "relative")};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const GradientWrapper = styled.div`
  z-index: 2;
  left: 20px;
  width: calc(100% - 90px);
  background: white;
  height: 80px;
  position: fixed;
  top: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  @media ${device.mobilePortrait} {  
    width: 100vw;
  }
  @media ${device.mobileLandscape} {  
    width: 100vw;
  }
`;

export const ImageCell = styled.div`
  grid-column-start: ${props => props.start};
  grid-column-end: ${props => props.end};
  grid-row-start: ${props => props.row};
  position: relative;
  @supports not (display: grid) {
    width: 30vw;
    max-width: 540px;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.5em;
    @media ${device.mobilePortrait} { 
      margin-left: 30px;
      left: 0;
      transform: translateX(0);
      width: calc(100% - 30px);
      pointer-events: none;
    }
  }
  @media ${device.mobilePortrait} {  
    position: relative;
    grid-column-start: 2;
    grid-column-end: 13;
    pointer-events: none;
  }
  @media ${device.mobileLandscape} {  
    position: relative;
    grid-column-start: 4;
    grid-column-end: 10;
    pointer-events: none;
  }
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: ${props => (props.visible ? 0 : 1)};
    color: #000;
  }
  & img {
    width: 100%;
    opacity: ${props => (props.visible ? 1 : 0)};
    transition: opacity .15s linear};
  }
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-bottom: .75em;
  }
`;


// - 5px is visual hack
// 100vw - 40px is for 20px margin on mobile centered
// export const MenuWrapperOne = styled.div`
//   left: 20px;
//   width: calc(100% - 90px);
//   position: fixed;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-column-start: 1;
//   grid-column-end: 25;
//   grid-row-start: 1;
//   grid-gap: 10px;
//   display: grid;
//   margin: 0;
//   height: 50px;
//   @media ${device.mobilePortrait} {  
//     width: calc(100vw - 40px);
//   }
//   z-index: 3;
//   & * > #negative--kern {
//     letter-spacing: -0.065em;
//   }
//   & .collections--close {
//     margin: -5px 0 0 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex: 0 1;
//     justify-content: space-between;
//     white-space: no-wrap;
//     align-items: center;
//     & a {
//       color: black;
//       text-decoration: none;
//     }
//     @supports not (display: grid) {
//       display: none;
//     }
//   }
//   & .list {
//     grid-column-start: 2;
//     grid-column-end: 25;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0;
//     @supports not (display: grid) {
//       width: 100%;
//     }
//     @media ${device.mobilePortrait} {  
//       width: 100%;
//     }
//     & li {
//       margin: -5px 0 0 0;
//       padding: 0;
//       flex: 0 1;
//       display: inline;
//       white-space: nowrap;
//       list-style: none;
//       & a {
//         color: black;
//         text-decoration: none;
//       }
//       &:first-child {
//       }
//       @supports not (display: grid) {
//         flex: none;
//       }
//       @media ${device.mobilePortrait} {  
//         white-space: wrap;
//       }
//     }
//   }`;

// - 5px is visual hack
// export const MenuWrapperTwo = styled.div`
//   left: 20px;
//   width: calc(100% - 90px);
//   position: fixed;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-column-start: 1;
//   grid-column-end: 25;
//   grid-row-start: 1;
//   grid-gap: 10px;
//   display: grid;
//   margin: 0;
//   height: 50px;
//   z-index: 3;
//   & .list {
//     grid-column-start: 1;
//     grid-column-end: 25;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0;
//     @supports not (display: grid) {
//       width: calc(100% - 50px);
//     }
//     @media ${device.mobilePortrait} {  
//       width: 100%;
//     }
//     & li {
//       margin: -5px 0 0 0;
//       padding: 0;
//       flex: 0 1;
//       display: inline;
//       white-space: nowrap;
//       list-style: none;
//       @supports not (display: grid) {
//         flex: none;
//       }
//       & a {
//         color: black;
//         text-decoration: none;
//       }
//     }
//   }`;

export const CollectionTitle = styled.div`
  bottom: 0;
  position: fixed;
  color: black;
  opacity: ${props => (props.showTitle ? 1 : 0)};
  margin-bottom: 15px;
  transition: opacity .15s linear;
`;

export const VideoCell = styled.div`
  position: relative;
  grid-column-start: 10;
  grid-column-end: 25;
  padding-bottom: 56.25%;
  margin-bottom: 20px;
  padding-top: 25px;
  height: 0;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 50vw;
    margin: -2em 0 1em 0;
    @media ${device.mobilePortrait} {  
      left: 0;
      transform: translateX(0);
      margin-left: 30px;
      width: calc(100% - 30px);
    }
  }
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media ${device.mobilePortrait} {  
   margin-bottom: 0;
   grid-column-start: 2;
   grid-column-end: 13;
  }
`;



export const MenuWrapperOne = styled.div`
  left: 20px;
  width: calc(100% - 90px);
  position: fixed;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-start: 1;
  grid-column-end: 25;
  grid-row-start: 1;
  grid-gap: 10px;
  display: grid;
  margin: 0;
  height: 50px;
  @media ${device.mobilePortrait} {  
    width: calc(100vw - 40px);
  }
  z-index: 3;
  & * > #negative--kern {
    letter-spacing: -0.065em;
  }
  & .collections--close {
    margin: -5px 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex: 0 1;
    justify-content: space-between;
    white-space: no-wrap;
    align-items: center;
    & a {
      color: black;
      text-decoration: none;
    }
    @supports not (display: grid) {
      display: none;
    }
  }
}`;

export const MenuWrapperTwo = styled.div`
  left: 20px;
  width: calc(100% - 90px);
  position: fixed;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-start: 1;
  grid-column-end: 25;
  grid-row-start: 1;
  grid-gap: 10px;
  display: grid;
  margin: 0;
  height: 50px;
  z-index: 3;
}`;

export const MenuList = styled.ul`
  grid-column-start: 2;
  grid-column-end: 25;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  @supports not (display: grid) {
    width: 100%;
  }
  @media ${device.mobilePortrait} {  
    width: 100%;
  }
  & li {
    margin: -5px 0 0 0;
    padding: 0;
    flex: 0 1;
    display: inline;
    white-space: nowrap;
    list-style: none;
    & a {
      color: black;
      text-decoration: none;
    }
    &:first-child {
    }
    @supports not (display: grid) {
      flex: none;
    }
    @media ${device.mobilePortrait} {  
      white-space: wrap;
    }
  }
`;
