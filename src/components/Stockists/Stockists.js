import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";

class Stockists extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // this works! -- check if this.props.stockistsOffset === false 
    // if it is, return a loader/w.e. and wait for the prop to update

    const StockistsWrapper = styled.div`
      top: 0;
      width: 50vw;
      position: absolute;
      left: ${this.props.stockistsOffset + 'px'};
     `;


    return (
      <PageWrapper landingGrid={false}>
        <StockistsWrapper>
          <div>Stockist here</div>
          <div>Stockist here</div>
          <div>Stockist here</div>
          <div>Stockist here</div>
          <div>Stockist here</div>
          <div>Stockist here</div>
          <div>Stockist here</div>
          <div>Stockist here</div>
        </StockistsWrapper>
      </PageWrapper>
    )
  }
}

export default Stockists;
