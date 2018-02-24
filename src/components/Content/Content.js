import React, { Component } from "react";
import ReactDriveIn from "react-drive-in"
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.action.setCurrentPage("content");
  }

  render() {
    const src = process.env.PUBLIC_URL + "/assets/truth.mp4";

    // http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4"
    
    return (
      <ReactDriveIn
        show="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4"
        poster={false}
      />
    )
  }
}

export default Content;
