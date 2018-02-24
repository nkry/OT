import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";

class Collection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.action.setCurrentPage("collection");
  }

  handleThumbnailClick() {
    this.props.action.openSidebar()
  }

  handleMouseOver(n) {
    let indx = n + 1
    this.props.action.setFeaturedImage(indx)
  }

  // pageWrapper will wrap every page
  render() {
    const base = process.env.PUBLIC_URL + "/assets/collection/";

    const ImageCell = styled.img`
      grid-column-start: ${props => props.start};
      grid-column-end: ${props => props.end};
      width: 100%;
      &:hover {
        cursor: pointer;
      }
    `;

    // content is static for now, this should be reusable
    const collection = [
      {
        url: base + "collection-1.jpg",
        start: "2",
        end: "5"
      },
      {
        url: base + "collection-2.jpg",
        start: "8",
        end: "11"
      },
      {
        url: base + "collection-3.jpg",
        start: "17",
        end: "20"
      },
      {
        url: base + "collection-4.jpg",
        start: "20",
        end: "23"
      },
      {
        url: base + "collection-5.jpg",
        start: "5",
        end: "8"
      },
      {
        url: base + "collection-6.jpg",
        start: "12",
        end: "15"
      },
      {
        url: base + "collection-7.jpg",
        start: "15",
        end: "18"
      },
      {
        url: base + "collection-8.jpg",
        start: "22",
        end: "25"
      },
      {
        url: base + "collection-9.jpg",
        start: "2",
        end: "5"
      },
      {
        url: base + "collection-10.jpg",
        start: "7",
        end: "10"
      },
      {
        url: base + "collection-11.jpg",
        start: "15",
        end: "18"
      },
      {
        url: base + "collection-12.jpg",
        start: "18",
        end: "21"
      },
      {
        url: base + "collection-13.jpg",
        start: "5",
        end: "8"
      },
      {
        url: base + "collection-14.jpg",
        start: "9",
        end: "12"
      },
      {
        url: base + "collection-15.jpg",
        start: "13",
        end: "16"
      },
      {
        url: base + "collection-16.jpg",
        start: "22",
        end: "25"
      },
      {
        url: base + "collection-17.jpg",
        start: "2",
        end: "5"
      },
      {
        url: base + "collection-18.jpg",
        start: "11",
        end: "14"
      },
      {
        url: base + "collection-19.jpg",
        start: "18",
        end: "21"
      },
      {
        url: base + "collection-20.jpg",
        start: "22",
        end: "25"
      }
    ];

        // --- w.i.p ---
    const GradientWrapper = styled.div`
      z-index: 2;
      left: 20px;
      width: calc(100% - 90px);
      background: white;
      height: 80px;
      position: fixed;
      top: 0;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      `;

    // store individal cell/img styles in array here?
    const self = this;

    // increment through styles here
    let images = collection.map((x, key) => {
      return (
        <ImageCell
          start={x.start}
          end={x.end}
          src={x.url}
          onMouseOver={self.handleMouseOver.bind(this, key)}
          onClick={self.handleThumbnailClick.bind(this)}
        />
      );
    });

    // need to add bottom margin/padding
    return (
      <PageWrapper landingGrid={false}>
        <GradientWrapper/>
        {images}
      </PageWrapper>
    );
  }
}

export default Collection;
