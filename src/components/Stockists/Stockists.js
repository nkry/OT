import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";

class Stockists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.stockistsOffset === false) {
      return (
        false
      )
    }
    else {
      
      // need to unify/globalize these variables/numbers
      let containerWith = (window.innerWidth - 50) - 15
      let stockistsWidth = containerWith - this.props.stockistsOffset

      const StockistsWrapper = styled.div`
        top: 0;
        width: ${stockistsWidth + 'px'};
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
}

export default Stockists;
