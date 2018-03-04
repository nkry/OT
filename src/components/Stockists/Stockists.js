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
      
      // render with <Markup/>
      return (
        <PageWrapper landingGrid={false}>
          <StockistsWrapper>
            <div>UNITED KINGDOM</div>
            <div><a href="http://london.doverstreetmarket.com/" target="_blank">Dover Street Market London</a></div>
            <div><a href="http://www.machine-a.com/" target="_blank">Machine-A</a></div>
            <br/>
            <div>USA</div>
            <div><a href="https://www.communitie.net/" target="_blank">Communitie</a></div>
            <div><a href="http://newyork.doverstreetmarket.com/" target="_blank">Dover Street Market New York</a></div>
            <div><a href="https://www.hlorenzo.com/" target="_blank">H-Lorenzo</a></div>
            <div><a href="https://lindadresner.com/" target="_blank">Linda Dresner</a></div>
            <div><a href="https://mnzstore.com/" target="_blank">Maryam Nassir Zadeh</a></div>
            <br/>
            <div>JAPAN</div>
            <div><a href="http://ginza.doverstreetmarket.com/" target="_blank">Dover Street Market Ginza</a></div>
            <div><a href="http://isetan.mistore.jp/store" target="_blank">Isetan</a></div>
            <br/>
            <div>SINGAPORE</div>
            <div><a href="http://singapore.doverstreetmarket.com/" target="_blank">Dover Street Market Singapore</a></div>
            <br/>
            <div>KOREA</div>
            <div><a href="http://www.boontheshop.com/" target="_blank">Boon the Shop</a></div>
            <br/>
            <div>HONG KONG</div>
            <div><a href="http://www.joyce.com/" target="_blank">Joyce</a></div>
            <div><a href="http://www.shinegroup.com.hk/en" target="_blank">Shine</a></div>
            <br/>
            <div>ONLINE</div>
            <div><a href="https://www.ssense.com/" target="_blank">SSENSE</a></div>
          </StockistsWrapper>
        </PageWrapper>
      )
    }
  }
}

export default Stockists;
