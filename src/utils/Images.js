import React from "react";
import styled from "styled-components";
import { breakpoints } from "./Breakpoints";
import { device } from "./Breakpoints";

// fallback for no grid support — iterate between 2 layouts of stacked vertically + stacked horizontally
export const ImageOne = styled.img`
  grid-column-start: 3;
  grid-column-end: 11;
  width: 100%;
  user-select: none;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    grid-column-start: none;
    grid-column-end: none;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 45%;
    width: auto;
    max-width: calc(100vw - 60px);
    background: red;
    margin-bottom: 1em;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 2;
    grid-column-end: 8;
  }
  @media ${device.mobileLandscape} {
    grid-column-start: 2;
    grid-column-end: 8;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageTwo = styled.img`
  grid-column-start: 17;
  grid-column-end: 25;
  grid-row-start: 2;
  width: 100%;
  justify-self: center;
  align-self: center;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-row-start: 3;
    grid-column-start: 6;
    grid-column-end: 12;
  }
  @media ${device.mobileLandscape} {
    grid-row-start: 3;
    grid-column-start: 6;
    grid-column-end: 12;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageThree = styled.img`
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 2;
  width: 100%;
  justify-self: center;
  align-self: center;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1em;
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 2;
    grid-column-end: 8;
  }
  @media ${device.mobileLandscape} {
    grid-row-start: 3;
    grid-column-start: 2;
    grid-column-end: 8;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageFour = styled.img`
  grid-column-start: 12;
  grid-column-end: 20;
  grid-row-start: 1;
  width: 100%;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 4;
    grid-column-end: 10;
  }
  @media ${device.mobileLandscape} {
    grid-column-start: 4;
    grid-column-end: 10;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageFive = styled.img`
  grid-column-start: 5;
  grid-column-end: 13;
  grid-row-start: 1;
  width: 100%;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1em;
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 3;
    grid-column-end: 9;
  }
  @media ${device.mobileLandscape} {
    grid-column-start: 3;
    grid-column-end: 9;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageSix = styled.img`
  grid-column-start: 5;
  grid-column-end: 13;
  grid-row-start: 3;
  width: 100%;
  justify-self: end;
  align-self: end;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 3;
    grid-column-end: 9;
  }
  @media ${device.mobileLandscape} {
    grid-column-start: 3;
    grid-column-end: 9;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageSeven = styled.img`
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 3;
  width: 100%;
  justify-self: end;
  align-self: end;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1em;
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 2;
    grid-column-end: 8;
  }
  @media ${device.mobileLandscape} {
    grid-column-start: 2;
    grid-column-end: 8;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageEight = styled.img`
  grid-column-start: 12;
  grid-column-end: 20;
  grid-row-start: 3;
  width: 100%;
  justify-self: end;
  align-self: end;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-row-start: 1;
    grid-column-start: 5;
    grid-column-end: 11;
  }
  @media ${device.mobileLandscape} {
    grid-row-start: 1;
    grid-column-start: 5;
    grid-column-end: 11;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageNine = styled.img`
  grid-column-start: 17;
  grid-column-end: 25;
  grid-row-start: 1;
  width: 100%;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1em;
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 6;
    grid-column-end: 12;
  }
  @media ${device.mobileLandscape} {
    grid-column-start: 6;
    grid-column-end: 12;
    width: auto;
    max-height: 100%;
  }
`;

export const ImageTen = styled.img`
  grid-column-start: 8;
  grid-column-end: 16;
  grid-row-start: 3;
  width: 100%;
  justify-self: end;
  align-self: end;
  user-select: none;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 45%;
    max-width: calc(100vw - 60px);
    width: auto;
    @media ${device.mobilePortrait} {
      margin-left: 20px;
    }
    @media ${device.mobileLandscape} {
      margin-left: 20px;
    }
  }
  @media ${device.mobilePortrait} {
    grid-column-start: 6;
    grid-column-end: 12;
  }
  @media ${device.mobileLandscape} {
    grid-column-start: 6;
    grid-column-end: 12;
    width: auto;
    max-height: 100%;
  }
`;


