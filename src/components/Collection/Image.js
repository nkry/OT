import React, { Component } from "react";
import styled from "styled-components";
import { ImageCell } from "../../utils/Styles";


class Image extends Component {
  constructor(props) {
    super(props);
    const self = this;
    this.state = {
      loaded: false,
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
  
  // could also call fn here, which counts the images loaded
  // compare the count to .length passed from data
  // once count === length, call an action that states collection images are loaded
  // this can be used in global state
  returnLoadStatus(time) {
    const self = this;
    // temp! -- need to pass down
    let max = 40
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, time);
  }

  render() {
    return (
      <ImageCell
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
        <span>( {this.props.number} )</span>
        <img src={this.props.src} />
      </ImageCell>
    );
  }
}

export default Image;