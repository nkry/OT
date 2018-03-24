import React, { Component } from "react";
import styled from "styled-components";
import {
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
  ImageSeven,
  ImageEight,
  ImageNine,
  ImageTen
} from "../../utils/Images";


class LandingImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  handleImageLoad() {
    console.log("handle landing load")
    this.setState({
      loaded: true
    })
  }
  
  render() {
    let style = this.props.style
    const self = this 
    switch (style) {
      case 1:
        return <ImageOne loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 2:
        return <ImageTwo loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 3:
        return <ImageThree loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 4:
        return <ImageFour loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 5:
        return <ImageFive loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 6:
        return <ImageSix loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 7:
        return <ImageSeven loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 8:
        return <ImageEight loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 9:
        return <ImageNine loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
      case 10:
        return <ImageTen loaded={self.state.loaded} src={self.props.src} onLoad={self.handleImageLoad.bind(self)} />;
        break;
    } 
  }
}

export default LandingImage