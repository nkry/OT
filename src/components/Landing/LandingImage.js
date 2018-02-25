import React, { Component } from "react";
import styled from "styled-components";

// w.i.p component to handle individual loading of images on landing page
// treat in same way as collection page
class LandingImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    console.log("image loaded?", this.state.loaded)
  }

  handleImageLoad() {
    this.state = {
      loaded: true
    }
    console.log("image loaded?", this.state.loaded)
  }

  render() {

    // pass individual styled-component here
    let imageElement = this.props.style 

    return (
      <imageElement src={this.props.url} onLoad={this.handleImageLoad.bind(this)} />
    )
  }
}

export default LandingImage