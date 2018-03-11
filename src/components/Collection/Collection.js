import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { GradientWrapper } from "../../utils/Styles";
import { CollectionTitle } from "../../utils/Styles";
import Image from "./Image";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.max = 19;
    const self = this;
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

  countImages(arr) {
    let count = 0;
    arr.posts.map((x, key) => {
      x.images.thumbnails.map((i, key) => {
        count += 1;
      });
    });
    return count 
  }

  componentDidMount() {
    this.props.setCurrentPage("collection");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
       let data = this.props.data.data.children[0];
       let count = this.countImages(data);
       this.props.setCollectionLength(count);
    }
  }

  returnTitle(filename) {
    let segment = filename.split("/").pop();
    let title = segment.replace(/-/g, " ").toUpperCase();
    return title;
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
      speed += 125;
      n += 1;
      i += 1;
      let count = key >= this.max ? i : key;

      let portraitMobile = this.props.mobile 
      let landscapeMobile = window.innerWidth <= 768 && window.innerHeight < window.innerWidth ? true : false

      if (portraitMobile) {
        row += 1;
      }
      else if (landscapeMobile) {
        row += 1
      }
      else {
        if (key % 2 === 0) {
          row += 1;
        }
      }

      return (
        <Image
          collectionLength={this.props.collectionLength}
          collectionLoaded={this.props.collectionLoaded}
          collectionCached={this.props.collectionCached}
          cacheCollection={this.props.cacheCollection}
          updateCollectionLoaded={self.props.updateCollectionLoaded}
          setDynamicTitle={self.props.setDynamicTitle}
          collectionTitle={title}
          multiple={multipleCollections}
          showCollectionTitle={self.props.showCollectionTitle}
          hideCollectionTitle={self.props.hideCollectionTitle}
          id={key}
          start={self.settings[count].start}
          end={self.settings[count].end}
          row={row}
          src={x.url}
          index={key}
          setFeaturedImage={self.props.setFeaturedImage}
          openSidebar={self.props.openSidebar}
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
