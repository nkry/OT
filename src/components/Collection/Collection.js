import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { GradientWrapper } from "../../utils/Styles";
import Image from "./Image";

class Collection extends Component {
  constructor(props) {
    super(props);
    const base = process.env.PUBLIC_URL + "/assets/collection/";
    this.collection = [
      {
        url: base + "collection-1.jpg",
        start: "2",
        end: "5",
        row: "1"
      },
      {
        url: base + "collection-2.jpg",
        start: "17",
        end: "20",
        row: "1"
      },
      {
        url: base + "collection-3.jpg",
        start: "6",
        end: "9",
        row: "2"
      },
      {
        url: base + "collection-4.jpg",
        start: "9",
        end: "12",
        row: "2"
      },
      {
        // should wrap onto new row
        url: base + "collection-5.jpg",
        start: "13",
        end: "16",
        row: "3"
      },
      {
        url: base + "collection-6.jpg",
        start: "16",
        end: "19",
        row: "3"
      },
      // ---
      {
        url: base + "collection-7.jpg",
        start: "4",
        end: "7",
        row: "4"
      },
      {
        url: base + "collection-8.jpg",
        start: "21",
        end: "24",
        row: "4"
      },
      {
        url: base + "collection-9.jpg",
        start: "8",
        end: "11",
        row: "5"
      },
      {
        url: base + "collection-10.jpg",
        start: "12",
        end: "15",
        row: "5"
      },
      {
        url: base + "collection-11.jpg",
        start: "2",
        end: "5",
        row: "6"
      },
      {
        url: base + "collection-12.jpg",
        start: "12",
        end: "15",
        row: "6"
      },
      {
        url: base + "collection-13.jpg",
        start: "19",
        end: "22",
        row: "7"
      },
      {
        url: base + "collection-14.jpg",
        start: "22",
        end: "25",
        row: "7"
      },
      {
        url: base + "collection-15.jpg",
        start: "4",
        end: "7",
        row: "8"
      },
      {
        url: base + "collection-16.jpg",
        start: "7",
        end: "10",
        row: "8"
      },
      {
        url: base + "collection-17.jpg",
        start: "10",
        end: "13",
        row: "9"
      },
      {
        url: base + "collection-18.jpg",
        start: "17",
        end: "20",
        row: "9"
      },
      {
        url: base + "collection-19.jpg",
        start: "2",
        end: "5",
        row: "10"
      },
      {
        url: base + "collection-20.jpg",
        start: "13",
        end: "16",
        row: "10"
      }
    ];
  }

  componentDidMount() {
    this.props.action.setCurrentPage("collection");
  }

  render() {
    const self = this
    let images = self.collection.map((x, key) => {
      return (
        <Image 
          start={x.start} 
          end={x.end} 
          row={x.row} 
          src={x.url} 
          index={key}
          setFeaturedImage={this.props.action.setFeaturedImage} 
          openSidebar={this.props.action.openSidebar}
          number={(key + 1)}
          delay={(key * 200)}
          />
      );
    });

    return (
      <PageWrapper landingGrid={false}>
        <GradientWrapper />
        {images}
      </PageWrapper>
    );
  }
}

export default Collection;
