import React, { Component } from "react";
import styled, { css } from "styled-components";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    const self = this;
    // --- make blue a global variable ---
    this.sidebar = styled.div`
      width: calc(100vw - 45px);
      height: 100vh;
      background: #0b017a;
      position: fixed;
      z-index: 11;
      transition: left 1s ease-out;
      left: ${props => (self.props.sidebarOpen ? "45px" : "calc(100vw - 45px)")};`;
    this.sidebarText = styled.div`
      color: white;
      font-size: 1em;
    `;
  }

  handleOpenClick() {
    // temp 
    if (!this.props.sidebarOpen) {
      this.props.action.openSidebar()
    }
    else {
      this.props.action.closeSidebar()
    }
  }

  render() {
    const self = this;

    const FeaturedImage = styled.img`
      max-height: 90%;
      max-width: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      `;



    const base = process.env.PUBLIC_URL + "/assets/collection/";
    // static for now 
    const images = [
      base + "collection-1.jpg", 
      base + "collection-2.jpg",
      base + "collection-3.jpg",
      base + "collection-4.jpg",
      base + "collection-5.jpg",
      base + "collection-6.jpg",
      base + "collection-7.jpg",
      base + "collection-8.jpg",
      base + "collection-9.jpg",
      base + "collection-10.jpg",
      base + "collection-11.jpg",
      base + "collection-12.jpg",
      base + "collection-13.jpg",
      base + "collection-14.jpg",
      base + "collection-15.jpg",
      base + "collection-16.jpg",
      base + "collection-17.jpg",
      base + "collection-18.jpg",
      base + "collection-19.jpg",
      base + "collection-20.jpg",
    ];

    // to apply transitions, styles must be outside of render method
    const Sidebar = this.sidebar;
    const SidebarText = this.sidebarText;
    let featuredNum = "(" + " " + this.props.currentFeature + " " + ")"

    return (
      <Sidebar onClick={this.handleOpenClick.bind(this)} >
        <SidebarText>{featuredNum}</SidebarText>
        <FeaturedImage src={images[this.props.currentFeature - 1]} />
      </Sidebar>
    );
  }
}

export default Sidebar;
