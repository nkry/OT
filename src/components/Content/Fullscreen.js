import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { breakpoints } from "../../utils/Rules";
import { device } from "../../utils/Rules";
import { VideoBg, VideoBgWidth, VideoBgAspect, VideoBgMakeHeight, VideoBgHideControls } from "../../utils/Video";
import $ from "jquery";

class Fullscreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setCurrentPage("content");
    // rewrite this as vanilla js + move scss styles into styled-components util file
    // var timeoutId;
    // var $videoBgAspect = $(".videobg-aspect");
    // var $videoBgWidth = $(".videobg-width");
    // var videoAspect =
    //   $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();

    function videobgEnlarge() {
      // -- new --
      // var windowAspect = $(window).height() / $(window).width();
      // if (windowAspect > videoAspect) {
      //   $videoBgWidth.width(windowAspect / videoAspect * 100 + "%");
      // } else {
      //   $videoBgWidth.width(100 + "%");
      // }
    }

    // $(window).resize(function() {
    //   clearTimeout(timeoutId);
    //   timeoutId = setTimeout(videobgEnlarge, 100);
    // });

    // $(function() {
    //   videobgEnlarge();
    // });
  }

  handleVideoClick() {
    console.log("pause iframe");
  }

  handleMouseMove() {
    console.log("mouse moved");
  }

  splitId(slug) {
    let id = slug.split("/").pop();
    return id;
  }

  render() {
    const playText = process.env.PUBLIC_URL + "/assets/play.svg";
    const pauseText = process.env.PUBLIC_URL + "/assets/pause.svg";

    // const VideoWrapper = styled.div`
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   width: 100vw;
    //   height: 100vh;
    //   & button {
    //     display: none;
    //   }
    // `;

    // all should be made global
    let singleMargin = 20;
    let pageMargin = singleMargin * 2;
    let menuHeight = 50;
    let sidebarWidth = 50;
    let minusContainer = sidebarWidth + pageMargin + "px";
    let winHeight = window.innerHeight - menuHeight;
    let containerHeight = winHeight - singleMargin;

    // new video style
    // will need to add rules for diff breakpoints
    const VideoGridWrapper = styled.div`
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 10px 10px;
      grid-column-start: 2;
      grid-column-end: 25;
      grid-row-start: 1;
      grid-row-end: 3;
      display: grid;
      height: 100%;
      height: ${containerHeight + "px"};
      @supports not (display: grid) {
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
      }
      `;

    const VideoWrapper = styled.div`
      position: relative;
      grid-row-start: 1;
      grid-column-start: 1;
      grid-column-end: 25;
      display: grid;
      top: 0;
      left: 0;
      @supports not (display: grid) {
        width: 80%;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      & button {
        display: none;
      }
      @media ${device.tabletPortrait} {
        grid-column-start: 2;
      }
      `;

    const HideCursor = styled.div`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      pointer-events: none;
      z-index: 100;
    `;

    let data = this.props.data;
    let video = data.posts[0].content.url
    let videoId = this.splitId(video);  

    return (
      <VideoGridWrapper>
        <VideoWrapper>
          <div className="videobg">
            <div className="videobg-width">
              <div className="videobg-aspect">
                <div className="videobg-make-height">
                  <div className="videobg-hide-controls">
                    <iframe
                      src={`//player.vimeo.com/video/${videoId}?autoplay=1&loop=1&?background=1&title=0&byline=0&portrait=0`}
                      frameBorder="0"
                      webkitAllowFullScreen
                      mozAllowFullScreen
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HideCursor
            onMouseMove={this.handleMouseMove.bind(this)}
            onClick={this.handleVideoClick.bind(this)}
          />
        </VideoWrapper>
      </VideoGridWrapper>
    );
  }
}

export default Fullscreen;
