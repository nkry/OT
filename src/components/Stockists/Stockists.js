import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { Markup } from "interweave";

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
      if (this.props.data.length === 0) {
        // loader
        return <div></div>
      }
      else {
        const stockists = this.props.data.data.content.stockists;
        // need to unify/globalize these variables/numbers
        let containerWith = (window.innerWidth - 50) - 15
        let stockistsWidth = containerWith - this.props.stockistsOffset
  
        // margin top should be equal to 2 line breaks
        const StockistsWrapper = styled.div`
          top: 0;
          width: ${stockistsWidth + 'px'};
          position: absolute;
          left: ${this.props.stockistsOffset + 'px'};
          & a {
            color: #000;
            text-decoration: none;
          }
         `;
        
        // could get rid of this
        const StockistsTitle = styled.div`
          text-transform: uppercase;
          `;
          
        return (
          <PageWrapper landingGrid={false}>
            <StockistsWrapper>
              <Markup content={stockists}/>
            </StockistsWrapper>
          </PageWrapper>
        )
      }
    }
  }
}

export default Stockists;
