import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  handleMenuClick(page) {
     this.props.action.setCurrentPage(page);
     if (page === 'collection' && this.props.sidebarOpen) {
       this.props.action.closeSidebar()
     }
  }

  componentDidMount() {
    const self = this
    let stockistsLink = this.refs.stockistsLink
    let stockistOffset = stockistsLink.offsetLeft
    let contactLink = this.refs.contactLink;
    let contactOffset = contactLink.offsetLeft;

    this.props.action.setStockistsDist(stockistOffset);
    this.props.action.setContactDist(contactOffset);

    let ww = window.innerWidth;
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      // this doesn't work everytime?
      resizeTimer = setTimeout(() => {
        let newStockistsLink = this.refs.stockistsLink;
        let newStockistsOffset = newStockistsLink.offsetLeft;
        let newContactLink = this.refs.contactLink;
        let newContactOffset = newContactLink.offsetLeft;
        self.props.action.setStockistsDist(newStockistsOffset);
        self.props.action.setContactDist(newContactOffset);
      }, 250);
    });
  }

  render() {
  const MenuWrapper = styled.div`
    left: 20px;
    width: calc(100% - 90px);
    position: fixed;
    margin: 0;
    height: 50px;
    z-index: 3;
    & > ul {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      padding: 0;
      & > li {
        margin: 0;
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

    // --- todo ---
    // calculate width of 'COLLECTION' + apply same style to spring/summer?
    // could do this, + add a span to wrap/seperate elements so SS '18 could be right aligned?
    let collectionTitle = this.props.currentPage === "collection" ? "X" : "COLLECTION";

    return (
      <MenuWrapper>
        <ul>
          <li onClick={this.handleMenuClick.bind(this, 'collection')}><Link to="/collection">{collectionTitle}</Link></li>
          <li ref="stockistsLink" id="stockists--link" onClick={this.handleMenuClick.bind(this, 'stockists')}><Link to="/stockists">STOCKISTS</Link></li>
          <li ref="contactLink" id="contact--link" onClick={this.handleMenuClick.bind(this, 'contact')}><Link to="/contact">CONTACT</Link></li>
          <li onClick={this.handleMenuClick.bind(this, 'content')}><Link to="/content">CONTENT</Link></li>
        </ul>
      </MenuWrapper>
    )
  }
}

export default Menu;
