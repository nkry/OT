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

  render() {
  const MenuWrapper = styled.div`
    left: 20px;
    width: calc(100% - 90px);
    position: fixed;
    margin: 0;
    height: 50px;
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
    
    let collectionTitle = this.props.currentPage === "collection" ? "X SPRING/SUMMER 2018" : "COLLECTION";

    return (
      <MenuWrapper>
        <ul>
          <li onClick={this.handleMenuClick.bind(this, 'collection')}><Link to="/collection">{collectionTitle}</Link></li>
          <li onClick={this.handleMenuClick.bind(this, 'stockists')}><Link to="/stockists">STOCKISTS</Link></li>
          <li onClick={this.handleMenuClick.bind(this, 'contact')}><Link to="/contact">CONTACT</Link></li>
          <li onClick={this.handleMenuClick.bind(this, 'content')}><Link to="/content">CONTENT</Link></li>
        </ul>
      </MenuWrapper>
    )
  }
}

export default Menu;
