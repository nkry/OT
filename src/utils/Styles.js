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