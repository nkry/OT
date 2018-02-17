import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.action.setCurrentPage("content");
  }

  render() {
    return <div id="page--transition">Content Page</div>;
  }
}

export default Content;
