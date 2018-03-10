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

  setElementPos() {
    const self = this;
    let stockistsLink = this.refs.stockistsLink;
    let stockistOffset = stockistsLink.offsetLeft;
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

  componentDidMount() {
    this.setElementPos()
  }

  // going to try to acheive desired effect with componentwillreceiveprops
  componentWillReceiveProps(nextProps) {
    const self = this 
    if (nextProps.numberOfCollections !== this.props.numberOfCollections) {
      setTimeout(() => {
        self.setElementPos();
      }, 500)
    }
  }

  render() {
      // title itself will be dynamic  
      let singleTitle = this.props.mobile ? <div>S/S <span id="negative--kern">’18</span></div> : <div>SPRING/SUMMER <span id="negative--kern">’18</span></div>
      let collectionsTitle = "COLLECTIONS"

      if (this.props.data.length === 0) {
        // rendering original wrap in for now — may need to change this in future
        return (
          <MenuWrapperOne>
            <li onClick={this.handleMenuClick.bind(this, 'collection')} className="collections--close"><Link to="/collection">X</Link></li>
            <ul>
              <li onClick={this.handleMenuClick.bind(this, 'collection')}><Link to="/collection">{singleTitle}</Link></li>
              <li ref="stockistsLink" id="stockists--link" onClick={this.handleMenuClick.bind(this, 'stockists')}><Link to="/stockists">STOCKISTS</Link></li>
              <li ref="contactLink" id="contact--link" onClick={this.handleMenuClick.bind(this, 'contact')}><Link to="/contact">CONTACT</Link></li>
              <li onClick={this.handleMenuClick.bind(this, 'content')}><Link to="/content">CONTENT</Link></li>
            </ul>
          </MenuWrapperOne>
        )
      }
      else {
        let multipleCollections = this.props.numberOfCollections > 1 ? true : false;
        if (!multipleCollections) {
          return (
            <MenuWrapperOne>
              <li onClick={this.handleMenuClick.bind(this, 'collection')} className="collections--close"><Link to="/collection">X</Link></li>
              <ul>
                <li onClick={this.handleMenuClick.bind(this, 'collection')}><Link to="/collection">{singleTitle}</Link></li>
                <li ref="stockistsLink" id="stockists--link" onClick={this.handleMenuClick.bind(this, 'stockists')}><Link to="/stockists">STOCKISTS</Link></li>
                <li ref="contactLink" id="contact--link" onClick={this.handleMenuClick.bind(this, 'contact')}><Link to="/contact">CONTACT</Link></li>
                <li onClick={this.handleMenuClick.bind(this, 'content')}><Link to="/content">CONTENT</Link></li>
              </ul>
            </MenuWrapperOne>
          )
        }
        else {
          return (
            <MenuWrapperTwo>
              <ul>
                <li onClick={this.handleMenuClick.bind(this, 'collection')}><Link to="/collection">{collectionsTitle}</Link></li>
                <li ref="stockistsLink" id="stockists--link" onClick={this.handleMenuClick.bind(this, 'stockists')}><Link to="/stockists">STOCKISTS</Link></li>
                <li ref="contactLink" id="contact--link" onClick={this.handleMenuClick.bind(this, 'contact')}><Link to="/contact">CONTACT</Link></li>
                <li onClick={this.handleMenuClick.bind(this, 'content')}><Link to="/content">CONTENT</Link></li>
              </ul>
            </MenuWrapperTwo>
          )
        }
      }
  }
}

export default Menu;
