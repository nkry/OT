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

  walk(arr, n, fn) {
    for (var i = 0; i < arr.length; i += n) {
      fn(arr.slice(i, i + n));
    }
  }

  render() {
    if (this.props.data.length === 0) {
      return <div></div>;
    } else {
      let currentLayout = this.props.landingLayout;
      let imgs = this.props.data.data.images.originals;
      let layouts = [];
      let pairs = []

      let i = 0
      imgs.map((x, key) => {
        if (i >= 10) {
          i = 0
        }
        i += 1
        let count = key + 1 >= 10 ? i : key + 1
        layouts.push(<LandingImage style={count} src={x.url} />);
      });

      this.walk(layouts, 2, function(segment) {
        pairs.push(segment)
      });

      let imgOne = pairs[currentLayout][0];
      let imgTwo = pairs[currentLayout][1];

      return <PageWrapper landingGrid={true} onClick={this.handleLandingClick.bind(this)}>
          {imgOne}
          {imgTwo}
        </PageWrapper>;
    }
  }
}

export default Landing;
