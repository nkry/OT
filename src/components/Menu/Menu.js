import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuWrapperOne } from "../../utils/Styles";
import { MenuWrapperTwo } from "../../utils/Styles";

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
    
    // title itself will be dynamic  
    let collectionTitle = <div>SPRING SUMMER <span id="negative--kern">’18</span></div>;
    // check entries/children for collection
    let multipleCollections = false
    // need to check string in title + check if letter 'X' is first 
    let titleContainsX = true

    if (!multipleCollections) {
      if (titleContainsX) {
        return (
          <MenuWrapperOne>
            <li onClick={this.handleMenuClick.bind(this, 'collection')} className="collections--close"><Link to="/collection">X</Link></li>
            <ul>
              <li onClick={this.handleMenuClick.bind(this, 'collection')}><Link to="/collection">{collectionTitle}</Link></li>
              <li ref="stockistsLink" id="stockists--link" onClick={this.handleMenuClick.bind(this, 'stockists')}><Link to="/stockists">STOCKISTS</Link></li>
              <li ref="contactLink" id="contact--link" onClick={this.handleMenuClick.bind(this, 'contact')}><Link to="/contact">CONTACT</Link></li>
              <li onClick={this.handleMenuClick.bind(this, 'content')}><Link to="/content">CONTENT</Link></li>
            </ul>
          </MenuWrapperOne>
        )
      }
    }
    else {
      return (
        <MenuWrapperTwo>
          <ul>
            <li onClick={this.handleMenuClick.bind(this, 'collection')}><Link to="/collection">COLLECTIONS</Link></li>
            <li ref="stockistsLink" id="stockists--link" onClick={this.handleMenuClick.bind(this, 'stockists')}><Link to="/stockists">STOCKISTS</Link></li>
            <li ref="contactLink" id="contact--link" onClick={this.handleMenuClick.bind(this, 'contact')}><Link to="/contact">CONTACT</Link></li>
            <li onClick={this.handleMenuClick.bind(this, 'content')}><Link to="/content">CONTENT</Link></li>
          </ul>
        </MenuWrapperTwo>
      )
    }
  }
}

export default Menu;
