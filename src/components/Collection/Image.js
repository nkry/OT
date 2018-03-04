import React, { Component } from "react";
import styled from "styled-components";
import { ImageCell } from "../../utils/Styles";


class Image extends Component {
  constructor(props) {
    super(props);
    const self = this;
    this.state = {
      loaded: false
    };
  }

  handleThumbnailClick() {
    this.props.openSidebar();
  }

  handleMouseOver(n) {
    let num = n + 1;
    this.props.setFeaturedImage(num);
  }

  returnLoadStatus(time) {
    const self = this;
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
      >
      <span>( {this.props.number} )</span>
      <img src={this.props.src} />
      </ImageCell>
    );
  }
}

export default Image;