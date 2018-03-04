import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles"
import LandingImage from './LandingImage'

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

  render() {

    if (this.props.data.length === 0) {
      console.log("return false")
      return (
        <div>LOADER</div>
      )
    }
    else {
      // const images = process.env.PUBLIC_URL + "/assets/home/";
      let currentLayout = this.props.landingLayout
      // let layouts = [
      //   [<LandingImage style={1} src={images + "1.jpg"} />, <LandingImage style={2} src={images + "2.jpg"} />],
      //   [<LandingImage style={3} src={images + "3.jpg"} />, <LandingImage style={4} src={images + "4.jpg"} />],
      //   [<LandingImage style={5} src={images + "5.jpg"} />, <LandingImage style={6} src={images + "6.jpg"} />],
      //   [<LandingImage style={7} src={images + "7.jpg"} />, <LandingImage style={8} src={images + "8.jpg"} />],
      //   [<LandingImage style={9} src={images + "9.jpg"} />, <LandingImage style={10} src={images + "10.jpg"} />],
      // ];

      let imgs = this.props.data.data.images.originals
      let layouts = []

      // this isn't working because it needs to be split into 2s
      // layouts is an array of arrays (2 components in each array)
      // need to run through this and push to a new array every 2 items

      imgs.map((x, key) => {
        if (key % 2 === 0) {
          layouts.push(<LandingImage style={key + 1} src={x.url} />)
        }
      })

      let imgOne = layouts[currentLayout][0];
      let imgTwo = layouts[currentLayout][1];

      return <PageWrapper landingGrid={true} onClick={this.handleLandingClick.bind(this)}>
          {imgOne}
          {imgTwo}
        </PageWrapper>;
    }
  }
}

export default Landing;
