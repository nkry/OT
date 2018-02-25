import React, { Component } from "react";
import ReactDriveIn from "react-drive-in"
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import $ from "jquery";


class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.action.setCurrentPage("content");

    // rewrite this as vanilla js + move scss styles into styled-components util file
    var timeoutId;
    var $videoBgAspect = $(".videobg-aspect");
    var $videoBgWidth = $(".videobg-width");
    var videoAspect = $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();

    function videobgEnlarge() {
      var windowAspect = $(window).height() / $(window).width();
      if (windowAspect > videoAspect) {
        $videoBgWidth.width(windowAspect / videoAspect * 100 + "%");
      } else {
        $videoBgWidth.width(100 + "%");
      }
    }

    $(window).resize(function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(videobgEnlarge, 100);
    });

    $(function() {
      videobgEnlarge();
    });
  }

  render() {

    const VideoWrapper = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    `;

    let videoId = 165554561;

    return (
      <VideoWrapper>
        <div className="videobg">
        	<div className="videobg-width">
			      <div className="videobg-aspect">
			        <div className="videobg-make-height">
			          <div className="videobg-hide-controls">
                  <iframe src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&?background=1&title=0&byline=0&portrait=0`} frameBorder="0" webkitAllowFullScreen mozAllowFullScreen allowFullScreen/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VideoWrapper>
    )
  }
}

export default Content;
