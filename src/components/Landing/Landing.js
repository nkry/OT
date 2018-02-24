import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles"
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

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.action.setCurrentPage("/");
  }

  handleLandingClick() {
    this.props.action.updateLanding()
  }

  //  fade this wrapper back in
  render() {
    // preload these components in 
    const images = process.env.PUBLIC_URL + "/assets/home/";

    let currentLayout = this.props.landingLayout
    let layouts = [
      [<ImageOne src={images + "1.jpg"} />, <ImageTwo src={images + "2.jpg"} />], 
      [<ImageThree src={images + "3.jpg"} />, <ImageFour src={images + "4.jpg"} />], 
      [<ImageFive src={images + "5.jpg"} />, <ImageSix src={images + "6.jpg"} />],
      [<ImageSeven src={images + "7.jpg"} />, <ImageEight src={images + "8.jpg"} />], 
      [<ImageNine src={images + "9.jpg"} />, <ImageTen src={images + "10.jpg"} />]];
    
    let imgOne = layouts[currentLayout][0];
    let imgTwo = layouts[currentLayout][1];

    return <PageWrapper landingGrid={true} onClick={this.handleLandingClick.bind(this)}>
        {imgOne}
        {imgTwo}
      </PageWrapper>;
  }
}

export default Landing;
