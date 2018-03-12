import React, { Component } from "react";
import styled from "styled-components";
import { ImageCell } from "../../utils/Styles";


class Image extends Component {
  constructor(props) {
    super(props);
    const self = this;
    this.state = {
      loaded: false,
      showNumber: false,
      loadCount: 0
    };
  }

  handleThumbnailClick() {
    this.props.openSidebar();
  }

  handleMouseOver(n) {
    let num = n + 1;
    this.props.setFeaturedImage(num);
    if (this.props.multiple) {
      this.props.showCollectionTitle();
      this.props.setDynamicTitle(this.props.collectionTitle);
    } else {
      return false;
    }
  }

  handleMouseLeave() {
    if (this.props.multiple) {
      this.props.hideCollectionTitle();
    } else {
      return false;
    }
  }
  
  returnLoadStatus(time) {
    const self = this; 
    
    if (!this.props.collectionCached) {
      this.props.updateCollectionLoaded()
    }
    // now compare length loaded against length of collections
    if ((this.props.collectionLength - 1) === this.props.collectionLoaded) {
      this.props.cacheCollection()
    }
    let conditionalDelay = this.props.collectionCached ? 0 : time
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, conditionalDelay);
  }

  render() {
    let imageNumber = this.props.mobile ? false :  <span>( {this.props.number} )</span>
    return (
      <ImageCell
        cached={this.props.collectionCached}
        id={this.props.id}
        start={this.props.start}
        end={this.props.end}
        row={this.props.row}
        onLoad={this.returnLoadStatus.bind(this, this.props.delay)}
        visible={this.state.loaded}
        onClick={this.handleThumbnailClick.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this, this.props.index)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        {imageNumber}
        <img src={this.props.src} />
      </ImageCell>
    );
  }
}

export default Image;