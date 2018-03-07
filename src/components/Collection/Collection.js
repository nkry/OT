import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { GradientWrapper } from "../../utils/Styles";
import Image from "./Image";

class Collection extends Component {
  constructor(props) {
    super(props);
    const base = process.env.PUBLIC_URL + "/assets/collection/";
    this.settings = [
      {
        start: "2",
        end: "5",
        row: "1"
      },
      {
        start: "17",
        end: "20",
        row: "1"
      },
      {
        start: "6",
        end: "9",
        row: "2"
      },
      {
        start: "9",
        end: "12",
        row: "2"
      },
      {
        start: "13",
        end: "16",
        row: "3"
      },
      {
        start: "16",
        end: "19",
        row: "3"
      },
      {
        start: "4",
        end: "7",
        row: "4"
      },
      {
        start: "21",
        end: "24",
        row: "4"
      },
      {
        start: "8",
        end: "11",
        row: "5"
      },
      {
        start: "12",
        end: "15",
        row: "5"
      },
      {
        start: "2",
        end: "5",
        row: "6"
      },
      {
        start: "12",
        end: "15",
        row: "6"
      },
      {
        start: "19",
        end: "22",
        row: "7"
      },
      {
        start: "22",
        end: "25",
        row: "7"
      },
      {
        start: "4",
        end: "7",
        row: "8"
      },
      {
        start: "7",
        end: "10",
        row: "8"
      },
      {
        start: "10",
        end: "13",
        row: "9"
      },
      {
        start: "17",
        end: "20",
        row: "9"
      },
      {
        start: "2",
        end: "5",
        row: "10"
      },
      {
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

    if (this.props.data.length === 0) {
      console.log("return loader")
      // loader
      return (
        <div></div>
      )
    }
    else {
      let collections = this.props.data.data.children[0];
      let collectionsNumber = collections.posts.length
      let temporaryFakeNumber = 0
      
      // this will actually be a conditional, checking if collectionsNumber > 1
      if (temporaryFakeNumber > 1) { 
        // run through all collections
      }
      else {

        collections.posts.map((i, key) => {
          console.log(i, "collection")
        })
  
        // targeting just [0] is temp
        let collectionImages = collections.posts[0].images.thumbnails


        // need to fix this — ordering is wrong when more than max (20) images are added
        // may need to implement some form of sort?

        const max = 19
        let i = 0
        let n = 0
        let speed = 0

        let images = collectionImages.map((x, key) => {
          if (i >= max) {
            i = 0
          }
          speed += 200;
          n += 1
          i += 1
          let count = key >= max ? i : key 
          return (
            <Image
              id={key}
              start={self.settings[count].start} 
              end={self.settings[count].end} 
              row={self.settings[count].row} 
              src={x.url} 
              index={key}
              setFeaturedImage={this.props.action.setFeaturedImage} 
              openSidebar={this.props.action.openSidebar}
              number={n}
              delay={speed}
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
  }
}

export default Collection;
