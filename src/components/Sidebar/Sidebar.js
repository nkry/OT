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
      background: #fff;
      position: fixed;
      z-index: 11;
      transition: left 1s ease-out;
      left: ${props =>
        self.props.sidebarOpen ? "45px" : "calc(100vw - 45px)"};
    `;
    this.sidebarText = styled.div`
      position: absolute;
      color: white;
      font-weight: lighter;
      display: inline-block;
      top: 50%;
      transform: translateY(-50%) translateX(-50%) rotateZ(-90deg);
      margin-left: -3px;
      left: 25px;
      height: 45px;
      width: 100%;
      text-align: center;
      background: red;
      background: #0b017a;
      & span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &:hover {
        cursor: pointer;
      }
    `;
  }

  componentDidMount() {
     window.addEventListener("keydown", (event) => {
      if (event.keyCode == 27 && this.props.sidebarOpen) {
        this.props.action.closeSidebar()
      }
      else if (event.keyCode == 37 && this.props.sidebarOpen || event.keyCode == 39 && this.props.sidebarOpen) {
        // length needs to be dynamic; .length of files in arr
        let length = 20;
        let nextImage = this.props.currentFeature < length ? this.props.currentFeature + 1 : 1;
        let prevImage = this.props.currentFeature > 1 ? this.props.currentFeature - 1 : length;
        this.props.action.setFeaturedImage(prevImage);
        event.keyCode == 37 ? this.props.action.setFeaturedImage(prevImage) : this.props.action.setFeaturedImage(nextImage);
      }
     });
  }

  handleOpenClick() {
    let pathname = this.props.location.pathname 
    if (pathname === '/content') {
      return false
    }
    else {
      if (!this.props.sidebarOpen) {
        this.props.action.openSidebar();
      } else {
        this.props.action.closeSidebar();
      }
    }
  }

  handleCloseClick() {
    this.props.action.closeSidebar();
  }

  handleFeatureClick(event) {
    let ww = window.innerWidth;
    let clickBounds = ww / 2;
    // length needs to be dynamic; .length of files in arr
    let length = 20;
    let nextImage =
      this.props.currentFeature < length ? this.props.currentFeature + 1 : 1;
    let prevImage =
      this.props.currentFeature > 1 ? this.props.currentFeature - 1 : length;
    let x = event.pageX;
    if (x <= clickBounds) {
      this.props.action.setFeaturedImage(prevImage);
    } else {
      this.props.action.setFeaturedImage(nextImage);
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
      &:hover {
        cursor: pointer;
      }
    `;

    const CloseButton = styled.div`
      position: absolute;
      top: 0;
      right: 0;
      color: #000;
      margin: 20px 20px 0 0;
      &:hover {
        cursor: pointer;
      }
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
      base + "collection-20.jpg"
    ];

    // to apply transitions, styles must be outside of render method
    const Sidebar = this.sidebar;
    const SidebarText = this.sidebarText;
    let featuredNum = "(" + " " + this.props.currentFeature + " " + ")";

    return (
      <Sidebar>
        <SidebarText onClick={this.handleOpenClick.bind(this)}>
          <span>{featuredNum}</span>
        </SidebarText>
        <CloseButton onClick={this.handleCloseClick.bind(this)}>
          CLOSE
        </CloseButton>
        <FeaturedImage
          onClick={this.handleFeatureClick.bind(this)}
          src={images[this.props.currentFeature - 1]}
        />
      </Sidebar>
    );
  }
}

export default Sidebar;
