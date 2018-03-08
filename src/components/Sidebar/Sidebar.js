import React, { Component } from "react";
import styled, { css } from "styled-components";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    const self = this;
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
        
        let limit;
        let collections = this.props.data.data.children[0];

        if (this.props.numberOfCollections > 1) {
          let allImages = [];
          collections.posts.forEach(x => {
            x.images.thumbnails.forEach(image => {
              allImages.push(image);
            });
          });
          limit = allImages.length;
        } else {
          let images = collections.posts[0].images.originals;
          limit = images.length;
        }
        let nextImage = this.props.currentFeature < limit ? this.props.currentFeature + 1 : 1;
        let prevImage = this.props.currentFeature > 1 ? this.props.currentFeature - 1 : limit;
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

  // wrap this into one fn for both click + keydown events?
  handleFeatureClick(event) {
    let ww = window.innerWidth;
    let clickBounds = ww / 2;
    let limit  
    let collections = this.props.data.data.children[0];
    
    if (this.props.numberOfCollections > 1) {
      let allImages = [];
      collections.posts.forEach(x => {
        x.images.thumbnails.forEach(image => {
          allImages.push(image);
        });
      });
      limit = allImages.length 
    }
    else {
      let images = collections.posts[0].images.originals;
      limit = images.length
    }

    let nextImage =
      this.props.currentFeature < limit ? this.props.currentFeature + 1 : 1;
    let prevImage =
      this.props.currentFeature > 1 ? this.props.currentFeature - 1 : limit;
    let x = event.pageX;
    if (x <= clickBounds) {
      this.props.action.setFeaturedImage(prevImage);
    } else {
      this.props.action.setFeaturedImage(nextImage);
    }
  }

  render() {
    if (this.props.data.length === 0) {
      // loader 
      return <div></div>
    }
    else {
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

      const Sidebar = this.sidebar;
      const SidebarText = this.sidebarText;
      let featuredNum = "(" + " " + this.props.currentFeature + " " + ")";

      if (this.props.numberOfCollections > 1) {
        const collections = this.props.data.data.children[0];
        let allImages = [];
        collections.posts.forEach(x => {
          x.images.thumbnails.forEach(image => {
            allImages.push(image);
          });
        });

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
              src={allImages[this.props.currentFeature - 1].url}
            />
          </Sidebar>
        );
      }
      else {
        let collections = this.props.data.data.children[0];
        let images = collections.posts[0].images.originals 
    
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
              src={images[this.props.currentFeature - 1].url}
            />
          </Sidebar>
        );
      }
    }
  }
}

export default Sidebar;
