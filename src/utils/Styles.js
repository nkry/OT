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

