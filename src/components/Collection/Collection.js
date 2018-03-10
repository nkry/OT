import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { GradientWrapper } from "../../utils/Styles";
import { CollectionTitle } from "../../utils/Styles";
import Image from "./Image";

class Collection extends Component {
  constructor(props) {
    super(props);
    const base = process.env.PUBLIC_URL + "/assets/collection/";
    this.max = 19;
    const self = this
    this.settings = [
      {
        start: "2",
        end: "5"
      },
      {
        start: "17",
        end: "20"
      },
      {
        start: "6",
        end: "9"
      },
      {
        start: "9",
        end: "12"
      },
      {
        start: "13",
        end: "16"
      },
      {
        start: "16",
        end: "19"
      },
      {
        start: "4",
        end: "7"
      },
      {
        start: "21",
        end: "24"
      },
      {
        start: "8",
        end: "11"
      },
      {
        start: "12",
        end: "15"
      },
      {
        start: "2",
        end: "5"
      },
      {
        start: "12",
        end: "15"
      },
      {
        start: "19",
        end: "22"
      },
      {
        start: "22",
        end: "25"
      },
      {
        start: "4",
        end: "7"
      },
      {
        start: "7",
        end: "10"
      },
      {
        start: "10",
        end: "13"
      },
      {
        start: "17",
        end: "20"
      },
      {
        start: "2",
        end: "5"
      },
      {
        start: "13",
        end: "16"
      }
    ];
  }

  componentDidMount() {
    this.props.action.setCurrentPage("collection");
  }

  returnTitle(filename) {
    let segment = filename.split("/").pop()
    let title = segment.replace(/-/g, " ").toUpperCase()
    return title
  }

  loopThroughGrid(arr) {
    const self = this;
    let i = 0;
    let n = 0;
    let speed = 0;
    let row = 0;
    let multipleCollections = this.props.numberOfCollections > 1 ? true : false;
    let images = arr.map((x, key) => {
      let title = this.returnTitle(x.dir);
      if (i >= this.max) {
        i = 0;
      }
      speed += 150;
      n += 1;
      i += 1;
      let count = key >= this.max ? i : key;
      if (this.props.mobile) {
        row += 1
      }
      else {
        if (key % 2 === 0) {
          row += 1;
        }
      }
      return (
        <Image
          setDynamicTitle={self.props.action.setDynamicTitle}
          collectionTitle={title}
          multiple={multipleCollections}
          showCollectionTitle={self.props.action.showCollectionTitle}
          hideCollectionTitle={self.props.action.hideCollectionTitle}
          id={key}
          start={self.settings[count].start}
          end={self.settings[count].end}
          row={row}
          src={x.url}
          index={key}
          setFeaturedImage={self.props.action.setFeaturedImage}
          openSidebar={self.props.action.openSidebar}
          number={key + 1}
          delay={speed}
        />
      );
    });
    return images;
  }

  render() {
    const self = this;

    if (this.props.data.length === 0) {
      // loader
      return <div />;
    } else {
      const collections = this.props.data.data.children[0];
      if (this.props.numberOfCollections > 1) {
        let allImages = [];
        collections.posts.forEach(x => {
          x.images.thumbnails.forEach(image => {
            allImages.push(image);
          });
        });

        let images = this.loopThroughGrid(allImages);
        return (
          <PageWrapper landingGrid={false}>
            <GradientWrapper />
            {images}
            <CollectionTitle showTitle={this.props.showCollectionTitle}>
              <div>{this.props.dynamicTitle}</div>
            </CollectionTitle>
          </PageWrapper>
        );
      } else {
        // will not need to target [0] explicitly here?
        let collectionImages = collections.posts[0].images.thumbnails;
        let images = this.loopThroughGrid(collectionImages);

        return (
          <PageWrapper landingGrid={false}>
            <GradientWrapper />
            {images}
          </PageWrapper>
        );
      }
    }
  }
}

export default Collection;
