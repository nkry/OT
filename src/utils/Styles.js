import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// fade animation makes /collections grid flash when sidebar is open?
export const PageWrapper = styled.div`
  position: absolute;
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
`;

export const ImageCell = styled.div`
  grid-column-start: ${props => props.start};
  grid-column-end: ${props => props.end};
  grid-row-start: ${props => props.row};
  position: relative;
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: ${props => props.visible ? 0 : 1};
    color: #000;
  }
  & img {
    width: 100%;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity .15s linear;
  }
  &:hover {
    cursor: pointer;
  }
`;

// - 5px is visual hack
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
  }
  & > ul {
    grid-column-start: 2;
    grid-column-end: 25;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    & > li {
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
    }
  }`;

// - 5px is visual hack
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
  & > ul {
    grid-column-start: 1;
    grid-column-end: 25;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    & > li {
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
    }
  }`;