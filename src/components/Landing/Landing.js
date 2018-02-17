import React, { Component } from "react";
import styled from "styled-components";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.action.setCurrentPage("/");
  }

  // export styles for grid from dedicated styles module
  // keep track of the current grid lockup in redux
  // compare this prop (state) against an object which describes pairings of individual placements
  // addeventlistener to a click on the wrapper which triggers this action
  // also fade this wrapper back in

  render() {
    // make pageWrapper global
    const PageWrapper = styled.div`
      position: absolute;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 0 10px;
      grid-template-rows: repeat(3, 33.3%);
      grid-column-start: 1;
      grid-column-end: 25;
      grid-row-start: 1;
      display: grid;
      height: 100%;
    `;

    const ImageOne = styled.img`
      margin-top: 10px;
      grid-column-start: 2;
      grid-column-end: 10;
      width: 100%;
    `;

    const ImageTwo = styled.img`
      grid-column-start: 17;
      grid-column-end: 25;
      grid-row-start: 3;
      width: 100%;
      justify-self: end;
      align-self: end;
    `;

    const images = process.env.PUBLIC_URL + "/assets/home/";

    return (
      <PageWrapper>
        <ImageOne src={images + "1.JPG"} />
        <ImageTwo src={images + "2.JPG"} />
      </PageWrapper>
    );
  }
}

export default Landing;
