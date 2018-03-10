import React from "react";
import styled from "styled-components";

// fallback for no grid support — iterate between 2 layouts of stacked vertically + stacked horizontally
export const ImageOne = styled.img`
  grid-column-start: 3;
  grid-column-end: 11;
  width: 100%;
  user-select: none;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity .15s linear;
  @supports not (display: grid) {
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 45vh;
    width: auto;
    margin-bottom: 1em;
  }
  @media (max-width: 480px) {
    grid-column-start: 3;
    grid-column-end: 7;
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
    max-height: 45vh;
    width: auto;
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
    max-height: 45vh;
    width: auto;
    margin-bottom: 1em;
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
    max-height: 45vh;
    width: auto;
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
    max-height: 45vh;
    width: auto;
    margin-bottom: 1em;
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
    max-height: 45vh;
    width: auto;
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
    max-height: 45vh;
    width: auto;
    margin-bottom: 1em;
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
    max-height: 45vh;
    width: auto;
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
    max-height: 45vh;
    width: auto;
    margin-bottom: 1em;
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
    max-height: 45vh;
    width: auto;
  }
`;


