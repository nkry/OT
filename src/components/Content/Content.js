import React, { Component } from "react";
import ReactDriveIn from "react-drive-in"
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { VideoBg, VideoBgWidth, VideoBgAspect, VideoBgMakeHeight, VideoBgHideControls } from "../../utils/Video";
import $ from "jquery";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.action.setCurrentPage("content")
  //   var timeoutId;
  //   var videoBgAspect = document.getElementsByClassName("videobg-aspect")[0]
  //   var videoBgWidth = document.getElementsByClassName("videobg-width")[0]
  //   var videoAspect = videoBgAspect.offsetHeight() / videoBgAspect.offsetWidth()

  //   function videobgEnlarge() {
  //     var windowAspect = window.innerHeight / window.innerWidth
  //     if (windowAspect > videoAspect) {
  //       videoBgWidth.style.width = (windowAspect / videoAspect * 100 + "%")
  //     } else {
  //       videoBgWidth.style.width = 100 + "%";
  //     }
  //   }

  //   window.addEventListener('resize', () => {
  //     clearTimeout(timeoutId)
  //     videobgEnlarge()
  //   })

  //   document.on('ready', () => {
  //     videobgEnlarge()
  //   })
  // }

  componentDidMount() {
    this.props.action.setCurrentPage("content");
    // rewrite this as vanilla js + move scss styles into styled-components util file
    var timeoutId;
    var $videoBgAspect = $(".videobg-aspect");
    var $videoBgWidth = $(".videobg-width");
    var videoAspect =
      $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();

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

  handleVideoClick() {
    console.log("pause iframe");
  }

  handleMouseMove() {
    console.log("mouse moved");
  }

  render() {

    const playText = process.env.PUBLIC_URL + "/assets/play.svg";
    const pauseText = process.env.PUBLIC_URL + "/assets/pause.svg";

    const VideoWrapper = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
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

    let videoId = 165554561;

    // add 'PAUSE' / 'PLAY' cursors?
    return (
      <VideoWrapper>
        <div className="videobg">
          <div className="videobg-width">
            <div className="videobg-aspect">
              <div className="videobg-make-height">
                <div className="videobg-hide-controls">
                  <iframe
                    src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&?background=1&title=0&byline=0&portrait=0`}
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
        <HideCursor onMouseMove={this.handleMouseMove.bind(this)} onClick={this.handleVideoClick.bind(this)} />
      </VideoWrapper>
    );
  }
}

export default Content;
