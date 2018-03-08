import React, { Component } from "react";
import styled from "styled-components";
import { VideoCell, PageWrapper } from "../../utils/Styles";
import { GradientWrapper } from "../../utils/Styles";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setCurrentPage("content");
  }

  splitId(slug) {
    let id = slug.split("/").pop();
    return id;
  }

  render() {
    const self = this;
    let data = this.props.data;
    let videos = data.posts.map((x, key) => {
      let id = self.splitId(x.content.url);
      return (
        <VideoCell>
          <iframe
            src={`https://player.vimeo.com/video/${id}?autoplay=0&loop=1&?background=1&title=0&byline=0&portrait=0`}
            frameBorder="0"
            webkitAllowFullScreen
            mozAllowFullScreen
            allowFullScreen
          />
        </VideoCell>
      )
    });

    return (
      <PageWrapper>
        <GradientWrapper />
        {videos}
      </PageWrapper>
    );
  }
}

export default Content;
